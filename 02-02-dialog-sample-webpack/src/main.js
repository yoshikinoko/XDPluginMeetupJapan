const { selection, Color, Rectangle } = require('scenegraph');

async function drawRectangleOnScenegraph(rectSize) {
  const shape = new Rectangle();
  shape.width = rectSize;
  shape.height = rectSize;
  shape.fill = new Color({
    r: 255,
    g: 0,
    b: 0,
    a: 20,
  });
  selection.insertionParent.addChild(shape);
}

function renderDialog() {
  // language=HTML
  document.body.innerHTML = `
      <style>
          #dialog form {
              width: 400px;
          }
      </style>
      <dialog id="dialog">
          <form method="dialog" id="form">
              <h1>Hello!</h1>
                  <label>
                      <span>What's size of rectangle?</span>
                      <input type="text" id="rectSize" placeholder="size"/>
                  </label>
              <footer>
                  <button id="cancel">Cancel</button>
                  <button type="submit" id="ok" uxp-variant="cta">OK</button>
              </footer>
          </form>
      </dialog>
    `;
}

function createDialog() {
  let dialog = document.querySelector('#dialog');
  if (dialog) {
    console.log('Reusing old dialog');
    return dialog;
  }

  renderDialog();
  dialog = document.querySelector('#dialog');

  const submit = async () => {
    const rectangleSize = parseInt(
      document.querySelector('#rectSize').value,
      10
    );
    await drawRectangleOnScenegraph(rectangleSize);
    dialog.close('ok');
  };

  document.querySelector('#cancel').addEventListener('click', e => {
    dialog.close('cancel');
  });

  document.querySelector('#ok').addEventListener('click', async e => {
    await submit();
  });

  document.querySelector('#form').onsubmit = async e => {
    // Key press 'Enter'
    e.preventDefault();
    await submit();
  };

  return dialog;
}

async function main() {
  const r = await createDialog().showModal();
  console.log(r);
  if (r === 'reasonCanceled') {
    console.log('ESC dismissed dialog');
  }
}

async function drawRectangleOnScenegraph100() {
  await drawRectangleOnScenegraph(100);
}

async function drawRectangleOnScenegraph200() {
  await drawRectangleOnScenegraph(200);
}

module.exports = {
  commands: {
    menuCommand: main,
    menuCommand100: drawRectangleOnScenegraph100,
    menuCommand200: drawRectangleOnScenegraph200,
  },
};
