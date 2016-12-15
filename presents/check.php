<?php require_once('confirm.php');//confim.phpへのパス。無いと動かない。?>
<!DOCTYPE html>
<!--[if IE 8]> <html class="lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en"> <!--<![endif]-->
<head>
<meta name="viewport" content="width=480">
<title>アンケート＆プレゼント | 3x3 WEB MAGAZINE</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="月刊誌「3x3 MAGAZINE」絶賛発行中！愛知からバスケットボール3x3(スリーバイスリー)を伝えていきます。紙面では書ききれない情報を3x3 WEB MAGAZINEにて掲載中！">
<meta name="keywords" content="3x3MAGAZINE,3x3マガジン,3x3,3on3,MAGAZINE,マガジン,バスケ,basketball,ストバス,フリースタイル">
<!-- content属性にページの著者情報を記述 -->
<link rel="stylesheet" type="text/css" href="../common/css/fillter.css">
<link rel="stylesheet" type="text/css" href="../common/css/remodal/jquery.remodal.css">
<link rel="stylesheet" type="text/css" href="./common/css/zeromail.css">
<link rel="stylesheet" type="text/css" href="../common/css/present.css">
<!-- <link rel="stylesheet" type="text/css" href="./common/js/tinybox/style.css" > -->
<!-- IE8以下用に2つのスクリプトを記述
     html5shiv.js: IE8以下にHTML5の要素を認識するようにさせる
     respond.js: IE8以下にMedia Queriesの代替え機能を提供 -->
<!--[if lt IE 9]>
<script src="//cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
<script src="./common/js/css3-mediaqueries.js"></script>
<![endif]-->
<link rel="shortcut icon" href="">
<!-- コメントアウトしてあるコードは、iOS/Android用のアイコン指定 -->
<!--
<meta name="mobile-web-app-capable" content="yes">
<link rel="icon" sizes="196x196" href="">
<link rel="apple-touch-icon" sizes="152x152" href="">
-->
<!-- スクリプトでブロッキングを起こさないものはここに記述
     可能であれば「async（文書の読み込みが完了した時点でスクリプトを実行）」を使用
     Example: <script src="" async></script> -->
</head>
<body id="page">
	<div id="wrapper">
		<header>
			<hgroup>
				<h1><a href="../index.html"><img src="../common/image/logo.svg" width="160" height="60" alt="3x3 MAGAZINE"></a></h1>
				<h2>愛知から<br>バスケットボール3x3を伝える</h2>
			</hgroup>
			<nav class="menu-btn" id="js__btn">
				<!-- <img src="../common/image/head_navi.png" width="60" height="60" alt="3x3 MAGAZINE"> -->
			</nav>

			<!-- モーダルメニュー -->
			<nav class="menu" id="js__nav">
			    <ul>
			        <li><a href="#">コラム</a></li>
			        <li><a href="#">設置店舗一覧</a></li>
			    </ul>
			</nav>

		</header>

		<!-- パンくず -->
		<div id="breadcrumb">
			<ul>
				<li><a href="../index.html">HOME</a></li>
				<li>3x3 MAGAZINE アンケート＆プレゼント[ 確認画面 ]</li>
			</ul>
		</div>

		<!-- メインコンテンツ-->
		<div id="contents" class="clearfix">
			<div id="pageHeader">
				<hgroup class="webPresents">
					<h1>アンケート＆プレゼント</h1>
				</hgroup>
			</div>

			<div id="gaiyou">
				<form action="zeromail.php" method="post" class="zeromail">
					<p class="message"><?php Message();//メッセージ?></p>
					<fieldset>
						<legend>Contact details</legend>
						<table summary="送信内容確認" id="confirm">
						<?php ConfDisp();//確認表示。行しか出ないのでtableタグ内に書く?>
						</table>
						<div class="button">
						<?php Button();//ボタン表示。form内に置くこと。 ?>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
		<article id="relation">
			<a href="../setting/index.html">
				<section id="installationStore">
					<h1>3x3 MAGAZINE 設置店舗</h1>
					<p>設置店舗一覧</p>
				</section>
			</a>
		</article>
		<footer>
			Copyright (C) 2015 3x3 MAGAZINE All Rights Resurved.
		</footer>
	</div>
	<!-- スクリプトでブロッキングを起こすものはここに記述
	ブロッキングを起こす原因としては、CSSのセレクタ操作（IE）、負荷の高いDOM操作、多数のスクリプトなど -->
	<!-- SCRIPTS -->
	<!-- jQuery library (served from Google) -->
	<!--<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>-->
	<script type="text/javascript" src="../common/js/jquery-1.11.2.min.js"></script>
	<!-- <script type="text/javascript" src="../common/js/main.js"></script> -->
	<!-- <script type="text/javascript" src="../common/js/retina.js"></script> -->
	<!-- <script type="text/javascript" src="../common/js/remodal/jquery.remodal.min.js"></script> -->
	<!-- <script type="text/javascript" src="../common/js/remodal/jquery.remodal.js"></script> -->
	<!-- <script type="text/javascript" src="../common/js/ajaxzip3.js"></script> -->
	<!-- <script type="text/javascript" src="./common/js/tinybox/tinybox.js"></script> -->
</body>
</html>
