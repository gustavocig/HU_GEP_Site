!function(b){"function"==typeof define&&define.amd?define(["jquery"],b):b("object"==typeof exports?require("jquery"):jQuery)}(function(h){var g,l=navigator.userAgent,k=/iphone/i.test(l),j=/chrome/i.test(l),i=/android/i.test(l);h.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},h.fn.extend({caret:function(e,d){var f;if(0!==this.length&&!this.is(":hidden")){return"number"==typeof e?(d="number"==typeof d?d:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,d):this.createTextRange&&(f=this.createTextRange(),f.collapse(!0),f.moveEnd("character",d),f.moveStart("character",e),f.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,d=this[0].selectionEnd):document.selection&&document.selection.createRange&&(f=document.selection.createRange(),e=0-f.duplicate().moveStart("character",-100000),d=e+f.text.length),{begin:e,end:d})}},unmask:function(){return this.trigger("unmask")},mask:function(v,u){var t,s,r,q,f,e,d,b;if(!v&&this.length>0){t=h(this[0]);var a=t.data(h.mask.dataName);return a?a():void 0}return u=h.extend({autoclear:h.mask.autoclear,placeholder:h.mask.placeholder,completed:null},u),s=h.mask.definitions,r=[],q=d=v.length,f=null,h.each(v.split(""),function(m,c){"?"==c?(d--,q=m):s[c]?(r.push(new RegExp(s[c])),null===f&&(f=r.length-1),q>m&&(e=r.length-1)):r.push(null)}),this.trigger("unmask").each(function(){function I(){if(u.completed){for(var p=f;e>=p;p++){if(r[p]&&n[p]===G(p)){return}}u.completed.call(F)}}function G(p){return u.placeholder.charAt(p<u.placeholder.length?p:0)}function o(p){for(;++p<d&&!r[p];){}return p}function m(p){for(;--p>=0&&!r[p];){}return p}function R(w,p){var y,x;if(!(0>w)){for(y=w,x=o(p);d>y;y++){if(r[y]){if(!(d>x&&r[y].test(n[x]))){break}n[y]=n[x],n[x]=G(x),x=o(x)}}J(),F.caret(Math.max(f,w))}}function P(w){var p,z,y,x;for(p=w,z=G(w);d>p;p++){if(r[p]){if(y=o(p),x=n[p],n[p]=z,!(d>y&&r[y].test(x))){break}z=x}}}function O(){var w=F.val(),p=F.caret();if(w.length<b.length){for(H(!0);p.begin>0&&!r[p.begin-1];){p.begin--}if(0===p.begin){for(;p.begin<f&&!r[p.begin];){p.begin++}}F.caret(p.begin,p.begin)}else{for(H(!0);p.begin<d&&!r[p.begin];){p.begin++}F.caret(p.begin,p.begin)}I()}function N(){H(),F.val()!=Q&&F.change()}function M(w){if(!F.prop("readonly")){var p,z,y,x=w.which||w.keyCode;b=F.val(),8===x||46===x||k&&127===x?(p=F.caret(),z=p.begin,y=p.end,y-z===0&&(z=46!==x?m(z):y=o(z-1),y=46===x?o(y):y),K(z,y),R(z,y-1),w.preventDefault()):13===x?N.call(this,w):27===x&&(F.val(Q),F.caret(0,H()),w.preventDefault())}}function L(p){if(!F.prop("readonly")){var B,A,z,y=p.which||p.keyCode,x=F.caret();if(!(p.ctrlKey||p.altKey||p.metaKey||32>y)&&y&&13!==y){if(x.end-x.begin!==0&&(K(x.begin,x.end),R(x.begin,x.end-1)),B=o(x.begin-1),d>B&&(A=String.fromCharCode(y),r[B].test(A))){if(P(B),n[B]=A,J(),z=o(B),i){var w=function(){h.proxy(h.fn.caret,F,z)()};setTimeout(w,0)}else{F.caret(z)}x.begin<=e&&I()}p.preventDefault()}}}function K(w,p){var x;for(x=w;p>x&&d>x;x++){r[x]&&(n[x]=G(x))}}function J(){F.val(n.join(""))}function H(w){var p,A,z,y=F.val(),x=-1;for(p=0,z=0;d>p;p++){if(r[p]){for(n[p]=G(p);z++<y.length;){if(A=y.charAt(z-1),r[p].test(A)){n[p]=A,x=p;break}}if(z>y.length){K(p+1,d);break}}else{n[p]===y.charAt(z)&&z++,q>p&&(x=p)}}return w?J():q>x+1?u.autoclear||n.join("")===c?(F.val()&&F.val(""),K(0,d)):J():(J(),F.val(F.val().substring(0,x+1))),q?p:f}var F=h(this),n=h.map(v.split(""),function(w,p){return"?"!=w?s[w]?G(p):w:void 0}),c=n.join(""),Q=F.val();F.data(h.mask.dataName,function(){return h.map(n,function(w,p){return r[p]&&w!=G(p)?w:null}).join("")}),F.one("unmask",function(){F.off(".mask").removeData(h.mask.dataName)}).on("focus.mask",function(){if(!F.prop("readonly")){clearTimeout(g);var p;Q=F.val(),p=H(),g=setTimeout(function(){J(),p==v.replace("?","").length?F.caret(0,p):F.caret(p)},10)}}).on("blur.mask",N).on("keydown.mask",M).on("keypress.mask",L).on("input.mask paste.mask",function(){F.prop("readonly")||setTimeout(function(){var p=H(!0);F.caret(p),I()},0)}),j&&i&&F.off("input.mask").on("input.mask",O),H()})}})});