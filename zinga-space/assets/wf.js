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
        '<nav class="fnav" aria-label="フッターメニュー">' +
          '<div class="fgroup"><small>SERVICE</small><a class="fparent" href="service.html">事業内容</a>' +
            '<ul><li><a href="service-personal.html">個人向け</a></li><li><a href="service-business.html">法人向け</a></li><li><a href="service-business.html#oem">OEM</a></li></ul></div>' +
          '<div class="fgroup"><small>BRAND</small><a class="fparent" href="concept.html">ブランドコンセプト</a>' +
            '<ul><li><a href="concept-logo.html">ロゴの意味</a></li><li><a href="concept-message.html">代表の想い</a></li></ul></div>' +
          '<div class="fgroup"><small>COMPANY</small><a class="fparent" href="about.html">運営について</a>' +
            '<a class="fparent" href="contact.html">お問い合わせ</a>' +
            '<a class="fparent" href="' + DIAGNOSIS_URL + '" target="_blank" rel="noopener">香り診断 ↗</a></div>' +
        '</nav>' +
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

  // 日本語を「文節」で区切り、単語の途中で改行しないようにする
  //  - 文節の切れ目にだけ改行候補（<wbr>）を入れ、ほかは word-break: keep-all で改行させない
  //  - 助詞・送りがな（ひらがな）は前の語にくっつけ、カタカナの連続や数字・記号もまとめる
  function phraseWrap(root) {
    if (!window.Intl || !Intl.Segmenter) return;
    var seg = new Intl.Segmenter('ja', { granularity: 'word' });
    var HIRA = /^[ぁ-ゟ]+$/, KATA = /^[゠-ヺー-ヿｰ]+$/;
    var NO_START = /^[、。，．・：；？！」』）)\]】〕〉》…‥ー〜～％%、,.]/;
    var NO_END = /[「『（(\[【〔〈《¥￥#＃]$/;
    var PUNCT_END = /[、。，．！？!?」』）)\s]$/;
    function phrases(text) {
      var out = [], cur = '', prev = '';
      for (var it = seg.segment(text)[Symbol.iterator](), r = it.next(); !r.done; r = it.next()) {
        var s = r.value.segment;
        var join = cur !== '' && !PUNCT_END.test(cur) && (
          NO_START.test(s) || NO_END.test(cur) ||
          (HIRA.test(s) && s !== 'お' && s !== 'ご' && (!HIRA.test(prev) || HIRA.test(prev))) ||
          (KATA.test(s) && KATA.test(prev)) || ((prev === 'お' || prev === 'ご') && /^[\u4E00-\u9FFF]/.test(s)) || /^[\d,.]+$/.test(s) && /[¥￥\d,.]$/.test(cur));
        if (cur !== '' && !join) { out.push(cur); cur = ''; }
        cur += s; prev = s;
      }
      if (cur) out.push(cur);
      return out;
    }
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), nodes = [], n;
    while ((n = walker.nextNode())) {
      var tag = n.parentElement && n.parentElement.tagName;
      if (/^(SCRIPT|STYLE|OPTION|TEXTAREA)$/.test(tag) || !/[぀-ヿ一-鿿]/.test(n.data)) continue;
      nodes.push(n);
    }
    nodes.forEach(function (node) {
      var parts = phrases(node.data);
      if (parts.length < 2) return;
      var frag = document.createDocumentFragment();
      parts.forEach(function (p, i) {
        if (i) frag.appendChild(document.createElement('wbr'));
        frag.appendChild(document.createTextNode(p));
      });
      node.parentNode.replaceChild(frag, node);
    });
  }
  phraseWrap(document.body);

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
