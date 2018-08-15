# file-input.js

This is a simple wrapper around the HTML `<input type="file">` element, no more and not much less.  
The input element is notoriously hard to style with CSS (and inconsistent in its appearance across browsers).
Here's a JavaScript function that turns it into a "browse" button and a file name display instead, which can be targeted
by CSS selectors no problem.

If you have JavaScript disabled, nothing will happen. (But nothing will break either!)

This is nothing fancy at all. If you're looking for a feature-rich file upload widget and don't mind using a library,
try something like [jQuery File Upload](https://github.com/blueimp/jQuery-File-Upload).

## Usage

### Basic

As simple as this:  

    fileInput();
will turn all `input` elements into their custom counterparts. The new element keeps the old one's CSS classes.

### Advanced

To affect only specific `input` elements, you can pass a CSS selector or an `HTMLElement` object:

    fileInput('.foo > .bar');
    fileInput(document.getElementById('baz');
   
## Styling

The new file input has an `a` element for the "browse" button and a `span` for the file name box. You can target them
with CSS selectors as usual. To give them class names, use the `buttonClasses` and `fileNameClasses` options explained
below.

## Options

You can specify additional options by passing an object as the second parameter. The following keys will have an effect:
* `buttonText`: what the "browse" button should say (default: "Browse&hellip;").
* `noFileText`: what the file name text should say when no file is selected (default: "No file selected.").
* `multiFilesText`: what the file name text should say when multiple files are selected (default: "{num} files
selected"). Use `{num}` as a placeholder for the number of files.
* `noFilesText`: what the file name text should say when no files are selected, but multiple could be (default: "No
files selected").
* `buttonClasses`: what CSS classes the "browse" button should have (array of strings; default: []).
* `fileNameClasses`: what CSS classes the file name text should have (array of strings; default: []).

## Examples

See `sample.html` for examples.
	
## Feedback?

Found a bug or got any feedback? Let me know! Open an issue or something. I'm still new to this.