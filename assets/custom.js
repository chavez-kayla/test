$(document).ready(function() {
	
	/* 
		Validate specified forms for required fields on submit.
		Show role=alert error message for any errors.
     
     
     */       
	
	$('form.validate input[type="submit"]').on('click', function() {
		var form = $(this).closest('form.validate');
		form.find('input[required]:visible, textarea[required]:visible').each(function() {
			if( !$(this).val() ) {
				var label = $(this).prev('label').html().replace('*', '').replace(':', '');
              $(this).after('<div class="error" role="alert" id="formError"><strong>Error:</strong> Please fill in ' + label + ' field</div>');
			}
		});
	});
     
	
	/* 
		When a Klaviyo form pops up
		Change .pageWrap to [disabled="disabled"]
	*/
	window.addEventListener("klaviyoForms", function(e) { 
		if (e.detail.type == 'open') {
			$('.pageWrap').attr("disabled", true);
		}
		if (e.detail.type == 'close') {
	    $('.pageWrap').attr("disabled", false);
	  }
	});
});

$(window).load(function() {
	/* Accessibility Fixes (Apps) */
	setTimeout(function(){ 
		if( $('.bold-ro__modal-close').length ) $('.bold-ro__modal-close').attr('tabindex', 0).attr('role', 'button');
		if( $('.cc-btn-close-settings').length ) $('.cc-btn-close-settings').attr('tabindex', 0).attr('role', 'button');
		if( $('.cc-btn-save-settings').length ) $('.cc-btn-save-settings').attr('tabindex', 0).attr('role', 'button');
	}, 1000);
});

/* Allow focus ring by default, turn off for mouse users */
function handleFirstClick(e) {
	document.body.classList.remove('allow-focus-ring');
	window.removeEventListener('mousedown', handleFirstClick);
}
window.addEventListener('mousedown', handleFirstClick);