$(document).ready(function() {

	var handler = $('#tiles li');
	var options = {
        autoResize: true, // This will auto-update the layout when the browser window is resized.
        container: $('#feed'), // Optional, used for some extra CSS styling
        offset: 2, // Optional, the distance between grid items
        itemWidth: 210 // Optional, the width of a grid item
      };
      // Call the layout function.
      handler.wookmark(options);
      handler.wookmark();
      jsonFlickrApi();
 
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

function jsonFlickrApi(rsp) {
 if (rsp.stat != "ok"){
  return;
 }
 
 var s = "";
 var i = Math.random();
 i = i * 100;
 i = Math.ceil(i);
 
 photo = rsp.photos.photo[ i ];
 
 t_url = "http://farm" + photo.farm +
 ".static.flickr.com/" + photo.server + "/" +
 photo.id + "_" + photo.secret + "_" + "m.jpg";
 
 p_url = "http://www.flickr.com/photos/" +
 photo.owner + "/" + photo.id;
 
 s =  '<img alt="'+ photo.title + '"src="' + t_url + '"/>'  ;
 
 
 document.writeln(s);
 //this tells the JavaScript to write
 //everything in variable "s" onto the page
 
}