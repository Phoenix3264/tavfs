/*   
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.2.0
Version: 1.4.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v1.4/
*/

var handleCountdownTimer = function() {
    var newYear = new Date();
    newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1);
    $('#timer').countdown({until: "14d"});
};

var ComingSoon = function () {
	"use strict";
    return {
        //main function
        init: function () {
            handleCountdownTimer();
        }
    };
}();