const page = document.body.dataset.page || "home";

document.getElementById("site-header-mount").innerHTML = `
  <header class="site-header" id="site-header">
    <div class="header-inner container-wide">
      <a class="company-brand" href="index.html" aria-label="Taragodo company l.t.d ホーム" data-i18n-aria="companyHome"><span class="company-wordmark"><span class="company-title">Taragodo</span><span class="company-name-suffix">company l.t.d</span></span></a>
      <nav class="desktop-nav" aria-label="メインナビゲーション" data-i18n-aria="mainNavigation">
        <a href="index.html" ${page === "home" ? 'aria-current="page"' : ""} data-i18n="navHome">ホーム</a>
        <a href="about.html" ${page === "about" ? 'aria-current="page"' : ""} data-i18n="navAbout">私たちについて</a>
        <a href="stores.html" ${page === "stores" ? 'aria-current="page"' : ""} data-i18n="navStore">店舗・アクセス</a>
        <a href="reservation.html" ${page === "reservation" ? 'aria-current="page"' : ""} data-i18n="navReservePlain">ご予約</a>
      </nav>
      <div class="header-actions"><button class="language-switch" type="button" id="language-switch" aria-label="英語に切り替える"><svg class="language-globe" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><ellipse cx="12" cy="12" rx="4" ry="9"></ellipse><path d="M3 12h18"></path></svg><span class="language-option language-ja is-active">JP</span><span class="language-divider" aria-hidden="true">/</span><span class="language-option language-en">EN</span></button><button class="menu-toggle" type="button" id="menu-toggle" aria-label="メニューを開く" data-i18n-aria="openMenu" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button></div>
    </div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="モバイルナビゲーション" data-i18n-aria="mobileNavigation" hidden><a href="index.html" ${page === "home" ? 'aria-current="page"' : ""} data-i18n="navHome">ホーム</a><a href="about.html" ${page === "about" ? 'aria-current="page"' : ""} data-i18n="navAbout">私たちについて</a><a href="stores.html" ${page === "stores" ? 'aria-current="page"' : ""} data-i18n="navStore">店舗・アクセス</a><a href="reservation.html" ${page === "reservation" ? 'aria-current="page"' : ""} data-i18n="navReservePlain">ご予約</a></nav>
  </header>`;

document.getElementById("site-footer-mount").innerHTML = `
  <footer class="site-footer"><div class="container footer-grid">
    <div class="footer-brand"><a href="index.html"><span class="company-wordmark"><span class="company-title">Taragodo</span><span class="company-name-suffix">company l.t.d</span></span></a><p data-i18n="footerStatement">信頼と革新、品質へのこだわりを大切に。</p></div>
    <div><h2 data-i18n="contactLabel">お問い合わせ</h2><p><span data-i18n="addressFull">〒220-0042 神奈川県横浜市西区戸部町7-218 Haneishi Apato</span></p><a href="tel:0453164145">045-316-4145</a><a class="footer-email" href="mailto:gairetars13@gmail.com">gairetars13@gmail.com</a></div>
    <div class="footer-nav"><h2 data-i18n="navigationLabel">ナビゲーション</h2><a href="index.html" data-i18n="navHome">ホーム</a><a href="about.html" data-i18n="navAbout">私たちについて</a><a href="stores.html" data-i18n="navStore">店舗・アクセス</a><a href="reservation.html" data-i18n="navReservePlain">ご予約</a></div>
  </div><div class="container footer-bottom"><span>© <span id="year">2026</span> <span data-i18n="companyName">Taragodo company l.t.d</span> <span data-i18n="rightsReserved">無断転載を禁じます。</span></span><a href="#main-content" data-i18n="footerBack">ページ上部へ ↑</a></div></footer>`;

