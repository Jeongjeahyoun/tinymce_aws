!function(){var n={},t=function(t){for(var r=n[t],o=r.deps,u=r.defn,i=o.length,f=new Array(i),c=0;c<i;++c)f[c]=e(o[c]);var a=u.apply(null,f);if(void 0===a)throw"module ["+t+"] returned undefined";r.instance=a},r=function(t,r,e){if("string"!=typeof t)throw"module id must be a string";if(void 0===r)throw"no dependencies for "+t;if(void 0===e)throw"no definition function for "+t;n[t]={deps:r,defn:e,instance:void 0}},e=function(r){var e=n[r];if(void 0===e)throw"module ["+r+"] was undefined";return void 0===e.instance&&t(r),e.instance},o=function(n,t){for(var r=n.length,o=new Array(r),u=0;u<r;++u)o.push(e(n[u]));t.apply(null,t)},u={};u.bolt={module:{api:{define:r,require:o,demand:e}}};var i=r,f=function(n,t){i(n,[],function(){return t})};f("7",tinymce.util.Tools.resolve),i("1",["7"],function(n){return n("tinymce.dom.DOMUtils")}),i("2",["7"],function(n){return n("tinymce.Env")}),i("3",["7"],function(n){return n("tinymce.PluginManager")}),i("4",["7"],function(n){return n("tinymce.ui.Menu")}),i("5",["7"],function(n){return n("tinymce.util.Tools")}),f("a",Array),f("b",Error),i("d",["a","b"],function(n,t){var r=function(){},e=function(n,t){return function(){return n(t.apply(null,arguments))}},o=function(n){return function(){return n}},u=function(n){return n},i=function(n,t){return n===t},f=function(t){for(var r=new n(arguments.length-1),e=1;e<arguments.length;e++)r[e-1]=arguments[e];return function(){for(var e=new n(arguments.length),o=0;o<e.length;o++)e[o]=arguments[o];var u=r.concat(e);return t.apply(null,u)}},c=function(n){return function(){return!n.apply(null,arguments)}},a=function(n){return function(){throw new t(n)}},l=function(n){return n()},s=function(n){n()},v=o(!1),p=o(!0);return{noop:r,compose:e,constant:o,identity:u,tripleEquals:i,curry:f,not:c,die:a,apply:l,call:s,never:v,always:p}}),f("e",Object),i("9",["d","e"],function(n,t){var r=n.never,e=n.always,o=function(){return u},u=function(){var u=function(n){return n.isNone()},i=function(n){return n()},f=function(n){return n},c=function(){},a={fold:function(n){return n()},is:r,isSome:r,isNone:e,getOr:f,getOrThunk:i,getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},or:f,orThunk:i,map:o,ap:o,each:c,bind:o,flatten:o,exists:r,forall:e,filter:o,equals:u,equals_:u,toArray:function(){return[]},toString:n.constant("none()")};return t.freeze&&t.freeze(a),a}(),i=function(n){var t=function(){return n},f=function(){return l},c=function(t){return i(t(n))},a=function(t){return t(n)},l={fold:function(t,r){return r(n)},is:function(t){return n===t},isSome:e,isNone:r,getOr:t,getOrThunk:t,getOrDie:t,or:f,orThunk:f,map:c,ap:function(t){return t.fold(o,function(t){return i(t(n))})},each:function(t){t(n)},bind:a,flatten:t,exists:a,forall:a,filter:function(t){return t(n)?l:u},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(r,function(t){return e(n,t)})},toArray:function(){return[n]},toString:function(){return"some("+n+")"}};return l},f=function(n){return null===n||void 0===n?u:i(n)};return{some:i,none:o,from:f}}),f("c",String),i("8",["9","a","b","c"],function(n,t,r,e){var o=function(){var n=t.prototype.indexOf,r=function(t,r){return n.call(t,r)},e=function(n,t){return x(n,t)};return void 0===n?e:r}(),u=function(t,r){var e=o(t,r);return e===-1?n.none():n.some(e)},i=function(n,t){return o(n,t)>-1},f=function(n,t){return w(n,t).isSome()},c=function(n,t){for(var r=[],e=0;e<n;e++)r.push(t(e));return r},a=function(n,t){for(var r=[],e=0;e<n.length;e+=t){var o=n.slice(e,e+t);r.push(o)}return r},l=function(n,r){for(var e=n.length,o=new t(e),u=0;u<e;u++){var i=n[u];o[u]=r(i,u,n)}return o},s=function(n,t){for(var r=0,e=n.length;r<e;r++){var o=n[r];t(o,r,n)}},v=function(n,t){for(var r=n.length-1;r>=0;r--){var e=n[r];t(e,r,n)}},p=function(n,t){for(var r=[],e=[],o=0,u=n.length;o<u;o++){var i=n[o],f=t(i,o,n)?r:e;f.push(i)}return{pass:r,fail:e}},h=function(n,t){for(var r=[],e=0,o=n.length;e<o;e++){var u=n[e];t(u,e,n)&&r.push(u)}return r},d=function(n,t){if(0===n.length)return[];for(var r=t(n[0]),e=[],o=[],u=0,i=n.length;u<i;u++){var f=n[u],c=t(f);c!==r&&(e.push(o),o=[]),r=c,o.push(f)}return 0!==o.length&&e.push(o),e},g=function(n,t,r){return v(n,function(n){r=t(r,n)}),r},m=function(n,t,r){return s(n,function(n){r=t(r,n)}),r},y=function(t,r){for(var e=0,o=t.length;e<o;e++){var u=t[e];if(r(u,e,t))return n.some(u)}return n.none()},w=function(t,r){for(var e=0,o=t.length;e<o;e++){var u=t[e];if(r(u,e,t))return n.some(e)}return n.none()},x=function(n,t){for(var r=0,e=n.length;r<e;++r)if(n[r]===t)return r;return-1},b=t.prototype.push,O=function(n){for(var e=[],o=0,u=n.length;o<u;++o){if(!t.prototype.isPrototypeOf(n[o]))throw new r("Arr.flatten item "+o+" was not an array, input: "+n);b.apply(e,n[o])}return e},T=function(n,t){var r=l(n,t);return O(r)},k=function(n,t){for(var r=0,e=n.length;r<e;++r){var o=n[r];if(t(o,r,n)!==!0)return!1}return!0},A=function(n,t){return n.length===t.length&&k(n,function(n,r){return n===t[r]})},q=t.prototype.slice,C=function(n){var t=q.call(n,0);return t.reverse(),t},D=function(n,t){return h(n,function(n){return!i(t,n)})},M=function(n,t){for(var r={},o=0,u=n.length;o<u;o++){var i=n[o];r[e(i)]=t(i,o)}return r},S=function(n){return[n]},X=function(n,t){var r=q.call(n,0);return r.sort(t),r};return{map:l,each:s,eachr:v,partition:p,filter:h,groupBy:d,indexOf:u,foldr:g,foldl:m,find:y,findIndex:w,flatten:O,bind:T,forall:k,exists:f,contains:i,equal:A,reverse:C,chunk:a,difference:D,mapToObject:M,pure:S,sort:X,range:c}}),i("6",["8"],function(n){var t=function(n,t,r){return t>=n.left&&t<=n.right&&r>=n.top&&r<=n.bottom},r=function(r,e,o){return!o.collapsed&&n.foldl(o.getClientRects(),function(n,o){return n||t(o,r,e)},!1)};return{isXYWithinRange:r}}),i("0",["1","2","3","4","5","6"],function(n,t,r,e,o,u){var i=n.DOM;return r.add("contextmenu",function(n){var r,f,c=n.settings.contextmenu_never_use_native,a=function(n){return n.ctrlKey&&!c},l=function(){return t.mac&&t.webkit},s=function(){return f===!0},v=function(n){return n&&"IMG"===n.nodeName},p=function(n,t){return v(n.target)&&u.isXYWithinRange(n.clientX,n.clientY,t)===!1};return n.on("mousedown",function(t){l()&&2===t.button&&!a(t)&&n.selection.isCollapsed()&&n.once("contextmenu",function(t){v(t.target)||n.selection.placeCaretAt(t.clientX,t.clientY)})}),n.on("contextmenu",function(t){var u;if(!a(t)){if(p(t,n.selection.getRng())&&n.selection.select(t.target),t.preventDefault(),u=n.settings.contextmenu||"link openlink image inserttable | cell row column deletetable",r)r.show();else{var c=[];o.each(u.split(/[ ,]/),function(t){var r=n.menuItems[t];"|"==t&&(r={text:t}),r&&(r.shortcut="",c.push(r))});for(var l=0;l<c.length;l++)"|"==c[l].text&&(0!==l&&l!=c.length-1||c.splice(l,1));r=new e({items:c,context:"contextmenu",classes:"contextmenu"}).renderTo(),r.on("hide",function(n){n.control===this&&(f=!1)}),n.on("remove",function(){r.remove(),r=null})}var s={x:t.pageX,y:t.pageY};n.inline||(s=i.getPos(n.getContentAreaContainer()),s.x+=t.clientX,s.y+=t.clientY),r.moveTo(s.x,s.y),f=!0}}),{isContextMenuVisible:s}}),function(){}}),e("0")()}();