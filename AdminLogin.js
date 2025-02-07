function func(){
	var email = document.getElementById ("username").value;
	var pass = document.getElementById('password'). value;
if (email === 'demo@icloud.com' && pass === '123456'){
	alert("Successful!");
	window.location.assign("AdminHome.html");
	return false;
}
else{
	alert("Invalid Username or Password");
	return false;
}
}

