!function(){var e={},n=function(n){for(var t=e[n],o=t.deps,r=t.defn,u=o.length,c=new Array(u),d=0;d<u;++d)c[d]=i(o[d]);var l=r.apply(null,c);if(void 0===l)throw"module ["+n+"] returned undefined";t.instance=l},t=function(n,t,i){if("string"!=typeof n)throw"module id must be a string";if(void 0===t)throw"no dependencies for "+n;if(void 0===i)throw"no definition function for "+n;e[n]={deps:t,defn:i,instance:void 0}},i=function(t){var i=e[t];if(void 0===i)throw"module ["+t+"] was undefined";return void 0===i.instance&&n(t),i.instance},o=function(e,n){for(var t=e.length,o=new Array(t),r=0;r<t;++r)o.push(i(e[r]));n.apply(null,n)},r={};r.bolt={module:{api:{define:t,require:o,demand:i}}};var u=t,c=function(e,n){u(e,[],function(){return n})};c("3",tinymce.util.Tools.resolve),u("1",["3"],function(e){return e("tinymce.dom.DOMUtils")}),u("2",["3"],function(e){return e("tinymce.PluginManager")}),u("0",["1","2"],function(e,n){var t=e.DOM;return n.add("fullscreen",function(e){function n(){var e,n,t=window,i=document,o=i.body;return o.offsetWidth&&(e=o.offsetWidth,n=o.offsetHeight),t.innerWidth&&t.innerHeight&&(e=t.innerWidth,n=t.innerHeight),{w:e,h:n}}function i(){var e=t.getViewPort();return{x:e.x,y:e.y}}function o(e){window.scrollTo(e.x,e.y)}function r(){function r(){t.setStyle(v,"height",n().h-(m.clientHeight-v.clientHeight))}var h,m,v,w,g=document.body,C=document.documentElement;a=!a,m=e.getContainer(),h=m.style,v=e.getContentAreaContainer().firstChild,w=v.style,a?(f=i(),u=w.width,c=w.height,w.width=w.height="100%",l=h.width,s=h.height,h.width=h.height="",t.addClass(g,"mce-fullscreen"),t.addClass(C,"mce-fullscreen"),t.addClass(m,"mce-fullscreen"),t.bind(window,"resize",r),r(),d=r):(w.width=u,w.height=c,l&&(h.width=l),s&&(h.height=s),t.removeClass(g,"mce-fullscreen"),t.removeClass(C,"mce-fullscreen"),t.removeClass(m,"mce-fullscreen"),t.unbind(window,"resize",d),o(f)),e.fire("FullscreenStateChanged",{state:a})}var u,c,d,l,s,f,a=!1;if(!e.settings.inline)return e.on("init",function(){e.addShortcut("Ctrl+Shift+F","",r)}),e.on("remove",function(){d&&t.unbind(window,"resize",d)}),e.addCommand("mceFullScreen",r),e.addMenuItem("fullscreen",{text:"Fullscreen",shortcut:"Ctrl+Shift+F",selectable:!0,onClick:function(){r(),e.focus()},onPostRender:function(){var n=this;e.on("FullscreenStateChanged",function(e){n.active(e.state)})},context:"view"}),e.addButton("fullscreen",{tooltip:"Fullscreen",shortcut:"Ctrl+Shift+F",onClick:r,onPostRender:function(){var n=this;e.on("FullscreenStateChanged",function(e){n.active(e.state)})}}),{isFullscreen:function(){return a}}}),function(){}}),i("0")()}();