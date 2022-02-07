const firebaseConfig = {
  apiKey: "AIzaSyC-U6shHrcahGdhoiGLBuqRv235a-kJW14",
  authDomain: "final-cb1d4.firebaseapp.com",
  databaseURL: "https://final-cb1d4-default-rtdb.firebaseio.com",
  projectId: "final-cb1d4",
  storageBucket: "final-cb1d4.appspot.com",
  messagingSenderId: "76633094997",
  appId: "1:76633094997:web:b9bd8fa999f1c464fa0ddc",
  measurementId: "G-Z679JBDE9F"
};



// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var DriverDB = firebase.database().ref("Driver");

document.getElementById("Driver").addEventListener("submit", submitForm);

function submitForm(e) {

  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var Phone = getElementVal("Phone");
  var Adhar = getElementVal("Adhar");

  var license = getElementVal("license");
  var NumberPlate = getElementVal("NumberPlate");

  var Area = getElementVal("Area");
  var gender = getElementVal("gender");
  var Zipcode = getElementVal("Zipcode");

  var pwd = getElementVal("pwd");

  var file = getElementVal("file");

  saveMessages(name, emailid,Phone, Adhar, license,NumberPlate,Area,gender,Zipcode,pwd,file);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("Driver").reset();
}

const saveMessages = (name, emailid,Phone, Adhar, license,NumberPlate,Area,gender,Zipcode,pwd,file) => {
  var newContactForm = DriverDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    Phone:Phone,
    Adhar: Adhar,
    license: license,
    NumberPlate:NumberPlate,
    Area:Area,
    gender:gender,
    Zipcode:Zipcode,
    pwd :pwd,
    file:file,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
  };
