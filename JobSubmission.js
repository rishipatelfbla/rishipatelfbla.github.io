function onSub(){
var jobTitle = document.getElementById('jobTitle').value;
var jobDescription = document.getElementById('jobDescription').value;
var email = document.getElementById('email').value;
var company = document.getElementById('company').value;

if (jobTitle && jobDescription && email && company) {
        alert('Your submission has been sent to the admin, and we will reach out to you soon!');
        window.location.assign("index.html");
    } 
    return false;

}
