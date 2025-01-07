  // Assuming ctrl is a DOM element, like a div
  let ctrl = document.getElementById('parentElement');
  let editorLink = document.createElement('a');
  editorLink.textContent = 'Editor Link';
  
  // Append editorLink as a child of ctrl
  ctrl.appendChild(editorLink);
  