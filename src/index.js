const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
    System.import('./image_viewer');
};

document.body.appendChild(button);
console.log("Test3");