import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

$(document).ready(function () {
    $("a").on("click", function (e) {
        e.preventDefault();
    });

    $(".header__menu li:first").on("click", () => {
        $(".header__menu-mini").slideToggle("slow");
    })

    $(".header__link:first").on("click", () => {
        if ($(".header__icon:first").css("display") != "none") {
            $(".header__icon:first").hide();
            $(".header__icon-cross").show();
            $(".header__link:first span").css("color", "#db6c00");
            $(".header__link:first span").text("Закрыть");
        } else {
            $(".header__icon:first").show();
            $(".header__icon-cross").hide();
            $(".header__link:first span").css("color", "");
            $(".header__link:first span").text("Меню");
        }
    })

});
