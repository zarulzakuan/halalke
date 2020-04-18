function getEntry() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var entryInfo = JSON.parse(xhr.responseText);

            console.log(entryInfo);

        }
    };

    xhr.open('GET', 'http://localhost:8000/entry/10000');
    xhr.send();
}

