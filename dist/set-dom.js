!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.setDOM=e()}}(function(){return function e(t,n,r){function o(d,a){if(!n[d]){if(!t[d]){var u="function"==typeof require&&require;if(!a&&u)return u(d,!0);if(i)return i(d,!0);var f=new Error("Cannot find module '"+d+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[d]={exports:{}};t[d][0].call(l.exports,function(e){var n=t[d][1][e];return o(n?n:e)},l,l.exports,e,t,n,r)}return n[d].exports}for(var i="function"==typeof require&&require,d=0;d<r.length;d++)o(r[d]);return o}({1:[function(e,t){"use strict";function n(e,t){c(e&&e.nodeType,"You must provide a valid node to update."),e.nodeType===h&&(e=e.documentElement),"string"==typeof t&&(t=m(t,e.nodeName)),r(e,t),e[v]||(e[v]=!0,u(e))}function r(e,t){if(e.nodeType===t.nodeType)if(e.nodeType===N){if(!e.attributes[n.IGNORE]||!t.attributes[n.IGNORE])if(i(e,e.childNodes,t.childNodes),e.nodeName===t.nodeName)o(e,e.attributes,t.attributes);else{for(var r=t.cloneNode();e.firstChild;)r.appendChild(e.firstChild);e.parentNode.replaceChild(r,e)}}else e.nodeValue!==t.nodeValue&&(e.nodeValue=t.nodeValue);else f(e),e.parentNode.replaceChild(t,e),u(t)}function o(e,t,n){var r,o,i,d,a;for(r=t.length;r--;)o=t[r],d=o.namespaceURI,a=o.localName,i=n.getNamedItemNS(d,a),i||t.removeNamedItemNS(d,a);for(r=n.length;r--;)o=n[r],d=o.namespaceURI,a=o.localName,i=t.getNamedItemNS(d,a),i?i.value!==o.value&&(i.value=o.value):(n.removeNamedItemNS(d,a),t.setNamedItemNS(o))}function i(e,t,n){var o,i,a,l,c,m=d(t),s=d(n);for(o in m)s[o]||(f(m[o]),e.removeChild(m[o]));for(o in s)if(i=m[o],a=s[o],l=a[p],i){if(r(i,a),i[p]===l)continue;if(c=t[l]||null,c===i)continue;e.insertBefore(i,c)}else c=t[l]||null,e.insertBefore(a,c),u(a)}function d(e){for(var t,n={},r=e.length,o=0;o<r;o++)t=e[o],t[p]=o,n[a(t)||o]=t;return n}function a(e){if(e.nodeType===N){var t=e.getAttribute(n.KEY)||e.id;return t&&(t=s+t),t&&s+t}}function u(e){a(e)&&l(e,"mount");for(var t=e.firstChild;t;)u(t),t=t.nextSibling}function f(e){for(var t=e.firstChild;t;)f(t),t=t.nextSibling;a(e)&&l(e,"dismount")}function l(e,t){var n=document.createEvent("Event"),r={value:e};n.initEvent(t,!1,!1),Object.defineProperty(n,"target",r),Object.defineProperty(n,"srcElement",r),e.dispatchEvent(n)}function c(e,t){if(!e)throw new Error("set-dom: "+t)}var m=e(2),s="_set-dom-",p=s+"index",v=s+"mounted",N=window.Node.ELEMENT_NODE,h=window.Node.DOCUMENT_NODE;n.KEY="data-key",n.IGNORE="data-ignore",t.exports=n},{2:2}],2:[function(e,t){"use strict";var n=new window.DOMParser,r="text/html",o="application/xhtml+xml",i="<i></i>",d="HTML",a=!1,u=!1;try{n.parseFromString(i,r)&&(a=!0)}catch(e){}try{!a&&n.parseFromString(i,o)&&(u=!0)}catch(e){}t.exports=a?function(e,t){var o=n.parseFromString(e,r);return t===d?o.documentElement:o.body.firstChild}:function(e,t){var r=t===d;if(u&&r)return n.parseFromString(e,o).documentElement;var i=document.implementation.createHTMLDocument("");return r?(i.documentElement.innerHTML=e,i.documentElement):(i.body.innerHTML=e,i.body.firstChild)}},{}]},{},[1])(1)});