var ds=getUrlVars()["ds"];//
var sds;
switch(ds){
case 'ds_all_mp' :
	sds = '001';
	break;
case 'ds_shanhua_mp' :
	sds = '002';
	break;
}

$(document).ready(function () {
	if(ds){
		$("#mainmenu" ).hide();
		$("#login_ui" ).hide();
		$(".title_mainblk").html('<div style="text-align: center;padding-top: 28px;">民眾抽獎註冊頁</div>');
		switch(ds){
		case 'ds_all_mp' :
			$("#discoco_text").html('<div style="text-align: center;padding-top: 28px;">歡迎參加「臺南購便利 行動支付So Easy」抽獎活動，請利用FACEBOOK或GOOGLE帳號登入，並填寫聯絡資料，即可擁有抽獎資格</div>');
			$("#submit").val('我要中大獎');
			break;
		case 'ds_shanhua_mp' :
			$("#discoco_text").html('<div style="text-align: center;padding-top: 28px;">歡迎參加「善化年中享樂購 商圈送你出國趣」抽獎活動，請利用FACEBOOK或GOOGLE帳號登入，並填寫聯絡資料，即可擁有抽獎資格</div>');
			$("#submit").val('我要中大獎');
			break;
		default:
			window.open('./',"_parent").focus();
		}
		
	}
});

