$().ready(function() {
	$(".page-header").attr('style', 'display:none')
	$(".page-header a:first").hide()
	$(".main-content").prepend("Teknologi 1 - KEA forår 2023 - Kompendie <!--<div style='text-align: right'><a href='/f23/'><img src='https://techkea.github.io/f23/img/home-5-16.png'></a>" -->);
	

	$(".site-footer").append("<div style='text-align:center'><small>Licensed under <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY-NC-SA.</a> <br> Claus Bove (clbo@kea.dk) forår 2023 <br> <div>")
	$(".site-footer-owner").hide()
        $(".site-footer-credits").hide()	
	$(".main-content").attr('style', 'max-width:60rem; font-size:1.0rem');

});


