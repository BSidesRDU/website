(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{279:function(n,e,t){"use strict";t.r(e);t(71);var o={props:{session:{type:Object,required:!0}},computed:{sessionClasses:function(){return{"content-session":!0,"content-session__header":this.session.header,"content-session__after-hours":this.session["after-hours"]}},whatClasses:function(){return{what:!0,"content-session__span--3":3===this.session.span}},speakersClasses:function(){return{speakers:!0,"content-session__span--2":2===this.session.span}},speakers:function(){var n,e=this.session,t=e.speaker,o=e["speaker-2"],r=e["speaker-slug"],c=e["speaker-2-slug"];return t&&(n='<span id="'.concat(r,'">').concat(t,"</span>")),o&&(n="".concat(n,' / <span id="').concat(c,'">').concat(o,"</span>")),n}}},r=t(8),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{class:n.sessionClasses},[t("div",{staticClass:"start"},[n._v(n._s(n.session.start)+" "),t("span",{staticClass:"stoe"},[n._v("to")])]),n._v(" "),t("div",{staticClass:"end"},[n._v(n._s(n.session.end))]),n._v(" "),t("div",{staticClass:"mins"},[n._v(n._s(n.session.mins)+" "),t("span",{staticClass:"nmins"},[n._v("mins")])]),n._v(" "),t("div",{class:n.whatClasses},[n._v("\n    "+n._s(n.session.what)+"\n  ")]),n._v(" "),n.session.span<3?t("div",{class:n.speakersClasses,domProps:{innerHTML:n._s(n.speakers)}}):n._e(),n._v(" "),1==n.session.span?t("div",{staticClass:"description"},[n._v("\n    "+n._s(n.session.description)+"\n  ")]):n._e()])}),[],!1,null,null,null);e.default=component.exports}}]);