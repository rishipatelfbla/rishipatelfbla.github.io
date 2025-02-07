var selectedRow = null; 
function onFormSubmit(event){
	event.preventDefault();
	var formData = readFormData();
	if(selectedRow === null){
		insertNewRecord(formData);
	}
	else{
		updateRecord(formData);	
	}
	resetForm();
}


//Retrieve the data
function readFormData(){
	var formData = {};
	formData["jobTitle"] = document.getElementById("jobTitle").value;
	formData["jobDescription"] = document.getElementById("jobDescription").value;
	formData["company"] = document.getElementById("company").value;
	formData["email"] = document.getElementById("email").value;
	return formData;
}


var jobData = [
  {
    jobTitle: "Cashier",
    jobDescription: "Employee gets paid $10/hours."
  },
  {
    jobTitle: "Delivery Driver",
    jobDescription: "Employee gets paid $12/hours."
  }
];

function insertPermanentRecords() {
  var table = document.getElementById("jobList").getElementsByTagName('tbody')[0];
  jobData.forEach(function(data) {
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.jobTitle;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.jobDescription;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = "Pizza Hut";
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = "pizzahutperry@gmail.com";
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = '<button onClick="onApply(this)">Apply</button>';
  });
}

function onApply(){
	window.location.assign("StudentApply.html");
	return false;
}

insertPermanentRecords();
