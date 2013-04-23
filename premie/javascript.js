$(document).ready(function() {
	var columns;
	var handler = $('#tiles li');
	var options = {
        autoResize: true, // This will auto-update the layout when the browser window is resized.
        container: $('#feed'), // Optional, used for some extra CSS styling
        offset: 2, // Optional, the distance between grid items
        resizeDelay: 0,
        itemWidth: 210 // Optional, the width of a grid item
      };
      
      // Call the layout function.
      handler.wookmark(options);
      alignNavigation();
      $(window).resize(function() {
      		  alignNavigation();
	});
      
 });
 
 function alignNavigation(){
	 	columns = $('#feed').width()/210;
      	columns = Math.floor(columns);
		$('.centerit').css({'width':columns * 210});
 }
 
 function clickOnImage(back){
 	 if(back == "out"){
	 	$('body').css({'overflow':'auto'});
	 	$('#bla').css({'visibility':'hidden'});
 	 }
 	 else{
 	 	$('body').css({'overflow':'hidden'});
 	 	
	 	$('#bla').css({'top':$(document).scrollTop(),'visibility':'visible'});
	 }
 }
 
 function showSearch(){
 	 if(columns <= 3){
	 	$('#bigsearch').css('visibility','visible').hide().fadeIn('slow');	 
	 	$('#bigsearch input').focus();
 	 }
 	 else{
		 $('#searchbar img').fadeOut(function(){
		 	$('#searchbar input').css('visibility','visible').hide().fadeIn('slow');
		 	$('#searchbar input').focus();
		 });	 
 	 }
 }