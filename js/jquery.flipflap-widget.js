/*!
 * jQuery FlipFlap Widget
 * (c) 2011, Christophe Desguez - EIDOLON LABS
 * Licensed under the MIT license.
 */
(function($){
		
	$.fn.flipflap = function(chars, delay) {
		var target = $(this);
		if (!target.length) return;

		var timerVal = delay || 200;
		var arr = chars.split("");
		var current = 0, last = arr.length;
		var animate = true;
		
		var flip = function() {
			if (current == last) current = 0;
			target.text(arr[current++]);
			if (animate) setTimeout(flip, timerVal);
		};
		flip();
		
		return target.click(function toggleAnimation() {
			if (animate = !animate) flip();
		});
	};
	
	
})(jQuery);
