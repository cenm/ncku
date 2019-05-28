var ds=getUrlVars()["ds"];
var sds;
switch(ds){
case 'ds_shanhua_mp' :
	sds = '1';
	break;
}

$(document).ready(function () {
	if(ds){
		$("#mainmenu" ).hide();
		$("#login_ui" ).hide();
		$(".title_mainblk").html('<div style="text-align: center;padding-top: 28px;">民眾抽獎註冊頁</div>');
		switch(ds){
		case 'ds_shanhua_mp' :
			$("#discoco_text").html('<div style="text-align: center;padding-top: 28px;">歡迎參加善化商圈行動支付抽獎活動，請利用FACEBOOK或GOOGLE帳號登入，並填寫聯絡資料，即可擁有抽獎資格</div>');
			break;
		default:
			window.open('./',"_parent").focus();
		}
		
	}
});

