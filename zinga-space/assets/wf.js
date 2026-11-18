/* 共通ヘッダー・フッター（ワイヤーフレーム用）
   - メニューに「トップ」は入れない（ロゴでトップへ戻る）
   - 香り診断はメニュー内にアクセントとして配置（外部ページ）
   - ページ遷移時の「spAce」表示（ローディング演出）は入れない */
(function () {
  // 香り診断ツール（外部・別プロジェクト）のURL。決まったら差し替える
  var DIAGNOSIS_URL = '#diagnosis-external';

  var page = document.body.getAttribute('data-page') || '';
  function cur(p) { return page === p ? ' aria-current="page"' : ''; }
  var diag = '<a class="diag" href="' + DIAGNOSIS_URL + '" target="_blank" rel="noopener">香り診断 ↗</a>';

  var header =
    '<header class="site-header"><div class="container bar">' +
      '<a class="logo" href="index.html" aria-label="ZINGA spAce トップへ"><span class="mark">LOGO</span>ZINGA spAce</a>' +
      '<nav class="gnav" aria-label="メインメニュー"><ul>' +
        '<li class="has-sub"><a href="service.html"' + cur('service') + '>事業内容</a>' +
          '<div class="sub"><a href="service-personal.html">個人向け</a><a href="service-business.html">法人向け</a></div></li>' +
        '<li class="has-sub"><a href="concept.html"' + cur('concept') + '>ブランドコンセプト</a>' +
          '<div class="sub"><a href="concept-logo.html">ロゴの意味</a><a href="concept-message.html">代表の想い</a></div></li>' +
        '<li><a href="about.html"' + cur('about') + '>運営について</a></li>' +
        '<li>' + diag + '</li>' +
        '<li><a class="btn-sm" href="contact.html"' + cur('contact') + '>お問い合わせ</a></li>' +
      '</ul></nav>' +
      '<button class="menu-btn" type="button" aria-label="メニューを開く" aria-expanded="false"><span></span></button>' +
    '</div>' +
    '<div class="drawer"><ul>' +
      '<li><a href="service.html">事業内容</a></li>' +
      '<li class="child"><a href="service-personal.html">└ 個人向け</a></li>' +
      '<li class="child"><a href="service-business.html">└ 法人向け</a></li>' +
      '<li><a href="concept.html">ブランドコンセプト</a></li>' +
      '<li class="child"><a href="concept-logo.html">└ ロゴの意味</a></li>' +
      '<li class="child"><a href="concept-message.html">└ 代表の想い</a></li>' +
      '<li><a href="about.html">運営について</a></li>' +
      '<li class="drawer-btns"><a href="contact.html">お問い合わせ</a>' + diag + '</li>' +
    '</ul></div></header>';

  var footer =
    '<section class="cta2"><div class="container wrap">' +
      '<div><span class="note">共通 問い合わせCTA</span>' +
        '<p class="en">CONTACT</p>' +
        '<p style="margin-top:12px">香りのご相談はお気軽に。<br>個人・店舗・法人、どなたでもお問い合わせいただけます。</p></div>' +
      '<div class="btns">' +
        '<a class="btn fill arrow" href="contact.html">お問い合わせフォーム</a>' +
        '<a class="btn arrow" href="service.html">サービスを見る</a>' +
      '</div>' +
    '</div></section>' +
    '<footer class="site-footer"><div class="container">' +
      '<div class="fcols">' +
        '<div><a class="logo" href="index.html"><span class="mark">LOGO</span>ZINGA spAce</a>' +
          '<p style="margin-top:12px;color:var(--muted)">香りで心を動かし、記憶に残る体験を届ける。</p>' +
          '<p style="margin-top:8px;color:var(--muted)">所在地・連絡先などが入ります</p>' +
          '<div class="sns" aria-label="SNS"><span>IG</span><span>SNS</span></div></div>' +
        '<div><h4>SERVICE</h4><ul class="flist">' +
          '<li><a href="service.html">事業内容</a></li><li><a href="service-personal.html">個人向け</a></li>' +
          '<li><a href="service-business.html">法人向け</a></li><li><a href="service-business.html#oem">OEM</a></li></ul></div>' +
        '<div><h4>BRAND</h4><ul class="flist">' +
          '<li><a href="concept.html">ブランドコンセプト</a></li><li><a href="concept-logo.html">ロゴの意味</a></li>' +
          '<li><a href="concept-message.html">代表の想い</a></li></ul></div>' +
        '<div><h4>COMPANY</h4><ul class="flist">' +
          '<li><a href="about.html">運営について</a></li><li><a href="contact.html">お問い合わせ</a></li>' +
          '<li><a href="' + DIAGNOSIS_URL + '" target="_blank" rel="noopener">香り診断 ↗</a></li></ul></div>' +
      '</div>' +
      '<div class="legal"><nav>' +
        '<a href="tokushoho.html">特定商取引法に基づく表記</a>' +
        '<a href="privacy.html">プライバシーポリシー</a>' +
      '</nav><small>© ZINGA spAce</small></div>' +
    '</div></footer>';

  var h = document.getElementById('wf-header');
  var f = document.getElementById('wf-footer');
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;

  var btn = document.querySelector('.menu-btn');
  var drawer = document.querySelector('.drawer');
  if (btn && drawer) {
    btn.addEventListener('click', function () {
      var open = drawer.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    });
  }
})();
