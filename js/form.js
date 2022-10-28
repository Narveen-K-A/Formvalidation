function validateform(){
   	var fname=document.forms['form']['fname'];
   	var email=document.forms['form']['email'];
   	var phone=document.forms['form']['phone'];
   	var password=document.forms['form']['password'];
   	var birthdaytime=document.forms['form']['birthdaytime'];
   	var state=document.forms['form']['state'];
   	var address=document.forms['form']['address'];
   	var gender=document.forms['form']['gender'];
   	var curdate=document.forms['form']['curdate'];
   	var joinmonth=document.forms['form']['joinmonth'];
   	var joinweek=document.forms['form']['joinweek'];
	var jointime=document.forms['form']['jointime'];
	var quantity=document.forms['form']['quantity'];
	var gsearch=document.forms['form']['gsearch'];
	var homepage=document.forms['form']['homepage'];
	var file=document.forms['form']['file'];
	
	nameValidate(fname);
	emailValidate(email);
	phoneValidate(phone);
	passwordValidate(password);
	birthdaytimeValidate(birthdaytime);
	stateValidate(state);
	addressValidate(address);
	genderValidate(gender);
	curdateValidate(curdate);
	joinmonthValidate(joinmonth);
	joinweekValidate(joinweek);
	jointimeValidate(jointime);
	quantityValidate(quantity);
	gsearchValidate(gsearch);
	homepageValidate(homepage);
	fileValidate(file);
	return false;
}

function errorValidate(id){
	document.getElementById(id).style.visibility="visible";
}

function successValidate(id){
  	document.getElementById(id).innerHTML="";
}

function nameValidate(fname){
	if(fname.value==""){
		errorValidate('error1');
		fname.style.border="1px solid #ff0000";  
     		return false;
	}
	else{
		successValidate('error1');
		fname.style.border="1px solid #00ff00";  
     		return true;
	}
}

function emailValidate(email){
   	if(email.value==""){
     		errorValidate('error2');
     		email.style.border="1px solid #ff0000";  
     		return false;
   	}
	else{
      		successValidate('error2');
      		email.style.border="1px solid #00ff00";  
     		return true;
   	}
}

function phoneValidate(phone){
   	if(phone.value==""){
     		errorValidate('error3');
     		phone.style.border="1px solid #ff0000";  
     		return false;
   	}
	else if(phone.value.length<10){
     		errorValidate('error3');
     		phone.style.border="1px solid #ff0000";  
     		return false;
   	}
	else{
      		successValidate('error3');
      		phone.style.border="1px solid #00ff00";  
     		return true;
   	}
}

function passwordValidate(password){
   	if(password.value==""){
     		errorValidate('error4');
     		password.style.border="1px solid #ff0000";  
     		return false;
   	}
	else{
      		successValidate('error4');
      		password.style.border="1px solid #00ff00";  
     		return true;
   	}
}

function birthdaytimeValidate(birthdaytime){
   	if(birthdaytime.value==""){
     		errorValidate('error5');
     		birthdaytime.style.border="1px solid #ff0000";  
     		return false;
   	}
	else{
      		successValidate('error5');
		birthdaytime.style.border="1px solid #00ff00";  
     		return true;
   	}
}

function stateValidate(state){
   	if(state.value==""){
     		errorValidate('error6');
		state.style.border="1px solid #ff0000";  
     		return false;
   	}
	else{
      		successValidate('error6');
		state.style.border="1px solid #00ff00";  
     		return true;
   	}
}

function addressValidate(address){
   	if(address.value==""){
     		errorValidate('error7');
		address.style.border="1px solid #ff0000";  
     		return false;
   	}
	else{
      		successValidate('error7');
		address.style.border="1px solid #00ff00";  
     		return true;
   	}
}

function genderValidate(gender){
   	if(gender.value==""){
     		errorValidate('error8');  
     		return false;
   	}
	else{
      		successValidate('error8');  
     		return true;
   	}
}

function curdateValidate(curdate){
   	if(curdate.value==""){
     		errorValidate('error9');
		curdate.style.border="1px solid #ff0000";  
     		return false;
   	}
	else{
      		successValidate('error9');
		curdate.style.border="1px solid #00ff00";  
     		return true;
   	}
}

function joinmonthValidate(joinmonth){
   	if(joinmonth.value==""){
     		errorValidate('error10');
		joinmonth.style.border="1px solid #ff0000";  
     		return false;
   	}
	else{
      		successValidate('error10');
		joinmonth.style.border="1px solid #00ff00";  
     		return true;
   	}
}

function joinweekValidate(joinweek){
   	if(joinweek.value==""){
     		errorValidate('error11');
		joinweek.style.border="1px solid #ff0000";  
     		return false;
   	}
	else{
      		successValidate('error11');
		joinweek.style.border="1px solid #00ff00";  
     		return true;
   	}
}

function jointimeValidate(jointime){
   	if(jointime.value==""){
     		errorValidate('error12');
		jointime.style.border="1px solid #ff0000";  
     		return false;
   	}
	else{
      		successValidate('error12');
		jointime.style.border="1px solid #00ff00";  
     		return true;
   	}
}

function quantityValidate(quantity){
   	if(quantity.value==""){
     		errorValidate('error13');
		quantity.style.border="1px solid #ff0000";  
     		return false;
   	}
	else{
      		successValidate('error13');
		quantity.style.border="1px solid #00ff00";  
     		return true;
   	}
}

function gsearchValidate(gsearch){
   	if(gsearch.value==""){
     		errorValidate('error14');
		gsearch.style.border="1px solid #ff0000";  
     		return false;
   	}
	else{
      		successValidate('error14');
		gsearch.style.border="1px solid #00ff00";  
     		return true;
   	}
}

function homepageValidate(homepage){
   	if(homepage.value==""){
     		errorValidate('error15');
		homepage.style.border="1px solid #ff0000";  
     		return false;
   	}
	else{
      		successValidate('error15');
		homepage.style.border="1px solid #00ff00";  
     		return true;
   	}
}

function fileValidate(file){
   	if(file.value==""){
     		errorValidate('error16');  
     		return false;
   	}
	else{
      		successValidate('error16');  
     		return true;
   	}
}