const en = {
  "navHome": "Home",
  "navAbout": "About us",
  "navStore": "Store & access",
  "navReservePlain": "Reservations",
  "companyName": "Taragodo company l.t.d",
  "companyHome": "Taragodo company l.t.d home",
  "footerStatement": "We value trust, integrity, and people.",
  "heroLine1": "A taste of spice,",
  "heroLine2": "a warm welcome in Yokohama.",
  "heroCopy": "Welcome to DEEP JYOTI.<br class=\"desktop-break\">Indian and Asian dining in the heart of Tobe-cho.",
  "heroReserve": "Reserve a table",
  "heroAccess": "Store & access",
  "heroImageAlt": "DEEP JYOTI storefront in Tobe-cho, Yokohama",
  "aboutTitle": "<span class=\"about-heading-line\">Built on trust,</span><span class=\"about-heading-line\">centered on people.</span>",
  "aboutBody": "<span class=\"company-name-inline\">Taragodo company l.t.d</span> values integrity, teamwork, and continuous improvement. At DEEP JYOTI in Tobe-cho, Yokohama, enjoy Indian and Asian cuisine in a welcoming dining room.",
  "aboutLink": "About our company",
  "diningImageAlt": "Warm DEEP JYOTI dining room with wooden tables",
  "homeStoreInfoLabel": "STORE INFORMATION",
  "shopName": "DEEP JYOTI",
  "homeQuality1Title": "Indian & Asian flavors",
  "homeQuality1Text": "Enjoy curry, naan, and dishes filled with the fragrance of spices.",
  "homeQuality2Title": "A warm and welcoming dining room",
  "homeQuality2Text": "Orange walls and wooden tables create a comfortable place to unwind.",
  "homeQuality3Title": "Enjoy at the restaurant or at home",
  "homeQuality3Text": "Dine in or order through our delivery partners.",
  "snsTitle": "Stay close to DEEP JYOTI.",
  "snsCopy": "Connect with DEEP JYOTI on LINE.",
  "lineFollow": "Connect on LINE",
  "homeReserveTitle": "Reservations & inquiries",
  "homeReserveCopy": "Find reservation methods and delivery services here.",
  "reservePage": "Reservations",
  "aboutPageTitle": "About us",
  "repRole": "<span class=\"company-name-inline\">Taragodo company l.t.d</span> / Owner",
  "representativeName": "Tara Gaire",
  "representativeAlt": "Tara Gaire, owner of Taragodo company l.t.d",
  "ceoP1": "Our vision is to build a trusted, innovative, and people-focused organization. We value integrity, teamwork, continuous improvement, and customer satisfaction, striving to create sustainable growth while making a positive impact on society.",
  "valuesTitle": "Our values",
  "value1Title": "Integrity & trust",
  "value1Text": "We build trust through integrity in everything we do.",
  "value2Title": "Teamwork & improvement",
  "value2Text": "We work together and value continuous improvement.",
  "value3Title": "Customer satisfaction",
  "value3Text": "We value customer satisfaction, sustainable growth, and a positive impact on society.",
  "companyTitle": "Company overview",
  "companyNameLabel": "Company",
  "companyRepLabel": "Owner",
  "companyRepValue": "Tara Gaire",
  "companyBusinessLabel": "Business",
  "companyBusiness": "Operating DEEP JYOTI, an Indian & Asian Dining & Bar.",
  "companyLocationLabel": "Restaurant address",
  "storesPageTitle": "Store & access",
  "storeCuisine": "Indian & Asian Dining & Bar",
  "addressLabel": "Address",
  "addressFull": "Haneishi Apato, 7-218 Tobe-cho, Nishi-ku, Yokohama, Kanagawa 220-0042",
  "hoursLabel": "Hours",
  "hoursValue": "Every day 11:00–15:00 / 17:00–23:00",
  "closedLabel": "Closed",
  "closedValue": "Open every day",
  "phoneLabel": "Phone",
  "galleryTitle": "Scenes from DEEP JYOTI",
  "slideOne": "A warm space to unwind.",
  "slideTwo": "Take your time around our wooden tables.",
  "slideThree": "Enjoy a meal at DEEP JYOTI.",
  "locationTitle": "Location",
  "openMap": "Open in Google Maps ↗",
  "mapTitle": "Map to DEEP JYOTI",
  "storeImageAlt": "Entrance to DEEP JYOTI",
  "bookingTitle": "Reservations & inquiries",
  "bookingIntro": "Explore Tabelog or call us for reservations. Restaurant details are also available on Rakuten Gurunavi.",
  "telephoneTitle": "Reserve by phone",
  "telephoneAction": "Call now",
  "deliveryTitle": "Delivery",
  "deliveryIntro": "Order DEEP JYOTI food through a delivery partner.",
  "orderAction": "Order now",
  "uberAlt": "Uber Eats",
  "demaeAlt": "Demae-can",
  "rocketAlt": "Rocket Now",
  "lineAlt": "LINE",
  "mainNavigation": "Main navigation",
  "mobileNavigation": "Mobile navigation",
  "openMenu": "Open menu",
  "closeMenu": "Close menu",
  "contactLabel": "CONTACT",
  "navigationLabel": "NAVIGATION",
  "previousPhoto": "Previous photo",
  "nextPhoto": "Next photo",
  "galleryPhotos": "Choose a gallery photo",
  "photoOne": "Photo 1",
  "photoTwo": "Photo 2",
  "photoThree": "Photo 3",
  "skipLink": "Skip to content",
  "footerBack": "BACK TO TOP ↑",
  "rightsReserved": "All rights reserved.",
  "companyEmailLabel": "Email",
  "interiorWideAlt": "DEEP JYOTI table seating and orange walls",
  "interiorDetailAlt": "DEEP JYOTI wooden tables and Indian flag",
  "gurunaviTitle": "Rakuten Gurunavi",
  "gurunaviAlt": "Rakuten Gurunavi",
  "listingExternal": "View restaurant information",
  "listingAction": "View store details",
  "ceoCatch": "Built on trust.<br>Inspired by people.",
  "ceoMessageLabel": "OUR VISION",
  "companyPhoneLabel": "Company phone",
  "tabelogTitle": "Tabelog",
  "tabelogAlt": "Tabelog",
  "tabelogDetails": "Menus & restaurant information",
  "tabelogAction": "Open Tabelog"
};

