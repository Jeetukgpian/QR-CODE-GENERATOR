const generateButton=document.getElementById('generateBtn');
let qrImg = document.querySelector('#qr-img');
let imgBox=document.querySelector('#img-box');
generateButton.addEventListener('click', function() {
    let qrInput = document.getElementById('qrInput').value;
    // Clear the container before generating a new QR code
    document.getElementById('qrCodeContainer').innerHTML = "";

    // Check if input is not empty
    if (qrInput.trim() === "") {
        alert("Please enter some text or a URL!");
        return;
    }

    qrImg.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrInput;
});
