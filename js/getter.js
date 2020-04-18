function getEntry() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var entryInfo = JSON.parse(xhr.responseText);

            console.log(entryInfo);
            var modal = document.querySelector('.modal');  // assuming you have only 1
            var html = document.querySelector('html');
            modal.classList.add('is-active');
            html.classList.add('is-clipped');

            modal.querySelector('.modal-background').addEventListener('click', function (e) {
                e.preventDefault();
                modal.classList.remove('is-active');
                html.classList.remove('is-clipped');
            });
        }
    };

    xhr.open('GET', 'http://localhost:8000/entry/10000');
    xhr.send();
}