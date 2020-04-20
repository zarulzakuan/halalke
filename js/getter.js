function getEntry(id) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var entryInfo = JSON.parse(xhr.responseText);
            document.getElementById('stopCamera').click();
            toggleResultModal(entryInfo);
        }
    };

    xhr.open('GET', 'https://isithalaldev.an.r.appspot.com/entry/' + id);
    xhr.send();
}

