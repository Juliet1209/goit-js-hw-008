function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=o.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){r[e]=o},o.parcelRequired7c6=n);var l=n("i5zXd"),i=n("9OeKo");const d=document.querySelector("iframe"),a=new(0,l.default)(d);a.on("loaded",(function(){localStorage.getItem("videoplayer-current-time")&&a.setCurrentTime(localStorage.getItem("videoplayer-current-time"))})),a.on("timeupdate",e(i)((function(e){localStorage.setItem("videoplayer-current-time",e.seconds),console.log(e.seconds)}),1e3));
//# sourceMappingURL=03-feedback.feab95b2.js.map
