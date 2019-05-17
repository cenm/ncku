var ds=getUrlVars()["ds"];
$(document).ready(function () {
	if(ds){
		$("#mainmenu" ).hide();
		$("#login_ui" ).hide();
		
		$("#title_mainblk").html('民眾抽獎註冊頁');
		switch(ds){
		case 'ds_shanhua_mp' :
			$("#discoco_text").html('歡迎參加善化商圈行動支付抽獎活動，請利用FACEBOOK或GOOGLE帳號登入');
			changelisten();
			break;
		}
		
	}
});
function changelisten(){
	$(".btn_fb_login,.btn_gl_login").change(function(){
		if($(".btn_fb_login").attr("onclick")=='FBLogout()'||$(".btn_gl_login").attr("onclick")=='GOOGLELogout()'){
			reg_direct_open();
		}else{
			reg_direct_close();
		}
		
	});
}
function reg_direct_open(){
	$( "#register_user_detail_bk" ).load( "register_user_detail #register_user_body", function( response, status, xhr ) {
		if ( xhr.status == "404" ) {
			$( "#register_user_detail_bk" ).load( "register_user_detail.jsp #register_user_body");
		}
	});
}
function reg_direct_close(){
	$( "#register_user_detail_bk" ).html("");
}
