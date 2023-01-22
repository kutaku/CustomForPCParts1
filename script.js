$(function () {

  // トップへ戻るボタン
  $('#top-btn').click(function () {
    $('html,body').animate({
      'scrollTop': 0
    }, 'slow');
  });

  // ヘッダー内の<a>タグをクリックしたときclickイベントを作成
  $('header a').click(function () {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop': position

    }, 500);
  });


});