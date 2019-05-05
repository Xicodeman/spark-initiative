
    // TODO: Replace the following with your app's Firebase project configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAmtoP2rjr7pv1Yka7yo6Uy0eEZEOCHUYM",
        authDomain: "spark-int.firebaseapp.com",
        databaseURL: "https://spark-int.firebaseio.com",
        projectId: "spark-int",
        storageBucket: "spark-int.appspot.com",
        messagingSenderId: "884778424327",
        appId: "1:884778424327:web:e3c4ca31eebb6ce5"
      };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    var firstName = getInputVal('firstName');
    var lastName = getInputVal('lastName');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(firstName, lastName, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(firstName, lastName, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message
    });
  }
  
 