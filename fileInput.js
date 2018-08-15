function fileInput(className, options) {

    options = options || {};
    const buttonText = options.buttonText || 'Browse&hellip;';
    const buttonClasses = options.buttonClasses || [];
    const fileNameClasses = options.fileNameClasses || [];
    const noFileText = options.noFileText || 'No file selected.';
    const multiFilesText = options.multiFilesText || '{num} files selected.';
    const noFilesText = options.noFilesText || 'No files selected.';

    const inputs = document.getElementsByClassName(className);
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];

        if (input.tagName.toLowerCase() !== 'input' || input.type.toLowerCase() !== 'file') {
            continue;
        }

        input.style.position = 'absolute';
        input.style.visibility = 'hidden';

        const label = document.createElement('label');
        label.className = input.className;
        input.removeAttribute('class');

        const browseButton = document.createElement('a');
        browseButton.classList.add(...buttonClasses);
        browseButton.innerHTML = buttonText;

        const fileNameBox = document.createElement('span');
        fileNameBox.classList.add(...fileNameClasses);

        (function updateFileName(fileNameBox, input) {
            (input.onchange = function () {
                const multiple = input.hasAttribute('multiple');
                const numFiles = input.files.length;
                if ((multiple && numFiles > 1)) {
                    fileNameBox.innerHTML = multiFilesText.replace('{num}', '' + numFiles);
                } else {
                    const fileName = (input.value || '').split(/[\\/]/).pop();
                    if (multiple) {
                        fileNameBox.innerHTML = fileName || noFilesText;
                    } else {
                        fileNameBox.innerHTML = fileName || noFileText;
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