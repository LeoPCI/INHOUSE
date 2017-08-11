var openPage = function() {
	$('#cover-page').animate({
      top: '-100vh',
      opacity: '0',
      // top: '0px',
      margin: '0px'
    }, 700, function(){ 
      $('#cover-page').hide();
    });
}

$(window).scroll(function() {
	openPage();
})

$(window).click(function() {
	openPage();
})