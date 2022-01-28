
# Ufx-include Tags
Two custom tags for including an HTML partials
- `ufx-include` - Simple import of HTML partials (fragments, parts)
- `ufx-link-include` - Clickable links for loading HTML partials into targets (quick and easy SPAs)

# Install
To install ufx-include:
1. Download the distribution here
2. Include the JS module by including the following lin into your html (e.g. in the head section)

        <script type="module" src="/<path-to-js>/ufx-include.mjs"></script>

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

This is a common use case for much of the internet, an included header and footer for all pages.
The `ufx-include` tag has a single attribute `src` which shall point to the file containing the html to be included.

    <ufx-include src="./myhtml.html"></ufx-include>

When the include is made the tag is removed and replacced with the content of the file pointed to by `src`.

Note that `ufx-include` is a custom element so you must use the closing tag.
A more complete example is found [here](/examples/ufx-include)

## ufx-link-include
The ufx-link-include tag is used when you want a clickable link to load HTML into some other part of your document E.g. when building a single page application. Like so:



# Support the team
If you find that using these tags saves you time and money, and you can afford it, consider supporting us. [Donate via Paypal](https://www.paypal.com/donate/?hosted_button_id=6P3N2A2THNDKJ)

# In the pipe
Stuff under delopment is:
- Ultra-shorthand for creating HTML in JS
- Tags for presenting and sending JSON data without using JS
- Class library for creating desktop like applications in HTML/CSS/JS
- Class library for easy IoT integration