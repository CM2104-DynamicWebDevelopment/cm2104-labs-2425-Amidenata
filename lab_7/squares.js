$(function(){
	// usual main starting point when web page loads
	
	// simple CSS class switcher
	// find all divs
	// bind to click events
	// alter the CSS of the specific clicked div element
	const colors = ['red', 'green', 'blue'];

	$("div").click(function(){
		// $(this) is a shortcut for the element we just selected
		// using $("div")
		var $this = $(this);
        
        var currentColor = colors.find(color => $this.hasClass(color));
        var currentIndex = colors.indexOf(currentColor);
        var nextIndex = (currentIndex + 1) % colors.length;

        $this.removeClass(colors[currentIndex]).addClass(colors[nextIndex]);
	});
	
});