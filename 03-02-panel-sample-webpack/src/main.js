const { selection, Text } = require('scenegraph');
const clipboard = require('clipboard');

let panel;

function create() {
  panel = document.createElement('div');
  panel.setAttribute('id', 'textContainers');

  return panel;
}

function show(event) {
  if (!panel) event.node.appendChild(create());
}

function hide(event) {}

function extractAndAddText(sceneNode) {
  const textContainers = document.querySelector('#textContainers');
  sceneNode.forEach(item => {
    if (item instanceof Text) {
      const textBoxContainer = document.createElement('div');
      const textLabel = document.createElement('div');
      textLabel.innerHTML = `${item.name}`;
      const textForm = document.createElement('form');
      const textInput = document.createElement('textarea');
      const copyButton = document.createElement('button');
      textInput.setAttribute('readonly', 'true');
      textInput.textContent = `${item.text}`;
      copyButton.innerHTML = 'copy';
      textBoxContainer.appendChild(textLabel);
      textForm.appendChild(textInput);
      textForm.appendChild(copyButton);
      textBoxContainer.appendChild(textLabel);
      textBoxContainer.appendChild(textForm);

      copyButton.addEventListener('click', function(e) {
        (function(ev, ti) {
          clipboard.copyText(ti.textContent);
        })(e, textInput);
      });

      textContainers.appendChild(textBoxContainer);
    } else if (item.children) {
      extractAndAddText(item.children);
    }
  });
}

async function update() {
  const textContainers = document.querySelector('#textContainers');

  while (textContainers.firstChild) {
    textContainers.removeChild(textContainers.firstChild);
  }

  if (selection.items.length) {
    extractAndAddText(selection.items);
  } else {
    console.log('no item');
    const message = document.createElement('div');
    message.innerHTML = `Select Objects with text`;
    textContainers.appendChild(message);
  }
}

module.exports = {
  panels: {
    example: {
      show,
      hide,
      update,
    },
  },
};
