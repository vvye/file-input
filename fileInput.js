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

        var filePathBox = document.createElement('span');
        (function(filePathBox, input) {
            (input.onchange = function () {
                filePathBox.innerHTML = (input.value || '').split(/[\\/]/).pop() || options.noFileText || 'No file selected.';
            })();
        })(filePathBox, input);

        input.parentNode.replaceChild(label, input);
        label.appendChild(input);
        label.appendChild(browseButton);
        label.appendChild(filePathBox);
    }
}