
$(document).ready(function () {
	var pagename = window.location.pathname.split('.jsp')[0].split('?')[0].split('/').pop();
	//console.log(pagename);
	$('#register_shop_body').html("<div style=\"margin-bottom:20px;color:#CC0000;font-size:20px\">目前報名已截止，錄取名單公布於最新消息</div>");
	setTimeout(function(){
		$('#e_page').html("<div class=\"ic-title\"><a i18n='e_page'>EF stores</a></div><div class=\"btnBank-coBtn\"></div>");
	},1000);
	setTimeout(function(){
		$('#e_page').html("<div class=\"ic-title\"><a i18n='e_page'>EF stores</a></div><div class=\"btnBank-coBtn\"></div>");
	},3000);
	
	if(pagename=="dialogue"){
		setTimeout(function(){
			addr_add();
		},1000);
	}
});
function addr_add(){
	$("tr:first").html(
			'<th width=\'40%\'>店家名稱</th>'+
			'<th width=\'20%\'>年度</th>'+
			'<th width=\'20%\'>類型</th>'+
			'<th width=\'20%\'>地圖</th>'
			);
	
	$(".sname_td").each(function() {
		  $(this).parent().append('<td><div class="map_addr" style="display: inline-flex;vertical-align: middle;"><img src="./images/google-maps.svg" width="30px"></div></td>')
	});
	
	$( ".map_addr" ).click(function( event ) {
		event.stopPropagation();
		sdname_tp = $(event.target).parent().parent().parent().find('.sname_td').text();
		open_map_addr(sdname_tp);
	});
}
function open_map_addr(snme_tp){
	h = 0;
	switch (snme_tp) { 
		case '觀芯園企業社~芯園':
			saddr = snme_tp;
			break;
		case '饌前實業股份有限公司~禾記嫩骨飯': 
			saddr = snme_tp;
			break;
		default:
			h = 0;
			saddr = snme_tp;
	}
	if(h==1){
		window.open("https://www.google.com/maps/place/"+saddr,"_blank").focus();
	}else{
		window.open("https://www.google.com/maps/search/"+saddr,"_blank").focus();
	}
	
}
