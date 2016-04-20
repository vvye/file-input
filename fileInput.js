function fileInput(className, options) {
    options = options || {};

    var inputs = document.getElementsByClassName(className);
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (input.tagName.toLowerCase() !== 'input' || input.type.toLowerCase() !== 'file') {
            continue;
        }

        input.id = input.id || input.name || 'input-' + i;

        var label = document.createElement('label');
        label.className = input.className;
        input.className = '';

        var browseButton = document.createElement('a');
        browseButton.innerHTML = options.buttonText || 'Browse&hellip;';

        var filePathBox = document.createElement('span');
        filePathBox.innerHTML = input.value || options.noFileText || 'No file selected.';

        (function (target) {
            input.onchange = function () {
                target.innerHTML = this.value;
            }
        })(filePathBox);

        label.appendChild(browseButton);
        label.appendChild(filePathBox);

        input.style.position = 'absolute';
        input.style.visibility = 'hidden';

        input.parentNode.replaceChild(label, input);
        label.appendChild(input);
    }
}