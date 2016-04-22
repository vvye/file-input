# fileInput

This is a simple wrapper around the HTML `<input type="file">` element, no more and not much less.  
The input element is notoriously hard to style with CSS (and inconsistent in its appearance across browsers).
Here's a JavaScript function that turns it into a "browse" button and a file path display instead, which can be targeted
by CSS selectors no problem.

This is nothing fancy at all. If you're looking for a feature-rich file upload widget and don't mind using a library,
try something like [jQuery File Upload](https://github.com/blueimp/jQuery-File-Upload).

## Usage

As simple as this:  

    fileInput('foo');
will turn all `input` elements with a class of `foo` into their custom counterparts.  
It generates an `a` element for the "browse" button and a `span` for the file name box, which in this case you can target with `.foo a` and `.foo span`.

You can specify additional options by passing an object as the second parameter. The following keys will have an effect:
* `buttonText`: what the "browse" button should say (default: "Browse&hellip;").
* `noFileText`: what the file name text should say when no file is selected (default: "No file selected.").
* `multiFilesText`: what the file name text should say when multiple files are selected (default: "{num} files selected"). Use `{num}` as a placeholder for the number of files.
* `noFilesText`: what the file name text should say when no files are selected, but multiple could be (default: "No files selected").

If you have JavaScript disabled, nothing will happen (but nothing will break either!).

## Examples

### Minimal

	<style type="text/css">
		.my-input a {
			display: inline-block;
			margin-right: 8px;
			background-color: #369;
			padding: 8px 16px;
			color: white;
			cursor: pointer;
		}
		.my-input span {
			font-style: italic;
			color: #555;
		}
	</style>
	
	<input type="file" class="my-input" />
	
	<script type="text/javascript">
		fileInput('my-input');
	</script>
	
### Multilingual

	<input type="file" class="my-input my-input-english" />
	<input type="file" class="my-input my-input-german" />
	
	<script type="text/javascript">
		fileInput('my-input-english');

		fileInput('my-input-german', {
			buttonText: 'Durchsuchen&hellip;',
			noFileText: 'Keine Datei ausgewählt.'
		});
	</script>
	
### Multiple
	
	<input type="file" class="my-input" multiple />
	
	<script type="text/javascript">
		fileInput('my-input', {
		    noFilesText: 'Not a single file selected.',
		    multiFilesText: 'You have selected {num} files.'
		});
	</script>	
	
## Feedback?

Found a bug or got any feedback? Let me know! Open an issue or something. I'm still new to this.