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
  var contactFormDB = firebase.database().ref("Feedback");

  document.getElementById("Feedback").addEventListener("submit", submitForm);

  function submitForm(e) {

    e.preventDefault();

    var name = getElementVal("name");
    var Message = getElementVal("Message");
    var Area = getElementVal("Area");
    var Test_DatetimeLocal = getElementVal("Test_DatetimeLocal");


    saveMessages(name,Message,Area,Test_DatetimeLocal);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm1").reset();
  }

  const saveMessages = (name,Message,Area,Test_DatetimeLocal) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
      name: name,
      Message:Message,
      Area:Area,
      Test_DatetimeLocal:Test_DatetimeLocal,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
    }; 
