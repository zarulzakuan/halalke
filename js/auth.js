window.addEventListener('load', function () {
    var lock = new Auth0Lock('udGE155TdWI7SL0ZM2w316kMYRFHSpLM', 'isithalaldev.auth0.com');
    var accessToken = null;
    var profile = null;

    lock.on("authenticated", function (authResult) {
        console.log("Authenticated!")
        lock.getUserInfo(authResult.accessToken, function (error, profileResult) {
            if (error) {
                // Handle error
                return;
            }

            accessToken = authResult.accessToken;
            profile = profileResult;
            var welcomeTxt = document.querySelector('#welcomeTxt');
            var welcomeImg = document.querySelector('#welcomeImg');
            localStorage.setItem('userToken', accessToken);
            localStorage.setItem('userProfile', JSON.stringify(profile));
            welcomeTxt.innerHTML = "Welcome " + profile.nickname + "!";
            welcomeTxt.style.display = "block";
            welcomeImg.src = profile.picture;
            welcomeImg.style.display = "block";

            // Update DOM
        });
    });
    document.getElementById('btn-login').addEventListener('click', function () {
        lock.show();
    });

    document.getElementById('btn-logout').addEventListener('click', function () {
        var welcomeTxt = document.querySelector('#welcomeTxt');
        var welcomeImg = document.querySelector('#welcomeImg');
        localStorage.removeItem('userToken');
        localStorage.removeItem('userProfile');
        welcomeTxt.style.display = "block";
        welcomeImg.style.display = "block";
    });


});
