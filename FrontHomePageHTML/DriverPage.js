//connnection to firebase database storage and firebase realtime database
// firebase.auth().onAuthStateChanged((user) => {
//     if (!user) {
//         location.replace("FrontHomePage.html")
//     }
// })
// function log() {
//     firebase.auth().signOut()
// }


function uploadImage() {
    //getting object value to insert to database
    opts = document.getElementById('opts').value;
    const upProgress = document.querySelector('.upProgress');
    const ref = firebase.storage().ref()
    const file = document.querySelector('#default-btn').files[0]
    const metadata = {
        contentType: file.type
    }
    task = ref.child('image/' + opts).put(file, metadata)
    task.on('state_changed', function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //qdocument.querySelector('.upProgress').innerHTML = "up" + progress + "%";
        upProgress.value = progress;
        //document.querySelector("#default-btn").addEventListener("change", (e) => 
        //     var file = e.target.files[0];
        //     var storageRef = ref('image/' + opts)
        //     var task = storageRef.put(file, metadata);
        //     task.on('state_changed', (s) => {
        //         let progress = ((s.bytesTransferred / s.totalBytes) * 100);
        //         document.querySelector(".upProgress").value = (s.bytesTransferred / s.totalBytes) * 100;
        //         // upProgress.style.width = `${progresqqqqqrrrrqrqqrq}%`
        //     })
        // })
        // pushing the data or value to the database storage and task upload percentage value 
        // task = ref.child('image/' + opts).put(file, metadata)
        // task.on('state_changed', function (snapshot) {
        //     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //     document.querySelector(".upProgress").value = style.width.progress;
        //     upProgress.style.width = `${progress}%`
    },
        function (error) {
            alert('error in uploading');
        },
        //gets the image link or url for future refference 
        function () {
            task.snapshot.ref.getDownloadURL().then(function (url) {
                ImgURL = url;
                //upload to database realtime 
                firebase.database().ref('Picture/' + opts).set({
                    District: opts,
                    Link: ImgURL
                });
                alert("image Upload successfull")
            })
        }
    );
}
