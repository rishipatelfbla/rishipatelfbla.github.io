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

//Insert the data
function insertNewRecord(data){
	var table = document.getElementById("jobList").getElementsByTagName('tbody')[0];
	var newRow = table.insertRow(table.length);
	var cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.jobTitle;
	var cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.jobDescription;
	var cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.company;
	var cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.email;
	var cell5 = newRow.insertCell(4);
		cell5.innerHTML = '<button onClick= "onEdit(this)">Edit</button> <button onClick= "onDelete(this)">Delete</button>'
}

function onEdit(td){
	selectedRow = td.parentElement.parentElement;
	document.getElementById("jobTitle").value = selectedRow.cells[0].innerHTML;
	document.getElementById("jobDescription").value = selectedRow.cells[1].innerHTML;
	document.getElementById("company").value = selectedRow.cells[2].innerHTML;
	document.getElementById("email").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
	selectedRow.cells[0].innerHTML = formData.jobTitle;
	selectedRow.cells[1].innerHTML = formData.jobDescription;
	selectedRow.cells[2].innerHTML = formData.company;
	selectedRow.cells[3].innerHTML = formData.email;
}

function onDelete(td){
	if(confirm('Do you want to delete this posting?')){
		row = td.parentElement.parentElement;
		document.getElementById('jobList').deleteRow(row.rowIndex);
	}
	resetForm();
}

function resetForm(){
	document.getElementById("jobTitle").value = '';	
	document.getElementById("jobDescription").value = '';	
	document.getElementById("company").value = '';	
	document.getElementById("email").value = '';	
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
    cell5.innerHTML = '<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>';
  });
}

insertPermanentRecords();

