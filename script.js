function getFormvalue() {
    //Write your code here
	let first = document.getElementById("fname");
	let last = document.getElementById("lname");
	let name = first.value  +" " + last.value;
	// console.log(first);
	alert(name);

}
