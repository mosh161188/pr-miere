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
      
      var options2 = {
      	align: 'left',
        autoResize: true, // This will auto-update the layout when the browser window is resized.
        container: $('#profilefeed'), // Optional, used for some extra CSS styling
        offset: 2, // Optional, the distance between grid items
        resizeDelay: 0,
        itemWidth: 210 // Optional, the width of a grid item
      };
      
      // Call the layout function.
      $('#tiles li').wookmark(options2);
      
      
      
      alignNavigation();
      setWidth();
      
      $(window).resize(function() {
      		  alignNavigation();
	});
      
      
 });
 
 function alignNavigation(){
	 	columns = $(document).width()/210;
      	columns = Math.floor(columns);
		$('.centerit').css({'width':columns * 210});
 }
 
 function setWidth(){
 	var contentWidth = $('#content').width();
 	var p = (contentWidth / 100);
 	var result = 412 / p;
 	var result = 100 - result-5;
	 $('#profilefeed').css({'width': result+'%'});
	 //alert(result);
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