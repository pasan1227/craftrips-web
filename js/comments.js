// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCizruCyUUn-JKOc_q-7IEoSBCFQ1vzKV4",
    authDomain: "craftrips-web-comments-63eda.firebaseapp.com",
    databaseURL: "https://craftrips-web-comments-63eda-default-rtdb.firebaseio.com",
    projectId: "craftrips-web-comments-63eda",
    storageBucket: "craftrips-web-comments-63eda.appspot.com",
    messagingSenderId: "365984587653",
    appId: "1:365984587653:web:46b0aa9905281335caeeec"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //rootref is the whole realtime database
  const rootRef = firebase.database().ref();
  //commentsRef is just the comments data in the databse
  const commentsRef = rootRef.child('comments');
  //List for click on submit button
  document.getElementById('submit').addEventListener('click', function(){
    //replace line breaks in comment with br tags
    var newcomment = document.getElementById('message').value.replace(/\n/g,"<br>");
    //Define a new, keyed post
    var newPostRef = commentsRef.push();
    //Fill the new keyed post with data
    newPostRef.set({
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      comment: newcomment.trim(),
      frompage: location.pathname,
      when: firebase.database.ServerValue.TIMESTAMP
    });
  });
  function showpastcomments(){
    var showat = document.getElementById('pastcomments');
    //Get comments whose frompage equals this page's pathname
    var commentsRef = firebase.database().ref('comments/').orderByChild('frompage').equalTo(location.pathname);
    commentsRef.once('value', function (snapshot){
      snapshot.forEach(function(itemSnapshot) {
        //get the object for one snapshot
        var itemData = itemSnapshot.val();
        var comment = itemData.comment;
        var name = itemData.name;
        //var email = itemData.email;
        var when = new Date(itemData.when).toLocaleDateString("en-us");
        showat.innerHTML += "<li>" + name + "<span> - " + comment + " (" + when + ")</span></li>";
      })
    })
  }
  //Called when page first opens and also after submit button clicked
  showpastcomments();
