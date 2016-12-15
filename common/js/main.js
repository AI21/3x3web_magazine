$(function(){

	// メニュー表示
	modalMenu();

	// フォームのバリデーション・送受信
	formConfirm();

	// トップの戻る
	gotoTop();

	// 画像の読み込み遅延処理

	// 画像のロールーバー処理
	$('img').hover(function(){
		$(this).attr('src', $(this).attr('src').replace('_off', '_on'));
		// console.log($(this).attr('src'));
		// console.log($(this).attr('src').replace('_off', '_on'));
	}, function(){
		if (!$(this).hasClass('currentPage')) {
			$(this).attr('src', $(this).attr('src').replace('_on', '_off'));
		}
	});
	
	var $body = $('body');

    //開閉用ボタンをクリックでクラスの切替え
    $('#js__btn').on('click', function () {
        $body.toggleClass('open');
    });

    //メニュー名以外の部分をクリックで閉じる
    $('#js__nav').on('click', function () {
        $body.removeClass('open');
    });

	// $(function(){
	//     $('.button').click(function(){
	//         $(this).toggleClass('action');
	// 		$('.navigation-contents').toggleClass('open');
	// 		$('section').toggleClass('close');
	//     });
	// });
	//
	// var WindowHeight = $(window).height(); //WindowHeightは変数で任意の名前
	// $(function(){
	//   if(WindowHeight > 0){ //開いた画面が100px以上なら実行
	//     //class="section"の要素に高さを書き込む
	//     $('.section').css('height',WindowHeight+'px');
	//   }
	// });

});

function modalMenu () {

}
// モーダルウィンドウ処理
  // $(document).on("open", ".remodal", function () {
  //   console.log("open");
  // });
  //
  // $(document).on("opened", ".remodal", function () {
  //   console.log("opened");
  // });
  //
  // $(document).on("close", ".remodal", function (e) {
  //   console.log('close' + (e.reason ? ", reason: " + e.reason : ''));
  // });
  //
  // $(document).on("closed", ".remodal", function (e) {
  //   console.log('closed' + (e.reason ? ', reason: ' + e.reason : ''));
  // });
  //
  // $(document).on("confirm", ".remodal", function () {
  //   console.log("confirm");
  // });
  //
  // $(document).on("cancel", ".remodal", function () {
  //   console.log("cancel");
  // });

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
		// alert("AAA")
	}
}

function gotoTop() {
	$(".gotop").hide();
	// ↑ページトップボタンを非表示にする

	$(window).on("scroll", function() {

		if ($(this).scrollTop() > 500) {
			// ↑ スクロール位置が100よりも小さい場合に以下の処理をする
			$('.gotop').slideDown("fast");
			// ↑ (100より小さい時は)ページトップボタンをスライドダウン
		} else {
			$('.gotop').slideUp("fast");
			// ↑ それ以外の場合の場合はスライドアップする。
		}

		// フッター固定する

		scrollHeight = $(document).height()-60;
		// ドキュメントの高さ
		scrollPosition = $(window).height() + $(window).scrollTop();
		//　ウィンドウの高さ+スクロールした高さ→　現在のトップからの位置
		footHeight = $("footer").innerHeight();
		// フッターの高さ
		// console.log(scrollHeight);
		// console.log(scrollPosition);
		// console.log(footHeight);
		if ( scrollHeight - scrollPosition  <= footHeight ) {
			// 現在の下から位置が、フッターの高さの位置にはいったら
			//  ".gotop"のpositionをabsoluteに変更し、フッターの高さの位置にする
			$(".gotop").css({
				"position":"absolute",
				"margin-top":"44px",
				"height":"44px",
				"bottom": footHeight
			});
			// if ($(".gotop").exists()) {
			if ($(".gotop").size()) {
				$("#relation").css({
					"margin-bottom":"44px"
				});
			}
		} else {
			// それ以外の場合は元のcssスタイルを指定
			$(".gotop").css({
				"position":"fixed",
				"height":"60px",
				"bottom": "0px"
			});
		}
	});

	// トップへスムーススクロール
	$('.gotop span').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		// ページのトップへ 500 のスピードでスクロールする
		return false;
	});

}
