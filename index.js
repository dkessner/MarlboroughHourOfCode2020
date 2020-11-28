//
// index.js
//

function initialize()
{
    // move p5.js default canvas to <div id="code">

    let defaultCanvasElement = document.getElementById('defaultCanvas0');
    let codeElement = document.getElementById('code');

    if (defaultCanvasElement && codeElement)
        codeElement.appendChild(defaultCanvasElement);
}

window.onload = initialize;


