var ds=getUrlVars()["ds"];//
var sds;
var endurl;
switch(ds){
case 'ds_all_mp' :
	sds = '001';
	endurl = 'http://discoco.tw/discoco/o_act.action?a_rnd=ajzvNrlRxktsAuiTmkv6ukctimrGpzXFMZrwHj1boL1N94WhENSdTFklbhYF';
	break;
case 'ds_shanhua_mp' :
	sds = '002';
	endurl = 'http://discoco.tw/discoco/o_act.action?a_rnd=Pfqjazmm7h4P59oXOGInwHtVIuR_nTnOsc3kAMZlv6t2NQQwvu9_H3J2IDhr';
	break;
}

$(document).ready(function () {
	if(ds){
		$("#mainmenu" ).hide();
		$("#login_ui" ).hide();
		
		switch(ds){
		case 'ds_all_mp' :
			$(".title_mainblk").html('<div style="text-align: center;padding-top: 28px;">「臺南購便利，行動支付So Easy」抽獎註冊頁</div>');
			$("#discoco_text").html('<div style="text-align: center;padding-top: 15px;padding-bottom: 10px;line-height:1.5em">歡迎參加「臺南購便利，行動支付So Easy」抽獎活動，請利用GOOGLE帳號登入，並填寫聯絡資料，即可擁有抽獎資格</div>');
			$("#googleform").html('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeRVhGlFuAcOjQ1fuRqMsLhj6Q2N_y7C1nCBOc_2BvyYSiRxg/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0" style="max-width: 100%;">載入中…</iframe>');
			$("#pls1").html('<a href="https://docs.google.com/forms/d/e/1FAIpQLSeRVhGlFuAcOjQ1fuRqMsLhj6Q2N_y7C1nCBOc_2BvyYSiRxg/viewform?usp=sf_link">遇到註冊障礙?</a>');
			$("#submit").val('我要中大獎');
			break;
		case 'ds_shanhua_mp' :
			$(".title_mainblk").html('<div style="text-align: center;padding-top: 28px;">「善化年中享樂購，商圈送你出國趣」抽獎註冊頁</div>');
			$("#discoco_text").html('<div style="text-align: center;padding-top: 15px;padding-bottom: 10px;line-height:1.5em">歡迎參加「善化年中享樂購，商圈送你出國趣」抽獎活動，請利用GOOGLE帳號登入，並填寫聯絡資料，即可擁有抽獎資格</div>');
			$("#googleform").html('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScuTxdz9TaeY28iSCPWwgRY2T3hGNS1M7bpri2XnSfduQhVYw/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0" style="max-width: 100%;">載入中…</iframe>');
			$("#pls1").html('<a href="https://docs.google.com/forms/d/e/1FAIpQLScuTxdz9TaeY28iSCPWwgRY2T3hGNS1M7bpri2XnSfduQhVYw/viewform?usp=sf_link">遇到註冊障礙?</a>');
			$("#submit").val('我要中大獎');
			break;
		default:
			window.open('./',"_parent").focus();
		}
		
	}
});

