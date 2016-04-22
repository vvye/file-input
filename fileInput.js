function fileInput(className, options) {
    options = options || {};

    var inputs = document.getElementsByClassName(className);
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (input.tagName.toLowerCase() !== 'input' || input.type.toLowerCase() !== 'file') {
            continue;
        }

        input.style.position = 'absolute';
        input.style.visibility = 'hidden';

        var label = document.createElement('label');
        label.className = input.className;
        input.removeAttribute('class');

        var browseButton = document.createElement('a');
        browseButton.innerHTML = options.buttonText || 'Browse&hellip;';

        var fileNameBox = document.createElement('span');
        (function (fileNameBox, input) {
            (input.onchange = function () {
                var multiple = input.hasAttribute('multiple');
                if ((multiple && input.files.length > 1)) {
                    fileNameBox.innerHTML = input.files.length + ' ' + (options.multiFilesText || 'files selected.');
                } else {
                    var fileName = (input.value || '').split(/[\\/]/).pop();
                    if (multiple) {
                        fileNameBox.innerHTML = fileName || options.noFilesText || 'No files selected.';
                    } else {
                        fileNameBox.innerHTML = fileName || options.noFileText || 'No file selected.';
                    }
                }
            })();
        })(fileNameBox, input);

        input.parentNode.replaceChild(label, input);
        label.appendChild(input);
        label.appendChild(browseButton);
        label.appendChild(fileNameBox);
    }
}