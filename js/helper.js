function toggleCameraModal() {
    var modal = document.querySelector('#cameraModal');  // assuming you have only 1
    var html = document.querySelector('html');

    if (modal.classList.contains('is-active')) {
        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
    } else {
        modal.classList.add('is-active');
        html.classList.add('is-clipped');

        modal.querySelector('.modal-background').addEventListener('click', function (e) {
            e.preventDefault();
            modal.classList.remove('is-active');
            html.classList.remove('is-clipped');
            document.getElementById('stopCamera').click();
        });
    }


}


function toggleResultModal(info) {
    console.log(info);
    var modal = document.querySelector('#resultModal');  // assuming you have only 1
    var html = document.querySelector('html');
    if (modal.classList.contains('is-active')) {
        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
    } else {
        modal.classList.add('is-active');
        html.classList.add('is-clipped');


        if (info.halal !== "") {
            var pName = document.querySelector('#pName');
            var pManufacturer = document.querySelector('#pManufacturer');
            var pStatusImg = document.querySelector('#pStatusImg');
            var pStatusText = document.querySelector('#pStatusTxt');
            
            var pPhoto = document.querySelector('#pPhoto');
            var pIngredients = document.querySelector('#pIngredients');
            var pInfo = document.querySelector('#pInfo');
            var pSubmitter = document.querySelector('#pSubmitter');

            pName.innerHTML = info.name;
            pPhoto.src = info.photopath;
            pInfo.innerHTML = info.info;
            pIngredients.innerHTML = info.ingredients;

            if (info.halal == "yes") {
                pStatusImg.src = "resources/images/thumbs-up.svg";
                pStatusText.innerHTML = "Halal";
                pStatusText.style.color = "lime";
            } else if (info.halal == "no") {
                pStatusImg.src = "resources/images/thumbs-down.svg";
                pStatusText.innerHTML = "Non-Halal";
                pStatusText.style.color = "red";
            } else if (info.halal == "syubhah") {
                pStatusImg.src = "resources/images/exclamation.svg";
                pStatusText.innerHTML = "Syubhah";
                pStatusText.style.color = "orange";
            } else {
                pStatusImg.src = "resources/images/question.svg";
                pStatusText.innerHTML = "No Info";
                pStatusText.style.color = "grey";
            }
        } else {

        }



        modal.querySelector('.modal-background').addEventListener('click', function (e) {
            e.preventDefault();
            modal.classList.remove('is-active');
            html.classList.remove('is-clipped');
        });
    }
}