$(document).ready(function () {
	var pgnme = window.location.pathname.split('.jsp')[0].split('?')[0].split('/').pop();
	pgnme = pgnme.replace(/\./g,'').replace('page','').replace('action','');//this is for oliver style
	if(pgnme=='qrcode'){//this is for qrcode style
		$("#o_qrcode").html(
			'<div id="mark" style="font-size:1.2em;line-height: 1.7em;color:#EE0000;margin:15px 0px">於6月30日前加入的新店家， 將預設加入「臺南購便利行動支付」活動，於註冊隔日中午由專員開通後，再行查閱活動專屬QRCODE<br>(若欲加入或退出官方活動，可聯繫 ckhp2018@gmail.com)</div>'
			+'<div style="margin:15px 0px;border-top:1px #888888 solid"></div>'
			+'<input style="margin: 15px 10px 5px 10px;cursor: pointer" type="button" value="乾淨版(列印)"  onclick="print_detail(\'00\')"/>'
			+'<div id="qr00">'
			+'<div class="qr_img"></div>'
			+'</div>'
			
			//+'<div style="margin:15px 0px;border-top:1px #888888 solid"></div>'
			//+'<input style="margin: 15px 10px 5px 10px;cursor: pointer" type="button" value="普通版(列印)"  onclick="print_detail(\'01\')"/>'
			//+'<div>請使用Chrome瀏覽器列印，並確認有開啟「背景圖形」(適合A4或A5直式)</div>'
			//+'<div id="qr01">'
			//+'<div class="qr02_css1" style="height:0;padding:0 0 141% 0;;-moz-background-size: cover;-webkit-background-size: cover;-o-background-size: cover;background-size: cover;">'
			//+'<div class="qr_img" width="80%" style="padding: 20% 15% 10% 15%;"></div>'
			//+'<div style="bottom:0;text-align:center;color:#FFFFFF;font-size:50px">DISCOCO</div>'
			//+'</div>'
			//+'</div>'
		);
		
		setTimeout(function(){
			if(shpnme){
				$(".shpnme").html(shpnme);
			}
			shpnme_resize();
			if($("#a_qrcode").html()!=''){$("#mark").hide();}
		}, 500);
		
		$( window ).resize(function() {
			shpnme_resize();
		});
	}

});
function shpnme_resize(){
	w = $("#qr003").width()/370;
	$( "#qr003 .shpnme" ).css({'-moz-transform':'scale('+w+')','-webkit-transform':'scale('+w+')','-o-transform':'scale('+w+')','-ms-transform':'scale('+w+')','transform':'scale('+w+')'});
	w = $("#qr002").width()/270;
	$( "#qr002 .shpnme" ).css({'-moz-transform':'scale('+w+')','-webkit-transform':'scale('+w+')','-o-transform':'scale('+w+')','-ms-transform':'scale('+w+')','transform':'scale('+w+')'});
	w = $("#qr001").width()/290;
	$( "#qr001 .shpnme" ).css({'-moz-transform':'scale('+w+')','-webkit-transform':'scale('+w+')','-o-transform':'scale('+w+')','-ms-transform':'scale('+w+')','transform':'scale('+w+')'});
}
