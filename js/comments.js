// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCizruCyUUn-JKOc_q-7IEoSBCFQ1vzKV4",
    authDomain: "craftrips-web-comments-63eda.firebaseapp.com",
    projectId: "craftrips-web-comments-63eda",
    storageBucket: "craftrips-web-comments-63eda.appspot.com",
    messagingSenderId: "365984587653",
    appId: "1:365984587653:web:69c455763038e178caeeec"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Reference commentsInfo collections
  let commentInfo = firebase.database().ref("infos");

    // Listen for a submit
    document.querySelector(".comment-form").addEventListener("submit", submitForm);

    function submitForm(e){
        e.preventDefault();

    // Get input values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;

    saveCommentInfo(name, email, message);

    document.querySelector(".comment-form").reset();
}
// Save infos to firebase
function saveCommentInfo(name, email, message){
    let newCommentInfo = commentInfo.push();
    newCommentInfo.set({
        name: name,
        email: email,
        message: message,
    });
}