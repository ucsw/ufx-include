
# Ufx-include Tags
Two custom tags for including an HTML partials
- `ufx-include` - Simple import of HTML partials (fragments, parts)
- `ufx-link-include` - Clickable links for loading HTML partials into targets (quick and easy SPAs)

# Install
To install ufx-include:
1. Download the distribution ufx-include.min.js from [here](/dist) or from the release to the right.
2. Include the JS module by including the following lin into your html (e.g. in the head section)

        <script type="module" src="/<path-to-js>/ufx-include.js"></script>

## Dependencies
Ufx-include not dependent on any framework or library. It only core JS/HTML/CSS technologies and is therefore likely compatible with most frameworks.

# Usage
## ufx-include



The ufx-include tag is used when you just want to include a piece of html in another piece of html. Like so:

    ...
    <body>
    <ufx-include src="./header.html"></ufx-include>

    Content

    <ufx-include src="./footer.html"></ufx-include>
    </body>
    ...

This is a common use case for much of the internet, include headers and footers for all pages.
The `ufx-include` tag has a single attribute `src` is the url to the file containing the html to be included.

    <ufx-include src="./myhtml.html"></ufx-include>

When the include is made the tag is removed and replaced with the content of the file pointed to by `src`.

Note that `ufx-include` is a custom element so you must use the closing tag.
A more complete example is found [here](https://github.com/ucsw/ufx-include/tree/main/examples/ufx-include)

## ufx-link-include
The ufx-link-include tag is used when you want a clickable link to load HTML into some other part of your document e.g. when building a single page application. Like in this example:

    ...
           <header>
            <nav>
              <ul>
                <li>
                    <ufx-link-include src="home.html" target-id='content'>  
                        Home 
                    </ufx-link-include>
                </li>
                <li>
                    <ufx-link-include src="products.html" target-id='content'>
                        Products
                    </ufx-link-include>
                </li> 
    ...

        <div id='content'>     
        </div>
    ...

When the user clicks one of the links "Home" or "Products" the corresponding html file ("home.html or "products.html" is loaded into the div tag with the id 'content')

The `ufx-link include` tag has two attributes `src` and `target-id`.
`src` is the url to the file containing the html to be loaded.
`target-id` is the id of the element for which the content will be replaced with the content of the file given by `src`.

    <ufx-link-include src="myHtml.html" target-id='elementid'>


Note that `ufx-link-include` is a custom element so you must use the closing tag.
A more complete example is found [here](/examples/ufx-link-include)

# Support the team
If you find that using these tags saves you time and money, and you can afford it, consider supporting us. [Donate via Paypal](https://www.paypal.com/donate/?hosted_button_id=6P3N2A2THNDKJ)

# In the pipe
Stuff under development is:
- Ultra-shorthand for creating HTML in JS
- Tags for presenting and sending JSON data without using JS
- Class library for creating desktop like applications in HTML/CSS/JS
- Class library for easy IoT integration

# Web Site
Visit the UC Software website [ucsoftware.net](https://ucsoftware.net) (which is built using the ufx-include tags.)
