
// Copyright 2022 Ulf Carlström 
class UfxInclude extends HTMLElement{

    async fetchHtml(src){
        let response = await fetch(src);

        if (!response.ok) {
          throw new Error(`ufx-include failed to fetch ${src}: Response status: ${response.status}`);
        }
        const includedHTML = await response.text()
        this.innerHTML=includedHTML
        const nodes = Array.from(this.childNodes)
        nodes.forEach(n=>{
            if (this.parentElement)    this.parentElement.insertBefore(n,this)
        
        })
        
        this.remove()
    }

    connectedCallback() 
    {
        const src = this.getAttribute('src')
        this.fetchHtml(src)
    }
}

customElements.define('ufx-include', UfxInclude);

class UfxLinkInclude extends HTMLElement{

    constructor(){
        super()
        this.addEventListener('click',e=>{this.loadTarget()})
    }

    async fetcHtml(){
        let response = await fetch(this.src);

        if (!response.ok) {
          throw new Error(`ufx-include failed to fetch ${this.src}: Response status: ${response.status}`);
        }
        const includedHTML = await response.text()

        this.hiddenTargetElement = document.createElement('div')
        this.hiddenTargetElement.innerHTML = includedHTML
        this.nodes = Array.from(this.hiddenTargetElement.childNodes)
    }

    loadTarget(){
        if (!(this.src && this.targetId)) return
        const target = document.getElementById(this.targetId)
        if (!target){
            console.error('UfxLinkInclude: Target element not found: '+this.targetId);
            return;
        }
        while (target.firstChild) {target.removeChild(target.firstChild)}
        
        this.nodes.forEach(n=>{
            target.appendChild(n)
        })  
    }

    connectedCallback() 
    {
        this.src = this.getAttribute('src')
        this.targetId = this.getAttribute('target-id')
        if (this.src && this.targetId) this.fetcHtml()      
    }
} 

customElements.define('ufx-link-include', UfxLinkInclude);