window.addEventListener('load', function () {
    var lock = new Auth0Lock('udGE155TdWI7SL0ZM2w316kMYRFHSpLM', 'isithalaldev.auth0.com');

    document.getElementById('btn-login').addEventListener('click', function () {
        lock.show(function (err, profile, token) {
            if (err) {
                // Error callback
                console.error("Something went wrong: ", err);
            } else {
                // Success calback  

                // Save the JWT token.
                localStorage.setItem('userToken', token);
                // Save the profile
                localStorage.setItem('userProfile', JSON.stringify(profile));
            }
        });
    }); 

});

