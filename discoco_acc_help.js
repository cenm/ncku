var ds=getUrlVars()["ds"];//
var sds;
var endurl;
switch(ds){
case 'ds_all_mp' :
	sds = '001';
	endurl = 'http://discoco.tw/discoco/o_act.action?a_rnd=j83ldBcHD_mIjXc3IDicr2nwl1UIqULa6vrdc5DiANplR3iQPKneqa41aa0o';
	break;
case 'ds_shanhua_mp' :
	sds = '002';
	endurl = 'http://discoco.tw/discoco/o_act.action?a_rnd=vOgwrzqX9EI6w05_2QYjAkcXWrNjSAyMJz5Ot4VLeEST0KvgEEEZlzRksaMu';
	break;
}

$(document).ready(function () {
	if(ds){
		$("#mainmenu" ).hide();
		$("#login_ui" ).hide();
		
		switch(ds){
		case 'ds_all_mp' :
			$(".title_mainblk").html('<div style="text-align: center;padding-top: 28px;">「臺南購便利 行動支付So Easy」抽獎註冊頁</div>');
			$("#discoco_text").html('<div style="text-align: center;padding-top: 28px;">歡迎參加「臺南購便利 行動支付So Easy」抽獎活動，請利用FACEBOOK或GOOGLE帳號登入，並填寫聯絡資料，即可擁有抽獎資格</div>');
			$("#submit").val('我要中大獎');
			break;
		case 'ds_shanhua_mp' :
			$(".title_mainblk").html('<div style="text-align: center;padding-top: 28px;">「善化年中享樂購 商圈送你出國趣」抽獎註冊頁</div>');
			$("#discoco_text").html('<div style="text-align: center;padding-top: 28px;">歡迎參加「善化年中享樂購 商圈送你出國趣」抽獎活動，請利用FACEBOOK或GOOGLE帳號登入，並填寫聯絡資料，即可擁有抽獎資格</div>');
			$("#submit").val('我要中大獎');
			break;
		default:
			window.open('./',"_parent").focus();
		}
		
	}
});

