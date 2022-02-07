document.getElementById('retrieve').onclick =
    function () {
        opts = document.getElementById('opts').value;
        firebase.database().ref('Picture/' + opts).on('value', function (snapshot) {
            document.getElementById('myimg').src = snapshot.val().Link;
        });

    }