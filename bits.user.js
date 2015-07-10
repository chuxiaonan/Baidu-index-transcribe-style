// ==UserScript==
// @name         Baidu Index Transcribe Style Script
// @namespace    https://github.com/chuxiaonan/Baidu-index-transcribe-style
// @version      0.1
// @description  Inverse Baidu Index's Style
// @author       Chu Xiaonan
// @match        https://www.baidu.com/*
// @match        http://www.baidu.com/*
// @exclude      https://www.baidu.com/s*
// @exclude      http://www.baidu.com/s*
// @updateURL    https://raw.githubusercontent.com/chuxiaonan/Baidu-index-transcribe-style/master/bits.user.js
// @grant        none
// ==/UserScript==

function add_css(str_css) {
    try { //firefox
        var style = document.createStyleSheet();
        style.cssText = str_css;
    }
    catch (e) { //chrome
        var style = document.createElement("style");
        style.type = "text/css";
        style.textContent = str_css;
        document.getElementsByTagName("head")[0].appendChild(style);
    }
}

window.onload = function() {
    var s1 = '.s-skin-hasbg .s-nplus .s-ncf-name .s-ncf-name-link, .s-skin-hasbg .s-nplus .s-nav-name em, .s-skin-hasbg .s-btn-backto-nused span, .s-skin-hasbg .s-nori .s-nori-nav em, .s-skin-hasbg .s-nav-edit-addform .addform-inner-cbx-container a, .s-skin-hasbg .s-nav-edit-addform .addform-add-btn {color:#ffffff}';
    var s2 = '#s_content_1 .s-nall-tabs a {color:#ffffff}';
    var s3 = '.s-nav-opts .s-nav-opt {color:#ffffff}';
    var s4 = '.s-skin-hasbg .s-nadd .s-nadd-recommend .s-nadd-dir .s-dir-title, .s-skin-hasbg .s-nadd .s-nadd-recommend .s-nadd-dir .s-nadd-nav, .s-skin-hasbg .s-nform-plus .s-select-input-mask {color:#ffffff}';
    var s5 = '.s-skin-hasbg .s-nadd .s-nadd-form .cite-name-input, .s-skin-hasbg .s-nadd .s-nadd-form .cite-url-input, .s-skin-hasbg .s-nadd-form .addform-input-area .addform-input, .s-skin-hasbg .s-nav-edit-addform .addform-input-area .addform-input {color:#ffffff}';
    add_css(s3+s1+s2+s4+s5);
    //remove "More Productions" on right above of the page
    var a_s_bri = $('.s_bri');
    a_s_bri.remove();
};

/* End of file bits.user.js */
/* Location: ./bits.user.js */
