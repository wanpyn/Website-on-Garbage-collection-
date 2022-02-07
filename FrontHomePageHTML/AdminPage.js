firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("index.html")
    }
})
function logout() {
    firebase.auth().signOut()
}

