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
			+'<input style="margin: 15px 10px 5px 10px;cursor: pointer" type="button" value="乾淨版(列印)"  onclick="print_detail(\'01\')"/>'
			+'<div id=\'qr01\'>'
			+'<div class="qr_img"></div>'
			+'</div>'
			
			+'<div style="margin:15px 0px;border-top:1px #888888 solid"></div>'
			+'<input style="margin: 15px 10px 5px 10px;cursor: pointer" type="button" value="善化年中享樂購公版(列印)"  onclick="print_detail(\'02\')"/>'
			+'<div id=\'qr02\'>'
			+'<div class="qr02_css1" style="height:0;padding:0 0 141% 0;background:#ba3939 url(\'https://i.imgur.com/pYilDhg.jpg\') 0 0 no-repeat;-moz-background-size: cover;-webkit-background-size: cover;-o-background-size: cover;background-size: cover;">'
			+'<div class="qr_img" width="80%" style="padding: 18.5% 30% 10% 30%;"></div>'
			+'</div>'
			+'</div>'
			
			+'<div style="margin:15px 0px;border-top:1px #888888 solid"></div>'
			+'<input style="margin: 15px 10px 5px 10px;cursor: pointer" type="button" value="普通版(列印)"  onclick="print_detail(\'03\')"/>'
			+'<div id=\'qr03\'>'
			+'<div class="qr02_css1" style="height:0;padding:0 0 141% 0;">'
			+'<div class="qr_img" width="80%" style="padding: 20% 15% 10% 15%;"></div>'
			+'<div style="bottom:0;text-align:center;color:#FFFFFF;font-size:50px">DISCOCO</div>'
			+'</div>'
			+'</div>'
			
			+'</div>'
		);
	}
	
});
