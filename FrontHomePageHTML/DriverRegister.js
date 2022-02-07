// const firebaseConfig = {
//   apiKey: "AIzaSyC-U6shHrcahGdhoiGLBuqRv235a-kJW14",
//   authDomain: "final-cb1d4.firebaseapp.com",
//   databaseURL: "https://final-cb1d4-default-rtdb.firebaseio.com",
//   projectId: "final-cb1d4",
//   storageBucket: "final-cb1d4.appspot.com",
//   messagingSenderId: "76633094997",
//   appId: "1:76633094997:web:b9bd8fa999f1c464fa0ddc",
//   measurementId: "G-Z679JBDE9F",
// };

// initialize firebase
// firebase.initializeApp(firebaseConfig);

// reference your database
firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    location.replace("FrontHomePage.html")
  }
})
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var Adhar = getElementVal("Adhar");

  var license = getElementVal("license");
  var Area = getElementVal("Area");
  var Gender = getElementVal("Gender");

  saveMessages(name, emailid, Adhar, license, Area, Gender);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, Adhar, license, Area, Gender) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,

    Adhar: Adhar,
    license: license,

    Area: Area,
    Gender: Gender,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
