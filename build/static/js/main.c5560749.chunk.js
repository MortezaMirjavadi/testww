(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{128:function(e,n,t){"use strict";t.r(n);var r=t(75),c=t(76),a=t(79),o=t(77),i=t(80),l=t(5),u=t.n(l),d=t(78),s=(t(86),t(28)),f=t(47),b=t(29);function h(){var e=Object(s.a)(["\n        // width: 100%;\n        // max-width: 500px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        label: barcode-main-container;\n    "]);return h=function(){return e},e}function m(){var e=Object(s.a)(["\n        width: 100%;\n        height: 50px;\n        background-color: black;\n        text-align: center;\n        color: white;\n        label: footer-barcode-container;\n    "]);return m=function(){return e},e}function v(){var e=Object(s.a)(["\n        display: flex;\n        width: 100%;\n        height: 100vh;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n        label: barcode-container;\n    "]);return v=function(){return e},e}var j={barcodeContainer:Object(b.a)(v()),footer:Object(b.a)(m()),barCodeMainContainer:Object(b.a)(h())},p=function(e){var n=new f.BrowserQRCodeReader;return Object(l.useEffect)((function(){n.listVideoInputDevices().then((function(e){e.forEach((function(t){console.log("".concat(t.label,", ").concat(t.deviceId));e[0].deviceId;n.decodeFromInputVideoDevice(void 0,"video").then((function(e){return alert(e.text)})).catch((function(e){return console.error(e)}))}))})).catch((function(e){return console.error(e)}))}),[]),u.a.createElement("div",{className:j.barcodeContainer},u.a.createElement("div",{className:j.footer}),u.a.createElement("div",{className:j.barCodeMainContainer},u.a.createElement("video",{id:"video",width:"90%",height:"100%",style:{border:"1px solid gray"}})),u.a.createElement("div",{className:j.footer},u.a.createElement("h3",null," \u0627\u0633\u06a9\u0646 \u0628\u0627\u0631 \u06a9\u062f ")))},O=function(e){function n(){var e;return Object(r.a)(this,n),(e=Object(a.a)(this,Object(o.a)(n).call(this))).state={name:"React"},e}return Object(i.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(p,null))}}]),n}(l.Component);Object(d.render)(u.a.createElement(O,null),document.getElementById("root"))},81:function(e,n,t){e.exports=t(128)},86:function(e,n,t){}},[[81,1,2]]]);
//# sourceMappingURL=main.c5560749.chunk.js.map