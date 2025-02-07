function onSuccess(){
var ame = document.getElementById('name').value;
var umber = document.getElementById('number').value;
var email = document.getElementById('email').value;

if (ame && umber && email) {
        alert('Your application has been submitted, and we will reach out to you soon!');
        window.location.assign("StudentHome.html");
    } 
    return false;

}

