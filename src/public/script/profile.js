const image_upload = document.getElementById('image_upload'); 
var upload = "";

    image_upload.addEventListener('change', () => {
        const fileReader = new FileReader();
       fileReader.addEventListener('load', () => {
           upload = fileReader.result;
           document.querySelector("#display_image").style.backgroundImage = `url(${upload})`;   
       });
       fileReader.readAsDataURL(image_upload.files[0]);
    });