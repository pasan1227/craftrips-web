var firebaseConfig = {
    apiKey: "AIzaSyC28WGbzss4lJK5YMaPq_R9uDR1BAEH0nQ",
    authDomain: "craftrips-web-contact.firebaseapp.com",
    projectId: "craftrips-web-contact",
    storageBucket: "craftrips-web-contact.appspot.com",
    messagingSenderId: "949648473610",
    appId: "1:949648473610:web:32499086782e04119ee9f3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Reference contactInfo collections
  let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    
    // Get input values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let subject = document.querySelector(".subject").value;
    let message = document.querySelector(".message").value;

    saveContactInfo(name, email, subject, message);

    document.querySelector(".contact-form").reset();

    sendEmail(name, email, subject, message);
}

// Save infos to firebase
function saveContactInfo(name, email, subject, message){
    let newContactInfo = contactInfo.push();
    newContactInfo.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });

    retrieveInfos();
}

//Retrieve Infos
function retrieveInfos(){
    let ref = firebase.database().ref("infos");
    ref.on("value", gotData);
}

function gotData(data){
    let info = data.val();
    let keys = Object.keys(info);

    for(let i = 0; i < keys.length; i++){
        let infoData = keys[i]
        let name = info[infoData].name
        let email = info[infoData].email
        let subject = info[infoData].subject
        let message = info[infoData].message
        console.log(name, email, subject, message);

        let infosResults = document.querySelector(".infosResults");

    //     infosResults.innerHTML += `<div>
    //     <p><strong>Name: <strong/>${name} <br/>
    //     <a><strong>Email: <strong/>${email} </a> <br/> 
    //     <a><strong>Subject: <strong/>${subject} </a> <br/> 
    //     <a><strong>Message: <strong/>${message} </a>
    //     </p>
    //     </div>`        
    }
}
//retrieveInfos();

//Send email Info
function sendEmail(name, email, subject, message){
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'softgenix2020@gmail.com',
        Password: "tHedbIAlsTinGLY",
        To: 'pasanratnayake@gmail.com',
        From: 'softgenix2020@gmail.com',
        Subject: `${subject} sent you a message`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then((message) => alert("Your mail sent successfully!"));
}