const ja = {
  "companyName": "Taragodo company l.t.d",
  "companyHome": "Taragodo company l.t.d ホーム",
  "footerStatement": "信頼と誠実さ、人とのつながりを大切に。",
  "heroLine1": "横浜・戸部町で、",
  "heroLine2": "スパイス香るひととき。",
  "heroCopy": "DEEP JYOTIへようこそ。<br class=\"desktop-break\">インド・アジアン料理を、あたたかな空間で。",
  "heroImageAlt": "横浜・戸部町のDEEP JYOTIの店舗外観",
  "aboutTitle": "<span class=\"about-heading-line\">信頼を大切に、</span><span class=\"about-heading-line\">人を想うおもてなし。</span>",
  "aboutBody": "<span class=\"ja-phrase\"><span class=\"company-name-inline\">Taragodo company l.t.d</span>は、</span><span class=\"ja-phrase\">誠実さ、</span><span class=\"ja-phrase\">チームワーク、</span><span class=\"ja-phrase\">継続的な</span><span class=\"ja-phrase\">改善を</span><span class=\"ja-phrase\">大切に</span><span class=\"ja-phrase\">しています。</span><span class=\"ja-phrase\">横浜・戸部町のDEEP JYOTIで、</span><span class=\"ja-phrase\">インド・アジアン料理と</span><span class=\"ja-phrase\">くつろぎの</span><span class=\"ja-phrase\">ひとときを</span><span class=\"ja-phrase\">お楽しみください。</span>",
  "diningImageAlt": "DEEP JYOTIの木のテーブルとあたたかな店内",
  "shopName": "DEEP JYOTI（ディープジョティ）",
  "homeQuality1Title": "インド・アジアン料理を身近に",
  "homeQuality1Text": "カレーやナンをはじめ、スパイスが香る料理をお楽しみください。",
  "homeQuality2Title": "あたたかな色に包まれる店内",
  "homeQuality2Text": "木のテーブルとオレンジ色の壁が迎える、くつろぎの空間です。",
  "homeQuality3Title": "お店でも、ご自宅でも",
  "homeQuality3Text": "店内でのお食事に加え、各種デリバリーサービスからもご注文いただけます。",
  "snsTitle": "DEEP JYOTIを、もっと身近に。",
  "snsCopy": "DEEP JYOTIのLINEはこちらから。",
  "repRole": "<span class=\"company-name-inline\">Taragodo company l.t.d</span> / 代表者",
  "representativeName": "Tara Gaire",
  "representativeAlt": "Taragodo company l.t.dの代表者 Tara Gaire",
  "ceoP1": "私たちのビジョンは、信頼され、革新的で、人を大切にする組織を築くことです。誠実さ、チームワーク、継続的な改善、そしてお客様の満足を重視し、社会に良い影響をもたらしながら、持続可能な成長を目指しています。",
  "value1Title": "誠実さと信頼",
  "value1Text": "誠実な姿勢で、お客様との信頼を築きます。",
  "value2Title": "チームワークと改善",
  "value2Text": "仲間と協力し、日々の改善を大切にします。",
  "value3Title": "お客様の満足",
  "value3Text": "お客様の満足を重視し、持続可能な成長と社会への貢献を目指します。",
  "companyRepValue": "Tara Gaire",
  "companyBusiness": "DEEP JYOTIの運営。インド・アジアンダイニング＆バー。",
  "companyEmailLabel": "メールアドレス",
  "storeCuisine": "インド・アジアンダイニング＆バー",
  "addressFull": "〒220-0042 神奈川県横浜市西区戸部町7-218 Haneishi Apato",
  "hoursValue": "毎日 11:00–15:00 / 17:00–23:00",
  "closedValue": "なし",
  "galleryTitle": "DEEP JYOTIの風景",
  "slideOne": "あたたかな色に包まれる、くつろぎの空間。",
  "slideTwo": "木のテーブルで、ゆっくりお食事を。",
  "slideThree": "DEEP JYOTIで、心地よいひとときを。",
  "mapTitle": "DEEP JYOTIの所在地の地図",
  "storeImageAlt": "DEEP JYOTIの店舗入口",
  "interiorWideAlt": "DEEP JYOTIのテーブル席とオレンジ色の壁",
  "interiorDetailAlt": "DEEP JYOTIの木のテーブルとインド国旗",
  "bookingIntro": "食べログの店舗ページ、またはお電話からどうぞ。店舗情報は楽天ぐるなびでもご確認いただけます。",
  "gurunaviTitle": "楽天ぐるなび",
  "gurunaviAlt": "楽天ぐるなび",
  "listingExternal": "店舗情報をご覧いただけます",
  "listingAction": "店舗情報を見る",
  "deliveryIntro": "DEEP JYOTIのお料理を、各サービスからご注文いただけます。",
  "ceoCatch": "信頼を礎に。<br>人への想いを力に。",
  "ceoMessageLabel": "私たちのビジョン",
  "companyPhoneLabel": "会社電話",
  "tabelogTitle": "食べログ",
  "tabelogAlt": "食べログ",
  "tabelogDetails": "メニュー・店舗情報をご覧いただけます",
  "tabelogAction": "食べログを見る"
};
document.querySelectorAll("[data-i18n]").forEach(element => {
  if (ja[element.dataset.i18n] !== undefined) element.innerHTML = ja[element.dataset.i18n];
});
document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => {
  const key = element.dataset.i18nAria || element.dataset.i18nAlt || element.dataset.i18nTitle;
  const attribute = element.dataset.i18nAria ? "aria-label" : element.dataset.i18nAlt ? "alt" : "title";
  if (ja[key] !== undefined) element.setAttribute(attribute, ja[key]);
});
const originalText = new Map();
document.querySelectorAll("[data-i18n]").forEach(element => originalText.set(element, element.innerHTML));
const originalAttributes = new Map();
document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => originalAttributes.set(element, { aria: element.getAttribute("aria-label"), alt: element.getAttribute("alt"), title: element.getAttribute("title") }));
const languageButton = document.getElementById("language-switch");
let language = "ja";
try { language = localStorage.getItem("deepJyotiLanguage") === "en" ? "en" : "ja"; } catch {}
function renderLanguage(nextLanguage){
  language = nextLanguage;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(element => { element.innerHTML = language === "ja" ? originalText.get(element) : en[element.dataset.i18n] ?? originalText.get(element); });
  document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => {
    const key = element.dataset.i18nAria || element.dataset.i18nAlt || element.dataset.i18nTitle;
    const attribute = element.dataset.i18nAria ? "aria-label" : element.dataset.i18nAlt ? "alt" : "title";
    const original = originalAttributes.get(element)?.[element.dataset.i18nAria ? "aria" : element.dataset.i18nAlt ? "alt" : "title"];
    element.setAttribute(attribute, language === "ja" ? original : en[key] ?? original);
  });
  languageButton.classList.toggle("is-en", language === "en");
  languageButton.querySelector(".language-ja").classList.toggle("is-active", language === "ja");
  languageButton.querySelector(".language-en").classList.toggle("is-active", language === "en");
  languageButton.setAttribute("aria-label", language === "ja" ? "英語に切り替える" : "Switch to Japanese");
  const descriptions = {"ja": {"home": "横浜・戸部町のDEEP JYOTI（ディープジョティ）。インド・アジアン料理、店舗情報、ご予約、デリバリーをご案内します。", "about": "Taragodo company l.t.dと代表者Tara Gaireのメッセージ。DEEP JYOTIを運営しています。", "stores": "DEEP JYOTIの住所、営業時間、電話番号、店内写真とアクセスをご案内します。", "reservation": "DEEP JYOTIの電話予約と店舗情報、Uber Eats・出前館・Rocket Nowのデリバリーサービス。"}, "en": {"home": "DEEP JYOTI Indian & Asian Dining & Bar in Tobe-cho, Yokohama, operated by Taragodo company l.t.d.", "about": "Meet Taragodo company l.t.d and owner Tara Gaire. Read our vision and values.", "stores": "Find the DEEP JYOTI address, opening hours, phone number, dining room photos, and map.", "reservation": "Call DEEP JYOTI for reservations, view Rakuten Gurunavi, or order with Uber Eats, Demae-can, and Rocket Now."}};
  document.querySelector('meta[name="description"]').content = descriptions[language][page];
  document.title = (language === "ja"
    ? {home:"ホーム",about:"私たちについて",stores:"店舗・アクセス",reservation:"ご予約"}
    : {home:"Home",about:"About us",stores:"Store & access",reservation:"Reservations"})[page] + " | " + "DEEP JYOTI";
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (menuToggle && mobileNav) menuToggle.setAttribute("aria-label", mobileNav.hidden ? (language === "ja" ? "メニューを開く" : "Open menu") : (language === "ja" ? "メニューを閉じる" : "Close menu"));
}

