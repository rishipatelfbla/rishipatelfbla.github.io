function func(){
	var email = document.getElementById ("username").value;
	var pass = document.getElementById('password'). value;
if (email === 'rp417515@student.hcbe.net' && pass === 'Rp136933h'){
	alert("Successful!");
	window.location.assign("StudentHome.html");
	return false;
}
else{
	alert("Invalid Username or Password");
	return false;
}
}
