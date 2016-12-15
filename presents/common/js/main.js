$(function(){

	// 画像のロールーバー処理
	$('img').hover(function(){
		$(this).attr('src', $(this).attr('src').replace('_off', '_on'));
		console.log($(this).attr('src'));
		console.log($(this).attr('src').replace('_off', '_on'));
	}, function(){
		if (!$(this).hasClass('currentPage')) {
			$(this).attr('src', $(this).attr('src').replace('_on', '_off'));
		}
	});

	// フォームのバリデーション・送受信
	formConfirm();
});

// モーダルウィンドウ処理
  $(document).on("open", ".remodal", function () {
    console.log("open");
  });

  $(document).on("opened", ".remodal", function () {
    console.log("opened");
  });

  $(document).on("close", ".remodal", function (e) {
    console.log('close' + (e.reason ? ", reason: " + e.reason : ''));
  });

  $(document).on("closed", ".remodal", function (e) {
    console.log('closed' + (e.reason ? ', reason: ' + e.reason : ''));
  });

  $(document).on("confirm", ".remodal", function () {
    console.log("confirm");
  });

  $(document).on("cancel", ".remodal", function () {
    console.log("cancel");
  });

//  You can open or close it like this:
//  $(function () {
//    var inst = $.remodal.lookup[$("[data-remodal-id=modal]"").data("remodal")];
//    inst.open();
//    inst.close();
//  });

  //  Or init in this way:
//   var inst = $("[data-remodal-id=modal2]").remodal();
  //  inst.open();

function formConfirm() {

	// $('input[name="car"]:radio' ).change( function()
	if ($("#carYes").is(':checked')) {
		alert("AAA")
	}
}
