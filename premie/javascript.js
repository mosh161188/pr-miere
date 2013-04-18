$(document).ready(function() {
 
 $('.navbarprofile').mouseover(function() {
  showProfileDropdown();
 });
 
 	$("body").click(function(){
	 	hideProfileDropdown();
 	 });
	
	// Prevent events from getting pass .popup
	$(".navbarprofile").click(function(e){
	  e.stopPropagation();
	});
 
});

function showProfileDropdown(){
	var parent = $('.navbarprofile');
	$('.navbarprofile').css({'height':'145px'});
	$('.dropdownbox').css({'visibility':'visible'});
}

function hideProfileDropdown(){
	$('.navbarprofile').css({'height':'38px'});
	$('.dropdownbox').css({'visibility':'hidden'});
}