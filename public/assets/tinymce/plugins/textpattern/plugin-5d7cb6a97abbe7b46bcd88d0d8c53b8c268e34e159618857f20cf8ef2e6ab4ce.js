!function(){var t={},n=function(n){for(var e=t[n],a=e.deps,o=e.defn,i=a.length,d=new Array(i),f=0;f<i;++f)d[f]=r(a[f]);var s=o.apply(null,d);if(void 0===s)throw"module ["+n+"] returned undefined";e.instance=s},e=function(n,e,r){if("string"!=typeof n)throw"module id must be a string";if(void 0===e)throw"no dependencies for "+n;if(void 0===r)throw"no definition function for "+n;t[n]={deps:e,defn:r,instance:void 0}},r=function(e){var r=t[e];if(void 0===r)throw"module ["+e+"] was undefined";return void 0===r.instance&&n(e),r.instance},a=function(t,n){for(var e=t.length,a=new Array(e),o=0;o<e;++o)a.push(r(t[o]));n.apply(null,n)},o={};o.bolt={module:{api:{define:e,require:a,demand:r}}};var i=e,d=function(t,n){i(t,[],function(){return n})};d("7",tinymce.util.Tools.resolve),i("1",["7"],function(t){return t("tinymce.PluginManager")}),i("2",["7"],function(t){return t("tinymce.util.Delay")}),i("3",["7"],function(t){return t("tinymce.util.VK")}),i("8",["7"],function(t){return t("tinymce.dom.TreeWalker")}),i("9",["7"],function(t){return t("tinymce.util.Tools")}),i("a",[],function(){var t=function(t){return t.sort(function(t,n){return t.start.length>n.start.length?-1:t.start.length<n.start.length?1:0})},n=function(t,n){for(var e=0;e<t.length;e++)if(0===n.indexOf(t[e].start)&&(!t[e].end||n.lastIndexOf(t[e].end)===n.length-t[e].end.length))return t[e]},e=function(t,n,e,r){var a=n.substr(e-t.end.length-r,t.end.length);return a===t.end},r=function(t,n,e){return t-n-e.end.length-e.start.length>0},a=function(n,a,o,i){var d,f,s=t(n);for(f=0;f<s.length;f++)if(d=s[f],void 0!==d.end&&e(d,a,o,i)&&r(o,i,d))return d};return{findPattern:n,findEndPattern:a}}),i("4",["8","9","a"],function(t,n,e){var r=function(t,n,e,r,a){return t=r>0?t.splitText(r):t,t.splitText(e-r-a),t.deleteData(0,n.start.length),t.deleteData(t.data.length-n.end.length,n.end.length),t},a=function(t,n,a){var o,i,d,f,s,l,u,c,h,g,m;if(o=t.selection,i=t.dom,o.isCollapsed()&&(d=o.getRng(!0),f=d.startContainer,s=d.startOffset,u=f.data,g=a===!0?1:0,3==f.nodeType&&(h=e.findEndPattern(n,u,s,g),void 0!==h&&(l=Math.max(0,s-g),l=u.lastIndexOf(h.start,l-h.end.length-1),l!==-1&&(c=i.createRng(),c.setStart(f,l),c.setEnd(f,s-g),h=e.findPattern(n,c.toString()),h&&h.end&&!(f.data.length<=h.start.length+h.end.length))))))return m=t.formatter.get(h.format),m&&m[0].inline?(t.undoManager.transact(function(){f=r(f,h,s,l,g),t.formatter.apply(h.format,{},f)}),f):void 0},o=function(r,a){var o,i,d,f,s,l,u,c,h,g,m;if(o=r.selection,i=r.dom,o.isCollapsed()&&(u=i.getParent(o.getStart(),"p"))){for(h=new t(u,u);s=h.next();)if(3==s.nodeType){f=s;break}if(f){if(c=e.findPattern(a,f.data),!c)return;if(g=o.getRng(!0),d=g.startContainer,m=g.startOffset,f==d&&(m=Math.max(0,m-c.start.length)),n.trim(f.data).length==c.start.length)return;c.format&&(l=r.formatter.get(c.format),l&&l[0].block&&(f.deleteData(0,c.start.length),r.formatter.apply(c.format,{},f),g.setStart(d,m),g.collapse(!0),o.setRng(g))),c.cmd&&r.undoManager.transact(function(){f.deleteData(0,c.start.length),r.execCommand(c.cmd)})}}};return{applyInlineFormat:a,applyBlockFormat:o}}),i("5",["3","4"],function(t,n){function e(t,e){var r,a;a=n.applyInlineFormat(t,e,!1),a&&(r=t.dom.createRng(),r.setStart(a,a.data.length),r.setEnd(a,a.data.length),t.selection.setRng(r)),n.applyBlockFormat(t,e)}function r(t,e){var r,a,o,i,d;r=n.applyInlineFormat(t,e,!0),r&&(d=t.dom,a=r.data.slice(-1),/[\u00a0 ]/.test(a)&&(r.deleteData(r.data.length-1,1),o=d.doc.createTextNode(a),r.nextSibling?d.insertAfter(o,r.nextSibling):r.parentNode.appendChild(o),i=d.createRng(),i.setStart(o,1),i.setEnd(o,1),t.selection.setRng(i)))}var a=function(t,n,e){for(var r=0;r<t.length;r++)if(e(t[r],n))return!0},o=function(n,e){return a(n,e,function(n,e){return n===e.keyCode&&t.modifierPressed(e)===!1})},i=function(t,n){return a(t,n,function(t,n){return t.charCodeAt(0)===n.charCode})};return{handleEnter:e,handleInlineKey:r,checkCharCode:i,checkKeyCode:o}}),i("6",[],function(){var t=[{start:"*",end:"*",format:"italic"},{start:"**",end:"**",format:"bold"},{start:"#",format:"h1"},{start:"##",format:"h2"},{start:"###",format:"h3"},{start:"####",format:"h4"},{start:"#####",format:"h5"},{start:"######",format:"h6"},{start:"1. ",cmd:"InsertOrderedList"},{start:"* ",cmd:"InsertUnorderedList"},{start:"- ",cmd:"InsertUnorderedList"}],n=function(n){return void 0!==n.textpattern_patterns?n.textpattern_patterns:t};return{getPatterns:n}}),i("0",["1","2","3","4","5","6"],function(t,n,e,r,a,o){return t.add("textpattern",function(t){var r=o.getPatterns(t.settings),i=[",",".",";",":","!","?"],d=[32];t.on("keydown",function(n){13!==n.keyCode||e.modifierPressed(n)||a.handleEnter(t,r)},!0),t.on("keyup",function(n){a.checkKeyCode(d,n)&&a.handleInlineKey(t,r)}),t.on("keypress",function(e){a.checkCharCode(i,e)&&n.setEditorTimeout(t,function(){a.handleInlineKey(t,r)})}),this.setPatterns=function(t){r=t},this.getPatterns=function(){return r}}),function(){}}),r("0")()}();