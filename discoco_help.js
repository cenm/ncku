$(document).ready(function () {
	var pgnme = window.location.pathname.split('.jsp')[0].split('?')[0].split('/').pop();
	pgnme = pgnme.replace(/\./g,'').replace('page','').replace('action','');//this is for oliver style
	if(pgnme=='qrcode'){//this is for qrcode style
		$("#act-section").html(
			'<div style="max-width:100%;min-height:80vh;width:1000px;padding:70px 20px 5px 20px;box-sizing:border-box;-moz-box-sizing:border-box; -webkit-box-sizing:border-box;" align="center">'
			+'<div class="title_txt">'
			+'<a>Discoco-優惠立即抽</a>'
			+'<a style=";border-left:1px #555555 solid;white-space:nowrap;color:#AA0000;padding-left:10px">'
			+'QRCODE'
			+'<img src=\'./images/qr-code.svg\' style="vertical-align: bottom;" width="50px">'
			+'</a>'
			+'</div>'
			+'<div style="margin:15px 0px;border-top:1px #888888 solid"></div>'
			+'<input style="margin: 15px 10px 5px 10px;cursor: pointer" type="button" value="乾淨版(列印)"  onclick="print_detail(\'00\')"/>'
			+'<div id="qr00">'
			+'<div class="qr_img"></div>'
			+'</div>'
				
			+'<div style="margin:15px 0px;border-top:1px #888888 solid"></div>'
			+'<input style="margin: 15px 10px 5px 10px;cursor: pointer" type="button" value="善化年中享樂購(列印)"  onclick="print_detail(\'002\')"/>'
			+'<div>請使用Chrome瀏覽器，適合A4或A5列印</div>'
			+'<div id="qr002">'
			+'<div class="qr02_css1" style="height:0;padding:0 0 141% 0;background:#ba3939 url(\'https://i.imgur.com/pYilDhg.jpg\') 0 0 no-repeat;-moz-background-size: cover;-webkit-background-size: cover;-o-background-size: cover;background-size: cover;">'
			+'<div class="qr_img" width="80%" style="padding: 18.5% 30% 10% 30%;"></div>'
			+'<div class="shpnme" style="margin-top: -60%;text-align: center;font-weight:bold;color:#555555"></div>'
			+'</div>'
			+'</div>'
			+'<div style="margin:15px 0px;border-top:1px #888888 solid"></div>'
			+'<input style="margin: 15px 10px 5px 10px;cursor: pointer" type="button" value="臺南購便利(列印)"  onclick="print_detail(\'001\')"/>'
			+'<div>請使用Chrome瀏覽器，適合A4或A5列印</div>'
			+'<div id="qr001">'
			+'<div class="qr02_css1" style="height:0;padding:0 0 141% 0;background:#ba3939 url(\'https://i.imgur.com/dBjB1fT.jpg\') 0 0 no-repeat;-moz-background-size: cover;-webkit-background-size: cover;-o-background-size: cover;background-size: cover;">'
			+'<div class="qr_img" width="80%" style="padding: 47% 35% 10% 35%;"></div>'
			+'<div class="shpnme" style="margin-top: -47.5%;text-align: center;font-weight:bold;color:#555555"></div>'
			+'</div>'
			+'</div>'
				
			+'<div style="margin:15px 0px;border-top:1px #888888 solid"></div>'
			+'<input style="margin: 15px 10px 5px 10px;cursor: pointer" type="button" value="普通版(列印)"  onclick="print_detail(\'01\')"/>'
			+'<div id="qr01">'
			+'<div class="qr02_css1" style="height:0;padding:0 0 141% 0;;-moz-background-size: cover;-webkit-background-size: cover;-o-background-size: cover;background-size: cover;">'
			+'<div class="qr_img" width="80%" style="padding: 20% 15% 10% 15%;"></div>'
			+'<div style="bottom:0;text-align:center;color:#FFFFFF;font-size:50px">DISCOCO</div>'
			+'</div>'
			+'</div>'
				
			+'</div>'
		);
		
		$(".shpnme").html(shpnme);
		shpnme_resize();
		$( window ).resize(function() {
			shpnme_resize();
		});
	}

});
function shpnme_resize(){
	w = $("#qr002").width()/270;
	$( "#qr002 .shpnme" ).css({'-moz-transform':'scale('+w+')','-webkit-transform':'scale('+w+')','-o-transform':'scale('+w+')','-ms-transform':'scale('+w+')','transform':'scale('+w+')'});
	w = $("#qr001").width()/290;
	$( "#qr001 .shpnme" ).css({'-moz-transform':'scale('+w+')','-webkit-transform':'scale('+w+')','-o-transform':'scale('+w+')','-ms-transform':'scale('+w+')','transform':'scale('+w+')'});
}
