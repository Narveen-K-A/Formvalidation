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
	var program=document.forms['form']['program'];
	var quantity=document.forms['form']['quantity'];
	var favcolor=document.forms['form']['favcolor'];
   	var vol=document.forms['form']['vol'];
	var gsearch=document.forms['form']['gsearch'];
	var homepage=document.forms['form']['homepage'];
	var photo=document.forms['form']['photo'];
	
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
	programValidate(program);
	quantityValidate(quantity);
	favcolorValidate(favcolor);
	volValidate(vol);
	gsearchValidate(gsearch);
	homepageValidate(homepage);
	photoValidate(photo);
	return false;
}

function errorValidate(id){
	document.getElementById(id).style.visibility="visible";
}

function successValidate(id){
  	document.getElementById(id).innerHTML="";
}

