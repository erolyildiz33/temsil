/* Theme Name: The Project - Responsive Website Template
 * Author: HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version: 2.0.5
 * Created: March 2015
 * License URI: http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */

(function($){

	$(document).ready(function(){


		// Notify Plugin - The below code (until line 42) is used for demonstration purposes only
		//-----------------------------------------------
		if (($(".main-navigation.onclick").length>0) && !Modernizr.touch ){
			$.notify({
				// options
				message: 'The Dropdowns of the Main Menu, are now open with click on Parent Items. Click "Home" to checkout this behavior.'
			},{
				// settings
				type: 'info',
				delay: 10000,
				offset : {
					y: 150,
					x: 20
				}
			});
		};
		if (!($(".main-navigation.animated").length>0) && !Modernizr.touch && $(".main-navigation").length>0){
			$.notify({
				// options
				message: 'The animations of main menu are disabled.'
			},{
				// settings
				type: 'info',
				delay: 10000,
				offset : {
					y: 150,
					x: 20
				}
			}); // End Notify Plugin - The above code (from line 14) is used for demonstration purposes only

		};

		$(".neverShowAgainBtn").click(function(){

            var $url 		= $(this).data("url");
            var $id  		= $(this).data("popup-id");

            var $data = {
                url : $url,
                popup_id : $id,
            }

			var csrf_key 	= $(this).data("csrf-key");
			var csrf_value 	= $(this).data("csrf-value");

			$data[csrf_key] = csrf_value;

			$.post($url, $data, function(){})

		})

	}); // End document ready


})(this.jQuery);
