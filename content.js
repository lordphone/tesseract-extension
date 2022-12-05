const Tesseract = require('tesseract.js')

document.addEventListener('click', event => {
    if (event.target.tagName === 'IMG') {
        const img = event.target;
        Tesseract.recognize(img)
            .progress(message => console.log(message))
            .then(result => console.log(result.text))
            .catch(err => console.error(err));
    }
});