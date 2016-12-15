$(function () {
    var $body = $('body');

    //開閉用ボタンをクリックでクラスの切替え
    $('#js__btn').on('click', function () {
        $body.toggleClass('open');
    });

    //開閉用ボタンをクリックでクラスの切替え
    $('.event__btn').on('click', function () {
        $body.toggleClass('open');
    });

    // //開閉用ボタンをクリックでクラスの切替え
    // $('.magazine__btn').on('click', function () {
    //     $body.toggleClass('open');
    // });

    //メニュー名以外の部分をクリックで閉じる
    $('.js__close').on('click', function () {
        $body.removeClass('open');
    });
});
