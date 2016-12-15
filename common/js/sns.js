/* DOMの読み込み完了後に処理 */
// if(window.addEventListener) {
// 	window.addEventListener( "load" , shareButtonReadSyncer, false );
// }else{
// 	window.attachEvent( "onload", shareButtonReadSyncer );
// }
//
// /* シェアボタンを読み込む関数 */
// function shareButtonReadSyncer(){

// Facebook：いいねボタン用
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.5&appId=630027640344821";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Twitter：ツイートボタン用 (オリジナルボタンを使用するので、コメントアウトして無効化)
// !function(d,s,id){
//     var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
//     if(!d.getElementById(id)){js=d.createElement(s);
//         js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
//         fjs.parentNode.insertBefore(js,fjs);
//     }
// }(document, 'script', 'twitter-wjs');
