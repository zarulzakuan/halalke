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

        var pName = document.querySelector('#pName');
        var pManufacturer = document.querySelector('#pManufacturer');
        var pHalal = document.querySelector('#pHalal');
        var pPhoto = document.querySelector('#pPhoto');
        var pIngredients = document.querySelector('#pIngredients');
        var pInfo = document.querySelector('#pInfo');
        var pSubmitter = document.querySelector('#pSubmitter');

        pName.value = info.name;
        pPhoto.src = info.photopath;
        pHalal.value = info.halal;
        pInfo.innerHTML = info.info;
        pIngredients.value = info.ingredients;

        modal.querySelector('.modal-background').addEventListener('click', function (e) {
            e.preventDefault();
            modal.classList.remove('is-active');
            html.classList.remove('is-clipped');
        });
    }
}