webpackJsonp([1],{"8OQX":function(e,s,t){"use strict";function n(e){t("eC+S")}Object.defineProperty(s,"__esModule",{value:!0});var a=t("TogJ"),i=t("VU/8"),o=n,r=i(null,a.a,o,null,null);s.default=r.exports},NGh3:function(e,s,t){s=e.exports=t("FZ+f")(!1),s.push([e.i,"html{font-family:Montserrat,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-box-sizing:border-box;box-sizing:border-box}h1,h2,h3,h4{font-weight:300;text-transform:uppercase;letter-spacing:2px}p{line-height:1.4em}a{text-decoration:none}pre{margin:32px 0;font-family:monospace;font-size:.8em;line-height:1.4em}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0}.base-container{min-height:100vh;padding:2em;display:-webkit-box;display:-ms-flexbox;display:box;display:flex;background-repeat:no-repeat;background-position:50%;background-size:cover;-webkit-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;justify-content:center}.base-container.center{padding:0;-webkit-box-align:center;-o-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.base-container>section{max-width:1024px}.title{display:block;padding:32px 0;font-weight:300;font-size:42px;color:#35495e;letter-spacing:1px}",""])},TogJ:function(e,s,t){"use strict";var n=function(){var e=this,s=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",[t("h1",[e._v("Lessons Learned")]),t("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\nquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\nconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\ncillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\nproident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-keyword"},[e._v("const")]),e._v(" LayerServerless = "),t("span",{staticClass:"hljs-built_in"},[e._v("require")]),e._v("("),t("span",{staticClass:"hljs-string"},[e._v("'@layerhq/serverless-common'")]),e._v(")\n\n"),t("span",{staticClass:"hljs-keyword"},[e._v("const")]),e._v(" config = "),t("span",{staticClass:"hljs-built_in"},[e._v("require")]),e._v("("),t("span",{staticClass:"hljs-string"},[e._v("'./layer_config.json'")]),e._v(")\n"),t("span",{staticClass:"hljs-keyword"},[e._v("const")]),e._v(" layerServerless = "),t("span",{staticClass:"hljs-keyword"},[e._v("new")]),e._v(" LayerServerless(config)\n\nexports.process = "),t("span",{staticClass:"hljs-function"},[e._v("("),t("span",{staticClass:"hljs-params"},[e._v("event, context, callback")]),e._v(") =>")]),e._v(" {\n  "),t("span",{staticClass:"hljs-keyword"},[e._v("try")]),e._v(" {\n    "),t("span",{staticClass:"hljs-keyword"},[e._v("const")]),e._v(" webhook = layerServerless.webhook(event.headers, event.body)\n    "),t("span",{staticClass:"hljs-comment"},[e._v("// webhook payload")]),e._v("\n\n    callback("),t("span",{staticClass:"hljs-literal"},[e._v("null")]),e._v(", { "),t("span",{staticClass:"hljs-attr"},[e._v("statusCode")]),e._v(": "),t("span",{staticClass:"hljs-number"},[e._v("200")]),e._v(" })\n  } "),t("span",{staticClass:"hljs-keyword"},[e._v("catch")]),e._v(" (err) {\n    callback(err)\n  }\n}\n")])])])}],i={render:n,staticRenderFns:a};s.a=i},"eC+S":function(e,s,t){var n=t("NGh3");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t("rjj0")("4fc9ee36",n,!0)}});
//# sourceMappingURL=js.d6274f1b168eeb2bd5b7.js.map