const header = document.getElementById("site-header");
const mobileNav = document.getElementById("mobile-nav");
const menuToggle = document.getElementById("menu-toggle");
renderLanguage(language);
languageButton.addEventListener("click", () => {
  const nextLanguage = language === "ja" ? "en" : "ja";
  try { localStorage.setItem("deepJyotiLanguage", nextLanguage); } catch {}
  renderLanguage(nextLanguage);
});
function updateHeader(){ header.classList.toggle("is-scrolled", window.scrollY > 24); }
updateHeader(); window.addEventListener("scroll",updateHeader,{passive:true});
menuToggle.addEventListener("click",()=>{ const opening=mobileNav.hidden; mobileNav.hidden=!opening; header.classList.toggle("menu-open",opening); menuToggle.setAttribute("aria-expanded",String(opening)); menuToggle.setAttribute("aria-label",opening?(language === "ja" ? "メニューを閉じる" : "Close menu"):(language === "ja" ? "メニューを開く" : "Open menu")); });
mobileNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{mobileNav.hidden=true;header.classList.remove("menu-open");menuToggle.setAttribute("aria-expanded","false");}));

const slides=[...document.querySelectorAll(".gallery-slide")];
if(slides.length){ const dots=[...document.querySelectorAll(".gallery-dots button")];let current=0;function showSlide(index){current=(index+slides.length)%slides.length;slides.forEach((slide,i)=>slide.classList.toggle("is-active",i===current));dots.forEach((dot,i)=>{dot.classList.toggle("is-active",i===current);if(i===current)dot.setAttribute("aria-current","true");else dot.removeAttribute("aria-current");});}document.querySelector(".gallery-prev").addEventListener("click",()=>showSlide(current-1));document.querySelector(".gallery-next").addEventListener("click",()=>showSlide(current+1));dots.forEach((dot,i)=>dot.addEventListener("click",()=>showSlide(i)));}

const reveals=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}})},{threshold:.08,rootMargin:"0px 0px 30px 0px"});reveals.forEach(element=>observer.observe(element));}else reveals.forEach(element=>element.classList.add("is-visible"));
document.getElementById("year").textContent=new Date().getFullYear();
