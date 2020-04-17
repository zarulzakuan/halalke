function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var entryInfo = JSON.parse(xhr.responseText);
            var oglasiHTML = '';
            for (var i = 0; i < entryInfo.length; i++) {
                var klasaCijene = '';
                if (entryInfo[i].cijena < 100) {
                    klasaCijene = 'is-success';
                }
                else if (entryInfo[i].cijena >= 100 && oglasi[i].cijena < 300) {
                    klasaCijene = 'is-info';
                }
                else if (entryInfo[i].cijena >= 300) {
                    klasaCijene = 'is-danger';
                }

                oglasiHTML += '<p><span class="tag ' + klasaCijene + '">' + oglasi[i].cijena + '</span>' + ' ' + oglasi[i].tekst + '</p>';
            }

            document.getElementById('oglasi').innerHTML = oglasiHTML;
        }
    };

    xhr.open('GET', 'http://nikola-breznjak.com/_testings/ajax/test2.php');
    xhr.send();
}