/*!
 * jQuery RunnableCode Widget
 * (c) 2011, Christophe Desguez - EIDOLON LABS
 * Licensed under the MIT license.
 */
(function($){
	
	$.fn.runnable = function(options) {
		var code = $(this);
		$("<script>")
			.attr("type", "text/javascript")
			.text(code.text())
		.appendTo("body");
		
		return code;
	}
	
})(jQuery);
