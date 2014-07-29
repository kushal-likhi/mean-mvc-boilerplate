/*!
 * jQuery JavaScript Library v2.1.1-beta1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-03-24T17:01Z
 */
(function(a,b){if(typeof module==="object"&&typeof module.exports==="object"){// For CommonJS and CommonJS-like environments where a proper window is present,
// execute the factory and get jQuery
// For environments that do not inherently posses a window with a document
// (such as Node.js), expose a jQuery-making factory as module.exports
// This accentuates the need for the creation of a real window
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info
module.exports=a.document?b(a,true):function(a){if(!a.document){throw new Error("jQuery requires a window with a document")}return b(a)}}else{b(a)}})(typeof window!=="undefined"?window:this,function(a,b){// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//
var c=[];var d=c.slice;var e=c.concat;var f=c.push;var g=c.indexOf;var h={};var i=h.toString;var j=h.hasOwnProperty;var k={};var// Use the correct document accordingly with window argument (sandbox)
l=a.document,m="2.1.1-beta1",// Define a local copy of jQuery
n=function(a,b){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new n.fn.init(a,b)},// Support: Android<4.1
// Make sure we trim BOM and NBSP
o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,// Matches dashed string for camelizing
p=/^-ms-/,q=/-([\da-z])/gi,// Used by jQuery.camelCase as callback to replace()
r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={// The current version of jQuery being used
jquery:m,constructor:n,// Start with an empty selector
selector:"",// The default length of a jQuery object is 0
length:0,toArray:function(){return d.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(a){// Return just the one element from the set
// Return all the elements in a clean array
return a!=null?a<0?this[a+this.length]:this[a]:d.call(this)},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(a){// Build a new jQuery matched element set
var b=n.merge(this.constructor(),a);// Add the old object onto the stack (as a reference)
b.prevObject=this;b.context=this.context;// Return the newly-formed element set
return b},// Execute a callback for every element in the matched set.
// (You can seed the arguments with an array of args, but this is
// only used internally.)
each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:f,sort:c.sort,splice:c.splice};n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=false;// Handle a deep copy situation
if(typeof g==="boolean"){j=g;// skip the boolean and the target
g=arguments[h]||{};h++}// Handle case when target is a string or something (possible in deep copy)
if(typeof g!=="object"&&!n.isFunction(g)){g={}}// extend jQuery itself if only one argument is passed
if(h===i){g=this;h--}for(;h<i;h++){// Only deal with non-null/undefined values
if((a=arguments[h])!=null){// Extend the base object
for(b in a){c=g[b];d=a[b];// Prevent never-ending loop
if(g===d){continue}// Recurse if we're merging plain objects or arrays
if(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))){if(e){e=false;f=c&&n.isArray(c)?c:[]}else{f=c&&n.isPlainObject(c)?c:{}}// Never move original objects, clone them
g[b]=n.extend(j,f,d)}else if(d!==undefined){g[b]=d}}}}// Return the modified object
return g};n.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:true,error:function(a){throw new Error(a)},noop:function(){},// See test/unit/core.js for details concerning isFunction.
// Since version 1.3, DOM methods and functions like alert
// aren't supported. They return false on IE (#2968).
isFunction:function(a){return n.type(a)==="function"},isArray:Array.isArray,isWindow:function(a){return a!=null&&a===a.window},isNumeric:function(a){// parseFloat NaNs numeric-cast false positives (null|true|false|"")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){// Not plain objects:
// - Any object or value whose internal [[Class]] property is not "[object Object]"
// - DOM nodes
// - window
if(n.type(a)!=="object"||a.nodeType||n.isWindow(a)){return false}if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")){return false}// If the function hasn't returned already, we're confident that
// |obj| is a plain object, created by {} or constructed with new Object
return true},isEmptyObject:function(a){var b;for(b in a){return false}return true},type:function(a){if(a==null){return a+""}// Support: Android < 4.0, iOS < 6 (functionish RegExp)
return typeof a==="object"||typeof a==="function"?h[i.call(a)]||"object":typeof a},// Evaluates a script in a global context
globalEval:function(a){var b,c=eval;a=n.trim(a);if(a){// If the code includes a valid, prologue position
// strict mode pragma, execute code by injecting a
// script tag into the document.
if(a.indexOf("use strict")===1){b=l.createElement("script");b.text=a;l.head.appendChild(b).parentNode.removeChild(b)}else{// Otherwise, avoid the DOM node creation, insertion
// and removal by using an indirect global eval
c(a)}}},// Convert dashed to camelCase; used by the css and data modules
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},// args is for internal usage only
each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;e<f;e++){d=b.apply(a[e],c);if(d===false){break}}}else{for(e in a){d=b.apply(a[e],c);if(d===false){break}}}}else{if(g){for(;e<f;e++){d=b.call(a[e],e,a[e]);if(d===false){break}}}else{for(e in a){d=b.call(a[e],e,a[e]);if(d===false){break}}}}return a},// Support: Android<4.1
trim:function(a){return a==null?"":(a+"").replace(o,"")},// results is for internal usage only
makeArray:function(a,b){var c=b||[];if(a!=null){if(s(Object(a))){n.merge(c,typeof a==="string"?[a]:a)}else{f.call(c,a)}}return c},inArray:function(a,b,c){return b==null?-1:g.call(b,a,c)},merge:function(a,b){var c=+b.length,d=0,e=a.length;for(;d<c;d++){a[e++]=b[d]}a.length=e;return a},grep:function(a,b,c){var d,e=[],f=0,g=a.length,h=!c;// Go through the array, only saving the items
// that pass the validator function
for(;f<g;f++){d=!b(a[f],f);if(d!==h){e.push(a[f])}}return e},// arg is for internal usage only
map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];// Go through the array, translating each of the items to their new values
if(h){for(;f<g;f++){d=b(a[f],f,c);if(d!=null){i.push(d)}}}else{for(f in a){d=b(a[f],f,c);if(d!=null){i.push(d)}}}// Flatten any nested arrays
return e.apply([],i)},// A global GUID counter for objects
guid:1,// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(a,b){var c,e,f;if(typeof b==="string"){c=a[b];b=a;a=c}// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if(!n.isFunction(a)){return undefined}// Simulated bind
e=d.call(arguments,2);f=function(){return a.apply(b||this,e.concat(d.call(arguments)))};// Set the guid of unique handler to the same of original handler, so it can be removed
f.guid=a.guid=a.guid||n.guid++;return f},now:Date.now,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:k});// Populate the class2type map
n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);if(c==="function"||n.isWindow(a)){return false}if(a.nodeType===1&&b){return true}return c==="array"||b===0||typeof b==="number"&&b>0&&b-1 in a}var t=/*!
 * Sizzle CSS Selector Engine v1.10.18
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-02-05
 */
function(a){var b,c,d,e,f,g,h,i,j,k,// Local document vars
l,m,n,o,p,q,r,s,// Instance-specific data
t="sizzle"+-new Date,u=a.document,v=0,w=0,x=fb(),y=fb(),z=fb(),A=function(a,b){if(a===b){k=true}return 0},// General-purpose constants
B=typeof undefined,C=1<<31,// Instance methods
D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,// Use a stripped-down indexOf if we can't use a native one
J=E.indexOf||function(a){var b=0,c=this.length;for(;b<c;b++){if(this[b]===a){return b}}return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// Regular expressions
// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
L="[\\x20\\t\\r\\n\\f]",// http://www.w3.org/TR/css3-syntax/#characters
M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",// Loosely modeled on CSS identifier characters
// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
N=M.replace("w","w#"),// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
O="\\["+L+"*("+M+")"+L+"*(?:([*^$|!~]?=)"+L+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+N+")|)|)"+L+"*\\]",// Prefer arguments quoted,
//   then not containing pseudos/brackets,
//   then attribute selectors/non-parenthetical expressions,
//   then anything else
// These preferences are here to reduce the number of selectors
//   needing tokenize in the PSEUDO preFilter
P=":("+M+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+O.replace(3,8)+")*)|.*)\\)|)",// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(P),V=new RegExp("^"+N+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,// Easily-parseable/retrievable ID or TAG or CLASS selectors
$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,ab=/'|\\/g,// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
bb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),cb=function(a,b,c){var d="0x"+b-65536;// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,d&1023|56320)};// Optimize for push.apply( _, NodeList )
try{H.apply(E=I.call(u.childNodes),u.childNodes);// Support: Android<4.0
// Detect silently failing push.apply
E[u.childNodes.length].nodeType}catch(db){H={apply:E.length?// Leverage slice if possible
function(a,b){G.apply(a,I.call(b))}:// Support: IE<9
// Otherwise append directly
function(a,b){var c=a.length,d=0;// Can't trust NodeList.length
while(a[c++]=b[d++]){}a.length=c-1}}}function eb(a,b,d,e){var f,g,i,j,// QSA vars
k,n,q,r,v,w;if((b?b.ownerDocument||b:u)!==m){l(b)}b=b||m;d=d||[];if(!a||typeof a!=="string"){return d}if((j=b.nodeType)!==1&&j!==9){return[]}if(o&&!e){// Shortcuts
if(f=$.exec(a)){// Speed-up: Sizzle("#ID")
if(i=f[1]){if(j===9){g=b.getElementById(i);// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document (jQuery #6963)
if(g&&g.parentNode){// Handle the case where IE, Opera, and Webkit return items
// by name instead of ID
if(g.id===i){d.push(g);return d}}else{return d}}else{// Context is not a document
if(b.ownerDocument&&(g=b.ownerDocument.getElementById(i))&&s(b,g)&&g.id===i){d.push(g);return d}}}else if(f[2]){H.apply(d,b.getElementsByTagName(a));return d}else if((i=f[3])&&c.getElementsByClassName&&b.getElementsByClassName){H.apply(d,b.getElementsByClassName(i));return d}}// QSA path
if(c.qsa&&(!p||!p.test(a))){r=q=t;v=b;w=j===9&&a;// qSA works strangely on Element-rooted queries
// We can work around this by specifying an extra ID on the root
// and working up from there (Thanks to Andrew Dupont for the technique)
// IE 8 doesn't work on object elements
if(j===1&&b.nodeName.toLowerCase()!=="object"){n=pb(a);if(q=b.getAttribute("id")){r=q.replace(ab,"\\$&")}else{b.setAttribute("id",r)}r="[id='"+r+"'] ";k=n.length;while(k--){n[k]=r+qb(n[k])}v=_.test(a)&&nb(b.parentNode)||b;w=n.join(",")}if(w){try{H.apply(d,v.querySelectorAll(w));return d}catch(x){}finally{if(!q){b.removeAttribute("id")}}}}}// All others
return h(a.replace(Q,"$1"),b,d,e)}/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function fb(){var a=[];function b(c,e){// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
if(a.push(c+" ")>d.cacheLength){// Only keep the most recent entries
delete b[a.shift()]}return b[c+" "]=e}return b}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function gb(a){a[t]=true;return a}/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function hb(a){var b=m.createElement("div");try{return!!a(b)}catch(c){return false}finally{// Remove from its parent by default
if(b.parentNode){b.parentNode.removeChild(b)}// release memory in IE
b=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function ib(a,b){var c=a.split("|"),e=a.length;while(e--){d.attrHandle[c[e]]=b}}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function jb(a,b){var c=b&&a,d=c&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||C)-(~a.sourceIndex||C);// Use IE sourceIndex if available on both nodes
if(d){return d}// Check if b follows a
if(c){while(c=c.nextSibling){if(c===b){return-1}}}return a?1:-1}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function kb(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function lb(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function mb(a){return gb(function(b){b=+b;return gb(function(c,d){var e,f=a([],c.length,b),g=f.length;// Match elements found at the specified indexes
while(g--){if(c[e=f[g]]){c[e]=!(d[e]=c[e])}}})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function nb(a){return a&&typeof a.getElementsByTagName!==B&&a}// Expose support vars for convenience
c=eb.support={};/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
f=eb.isXML=function(a){// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":false};/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
l=eb.setDocument=function(a){var b,e=a?a.ownerDocument||a:u,g=e.defaultView;// If no document and documentElement is available, return
if(e===m||e.nodeType!==9||!e.documentElement){return m}// Set our document
m=e;n=e.documentElement;// Support tests
o=!f(e);// Support: IE>8
// If iframe document is assigned to "document" variable and if iframe has been reloaded,
// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
// IE6-8 do not support the defaultView property so parent will be undefined
if(g&&g!==g.top){// IE11 does not have attachEvent, so all must suffer
if(g.addEventListener){g.addEventListener("unload",function(){l()},false)}else if(g.attachEvent){g.attachEvent("onunload",function(){l()})}}/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
c.attributes=hb(function(a){a.className="i";return!a.getAttribute("className")});/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
c.getElementsByTagName=hb(function(a){a.appendChild(e.createComment(""));return!a.getElementsByTagName("*").length});// Check if getElementsByClassName can be trusted
c.getElementsByClassName=Z.test(e.getElementsByClassName)&&hb(function(a){a.innerHTML="<div class='a'></div><div class='a i'></div>";// Support: Safari<4
// Catch class over-caching
a.firstChild.className="i";// Support: Opera<10
// Catch gEBCN failure to find non-leading classes
return a.getElementsByClassName("i").length===2});// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programatically-set names,
// so use a roundabout getElementsByName test
c.getById=hb(function(a){n.appendChild(a).id=t;return!e.getElementsByName||!e.getElementsByName(t).length});// ID find and filter
if(c.getById){d.find["ID"]=function(a,b){if(typeof b.getElementById!==B&&o){var c=b.getElementById(a);// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
return c&&c.parentNode?[c]:[]}};d.filter["ID"]=function(a){var b=a.replace(bb,cb);return function(a){return a.getAttribute("id")===b}}}else{// Support: IE6/7
// getElementById is not reliable as a find shortcut
delete d.find["ID"];d.filter["ID"]=function(a){var b=a.replace(bb,cb);return function(a){var c=typeof a.getAttributeNode!==B&&a.getAttributeNode("id");return c&&c.value===b}}}// Tag
d.find["TAG"]=c.getElementsByTagName?function(a,b){if(typeof b.getElementsByTagName!==B){return b.getElementsByTagName(a)}}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);// Filter out possible comments
if(a==="*"){while(c=f[e++]){if(c.nodeType===1){d.push(c)}}return d}return f};// Class
d.find["CLASS"]=c.getElementsByClassName&&function(a,b){if(typeof b.getElementsByClassName!==B&&o){return b.getElementsByClassName(a)}};/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
q=[];// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See http://bugs.jquery.com/ticket/13378
p=[];if(c.qsa=Z.test(e.querySelectorAll)){// Build QSA regex
// Regex strategy adopted from Diego Perini
hb(function(a){// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// http://bugs.jquery.com/ticket/12359
a.innerHTML="<select t=''><option selected=''></option></select>";// Support: IE8, Opera 10-12
// Nothing should be selected when empty strings follow ^= or $= or *=
if(a.querySelectorAll("[t^='']").length){p.push("[*^$]="+L+"*(?:''|\"\")")}// Support: IE8
// Boolean attributes and "value" are not treated correctly
if(!a.querySelectorAll("[selected]").length){p.push("\\["+L+"*(?:value|"+K+")")}// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
if(!a.querySelectorAll(":checked").length){p.push(":checked")}});hb(function(a){// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var b=e.createElement("input");b.setAttribute("type","hidden");a.appendChild(b).setAttribute("name","D");// Support: IE8
// Enforce case-sensitivity of name attribute
if(a.querySelectorAll("[name=d]").length){p.push("name"+L+"*[*^$|!~]?=")}// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
if(!a.querySelectorAll(":enabled").length){p.push(":enabled",":disabled")}// Opera 10-11 does not throw on post-comma invalid pseudos
a.querySelectorAll("*,:x");p.push(",.*:")})}if(c.matchesSelector=Z.test(r=n.webkitMatchesSelector||n.mozMatchesSelector||n.oMatchesSelector||n.msMatchesSelector)){hb(function(a){// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
c.disconnectedMatch=r.call(a,"div");// This should fail with an exception
// Gecko does not error, returns false instead
r.call(a,"[s!='']:x");q.push("!=",P)})}p=p.length&&new RegExp(p.join("|"));q=q.length&&new RegExp(q.join("|"));/* Contains
	---------------------------------------------------------------------- */
b=Z.test(n.compareDocumentPosition);// Element contains another
// Purposefully does not implement inclusive descendent
// As in, an element does not contain itself
s=b||Z.test(n.contains)?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&(c.contains?c.contains(d):a.compareDocumentPosition&&a.compareDocumentPosition(d)&16))}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true}}}return false};/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
A=b?function(a,b){// Flag for duplicate removal
if(a===b){k=true;return 0}// Sort on method existence if only one input has compareDocumentPosition
var d=!a.compareDocumentPosition-!b.compareDocumentPosition;if(d){return d}// Calculate position if both inputs belong to the same document
d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):// Otherwise we know they are disconnected
1;// Disconnected nodes
if(d&1||!c.sortDetached&&b.compareDocumentPosition(a)===d){// Choose the first element that is related to our preferred document
if(a===e||a.ownerDocument===u&&s(u,a)){return-1}if(b===e||b.ownerDocument===u&&s(u,b)){return 1}// Maintain original order
return j?J.call(j,a)-J.call(j,b):0}return d&4?-1:1}:function(a,b){// Exit early if the nodes are identical
if(a===b){k=true;return 0}var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];// Parentless nodes are either documents or disconnected
if(!f||!g){return a===e?-1:b===e?1:f?-1:g?1:j?J.call(j,a)-J.call(j,b):0}else if(f===g){return jb(a,b)}// Otherwise we need full lists of their ancestors for comparison
c=a;while(c=c.parentNode){h.unshift(c)}c=b;while(c=c.parentNode){i.unshift(c)}// Walk down the tree looking for a discrepancy
while(h[d]===i[d]){d++}// Do a sibling check if the nodes have a common ancestor
// Otherwise nodes in our document sort first
return d?jb(h[d],i[d]):h[d]===u?-1:i[d]===u?1:0};return e};eb.matches=function(a,b){return eb(a,null,null,b)};eb.matchesSelector=function(a,b){// Set document vars if needed
if((a.ownerDocument||a)!==m){l(a)}// Make sure that attribute selectors are quoted
b=b.replace(T,"='$1']");if(c.matchesSelector&&o&&(!q||!q.test(b))&&(!p||!p.test(b))){try{var d=r.call(a,b);// IE 9's matchesSelector returns false on disconnected nodes
if(d||c.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
a.document&&a.document.nodeType!==11){return d}}catch(e){}}return eb(b,m,null,[a]).length>0};eb.contains=function(a,b){// Set document vars if needed
if((a.ownerDocument||a)!==m){l(a)}return s(a,b)};eb.attr=function(a,b){// Set document vars if needed
if((a.ownerDocument||a)!==m){l(a)}var e=d.attrHandle[b.toLowerCase()],// Don't get fooled by Object.prototype properties (jQuery #13807)
f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!o):undefined;return f!==undefined?f:c.attributes||!o?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null};eb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
eb.uniqueSort=function(a){var b,d=[],e=0,f=0;// Unless we *know* we can detect duplicates, assume their presence
k=!c.detectDuplicates;j=!c.sortStable&&a.slice(0);a.sort(A);if(k){while(b=a[f++]){if(b===a[f]){e=d.push(f)}}while(e--){a.splice(d[e],1)}}// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
j=null;return a};/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
e=eb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(!f){// If no nodeType, this is expected to be an array
while(b=a[d++]){// Do not traverse comment nodes
c+=e(b)}}else if(f===1||f===9||f===11){// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if(typeof a.textContent==="string"){return a.textContent}else{// Traverse its children
for(a=a.firstChild;a;a=a.nextSibling){c+=e(a)}}}else if(f===3||f===4){return a.nodeValue}// Do not include comment or processing instruction nodes
return c};d=eb.selectors={// Can be adjusted by the user
cacheLength:50,createPseudo:gb,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){a[1]=a[1].replace(bb,cb);// Move the given value to match[3] whether quoted or unquoted
a[3]=(a[4]||a[5]||"").replace(bb,cb);if(a[2]==="~="){a[3]=" "+a[3]+" "}return a.slice(0,4)},CHILD:function(a){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
a[1]=a[1].toLowerCase();if(a[1].slice(0,3)==="nth"){// nth-* requires argument
if(!a[3]){eb.error(a[0])}// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
a[4]=+(a[4]?a[5]+(a[6]||1):2*(a[3]==="even"||a[3]==="odd"));a[5]=+(a[7]+a[8]||a[3]==="odd")}else if(a[3]){eb.error(a[0])}return a},PSEUDO:function(a){var b,c=!a[5]&&a[2];if(W["CHILD"].test(a[0])){return null}// Accept quoted arguments as-is
if(a[3]&&a[4]!==undefined){a[2]=a[4]}else if(c&&U.test(c)&&(// Get excess from tokenize (recursively)
b=pb(c,true))&&(// advance to the next closing parenthesis
b=c.indexOf(")",c.length-b)-c.length)){// excess is a negative index
a[0]=a[0].slice(0,b);a[2]=c.slice(0,b)}// Return only captures needed by the pseudo filter method (type and argument)
return a.slice(0,3)}},filter:{TAG:function(a){var b=a.replace(bb,cb).toLowerCase();return a==="*"?function(){return true}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=x[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&x(a,function(a){return b.test(typeof a.className==="string"&&a.className||typeof a.getAttribute!==B&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=eb.attr(d,a);if(e==null){return b==="!="}if(!b){return true}e+="";return b==="="?e===c:b==="!="?e!==c:b==="^="?c&&e.indexOf(c)===0:b==="*="?c&&e.indexOf(c)>-1:b==="$="?c&&e.slice(-c.length)===c:b==="~="?(" "+e+" ").indexOf(c)>-1:b==="|="?e===c||e.slice(0,c.length+1)===c+"-":false}},CHILD:function(a,b,c,d,e){var f=a.slice(0,3)!=="nth",g=a.slice(-4)!=="last",h=b==="of-type";// Shortcut for :nth-*(n)
return d===1&&e===0?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){// :(first|last|only)-(child|of-type)
if(f){while(p){l=b;while(l=l[p]){if(h?l.nodeName.toLowerCase()===r:l.nodeType===1){return false}}// Reverse direction for :only-* (if we haven't yet done so)
o=p=a==="only"&&!o&&"nextSibling"}return true}o=[g?q.firstChild:q.lastChild];// non-xml :nth-child(...) stores cache data on `parent`
if(g&&s){// Seek `elem` from a previously-cached index
k=q[t]||(q[t]={});j=k[a]||[];n=j[0]===v&&j[1];m=j[0]===v&&j[2];l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(// Fallback to seeking `elem` from the start
m=n=0)||o.pop()){// When found, cache indexes on `parent` and break
if(l.nodeType===1&&++m&&l===b){k[a]=[v,n,m];break}}}else if(s&&(j=(b[t]||(b[t]={}))[a])&&j[0]===v){m=j[1]}else{// Use the same loop as above to seek `elem` from the start
while(l=++n&&l&&l[p]||(m=n=0)||o.pop()){if((h?l.nodeName.toLowerCase()===r:l.nodeType===1)&&++m){// Cache the index of each encountered element
if(s){(l[t]||(l[t]={}))[a]=[v,m]}if(l===b){break}}}}// Incorporate the offset, then check against cycle size
m-=e;return m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||eb.error("unsupported pseudo: "+a);// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
if(e[t]){return e(b)}// But maintain support for old signatures
if(e.length>1){c=[a,a,"",b];return d.setFilters.hasOwnProperty(a.toLowerCase())?gb(function(a,c){var d,f=e(a,b),g=f.length;while(g--){d=J.call(a,f[g]);a[d]=!(c[d]=f[g])}}):function(a){return e(a,0,c)}}return e}},pseudos:{// Potentially complex pseudos
not:gb(function(a){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var b=[],c=[],d=g(a.replace(Q,"$1"));return d[t]?gb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;// Match elements unmatched by `matcher`
while(h--){if(f=g[h]){a[h]=!(b[h]=f)}}}):function(a,e,f){b[0]=a;d(b,null,f,c);return!c.pop()}}),has:gb(function(a){return function(b){return eb(a,b).length>0}}),contains:gb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:gb(function(a){// lang value must be a valid identifier
if(!V.test(a||"")){eb.error("unsupported lang: "+a)}a=a.replace(bb,cb).toLowerCase();return function(b){var c;do{if(c=o?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang")){c=c.toLowerCase();return c===a||c.indexOf(a+"-")===0}}while((b=b.parentNode)&&b.nodeType===1);return false}}),// Miscellaneous
target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===n},focus:function(a){return a===m.activeElement&&(!m.hasFocus||m.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},// Boolean properties
enabled:function(a){return a.disabled===false},disabled:function(a){return a.disabled===true},checked:function(a){// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){// Accessing this property makes selected-by-default
// options in Safari work properly
if(a.parentNode){a.parentNode.selectedIndex}return a.selected===true},// Contents
empty:function(a){// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(a=a.firstChild;a;a=a.nextSibling){if(a.nodeType<6){return false}}return true},parent:function(a){return!d.pseudos["empty"](a)},// Element/input types
header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},text:function(a){var b;// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
return a.nodeName.toLowerCase()==="input"&&a.type==="text"&&((b=a.getAttribute("type"))==null||b.toLowerCase()==="text")},// Position-in-collection
first:mb(function(){return[0]}),last:mb(function(a,b){return[b-1]}),eq:mb(function(a,b,c){return[c<0?c+b:c]}),even:mb(function(a,b){var c=0;for(;c<b;c+=2){a.push(c)}return a}),odd:mb(function(a,b){var c=1;for(;c<b;c+=2){a.push(c)}return a}),lt:mb(function(a,b,c){var d=c<0?c+b:c;for(;--d>=0;){a.push(d)}return a}),gt:mb(function(a,b,c){var d=c<0?c+b:c;for(;++d<b;){a.push(d)}return a})}};d.pseudos["nth"]=d.pseudos["eq"];// Add button/input type pseudos
for(b in{radio:true,checkbox:true,file:true,password:true,image:true}){d.pseudos[b]=kb(b)}for(b in{submit:true,reset:true}){d.pseudos[b]=lb(b)}// Easy API for creating new setFilters
function ob(){}ob.prototype=d.filters=d.pseudos;d.setFilters=new ob;function pb(a,b){var c,e,f,g,h,i,j,k=y[a+" "];if(k){return b?0:k.slice(0)}h=a;i=[];j=d.preFilter;while(h){// Comma and first run
if(!c||(e=R.exec(h))){if(e){// Don't consume trailing commas as valid
h=h.slice(e[0].length)||h}i.push(f=[])}c=false;// Combinators
if(e=S.exec(h)){c=e.shift();f.push({value:c,// Cast descendant combinators to space
type:e[0].replace(Q," ")});h=h.slice(c.length)}// Filters
for(g in d.filter){if((e=W[g].exec(h))&&(!j[g]||(e=j[g](e)))){c=e.shift();f.push({value:c,type:g,matches:e});h=h.slice(c.length)}}if(!c){break}}// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return b?h.length:h?eb.error(a):y(a,i).slice(0)}function qb(a){var b=0,c=a.length,d="";for(;b<c;b++){d+=a[b].value}return d}function rb(a,b,c){var d=b.dir,e=c&&d==="parentNode",f=w++;// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return b.first?function(b,c,f){while(b=b[d]){if(b.nodeType===1||e){return a(b,c,f)}}}:function(b,c,g){var h,i,j=[v,f];// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
if(g){while(b=b[d]){if(b.nodeType===1||e){if(a(b,c,g)){return true}}}}else{while(b=b[d]){if(b.nodeType===1||e){i=b[t]||(b[t]={});if((h=i[d])&&h[0]===v&&h[1]===f){// Assign to newCache so results back-propagate to previous elements
return j[2]=h[2]}else{// Reuse newcache so results back-propagate to previous elements
i[d]=j;// A match means we're done; a fail means we have to keep checking
if(j[2]=a(b,c,g)){return true}}}}}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--){if(!a[e](b,c,d)){return false}}return true}:a[0]}function tb(a,b,c){var d=0,e=b.length;for(;d<e;d++){eb(a,b[d],c)}return c}function ub(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++){if(f=a[h]){if(!c||c(f,d,e)){g.push(f);if(j){b.push(h)}}}}return g}function vb(a,b,c,d,e,f){if(d&&!d[t]){d=vb(d)}if(e&&!e[t]){e=vb(e,f)}return gb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,// Get initial elements from seed or context
p=f||tb(b||"*",h.nodeType?[h]:h,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
q=a&&(f||!b)?ub(p,m,a,h,i):p,r=c?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
e||(f?a:o||d)?// ...intermediate processing is necessary
[]:// ...otherwise use results directly
g:q;// Find primary matches
if(c){c(q,r,h,i)}// Apply postFilter
if(d){j=ub(r,n);d(j,[],h,i);// Un-match failing elements by moving them back to matcherIn
k=j.length;while(k--){if(l=j[k]){r[n[k]]=!(q[n[k]]=l)}}}if(f){if(e||a){if(e){// Get the final matcherOut by condensing this intermediate into postFinder contexts
j=[];k=r.length;while(k--){if(l=r[k]){// Restore matcherIn since elem is not yet a final match
j.push(q[k]=l)}}e(null,r=[],j,i)}// Move matched elements from seed to results to keep them synchronized
k=r.length;while(k--){if((l=r[k])&&(j=e?J.call(f,l):m[k])>-1){f[j]=!(g[j]=l)}}}}else{r=ub(r===g?r.splice(o,r.length):r);if(e){e(null,g,r,i)}else{H.apply(g,r)}}})}function wb(a){var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],j=g?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
k=rb(function(a){return a===b},h,true),l=rb(function(a){return J.call(b,a)>-1},h,true),m=[function(a,c,d){return!g&&(d||c!==i)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];for(;j<f;j++){if(c=d.relative[a[j].type]){m=[rb(sb(m),c)]}else{c=d.filter[a[j].type].apply(null,a[j].matches);// Return special upon seeing a positional matcher
if(c[t]){// Find the next relative operator (if any) for proper handling
e=++j;for(;e<f;e++){if(d.relative[a[e].type]){break}}// If the preceding token was a descendant combinator, insert an implicit any-element `*`
return vb(j>1&&sb(m),j>1&&qb(a.slice(0,j-1).concat({value:a[j-2].type===" "?"*":""})).replace(Q,"$1"),c,j<e&&wb(a.slice(j,e)),e<f&&wb(a=a.slice(e)),e<f&&qb(a))}m.push(c)}}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,j,k){var l,n,o,p=0,q="0",r=f&&[],s=[],t=i,// We must always have either seed elements or outermost context
u=f||e&&d.find["TAG"]("*",k),// Use integer dirruns iff this is the outermost matcher
w=v+=t==null?1:Math.random()||.1,x=u.length;if(k){i=g!==m&&g}// Add elements passing elementMatchers directly to results
// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(;q!==x&&(l=u[q])!=null;q++){if(e&&l){n=0;while(o=a[n++]){if(o(l,g,h)){j.push(l);break}}if(k){v=w}}// Track unmatched elements for set filters
if(c){// They will have gone through all possible matchers
if(l=!o&&l){p--}// Lengthen the array for every element, matched or not
if(f){r.push(l)}}}// Apply set filters to unmatched elements
p+=q;if(c&&q!==p){n=0;while(o=b[n++]){o(r,s,g,h)}if(f){// Reintegrate element matches to eliminate the need for sorting
if(p>0){while(q--){if(!(r[q]||s[q])){s[q]=F.call(j)}}}// Discard index placeholder values to get only actual matches
s=ub(s)}// Add matches to results
H.apply(j,s);// Seedless set matches succeeding multiple successful matchers stipulate sorting
if(k&&!f&&s.length>0&&p+b.length>1){eb.uniqueSort(j)}}// Override manipulation of globals by nested matchers
if(k){v=w;i=t}return r};return c?gb(f):f}g=eb.compile=function(a,b){var c,d=[],e=[],f=z[a+" "];if(!f){// Generate a function of recursive functions that can be used to check each element
if(!b){b=pb(a)}c=b.length;while(c--){f=wb(b[c]);if(f[t]){d.push(f)}else{e.push(f)}}// Cache the compiled function
f=z(a,xb(e,d));// Save selector and tokenization
f.selector=a}return f};/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
h=eb.select=function(a,b,e,f){var h,i,j,k,l,m=typeof a==="function"&&a,n=!f&&pb(a=m.selector||a);e=e||[];// Try to minimize operations if there is no seed and only one group
if(n.length===1){// Take a shortcut and set the context if the root selector is an ID
i=n[0]=n[0].slice(0);if(i.length>2&&(j=i[0]).type==="ID"&&c.getById&&b.nodeType===9&&o&&d.relative[i[1].type]){b=(d.find["ID"](j.matches[0].replace(bb,cb),b)||[])[0];if(!b){return e}else if(m){b=b.parentNode}a=a.slice(i.shift().value.length)}// Fetch a seed set for right-to-left matching
h=W["needsContext"].test(a)?0:i.length;while(h--){j=i[h];// Abort if we hit a combinator
if(d.relative[k=j.type]){break}if(l=d.find[k]){// Search, expanding context for leading sibling combinators
if(f=l(j.matches[0].replace(bb,cb),_.test(i[0].type)&&nb(b.parentNode)||b)){// If seed is empty or no tokens remain, we can return early
i.splice(h,1);a=f.length&&qb(i);if(!a){H.apply(e,f);return e}break}}}}// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(m||g(a,n))(f,b,!o,e,_.test(a)&&nb(b.parentNode)||b);return e};// One-time assignments
// Sort stability
c.sortStable=t.split("").sort(A).join("")===t;// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
c.detectDuplicates=!!k;// Initialize against the default document
l();// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
c.sortDetached=hb(function(a){// Should return 1, but returns 4 (following)
return a.compareDocumentPosition(m.createElement("div"))&1});// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if(!hb(function(a){a.innerHTML="<a href='#'></a>";return a.firstChild.getAttribute("href")==="#"})){ib("type|href|height|width",function(a,b,c){if(!c){return a.getAttribute(b,b.toLowerCase()==="type"?1:2)}})}// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if(!c.attributes||!hb(function(a){a.innerHTML="<input/>";a.firstChild.setAttribute("value","");return a.firstChild.getAttribute("value")===""})){ib("value",function(a,b,c){if(!c&&a.nodeName.toLowerCase()==="input"){return a.defaultValue}})}// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if(!hb(function(a){return a.getAttribute("disabled")==null})){ib(K,function(a,b,c){var d;if(!c){return a[b]===true?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}})}return eb}(a);n.find=t;n.expr=t.selectors;n.expr[":"]=n.expr.pseudos;n.unique=t.uniqueSort;n.text=t.getText;n.isXMLDoc=t.isXML;n.contains=t.contains;var u=n.expr.match.needsContext;var v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/;var w=/^.[^:#\[\.,]*$/;// Implement the identical functionality for filter and not
function x(a,b,c){if(n.isFunction(b)){return n.grep(a,function(a,d){/* jshint -W018 */
return!!b.call(a,d,a)!==c})}if(b.nodeType){return n.grep(a,function(a){return a===b!==c})}if(typeof b==="string"){if(w.test(b)){return n.filter(b,a,c)}b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];if(c){a=":not("+a+")"}return b.length===1&&d.nodeType===1?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return a.nodeType===1}))};n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if(typeof a!=="string"){return this.pushStack(n(a).filter(function(){for(b=0;b<c;b++){if(n.contains(e[b],this)){return true}}}))}for(b=0;b<c;b++){n.find(a,e[b],d)}// Needed because $( selector, context ) becomes $( context ).find( selector )
d=this.pushStack(c>1?n.unique(d):d);d.selector=this.selector?this.selector+" "+a:a;return d},filter:function(a){return this.pushStack(x(this,a||[],false))},not:function(a){return this.pushStack(x(this,a||[],true))},is:function(a){// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!x(this,typeof a==="string"&&u.test(a)?n(a):a||[],false).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var y,// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!a){return this}// Handle HTML strings
if(typeof a==="string"){if(a[0]==="<"&&a[a.length-1]===">"&&a.length>=3){// Assume that strings that start and end with <> are HTML and skip the regex check
c=[null,a,null]}else{c=z.exec(a)}// Match html or make sure no context is specified for #id
if(c&&(c[1]||!b)){// HANDLE: $(html) -> $(array)
if(c[1]){b=b instanceof n?b[0]:b;// scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,true));// HANDLE: $(html, props)
if(v.test(c[1])&&n.isPlainObject(b)){for(c in b){// Properties of context are called as methods if possible
if(n.isFunction(this[c])){this[c](b[c])}else{this.attr(c,b[c])}}}return this}else{d=l.getElementById(c[2]);// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
if(d&&d.parentNode){// Inject the element directly into the jQuery object
this.length=1;this[0]=d}this.context=l;this.selector=a;return this}}else if(!b||b.jquery){return(b||y).find(a)}else{return this.constructor(b).find(a)}}else if(a.nodeType){this.context=this[0]=a;this.length=1;return this}else if(n.isFunction(a)){// Execute immediately if ready is not present
return typeof y.ready!=="undefined"?y.ready(a):a(n)}if(a.selector!==undefined){this.selector=a.selector;this.context=a.context}return n.makeArray(a,this)};// Give the init function the jQuery prototype for later instantiation
A.prototype=n.fn;// Initialize central reference
y=n(l);var B=/^(?:parents|prev(?:Until|All))/,// methods guaranteed to produce a unique set when starting from a unique set
C={children:true,contents:true,next:true,prev:true};n.extend({dir:function(a,b,c){var d=[],e=c!==undefined;while((a=a[b])&&a.nodeType!==9){if(a.nodeType===1){if(e&&n(a).is(c)){break}d.push(a)}}return d},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling){if(a.nodeType===1&&a!==b){c.push(a)}}return c}});n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){var a=0;for(;a<c;a++){if(n.contains(this,b[a])){return true}}})},closest:function(a,b){var c,d=0,e=this.length,f=[],g=u.test(a)||typeof a!=="string"?n(a,b||this.context):0;for(;d<e;d++){for(c=this[d];c&&c!==b;c=c.parentNode){// Always skip document fragments
if(c.nodeType<11&&(g?g.index(c)>-1:// Don't pass non-elements to Sizzle
c.nodeType===1&&n.find.matchesSelector(c,a))){f.push(c);break}}}return this.pushStack(f.length>1?n.unique(f):f)},// Determine the position of an element within
// the matched set of elements
index:function(a){// No argument, return index in parent
if(!a){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1}// index in selector
if(typeof a==="string"){return g.call(n(a),this[0])}// Locate the position of the desired element
// If it receives a jQuery object, the first element is used
return g.call(this,a.jquery?a[0]:a)},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&a.nodeType!==1){}return a}n.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);if(a.slice(-5)!=="Until"){d=c}if(d&&typeof d==="string"){e=n.filter(d,e)}if(this.length>1){// Remove duplicates
if(!C[a]){n.unique(e)}// Reverse order for parents* and prev-derivatives
if(B.test(a)){e.reverse()}}return this.pushStack(e)}});var E=/\S+/g;// String to Object options format cache
var F={};// Convert String-formatted options into Object-formatted ones and store in cache
function G(a){var b=F[a]={};n.each(a.match(E)||[],function(a,c){b[c]=true});return b}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
n.Callbacks=function(a){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
a=typeof a==="string"?F[a]||G(a):n.extend({},a);var// Last fire value (for non-forgettable lists)
b,// Flag to know if list was already fired
c,// Flag to know if list is currently firing
d,// First callback to fire (used internally by add and fireWith)
e,// End of the loop when firing
f,// Index of currently firing callback (modified by remove if needed)
g,// Actual callback list
h=[],// Stack of fire calls for repeatable lists
i=!a.once&&[],// Fire callbacks
j=function(l){b=a.memory&&l;c=true;g=e||0;e=0;f=h.length;d=true;for(;h&&g<f;g++){if(h[g].apply(l[0],l[1])===false&&a.stopOnFalse){b=false;// To prevent further calls using add
break}}d=false;if(h){if(i){if(i.length){j(i.shift())}}else if(b){h=[]}else{k.disable()}}},// Actual Callbacks object
k={// Add a callback or a collection of callbacks to the list
add:function(){if(h){// First, we save the current length
var c=h.length;(function g(b){n.each(b,function(b,c){var d=n.type(c);if(d==="function"){if(!a.unique||!k.has(c)){h.push(c)}}else if(c&&c.length&&d!=="string"){// Inspect recursively
g(c)}})})(arguments);// Do we need to add the callbacks to the
// current firing batch?
if(d){f=h.length}else if(b){e=c;j(b)}}return this},// Remove a callback from the list
remove:function(){if(h){n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1){h.splice(c,1);// Handle firing indexes
if(d){if(c<=f){f--}if(c<=g){g--}}}})}return this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(a){return a?n.inArray(a,h)>-1:!!(h&&h.length)},// Remove all callbacks from the list
empty:function(){h=[];f=0;return this},// Have the list do nothing anymore
disable:function(){h=i=b=undefined;return this},// Is it disabled?
disabled:function(){return!h},// Lock the list in its current state
lock:function(){i=undefined;if(!b){k.disable()}return this},// Is it locked?
locked:function(){return!i},// Call all callbacks with the given context and arguments
fireWith:function(a,b){if(h&&(!c||i)){b=b||[];b=[a,b.slice?b.slice():b];if(d){i.push(b)}else{j(b)}}return this},// Call all the callbacks with the given arguments
fire:function(){k.fireWith(this,arguments);return this},// To know if the callbacks have already been called at least once
fired:function(){return!!c}};return k};n.extend({Deferred:function(a){var b=[// action, add listener, listener list, final state
["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){e.done(arguments).fail(arguments);return this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];// deferred[ done | fail | progress ] for forwarding actions to newDefer
e[f[1]](function(){var a=g&&g.apply(this,arguments);if(a&&n.isFunction(a.promise)){a.promise().done(c.resolve).fail(c.reject).progress(c.notify)}else{c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)}})});a=null}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(a){return a!=null?n.extend(a,d):d}},e={};// Keep pipe for back-compat
d.pipe=d.then;// Add list-specific methods
n.each(b,function(a,f){var g=f[2],h=f[3];// promise[ done | fail | progress ] = list.add
d[f[1]]=g.add;// Handle state
if(h){g.add(function(){// state = [ resolved | rejected ]
c=h},b[a^1][2].disable,b[2][2].lock)}// deferred[ resolve | reject | notify ]
e[f[0]]=function(){e[f[0]+"With"](this===e?d:this,arguments);return this};e[f[0]+"With"]=g.fireWith});// Make the deferred a promise
d.promise(e);// Call given func if any
if(a){a.call(e,e)}// All done!
return e},// Deferred helper
when:function(a){var b=0,c=d.call(arguments),e=c.length,// the count of uncompleted subordinates
f=e!==1||a&&n.isFunction(a.promise)?e:0,// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
g=f===1?a:n.Deferred(),// Update function for both resolve and progress values
h=function(a,b,c){return function(e){b[a]=this;c[a]=arguments.length>1?d.call(arguments):e;if(c===i){g.notifyWith(b,c)}else if(!--f){g.resolveWith(b,c)}}},i,j,k;// add listeners to Deferred subordinates; treat others as resolved
if(e>1){i=new Array(e);j=new Array(e);k=new Array(e);for(;b<e;b++){if(c[b]&&n.isFunction(c[b].promise)){c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i))}else{--f}}}// if we're not waiting on anything, resolve the master
if(!f){g.resolveWith(k,c)}return g.promise()}});// The deferred used on DOM ready
var H;n.fn.ready=function(a){// Add the callback
n.ready.promise().done(a);return this};n.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:false,// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,// Hold (or release) the ready event
holdReady:function(a){if(a){n.readyWait++}else{n.ready(true)}},// Handle when the DOM is ready
ready:function(a){// Abort if there are pending holds or we're already ready
if(a===true?--n.readyWait:n.isReady){return}// Remember that the DOM is ready
n.isReady=true;// If a normal DOM Ready event fired, decrement, and wait if need be
if(a!==true&&--n.readyWait>0){return}// If there are functions bound, to execute
H.resolveWith(l,[n]);// Trigger any bound ready events
if(n.fn.triggerHandler){n(l).triggerHandler("ready");n(l).off("ready")}}});/**
 * The ready event handler and self cleanup method
 */
function I(){l.removeEventListener("DOMContentLoaded",I,false);a.removeEventListener("load",I,false);n.ready()}n.ready.promise=function(b){if(!H){H=n.Deferred();// Catch cases where $(document).ready() is called after the browser event has already occurred.
// we once tried to use readyState "interactive" here, but it caused issues like the one
// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
if(l.readyState==="complete"){// Handle it asynchronously to allow scripts the opportunity to delay ready
setTimeout(n.ready)}else{// Use the handy event callback
l.addEventListener("DOMContentLoaded",I,false);// A fallback to window.onload, that will always work
a.addEventListener("load",I,false)}}return H.promise(b)};// Kick off the DOM ready check even if the user does not
n.ready.promise();// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=c==null;// Sets many values
if(n.type(c)==="object"){e=true;for(h in c){n.access(a,b,h,c[h],true,f,g)}}else if(d!==undefined){e=true;if(!n.isFunction(d)){g=true}if(j){// Bulk operations run against the entire set
if(g){b.call(a,d);b=null}else{j=b;b=function(a,b,c){return j.call(n(a),c)}}}if(b){for(;h<i;h++){b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)))}}}// Gets
return e?a:j?b.call(a):i?b(a[0],c):f};/**
 * Determines whether an object can have data
 */
n.acceptData=function(a){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
/* jshint -W018 */
return a.nodeType===1||a.nodeType===9||!+a.nodeType};function K(){// Support: Android < 4,
// Old WebKit does not have Object.preventExtensions/freeze method,
// return new empty object instead with no [[set]] accessor
Object.defineProperty(this.cache={},0,{get:function(){return{}}});this.expando=n.expando+Math.random()}K.uid=1;K.accepts=n.acceptData;K.prototype={key:function(a){// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return the key for a frozen object.
if(!K.accepts(a)){return 0}var b={},// Check if the owner object already has a cache key
c=a[this.expando];// If not, create one
if(!c){c=K.uid++;// Secure it in a non-enumerable, non-writable property
try{b[this.expando]={value:c};Object.defineProperties(a,b)}catch(d){b[this.expando]=c;n.extend(a,b)}}// Ensure the cache object
if(!this.cache[c]){this.cache[c]={}}return c},set:function(a,b,c){var d,// There may be an unlock assigned to this node,
// if there is no entry for this "owner", create one inline
// and set the unlock as though an owner entry had always existed
e=this.key(a),f=this.cache[e];// Handle: [ owner, key, value ] args
if(typeof b==="string"){f[b]=c}else{// Fresh assignments by object are shallow copied
if(n.isEmptyObject(f)){n.extend(this.cache[e],b)}else{for(d in b){f[d]=b[d]}}}return f},get:function(a,b){// Either a valid cache is found, or will be created.
// New caches will be created and the unlock returned,
// allowing direct access to the newly created
// empty data object. A valid owner object must be provided.
var c=this.cache[this.key(a)];return b===undefined?c:c[b]},access:function(a,b,c){var d;// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
if(b===undefined||b&&typeof b==="string"&&c===undefined){d=this.get(a,b);return d!==undefined?d:this.get(a,n.camelCase(b))}// [*]When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(a,b,c);// Since the "set" path can have two possible entry points
// return the expected data based on which path was taken[*]
return c!==undefined?c:b},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(b===undefined){this.cache[f]={}}else{// Support array or space separated string of keys
if(n.isArray(b)){// If "name" is an array of keys...
// When data is initially created, via ("key", "val") signature,
// keys will be converted to camelCase.
// Since there is no way to tell _how_ a key was added, remove
// both plain key and camelCase key. #12786
// This will only penalize the array argument path.
d=b.concat(b.map(n.camelCase))}else{e=n.camelCase(b);// Try the string as a key before any manipulation
if(b in g){d=[b,e]}else{// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
d=e;d=d in g?[d]:d.match(E)||[]}}c=d.length;while(c--){delete g[d[c]]}}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){if(a[this.expando]){delete this.cache[a[this.expando]]}}};var L=new K;var M=new K;/*
	Implementation Summary

	1. Enforce API surface and semantic compatibility with 1.9.x branch
	2. Improve the module's maintainability by reducing the storage
		paths to a single mechanism.
	3. Use the same single mechanism to support "private" and "user" data.
	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	5. Avoid exposing implementation details on user objects (eg. expando properties)
	6. Provide a clear path for implementation upgrade to WeakMap in 2014
*/
var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(c===undefined&&a.nodeType===1){d="data-"+b.replace(O,"-$1").toLowerCase();c=a.getAttribute(d);if(typeof c==="string"){try{c=c==="true"?true:c==="false"?false:c==="null"?null:// Only convert to a number if it doesn't change the string
+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}// Make sure we set the data so it isn't changed later
M.set(a,b,c)}else{c=undefined}}return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to data_priv methods, these can be deprecated.
_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}});n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;// Gets all values
if(a===undefined){if(this.length){e=M.get(f);if(f.nodeType===1&&!L.get(f,"hasDataAttrs")){c=g.length;while(c--){d=g[c].name;if(d.indexOf("data-")===0){d=n.camelCase(d.slice(5));P(f,d,e[d])}}L.set(f,"hasDataAttrs",true)}}return e}// Sets multiple values
if(typeof a==="object"){return this.each(function(){M.set(this,a)})}return J(this,function(b){var c,d=n.camelCase(a);// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(f&&b===undefined){// Attempt to get data from the cache
// with the key as-is
c=M.get(f,a);if(c!==undefined){return c}// Attempt to get data from the cache
// with the key camelized
c=M.get(f,d);if(c!==undefined){return c}// Attempt to "discover" the data in
// HTML5 custom data-* attrs
c=P(f,d,undefined);if(c!==undefined){return c}// We tried really hard, but the data doesn't exist.
return}// Set the data...
this.each(function(){// First, attempt to store a copy or reference of any
// data that might've been store with a camelCased key.
var c=M.get(this,d);// For HTML5 data-* attribute interop, we have to
// store property names with dashes in a camelCase form.
// This might not apply to all properties...*
M.set(this,d,b);// *... In the case of properties that might _actually_
// have dashes, we need to also store a copy of that
// unchanged property.
if(a.indexOf("-")!==-1&&c!==undefined){M.set(this,a,b)}})},null,b,arguments.length>1,null,true)},removeData:function(a){return this.each(function(){M.remove(this,a)})}});n.extend({queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue";d=L.get(a,b);// Speed up dequeue by getting out quickly if this is just a lookup
if(c){if(!d||n.isArray(c)){d=L.access(a,b,n.makeArray(c))}else{d.push(c)}}return d||[]}},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};// If the fx queue is dequeued, always remove the progress sentinel
if(e==="inprogress"){e=c.shift();d--}if(e){// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
if(b==="fx"){c.unshift("inprogress")}// clear up the last queue stop function
delete f.stop;e.call(a,g,f)}if(!d&&f){f.empty.fire()}},// not intended for public consumption - generates a queueHooks object, or returns the current one
_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}});n.fn.extend({queue:function(a,b){var c=2;if(typeof a!=="string"){b=a;a="fx";c--}if(arguments.length<c){return n.queue(this[0],a)}return b===undefined?this:this.each(function(){var c=n.queue(this,a,b);// ensure a hooks for this queue
n._queueHooks(this,a);if(a==="fx"&&c[0]!=="inprogress"){n.dequeue(this,a)}})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){if(!--d){e.resolveWith(f,[f])}};if(typeof a!=="string"){b=a;a=undefined}a=a||"fx";while(g--){c=L.get(f[g],a+"queueHooks");if(c&&c.empty){d++;c.empty.add(h)}}h();return e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var R=["Top","Right","Bottom","Left"];var S=function(a,b){// isHidden might be called from jQuery#filter function;
// in that case, element will be second argument
a=b||a;return n.css(a,"display")==="none"||!n.contains(a.ownerDocument,a)};var T=/^(?:checkbox|radio)$/i;(function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");// #11217 - WebKit loses check when the name is after the checked attribute
// Support: Windows Web Apps (WWA)
// `name` and `type` need .setAttribute for WWA
c.setAttribute("type","radio");c.setAttribute("checked","checked");c.setAttribute("name","t");b.appendChild(c);// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
// old WebKit doesn't clone checked state correctly in fragments
k.checkClone=b.cloneNode(true).cloneNode(true).lastChild.checked;// Make sure textarea (and checkbox) defaultValue is properly cloned
// Support: IE9-IE11+
b.innerHTML="<textarea>x</textarea>";k.noCloneChecked=!!b.cloneNode(true).lastChild.defaultValue})();var U=typeof undefined;k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return true}function $(){return false}function _(){try{return l.activeElement}catch(a){}}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(!r){return}// Caller can pass in an object of custom data in lieu of the handler
if(c.handler){f=c;c=f.handler;e=f.selector}// Make sure that the handler has a unique ID, used to find/remove it later
if(!c.guid){c.guid=n.guid++}// Init the element's event structure and main handler, if this is the first
if(!(i=r.events)){i=r.events={}}if(!(g=r.handle)){g=r.handle=function(b){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):undefined}}// Handle multiple events separated by a space
b=(b||"").match(E)||[""];j=b.length;while(j--){h=Y.exec(b[j])||[];o=q=h[1];p=(h[2]||"").split(".").sort();// There *must* be a type, no attaching namespace-only handlers
if(!o){continue}// If event changes its type, use the special event handlers for the changed type
l=n.event.special[o]||{};// If selector defined, determine special event api type, otherwise given type
o=(e?l.delegateType:l.bindType)||o;// Update special based on newly reset type
l=n.event.special[o]||{};// handleObj is passed to all event handlers
k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f);// Init the event handler queue if we're the first
if(!(m=i[o])){m=i[o]=[];m.delegateCount=0;// Only use addEventListener if the special events handler returns false
if(!l.setup||l.setup.call(a,d,p,g)===false){if(a.addEventListener){a.addEventListener(o,g,false)}}}if(l.add){l.add.call(a,k);if(!k.handler.guid){k.handler.guid=c.guid}}// Add to the element's handler list, delegates in front
if(e){m.splice(m.delegateCount++,0,k)}else{m.push(k)}// Keep track of which events have ever been used, for event optimization
n.event.global[o]=true}},// Detach an event or set of events from an element
remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(!r||!(i=r.events)){return}// Once for each type.namespace in types; type may be omitted
b=(b||"").match(E)||[""];j=b.length;while(j--){h=Y.exec(b[j])||[];o=q=h[1];p=(h[2]||"").split(".").sort();// Unbind all events (on this namespace, if provided) for the element
if(!o){for(o in i){n.event.remove(a,o+b[j],c,d,true)}continue}l=n.event.special[o]||{};o=(d?l.delegateType:l.bindType)||o;m=i[o]||[];h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)");// Remove matching events
g=f=m.length;while(f--){k=m[f];if((e||q===k.origType)&&(!c||c.guid===k.guid)&&(!h||h.test(k.namespace))&&(!d||d===k.selector||d==="**"&&k.selector)){m.splice(f,1);if(k.selector){m.delegateCount--}if(l.remove){l.remove.call(a,k)}}}// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
if(g&&!m.length){if(!l.teardown||l.teardown.call(a,p,r.handle)===false){n.removeEvent(a,o,r.handle)}delete i[o]}}// Remove the expando if it's no longer used
if(n.isEmptyObject(i)){delete r.handle;L.remove(a,"events")}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];g=h=d=d||l;// Don't do events on text and comment nodes
if(d.nodeType===3||d.nodeType===8){return}// focus/blur morphs to focusin/out; ensure we're not firing them right now
if(X.test(q+n.event.triggered)){return}if(q.indexOf(".")>=0){// Namespaced trigger; create a regexp to match event type in handle()
r=q.split(".");q=r.shift();r.sort()}k=q.indexOf(":")<0&&"on"+q;// Caller can pass in a jQuery.Event object, Object, or just an event type string
b=b[n.expando]?b:new n.Event(q,typeof b==="object"&&b);// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
b.isTrigger=e?2:3;b.namespace=r.join(".");b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;// Clean up the event in case it is being reused
b.result=undefined;if(!b.target){b.target=d}// Clone any incoming data and prepend the event, creating the handler arg list
c=c==null?[b]:n.makeArray(c,[b]);// Allow special events to draw outside the lines
o=n.event.special[q]||{};if(!e&&o.trigger&&o.trigger.apply(d,c)===false){return}// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!e&&!o.noBubble&&!n.isWindow(d)){i=o.delegateType||q;if(!X.test(i+q)){g=g.parentNode}for(;g;g=g.parentNode){p.push(g);h=g}// Only add window if we got to document (e.g., not plain obj or detached DOM)
if(h===(d.ownerDocument||l)){p.push(h.defaultView||h.parentWindow||a)}}// Fire handlers on the event path
f=0;while((g=p[f++])&&!b.isPropagationStopped()){b.type=f>1?i:o.bindType||q;// jQuery handler
m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle");if(m){m.apply(g,c)}// Native handler
m=k&&g[k];if(m&&m.apply&&n.acceptData(g)){b.result=m.apply(g,c);if(b.result===false){b.preventDefault()}}}b.type=q;// If nobody prevented the default action, do it now
if(!e&&!b.isDefaultPrevented()){if((!o._default||o._default.apply(p.pop(),c)===false)&&n.acceptData(d)){// Call a native DOM method on the target with the same name name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
if(k&&n.isFunction(d[q])&&!n.isWindow(d)){// Don't re-trigger an onFOO event when we call its FOO() method
h=d[k];if(h){d[k]=null}// Prevent re-triggering of the same event, since we already bubbled it above
n.event.triggered=q;d[q]();n.event.triggered=undefined;if(h){d[k]=h}}}}return b.result},dispatch:function(a){// Make a writable jQuery.Event from the native event object
a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};// Use the fix-ed jQuery.Event rather than the (read-only) native event
i[0]=a;a.delegateTarget=this;// Call the preDispatch hook for the mapped type, and let it bail if desired
if(k.preDispatch&&k.preDispatch.call(this,a)===false){return}// Determine handlers
h=n.event.handlers.call(this,a,j);// Run delegates first; they may want to stop propagation beneath us
b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem;c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped()){// Triggered event must either 1) have no namespace, or
// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
if(!a.namespace_re||a.namespace_re.test(g.namespace)){a.handleObj=g;a.data=g.data;e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i);if(e!==undefined){if((a.result=e)===false){a.preventDefault();a.stopPropagation()}}}}}// Call the postDispatch hook for the mapped type
if(k.postDispatch){k.postDispatch.call(this,a)}return a.result},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;// Find delegate handlers
// Black-hole SVG <use> instance trees (#13180)
// Avoid non-left-click bubbling in Firefox (#3861)
if(h&&i.nodeType&&(!a.button||a.type!=="click")){for(;i!==this;i=i.parentNode||this){// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(i.disabled!==true||a.type!=="click"){d=[];for(c=0;c<h;c++){f=b[c];// Don't conflict with Object.prototype properties (#13203)
e=f.selector+" ";if(d[e]===undefined){d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length}if(d[e]){d.push(f)}}if(d.length){g.push({elem:i,handlers:d})}}}}// Add the remaining (directly-bound) handlers
if(h<b.length){g.push({elem:this,handlers:b.slice(h)})}return g},// Includes some event props shared by KeyEvent and MouseEvent
props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){// Add which for key events
if(a.which==null){a.which=b.charCode!=null?b.charCode:b.keyCode}return a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;// Calculate pageX/Y if missing and clientX/Y available
if(a.pageX==null&&b.clientX!=null){c=a.target.ownerDocument||l;d=c.documentElement;e=c.body;a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0);a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)}// Add which for click: 1 === left; 2 === middle; 3 === right
// Note: button is not normalized, so don't use it
if(!a.which&&f!==undefined){a.which=f&1?1:f&2?3:f&4?2:0}return a}},fix:function(a){if(a[n.expando]){return a}// Create a writable copy of the event object and normalize some properties
var b,c,d,e=a.type,f=a,g=this.fixHooks[e];if(!g){this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}}d=g.props?this.props.concat(g.props):this.props;a=new n.Event(f);b=d.length;while(b--){c=d[b];a[c]=f[c]}// Support: Cordova 2.5 (WebKit) (#13255)
// All events should have a target; Cordova deviceready doesn't
if(!a.target){a.target=l}// Support: Safari 6.0+, Chrome < 28
// Target should not be a text node (#504, #13143)
if(a.target.nodeType===3){a.target=a.target.parentNode}return g.filter?g.filter(a,f):a},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:true},focus:{// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==_()&&this.focus){this.focus();return false}},delegateType:"focusin"},blur:{trigger:function(){if(this===_()&&this.blur){this.blur();return false}},delegateType:"focusout"},click:{// For checkbox, fire native event so checked state will be right
trigger:function(){if(this.type==="checkbox"&&this.click&&n.nodeName(this,"input")){this.click();return false}},// For cross-browser consistency, don't fire native .click() on links
_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
if(a.result!==undefined&&a.originalEvent){a.originalEvent.returnValue=a.result}}}},simulate:function(a,b,c,d){// Piggyback on a donor event to simulate a different one.
// Fake originalEvent to avoid donor's stopPropagation, but if the
// simulated event prevents default then we do the same on the donor.
var e=n.extend(new n.Event,c,{type:a,isSimulated:true,originalEvent:{}});if(d){n.event.trigger(e,null,b)}else{n.event.dispatch.call(b,e)}if(e.isDefaultPrevented()){c.preventDefault()}}};n.removeEvent=function(a,b,c){if(a.removeEventListener){a.removeEventListener(b,c,false)}};n.Event=function(a,b){// Allow instantiation without the 'new' keyword
if(!(this instanceof n.Event)){return new n.Event(a,b)}// Event object
if(a&&a.type){this.originalEvent=a;this.type=a.type;// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=a.defaultPrevented||a.defaultPrevented===undefined&&// Support: Android < 4.0
a.returnValue===false?Z:$}else{this.type=a}// Put explicitly provided properties onto the event object
if(b){n.extend(this,b)}// Create a timestamp if incoming event doesn't have one
this.timeStamp=a&&a.timeStamp||n.now();// Mark it as fixed
this[n.expando]=true};// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z;if(a&&a.preventDefault){a.preventDefault()}},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z;if(a&&a.stopPropagation){a.stopPropagation()}},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z;if(a&&a.stopImmediatePropagation){a.stopImmediatePropagation()}this.stopPropagation()}};// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;// For mousenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
if(!e||e!==d&&!n.contains(d,e)){a.type=f.origType;c=f.handler.apply(this,arguments);a.type=b}return c}}});// Create "bubbling" focus and blur events
// Support: Firefox, Chrome, Safari
if(!k.focusinBubbles){n.each({focus:"focusin",blur:"focusout"},function(a,b){// Attach a single capturing handler on the document while someone wants focusin/focusout
var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),true)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);if(!e){d.addEventListener(a,c,true)}L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;if(!e){d.removeEventListener(a,c,true);L.remove(d,b)}else{L.access(d,b,e)}}}})}n.fn.extend({on:function(a,b,c,d,/*INTERNAL*/e){var f,g;// Types can be a map of types/handlers
if(typeof a==="object"){// ( types-Object, selector, data )
if(typeof b!=="string"){// ( types-Object, data )
c=c||b;b=undefined}for(g in a){this.on(g,b,c,a[g],e)}return this}if(c==null&&d==null){// ( types, fn )
d=b;c=b=undefined}else if(d==null){if(typeof b==="string"){// ( types, selector, fn )
d=c;c=undefined}else{// ( types, data, fn )
d=c;c=b;b=undefined}}if(d===false){d=$}else if(!d){return this}if(e===1){f=d;d=function(a){// Can use an empty set, since event contains the info
n().off(a);return f.apply(this,arguments)};// Use same guid so caller can remove using origFn
d.guid=f.guid||(f.guid=n.guid++)}return this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj){// ( event )  dispatched jQuery.Event
d=a.handleObj;n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler);return this}if(typeof a==="object"){// ( types-object [, selector] )
for(e in a){this.off(e,b,a[e])}return this}if(b===false||typeof b==="function"){// ( types [, fn] )
c=b;b=undefined}if(c===false){c=$}return this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c){return n.event.trigger(a,b,c,true)}}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,// checked="checked" or checked
eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,// We have to close these tags to support XHTML (#13200)
ib={// Support: IE 9
option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};// Support: IE 9
ib.optgroup=ib.option;ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead;ib.th=ib.td;// Support: 1.x compatibility
// Manipulating tables requires a tbody
function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(b.nodeType!==11?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}// Replace/restore the type attribute of script elements for safe DOM manipulation
function kb(a){a.type=(a.getAttribute("type")!==null)+"/"+a.type;return a}function lb(a){var b=gb.exec(a.type);if(b){a.type=b[1]}else{a.removeAttribute("type")}return a}// Mark scripts as having already been evaluated
function mb(a,b){var c=0,d=a.length;for(;c<d;c++){L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}}function nb(a,b){var c,d,e,f,g,h,i,j;if(b.nodeType!==1){return}// 1. Copy private data: events, handlers, etc.
if(L.hasData(a)){f=L.access(a);g=L.set(b,f);j=f.events;if(j){delete g.handle;g.events={};for(e in j){for(c=0,d=j[e].length;c<d;c++){n.event.add(b,e,j[e][c])}}}}// 2. Copy user data
if(M.hasData(a)){h=M.access(a);i=n.extend({},h);M.set(b,i)}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return b===undefined||b&&n.nodeName(a,b)?n.merge([a],c):c}// Support: IE >= 9
function pb(a,b){var c=b.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
if(c==="input"&&T.test(a.type)){b.checked=a.checked}else if(c==="input"||c==="textarea"){b.defaultValue=a.defaultValue}}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(true),i=n.contains(a.ownerDocument,a);// Support: IE >= 9
// Fix Cloning issues
if(!k.noCloneChecked&&(a.nodeType===1||a.nodeType===11)&&!n.isXMLDoc(a)){// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
g=ob(h);f=ob(a);for(d=0,e=f.length;d<e;d++){pb(f[d],g[d])}}// Copy the events from the original to the clone
if(b){if(c){f=f||ob(a);g=g||ob(h);for(d=0,e=f.length;d<e;d++){nb(f[d],g[d])}}else{nb(a,h)}}// Preserve script evaluation history
g=ob(h,"script");if(g.length>0){mb(g,!i&&ob(a,"script"))}// Return the cloned set
return h},buildFragment:function(a,b,c,d){var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;for(;m<o;m++){e=a[m];if(e||e===0){// Add nodes directly
if(n.type(e)==="object"){// Support: QtWebKit
// jQuery.merge because push.apply(_, arraylike) throws
n.merge(l,e.nodeType?[e]:e)}else if(!cb.test(e)){l.push(b.createTextNode(e))}else{f=f||k.appendChild(b.createElement("div"));// Deserialize a standard representation
g=(bb.exec(e)||["",""])[1].toLowerCase();h=ib[g]||ib._default;f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2];// Descend through wrappers to the right content
j=h[0];while(j--){f=f.lastChild}// Support: QtWebKit
// jQuery.merge because push.apply(_, arraylike) throws
n.merge(l,f.childNodes);// Remember the top-level container
f=k.firstChild;// Fixes #12346
// Support: Webkit, IE
f.textContent=""}}}// Remove wrapper from fragment
k.textContent="";m=0;while(e=l[m++]){// #4087 - If origin and destination elements are the same, and this is
// that element, do not do anything
if(d&&n.inArray(e,d)!==-1){continue}i=n.contains(e.ownerDocument,e);// Append to fragment
f=ob(k.appendChild(e),"script");// Preserve script evaluation history
if(i){mb(f)}// Capture executables
if(c){j=0;while(e=f[j++]){if(fb.test(e.type||"")){c.push(e)}}}}return k},cleanData:function(a){var b,c,d,e,f=n.event.special,g=0;for(;(c=a[g])!==undefined;g++){if(n.acceptData(c)){e=c[L.expando];if(e&&(b=L.cache[e])){if(b.events){for(d in b.events){if(f[d]){n.event.remove(c,d)}else{n.removeEvent(c,d,b.handle)}}}if(L.cache[e]){// Discard any remaining `private` data
delete L.cache[e]}}}// Discard any remaining `user` data
delete M.cache[c[M.expando]]}}});n.fn.extend({text:function(a){return J(this,function(a){return a===undefined?n.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=a}})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){if(this.parentNode){this.parentNode.insertBefore(a,this)}})},after:function(){return this.domManip(arguments,function(a){if(this.parentNode){this.parentNode.insertBefore(a,this.nextSibling)}})},remove:function(a,b){var c,d=a?n.filter(a,this):this,e=0;for(;(c=d[e])!=null;e++){if(!b&&c.nodeType===1){n.cleanData(ob(c))}if(c.parentNode){if(b&&n.contains(c.ownerDocument,c)){mb(ob(c,"script"))}c.parentNode.removeChild(c)}}return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){if(a.nodeType===1){// Prevent memory leaks
n.cleanData(ob(a,false));// Remove any remaining nodes
a.textContent=""}}return this},clone:function(a,b){a=a==null?false:a;b=b==null?a:b;return this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(a===undefined&&b.nodeType===1){return b.innerHTML}// See if we can take a shortcut and just use innerHTML
if(typeof a==="string"&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;c<d;c++){b=this[c]||{};// Remove element nodes and prevent memory leaks
if(b.nodeType===1){n.cleanData(ob(b,false));b.innerHTML=a}}b=0}catch(e){}}if(b){this.empty().append(a)}},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];// Make the changes, replacing each context element with the new content
this.domManip(arguments,function(b){a=this.parentNode;n.cleanData(ob(this));if(a){a.replaceChild(b,this)}});// Force removal if there was no new content (e.g., from empty arguments)
return a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,true)},domManip:function(a,b){// Flatten any nested arrays
a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);// We can't cloneNode fragments that contain checked, in WebKit
if(q||l>1&&typeof p==="string"&&!k.checkClone&&eb.test(p)){return this.each(function(c){var d=m.eq(c);if(q){a[0]=p.call(this,c,d.html())}d.domManip(a,b)})}if(l){c=n.buildFragment(a,this[0].ownerDocument,false,this);d=c.firstChild;if(c.childNodes.length===1){c=d}if(d){f=n.map(ob(c,"script"),kb);g=f.length;// Use the original fragment for the last item instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(;j<l;j++){h=c;if(j!==o){h=n.clone(h,true,true);// Keep references to cloned scripts for later restoration
if(g){// Support: QtWebKit
// jQuery.merge because push.apply(_, arraylike) throws
n.merge(f,ob(h,"script"))}}b.call(this[j],h,j)}if(g){i=f[f.length-1].ownerDocument;// Reenable scripts
n.map(f,lb);// Evaluate executable scripts on first document insertion
for(j=0;j<g;j++){h=f[j];if(fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)){if(h.src){// Optional AJAX dependency, but won't run scripts if not present
if(n._evalUrl){n._evalUrl(h.src)}}else{n.globalEval(h.textContent.replace(hb,""))}}}}}}return this}});n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){var c,d=[],e=n(a),g=e.length-1,h=0;for(;h<=g;h++){c=h===g?this:this.clone(true);n(e[h])[b](c);// Support: QtWebKit
// .get() because push.apply(_, arraylike) throws
f.apply(d,c.get())}return this.pushStack(d)}});var qb,rb={};/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),// getDefaultComputedStyle might be reliably used only on attached element
f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?// Use of this method is a temporary fix (more like optmization) until something better comes along,
// since it was removed from specification and supported only in FF
d.display:n.css(e[0],"display");// We don't have any data stored on the element,
// so use "detach" method as fast way to get rid of the element
e.detach();return f}/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function tb(a){var b=l,c=rb[a];if(!c){c=sb(a,b);// If the simple way fails, read from inside an iframe
if(c==="none"||!c){// Use the already-created iframe if possible
qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement);// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
b=qb[0].contentDocument;// Support: IE
b.write();b.close();c=sb(a,b);qb.detach()}// Store the correct default display
rb[a]=c}return c}var ub=/^margin/;var vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i");var wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;c=c||wb(a);// Support: IE9
// getPropertyValue is only needed for .css('filter') in IE9, see #12537
if(c){g=c.getPropertyValue(b)||c[b]}if(c){if(g===""&&!n.contains(a.ownerDocument,a)){g=n.style(a,b)}// Support: iOS < 6
// A tribute to the "awesome hack by Dean Edwards"
// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
if(vb.test(g)&&ub.test(b)){// Remember the original values
d=h.width;e=h.minWidth;f=h.maxWidth;// Put in the new values to get a computed value out
h.minWidth=h.maxWidth=h.width=g;g=c.width;// Revert the changed values
h.width=d;h.minWidth=e;h.maxWidth=f}}// Support: IE
// IE returns zIndex value as an integer.
return g!==undefined?g+"":g}function yb(a,b){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(a()){// Hook not needed (or it's not possible to use it due to missing dependency),
// remove it.
// Since there are no other hooks for marginRight, remove the whole object.
delete this.get;return}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=b).apply(this,arguments)}}}(function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(!f.style){return}f.style.backgroundClip="content-box";f.cloneNode(true).style.backgroundClip="";k.clearCloneStyle=f.style.backgroundClip==="content-box";e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;"+"position:absolute";e.appendChild(f);// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function g(){f.style.cssText=// Support: Firefox<29, Android 2.3
// Vendor-prefix box-sizing
"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;"+"box-sizing:border-box;display:block;margin-top:1%;top:1%;"+"border:1px;padding:1px;width:4px;position:absolute";f.innerHTML="";d.appendChild(e);var g=a.getComputedStyle(f,null);b=g.top!=="1%";c=g.width==="4px";d.removeChild(e)}// Support: node.js jsdom
// Don't assume that getComputedStyle is a property of the global object
if(a.getComputedStyle){n.extend(k,{pixelPosition:function(){// This test is executed only once but we still do memoizing
// since we can use the boxSizingReliable pre-computing.
// No need to check if the test was already performed, though.
g();return b},boxSizingReliable:function(){if(c==null){g()}return c},reliableMarginRight:function(){// Support: Android 2.3
// Check if div with explicit width and no margin-right incorrectly
// gets computed margin-right based on width of container. (#3333)
// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
// This support function is only executed once so no memoizing is needed.
var b,c=f.appendChild(l.createElement("div"));// Reset CSS: box-sizing; display; margin; border; padding
c.style.cssText=f.style.cssText=// Support: Firefox<29, Android 2.3
// Vendor-prefix box-sizing
"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;padding:0";c.style.marginRight=c.style.width="0";f.style.width="1px";d.appendChild(e);b=!parseFloat(a.getComputedStyle(c,null).marginRight);d.removeChild(e);return b}})}})();// A method for quickly swapping in/out CSS properties to get correct calculations.
n.swap=function(a,b,c,d){var e,f,g={};// Remember the old values, and insert the new ones
for(f in b){g[f]=a.style[f];a.style[f]=b[f]}e=c.apply(a,d||[]);// Revert the old values
for(f in b){a.style[f]=g[f]}return e};var// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];// return a css property mapped to a potentially vendor prefixed property
function Fb(a,b){// shortcut for names that are not vendor prefixed
if(b in a){return b}// check for vendor prefixed names
var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--){b=Eb[e]+c;if(b in a){return b}}return d}function Gb(a,b,c){var d=Ab.exec(b);// Guard against undefined "subtract", e.g., when used as in cssHooks
return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){var f=c===(d?"border":"content")?// If we already have the right measurement, avoid augmentation
4:// Otherwise initialize for horizontal or vertical properties
b==="width"?1:0,g=0;for(;f<4;f+=2){// both box models exclude margin, so add it if we want it
if(c==="margin"){g+=n.css(a,c+R[f],true,e)}if(d){// border-box includes padding, so remove it if we want content
if(c==="content"){g-=n.css(a,"padding"+R[f],true,e)}// at this point, extra isn't border nor margin, so remove border
if(c!=="margin"){g-=n.css(a,"border"+R[f]+"Width",true,e)}}else{// at this point, extra isn't content, so add padding
g+=n.css(a,"padding"+R[f],true,e);// at this point, extra isn't content nor padding, so add border
if(c!=="padding"){g+=n.css(a,"border"+R[f]+"Width",true,e)}}}return g}function Ib(a,b,c){// Start with offset property, which is equivalent to the border-box value
var d=true,e=b==="width"?a.offsetWidth:a.offsetHeight,f=wb(a),g=n.css(a,"boxSizing",false,f)==="border-box";// some non-html elements return undefined for offsetWidth, so check for null/undefined
// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
if(e<=0||e==null){// Fall back to computed then uncomputed css if necessary
e=xb(a,b,f);if(e<0||e==null){e=a.style[b]}// Computed unit is not pixels. Stop here and return.
if(vb.test(e)){return e}// we need the check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
d=g&&(k.boxSizingReliable()||e===a.style[b]);// Normalize "", auto, and prepare for extra
e=parseFloat(e)||0}// use the active box-sizing model to add/subtract irrelevant styles
return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){var c,d,e,f=[],g=0,h=a.length;for(;g<h;g++){d=a[g];if(!d.style){continue}f[g]=L.get(d,"olddisplay");c=d.style.display;if(b){// Reset the inline display of this element to learn if it is
// being hidden by cascaded rules or not
if(!f[g]&&c==="none"){d.style.display=""}// Set elements which have been overridden with display: none
// in a stylesheet to whatever the default browser style is
// for such an element
if(d.style.display===""&&S(d)){f[g]=L.access(d,"olddisplay",tb(d.nodeName))}}else{e=S(d);if(c!=="none"||!e){L.set(d,"olddisplay",e?c:n.css(d,"display"))}}}// Set the display of most of the elements in a second loop
// to avoid the constant reflow
for(g=0;g<h;g++){d=a[g];if(!d.style){continue}if(!b||d.style.display==="none"||d.style.display===""){d.style.display=b?f[g]||"":"none"}}return a}n.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(a,b){if(b){// We should always get a number back from opacity
var c=xb(a,"opacity");return c===""?"1":c}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{columnCount:true,fillOpacity:true,flexGrow:true,flexShrink:true,fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{// normalize float css property
"float":"cssFloat"},// Get and set the style property on a DOM Node
style:function(a,b,c,d){// Don't set styles on text and comment nodes
if(!a||a.nodeType===3||a.nodeType===8||!a.style){return}// Make sure that we're working with the right name
var e,f,g,h=n.camelCase(b),i=a.style;b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h));// gets hook for the prefixed version
// followed by the unprefixed version
g=n.cssHooks[b]||n.cssHooks[h];// Check if we're setting a value
if(c!==undefined){f=typeof c;// convert relative number strings (+= or -=) to relative numbers. #7345
if(f==="string"&&(e=Bb.exec(c))){c=(e[1]+1)*e[2]+parseFloat(n.css(a,b));// Fixes bug #9237
f="number"}// Make sure that null and NaN values aren't set. See: #7116
if(c==null||c!==c){return}// If a number was passed in, add 'px' to the (except for certain CSS properties)
if(f==="number"&&!n.cssNumber[h]){c+="px"}// Fixes #8908, it can be done more correctly by specifying setters in cssHooks,
// but it would mean to define eight (for every problematic property) identical functions
if(!k.clearCloneStyle&&c===""&&b.indexOf("background")===0){i[b]="inherit"}// If a hook was provided, use that value, otherwise just set the specified value
if(!g||!("set"in g)||(c=g.set(a,c,d))!==undefined){i[b]=c}}else{// If a hook was provided get the non-computed value from there
if(g&&"get"in g&&(e=g.get(a,false,d))!==undefined){return e}// Otherwise just get the value from the style object
return i[b]}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);// Make sure that we're working with the right name
b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h));// gets hook for the prefixed version
// followed by the unprefixed version
g=n.cssHooks[b]||n.cssHooks[h];// If a hook was provided get the computed value from there
if(g&&"get"in g){e=g.get(a,true,c)}// Otherwise, if a way to get the computed value exists, use that
if(e===undefined){e=xb(a,b,d)}//convert "normal" to computed value
if(e==="normal"&&b in Db){e=Db[b]}// Return, converting to number if forced or a qualifier was provided and val looks numeric
if(c===""||c){f=parseFloat(e);return c===true||n.isNumeric(f)?f||0:e}return e}});n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){if(c){// certain elements can have dimension info if we invisibly show them
// however, it must have a current display style that would benefit from this
return a.offsetWidth===0&&zb.test(n.css(a,"display"))?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d)}},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,n.css(a,"boxSizing",false,e)==="border-box",e):0)}}});// Support: Android 2.3
n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){if(b){// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
// Work around by temporarily setting element display to inline-block
return n.swap(a,{display:"inline-block"},xb,[a,"marginRight"])}});// These hooks are used by animate to expand properties
n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){var d=0,e={},// assumes a single number if not a string
f=typeof c==="string"?c.split(" "):[c];for(;d<4;d++){e[a+R[d]+b]=f[d]||f[d-2]||f[0]}return e}};if(!ub.test(a)){n.cssHooks[a+b].set=Gb}});n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){d=wb(a);e=b.length;for(;g<e;g++){f[b[g]]=n.css(a,b[g],false,d)}return f}return c!==undefined?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,true)},hide:function(){return Jb(this)},toggle:function(a){if(typeof a==="boolean"){return a?this.show():this.hide()}return this.each(function(){if(S(this)){n(this).show()}else{n(this).hide()}})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb;Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a;this.prop=c;this.easing=e||"swing";this.options=b;this.start=this.now=this.cur();this.end=d;this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];if(this.options.duration){this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration)}else{this.pos=b=a}this.now=(this.end-this.start)*b+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(c&&c.set){c.set(this)}else{Kb.propHooks._default.set(this)}return this}};Kb.prototype.init.prototype=Kb.prototype;Kb.propHooks={_default:{get:function(a){var b;if(a.elem[a.prop]!=null&&(!a.elem.style||a.elem.style[a.prop]==null)){return a.elem[a.prop]}// passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails
// so, simple values such as "10px" are parsed to Float.
// complex values such as "rotate(1rad)" are returned as is.
b=n.css(a.elem,a.prop,"");// Empty strings, null, undefined and "auto" are converted to 0.
return!b||b==="auto"?0:b},set:function(a){// use step hook for back compat - use cssHook if its there - use .style if its
// available and use plain properties where available
if(n.fx.step[a.prop]){n.fx.step[a.prop](a)}else if(a.elem.style&&(a.elem.style[n.cssProps[a.prop]]!=null||n.cssHooks[a.prop])){n.style(a.elem,a.prop,a.now+a.unit)}else{a.elem[a.prop]=a.now}}}};// Support: IE9
// Panic based approach to setting things on disconnected nodes
Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){if(a.elem.nodeType&&a.elem.parentNode){a.elem[a.prop]=a.now}}};n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}};n.fx=Kb.prototype.init;// Back Compat <1.8 extension point
n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),// Starting value computation is required for potential unit mismatches
g=(n.cssNumber[a]||f!=="px"&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){// Trust units reported by jQuery.css
f=f||g[3];// Make sure we update the tween properties later on
e=e||[];// Iteratively approximate from a nonzero starting point
g=+d||1;do{// If previous iteration zeroed out, double until we get *something*
// Use a string for doubling factor so we don't accidentally see scale as unchanged below
h=h||".5";// Adjust and apply
g=g/h;n.style(c.elem,a,g+f)}while(h!==(h=c.cur()/d)&&h!==1&&--i)}// Update tween properties
if(e){g=c.start=+g||+d||0;c.unit=f;// If a +=/-= token was provided, we're doing a relative animation
c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]}return c}]};// Animations created synchronously will run synchronously
function Sb(){setTimeout(function(){Lb=undefined});return Lb=n.now()}// Generate parameters to create a standard animation
function Tb(a,b){var c,d=0,e={height:a};// if we include width, step value is 1 to do all cssExpand values,
// if we don't include width, step value is 2 to skip over Left and Right
b=b?1:0;for(;d<4;d+=2-b){c=R[d];e["margin"+c]=e["padding"+c]=a}if(b){e.opacity=e.width=a}return e}function Ub(a,b,c){var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;for(;f<g;f++){if(d=e[f].call(c,b,a)){// we're done with this property
return d}}}function Vb(a,b,c){/* jshint validthis: true */
var d,e,f,g,h,i,j,k=this,l={},m=a.style,o=a.nodeType&&S(a),p=L.get(a,"fxshow");// handle queue: false promises
if(!c.queue){h=n._queueHooks(a,"fx");if(h.unqueued==null){h.unqueued=0;i=h.empty.fire;h.empty.fire=function(){if(!h.unqueued){i()}}}h.unqueued++;k.always(function(){// doing this makes sure that the complete handler will be called
// before this completes
k.always(function(){h.unqueued--;if(!n.queue(a,"fx").length){h.empty.fire()}})})}// height/width overflow pass
if(a.nodeType===1&&("height"in b||"width"in b)){// Make sure that nothing sneaks out
// Record all 3 overflow attributes because IE9-10 do not
// change the overflow attribute when overflowX and
// overflowY are set to the same value
c.overflow=[m.overflow,m.overflowX,m.overflowY];// Set display property to inline-block for height/width
// animations on inline elements that are having width/height animated
j=n.css(a,"display");// Test default display if display is currently "none"
if((j==="none"?tb(a.nodeName):j)==="inline"&&n.css(a,"float")==="none"){m.display="inline-block"}}if(c.overflow){m.overflow="hidden";k.always(function(){m.overflow=c.overflow[0];m.overflowX=c.overflow[1];m.overflowY=c.overflow[2]})}// show/hide pass
for(d in b){e=b[d];if(Nb.exec(e)){delete b[d];f=f||e==="toggle";if(e===(o?"hide":"show")){// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
if(e==="show"&&p&&p[d]!==undefined){o=true}else{continue}}l[d]=p&&p[d]||n.style(a,d)}else{j=undefined}}if(!n.isEmptyObject(l)){if(p){if("hidden"in p){o=p.hidden}}else{p=L.access(a,"fxshow",{})}// store state if its toggle - enables .stop().toggle() to "reverse"
if(f){p.hidden=!o}if(o){n(a).show()}else{k.done(function(){n(a).hide()})}k.done(function(){var b;L.remove(a,"fxshow");for(b in l){n.style(a,b,l[b])}});for(d in l){g=Ub(o?p[d]:0,d,k);if(!(d in p)){p[d]=g.start;if(o){g.end=g.start;g.start=d==="width"||d==="height"?1:0}}}}else if((j==="none"?tb(a.nodeName):j)==="inline"){m.display=j}}function Wb(a,b){var c,d,e,f,g;// camelCase, specialEasing and expand cssHook pass
for(c in a){d=n.camelCase(c);e=b[d];f=a[c];if(n.isArray(f)){e=f[1];f=a[c]=f[0]}if(c!==d){a[d]=f;delete a[c]}g=n.cssHooks[d];if(g&&"expand"in g){f=g.expand(f);delete a[d];// not quite $.extend, this wont overwrite keys already present.
// also - reusing 'index' from above because we have the correct "name"
for(c in f){if(!(c in a)){a[c]=f[c];b[c]=e}}}else{b[d]=e}}}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){// don't match elem in the :animated selector
delete i.elem}),i=function(){if(e){return false}var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;for(;g<i;g++){j.tweens[g].run(f)}h.notifyWith(a,[j,f,c]);if(f<1&&i){return c}else{h.resolveWith(a,[j]);return false}},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(true,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);j.tweens.push(d);return d},stop:function(b){var c=0,// if we are going to the end, we want to run all the tweens
// otherwise we skip this part
d=b?j.tweens.length:0;if(e){return this}e=true;for(;c<d;c++){j.tweens[c].run(1)}// resolve when we played the last frame
// otherwise, reject
if(b){h.resolveWith(a,[j,b])}else{h.rejectWith(a,[j,b])}return this}}),k=j.props;Wb(k,j.opts.specialEasing);for(;f<g;f++){d=Qb[f].call(j,a,k,j.opts);if(d){return d}}n.map(k,Ub,j);if(n.isFunction(j.opts.start)){j.opts.start.call(a,j)}n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue}));// attach callbacks from options
return j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){if(n.isFunction(a)){b=a;a=["*"]}else{a=a.split(" ")}var c,d=0,e=a.length;for(;d<e;d++){c=a[d];Rb[c]=Rb[c]||[];Rb[c].unshift(b)}},prefilter:function(a,b){if(b){Qb.unshift(a)}else{Qb.push(a)}}});n.speed=function(a,b,c){var d=a&&typeof a==="object"?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};d.duration=n.fx.off?0:typeof d.duration==="number"?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default;// normalize opt.queue - true/undefined/null -> "fx"
if(d.queue==null||d.queue===true){d.queue="fx"}// Queueing
d.old=d.complete;d.complete=function(){if(n.isFunction(d.old)){d.old.call(this)}if(d.queue){n.dequeue(this,d.queue)}};return d};n.fn.extend({fadeTo:function(a,b,c,d){// show any hidden elements after setting opacity to 0
return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){// Operate on a copy of prop so per-property easing won't be lost
var b=Xb(this,n.extend({},a),f);// Empty animations, or finishing resolves immediately
if(e||L.get(this,"finish")){b.stop(true)}};g.finish=g;return e||f.queue===false?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop;b(c)};if(typeof a!=="string"){c=b;b=a;a=undefined}if(b&&a!==false){this.queue(a||"fx",[])}return this.each(function(){var b=true,e=a!=null&&a+"queueHooks",f=n.timers,g=L.get(this);if(e){if(g[e]&&g[e].stop){d(g[e])}}else{for(e in g){if(g[e]&&g[e].stop&&Pb.test(e)){d(g[e])}}}for(e=f.length;e--;){if(f[e].elem===this&&(a==null||f[e].queue===a)){f[e].anim.stop(c);b=false;f.splice(e,1)}}// start the next in the queue if the last step wasn't forced
// timers currently will call their complete callbacks, which will dequeue
// but only if they were gotoEnd
if(b||!c){n.dequeue(this,a)}})},finish:function(a){if(a!==false){a=a||"fx"}return this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;// enable finishing flag on private data
c.finish=true;// empty the queue first
n.queue(this,a,[]);if(e&&e.stop){e.stop.call(this,true)}// look for any active animations, and finish them
for(b=f.length;b--;){if(f[b].elem===this&&f[b].queue===a){f[b].anim.stop(true);f.splice(b,1)}}// look for any animations in the old queue and finish them
for(b=0;b<g;b++){if(d[b]&&d[b].finish){d[b].finish.call(this)}}// turn off finishing flag
delete c.finish})}});n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return a==null||typeof a==="boolean"?c.apply(this,arguments):this.animate(Tb(b,true),a,d,e)}});// Generate shortcuts for custom animations
n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}});n.timers=[];n.fx.tick=function(){var a,b=0,c=n.timers;Lb=n.now();for(;b<c.length;b++){a=c[b];// Checks the timer has not already been removed
if(!a()&&c[b]===a){c.splice(b--,1)}}if(!c.length){n.fx.stop()}Lb=undefined};n.fx.timer=function(a){n.timers.push(a);if(a()){n.fx.start()}else{n.timers.pop()}};n.fx.interval=13;n.fx.start=function(){if(!Mb){Mb=setInterval(n.fx.tick,n.fx.interval)}};n.fx.stop=function(){clearInterval(Mb);Mb=null};n.fx.speeds={slow:600,fast:200,// Default speed
_default:400};// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
n.fn.delay=function(a,b){a=n.fx?n.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})};(function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox";// Support: iOS 5.1, Android 4.x, Android 2.3
// Check the default checkbox/radio value ("" on old WebKit; "on" elsewhere)
k.checkOn=a.value!=="";// Must access the parent to make an option select properly
// Support: IE9, IE10
k.optSelected=c.selected;// Make sure that the options inside disabled selects aren't marked as disabled
// (WebKit marks them as disabled)
b.disabled=true;k.optDisabled=!c.disabled;// Check if an input maintains its value after becoming a radio
// Support: IE9, IE10
a=l.createElement("input");a.value="t";a.type="radio";k.radioValue=a.value==="t"})();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}});n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;// don't get/set attributes on text, comment and attribute nodes
if(!a||f===3||f===8||f===2){return}// Fallback to prop when attributes are not supported
if(typeof a.getAttribute===U){return n.prop(a,b,c)}// All attributes are lowercase
// Grab necessary hook if one is defined
if(f!==1||!n.isXMLDoc(a)){b=b.toLowerCase();d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)}if(c!==undefined){if(c===null){n.removeAttr(a,b)}else if(d&&"set"in d&&(e=d.set(a,c,b))!==undefined){return e}else{a.setAttribute(b,c+"");return c}}else if(d&&"get"in d&&(e=d.get(a,b))!==null){return e}else{e=n.find.attr(a,b);// Non-existent attributes return null, we normalize to undefined
return e==null?undefined:e}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&a.nodeType===1){while(c=f[e++]){d=n.propFix[c]||c;// Boolean attributes get special treatment (#10870)
if(n.expr.match.bool.test(c)){// Set corresponding property to false
a[d]=false}a.removeAttribute(c)}}},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&b==="radio"&&n.nodeName(a,"input")){// Setting the type on a radio button after the value resets the value in IE6-9
// Reset value to default in case type is set after value during creation
var c=a.value;a.setAttribute("type",b);if(c){a.value=c}return b}}}}});// Hooks for boolean attributes
Zb={set:function(a,b,c){if(b===false){// Remove boolean attributes when set to false
n.removeAttr(a,c)}else{a.setAttribute(c,c)}return c}};n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;if(!d){// Avoid an infinite loop by temporarily removing this function from the getter
f=$b[b];$b[b]=e;e=c(a,b,d)!=null?b.toLowerCase():null;$b[b]=f}return e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}});n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;// don't get/set properties on text, comment and attribute nodes
if(!a||g===3||g===8||g===2){return}f=g!==1||!n.isXMLDoc(a);if(f){// Fix name and attach hooks
b=n.propFix[b]||b;e=n.propHooks[b]}if(c!==undefined){return e&&"set"in e&&(d=e.set(a,c,b))!==undefined?d:a[b]=c}else{return e&&"get"in e&&(d=e.get(a,b))!==null?d:a[b]}},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}});// Support: IE9+
// Selectedness for an option in an optgroup can be inaccurate
if(!k.optSelected){n.propHooks.selected={get:function(a){var b=a.parentNode;if(b&&b.parentNode){b.parentNode.selectedIndex}return null}}}n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=typeof a==="string"&&a,i=0,j=this.length;if(n.isFunction(a)){return this.each(function(b){n(this).addClass(a.call(this,b,this.className))})}if(h){// The disjunction here is for better compressibility (see removeClass)
b=(a||"").match(E)||[];for(;i<j;i++){c=this[i];d=c.nodeType===1&&(c.className?(" "+c.className+" ").replace(ac," "):" ");if(d){f=0;while(e=b[f++]){if(d.indexOf(" "+e+" ")<0){d+=e+" "}}// only assign if different to avoid unneeded rendering.
g=n.trim(d);if(c.className!==g){c.className=g}}}}return this},removeClass:function(a){var b,c,d,e,f,g,h=arguments.length===0||typeof a==="string"&&a,i=0,j=this.length;if(n.isFunction(a)){return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))})}if(h){b=(a||"").match(E)||[];for(;i<j;i++){c=this[i];// This expression is here for better compressibility (see addClass)
d=c.nodeType===1&&(c.className?(" "+c.className+" ").replace(ac," "):"");if(d){f=0;while(e=b[f++]){// Remove *all* instances
while(d.indexOf(" "+e+" ")>=0){d=d.replace(" "+e+" "," ")}}// only assign if different to avoid unneeded rendering.
g=a?n.trim(d):"";if(c.className!==g){c.className=g}}}}return this},toggleClass:function(a,b){var c=typeof a;if(typeof b==="boolean"&&c==="string"){return b?this.addClass(a):this.removeClass(a)}if(n.isFunction(a)){return this.each(function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)})}return this.each(function(){if(c==="string"){// toggle individual class names
var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++]){// check each className given, space separated list
if(e.hasClass(b)){e.removeClass(b)}else{e.addClass(b)}}}else if(c===U||c==="boolean"){if(this.className){// store className if set
L.set(this,"__className__",this.className)}// If the element has a class name or if we're passed "false",
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.className=this.className||a===false?"":L.get(this,"__className__")||""}})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++){if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0){return true}}return false}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];if(!arguments.length){if(e){b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()];if(b&&"get"in b&&(c=b.get(e,"value"))!==undefined){return c}c=e.value;// handle most common string cases
// handle cases where value is null/undef or number
return typeof c==="string"?c.replace(bc,""):c==null?"":c}return}d=n.isFunction(a);return this.each(function(c){var e;if(this.nodeType!==1){return}if(d){e=a.call(this,c,n(this).val())}else{e=a}// Treat null/undefined as ""; convert numbers to string
if(e==null){e=""}else if(typeof e==="number"){e+=""}else if(n.isArray(e)){e=n.map(e,function(a){return a==null?"":a+""})}b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()];// If set returns undefined, fall back to normal setting
if(!b||!("set"in b)||b.set(this,e,"value")===undefined){this.value=e}})}});n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");// Support: IE10-11+
// option.text throws exceptions (#14686, #14858)
return b!=null?b:n.trim(n.text(a))}},select:{get:function(a){var b,c,d=a.options,e=a.selectedIndex,f=a.type==="select-one"||e<0,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;// Loop through all the selected options
for(;i<h;i++){c=d[i];// IE6-9 doesn't update selected after form reset (#2551)
if((c.selected||i===e)&&(// Don't return options that are disabled or in a disabled optgroup
k.optDisabled?!c.disabled:c.getAttribute("disabled")===null)&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){// Get the specific value for the option
b=n(c).val();// We don't need an array for one selects
if(f){return b}// Multi-Selects return an array
g.push(b)}}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--){d=e[g];if(d.selected=n.inArray(d.value,f)>=0){c=true}}// force browsers to behave consistently when non-matching value is set
if(!c){a.selectedIndex=-1}return f}}}});// Radios and checkboxes getter/setter
n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){if(n.isArray(b)){return a.checked=n.inArray(n(a).val(),b)>=0}}};if(!k.checkOn){n.valHooks[this].get=function(a){// Support: Webkit
// "" is returned instead of "on" if a value isn't specified
return a.getAttribute("value")===null?"on":a.value}}});// Return jQuery for attributes-only inclusion
n.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(a,b){// Handle event binding
n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}});n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){// ( namespace ) or ( selector, types [, fn] )
return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now();var dc=/\?/;// Support: Android 2.3
// Workaround failure to string-cast null input
n.parseJSON=function(a){return JSON.parse(a+"")};// Cross-browser xml parsing
n.parseXML=function(a){var b,c;if(!a||typeof a!=="string"){return null}// Support: IE9
try{c=new DOMParser;b=c.parseFromString(a,"text/xml")}catch(d){b=undefined}if(!b||b.getElementsByTagName("parsererror").length){n.error("Invalid XML: "+a)}return b};var// Document location
ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,// #7653, #8125, #8152: local protocol detection
jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
nc={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
oc={},// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
pc="*/".concat("*");// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try{fc=location.href}catch(qc){// Use the href attribute of an A element
// since IE will modify it given document.location
fc=l.createElement("a");fc.href="";fc=fc.href}// Segment location into parts
ec=mc.exec(fc.toLowerCase())||[];// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function rc(a){// dataTypeExpression is optional and defaults to "*"
return function(b,c){if(typeof b!=="string"){c=b;b="*"}var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c)){// For each dataType in the dataTypeExpression
while(d=f[e++]){// Prepend if requested
if(d[0]==="+"){d=d.slice(1)||"*";(a[d]=a[d]||[]).unshift(c)}else{(a[d]=a[d]||[]).push(c)}}}}}// Base inspection function for prefilters and transports
function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;e[h]=true;n.each(a[h]||[],function(a,h){var j=h(b,c,d);if(typeof j==="string"&&!f&&!e[j]){b.dataTypes.unshift(j);g(j);return false}else if(f){return!(i=j)}});return i}return g(b.dataTypes[0])||!e["*"]&&g("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b){if(b[c]!==undefined){(e[c]?a:d||(d={}))[c]=b[c]}}if(d){n.extend(true,a,d)}return a}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;// Remove auto dataType and get content-type in the process
while(i[0]==="*"){i.shift();if(d===undefined){d=a.mimeType||b.getResponseHeader("Content-Type")}}// Check if we're dealing with a known content-type
if(d){for(e in h){if(h[e]&&h[e].test(d)){i.unshift(e);break}}}// Check to see if we have a response for the expected dataType
if(i[0]in c){f=i[0]}else{// Try convertible dataTypes
for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}if(!g){g=e}}// Or just use first one
f=f||g}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(f){if(f!==i[0]){i.unshift(f)}return c[f]}}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function vc(a,b,c,d){var e,f,g,h,i,j={},// Work with a copy of dataTypes in case we need to modify it for conversion
k=a.dataTypes.slice();// Create converters map with lowercased keys
if(k[1]){for(g in a.converters){j[g.toLowerCase()]=a.converters[g]}}f=k.shift();// Convert to each sequential dataType
while(f){if(a.responseFields[f]){c[a.responseFields[f]]=b}// Apply the dataFilter if provided
if(!i&&d&&a.dataFilter){b=a.dataFilter(b,a.dataType)}i=f;f=k.shift();if(f){// There's only work to do if current dataType is non-auto
if(f==="*"){f=i}else if(i!=="*"&&i!==f){// Seek a direct converter
g=j[i+" "+f]||j["* "+f];// If none found, seek a pair
if(!g){for(e in j){// If conv2 outputs current
h=e.split(" ");if(h[1]===f){// If prev can be converted to accepted input
g=j[i+" "+h[0]]||j["* "+h[0]];if(g){// Condense equivalence converters
if(g===true){g=j[e]}else if(j[e]!==true){f=h[0];k.unshift(h[1])}break}}}}// Apply converter (if not an equivalence)
if(g!==true){// Unless errors are allowed to bubble, catch and return them
if(g&&a["throws"]){b=g(b)}else{try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}}}}}return{state:"success",data:b}}n.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":true,// Evaluate text as a json expression
"text json":n.parseJSON,// Parse text as xml
"text xml":n.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:true,context:true}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(a,b){// Building a settings object
// Extending ajaxSettings
return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),// Main method
ajax:function(a,b){// If url is an object, simulate pre-1.5 signature
if(typeof a==="object"){b=a;a=undefined}// Force options to be an object
b=b||{};var c,// URL without anti-cache param
d,// Response headers
e,f,// timeout handle
g,// Cross-domain detection vars
h,// To know if global events are to be dispatched
i,// Loop variable
j,// Create the final options object
k=n.ajaxSetup({},b),// Callbacks context
l=k.context||k,// Context for global events is callbackContext if it is a DOM node or jQuery collection
m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,// Deferreds
o=n.Deferred(),p=n.Callbacks("once memory"),// Status-dependent callbacks
q=k.statusCode||{},// Headers (they are sent all at once)
r={},s={},// The jqXHR state
t=0,// Default abort message
u="canceled",// Fake xhr
v={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(a){var b;if(t===2){if(!f){f={};while(b=ic.exec(e)){f[b[1].toLowerCase()]=b[2]}}b=f[a.toLowerCase()]}return b==null?null:b},// Raw string
getAllResponseHeaders:function(){return t===2?e:null},// Caches the header
setRequestHeader:function(a,b){var c=a.toLowerCase();if(!t){a=s[c]=s[c]||a;r[a]=b}return this},// Overrides response content-type header
overrideMimeType:function(a){if(!t){k.mimeType=a}return this},// Status-dependent callbacks
statusCode:function(a){var b;if(a){if(t<2){for(b in a){// Lazy-add the new callback in a way that preserves old ones
q[b]=[q[b],a[b]]}}else{// Execute the appropriate callbacks
v.always(a[v.status])}}return this},// Cancel the request
abort:function(a){var b=a||u;if(c){c.abort(b)}x(0,b);return this}};// Attach deferreds
o.promise(v).complete=p.add;v.success=v.done;v.error=v.fail;// Remove hash character (#7531: and string promotion)
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//");// Alias method option to type as per ticket #12004
k.type=b.method||b.type||k.method||k.type;// Extract dataTypes list
k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""];// A cross-domain request is in order when we have a protocol:host:port mismatch
if(k.crossDomain==null){h=mc.exec(k.url.toLowerCase());k.crossDomain=!!(h&&(h[1]!==ec[1]||h[2]!==ec[2]||(h[3]||(h[1]==="http:"?"80":"443"))!==(ec[3]||(ec[1]==="http:"?"80":"443"))))}// Convert data if not already a string
if(k.data&&k.processData&&typeof k.data!=="string"){k.data=n.param(k.data,k.traditional)}// Apply prefilters
sc(nc,k,b,v);// If request was aborted inside a prefilter, stop there
if(t===2){return v}// We can fire global events as of now if asked to
i=k.global;// Watch for a new set of requests
if(i&&n.active++===0){n.event.trigger("ajaxStart")}// Uppercase the type
k.type=k.type.toUpperCase();// Determine if request has content
k.hasContent=!kc.test(k.type);// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
d=k.url;// More options handling for requests with no content
if(!k.hasContent){// If data is available, append data to url
if(k.data){d=k.url+=(dc.test(d)?"&":"?")+k.data;// #9682: remove data so that it's not used in an eventual retry
delete k.data}// Add anti-cache in url if needed
if(k.cache===false){k.url=hc.test(d)?// If there is already a '_' parameter, set its value
d.replace(hc,"$1_="+cc++):// Otherwise add one to the end
d+(dc.test(d)?"&":"?")+"_="+cc++}}// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
if(k.ifModified){if(n.lastModified[d]){v.setRequestHeader("If-Modified-Since",n.lastModified[d])}if(n.etag[d]){v.setRequestHeader("If-None-Match",n.etag[d])}}// Set the correct header, if data is being sent
if(k.data&&k.hasContent&&k.contentType!==false||b.contentType){v.setRequestHeader("Content-Type",k.contentType)}// Set the Accepts header for the server, depending on the dataType
v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+(k.dataTypes[0]!=="*"?", "+pc+"; q=0.01":""):k.accepts["*"]);// Check for headers option
for(j in k.headers){v.setRequestHeader(j,k.headers[j])}// Allow custom headers/mimetypes and early abort
if(k.beforeSend&&(k.beforeSend.call(l,v,k)===false||t===2)){// Abort if not done already and return
return v.abort()}// aborting is no longer a cancellation
u="abort";// Install callbacks on deferreds
for(j in{success:1,error:1,complete:1}){v[j](k[j])}// Get transport
c=sc(oc,k,b,v);// If no transport, we auto-abort
if(!c){x(-1,"No Transport")}else{v.readyState=1;// Send global event
if(i){m.trigger("ajaxSend",[v,k])}// Timeout
if(k.async&&k.timeout>0){g=setTimeout(function(){v.abort("timeout")},k.timeout)}try{t=1;c.send(r,x)}catch(w){// Propagate exception as error if not done
if(t<2){x(-1,w)}else{throw w}}}// Callback for when everything is done
function x(a,b,f,h){var j,r,s,u,w,x=b;// Called once
if(t===2){return}// State is "done" now
t=2;// Clear timeout if it exists
if(g){clearTimeout(g)}// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
c=undefined;// Cache response headers
e=h||"";// Set readyState
v.readyState=a>0?4:0;// Determine if successful
j=a>=200&&a<300||a===304;// Get response data
if(f){u=uc(k,v,f)}// Convert no matter what (that way responseXXX fields are always set)
u=vc(k,u,v,j);// If successful, handle type chaining
if(j){// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
if(k.ifModified){w=v.getResponseHeader("Last-Modified");if(w){n.lastModified[d]=w}w=v.getResponseHeader("etag");if(w){n.etag[d]=w}}// if no content
if(a===204||k.type==="HEAD"){x="nocontent"}else if(a===304){x="notmodified"}else{x=u.state;r=u.data;s=u.error;j=!s}}else{// We extract error from statusText
// then normalize statusText and status for non-aborts
s=x;if(a||!x){x="error";if(a<0){a=0}}}// Set data for the fake xhr object
v.status=a;v.statusText=(b||x)+"";// Success/Error
if(j){o.resolveWith(l,[r,x,v])}else{o.rejectWith(l,[v,x,s])}// Status-dependent callbacks
v.statusCode(q);q=undefined;if(i){m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s])}// Complete
p.fireWith(l,[v,x]);if(i){m.trigger("ajaxComplete",[v,k]);// Handle the global AJAX counter
if(!--n.active){n.event.trigger("ajaxStop")}}}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,undefined,b,"script")}});n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){// shift arguments if data argument was omitted
if(n.isFunction(c)){e=e||d;d=c;c=undefined}return n.ajax({url:a,type:b,dataType:e,data:c,success:d})}});// Attach a bunch of functions for handling common AJAX events
n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}});n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:false,global:false,"throws":true})};n.fn.extend({wrapAll:function(a){var b;if(n.isFunction(a)){return this.each(function(b){n(this).wrapAll(a.call(this,b))})}if(this[0]){// The elements to wrap the target around
b=n(a,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){b.insertBefore(this[0])}b.map(function(){var a=this;while(a.firstElementChild){a=a.firstElementChild}return a}).append(this)}return this},wrapInner:function(a){if(n.isFunction(a)){return this.each(function(b){n(this).wrapInner(a.call(this,b))})}return this.each(function(){var b=n(this),c=b.contents();if(c.length){c.wrapAll(a)}else{b.append(a)}})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){if(!n.nodeName(this,"body")){n(this).replaceWith(this.childNodes)}}).end()}});n.expr.filters.hidden=function(a){// Support: Opera <= 12.12
// Opera reports offsetWidths and offsetHeights less than zero on some elements
return a.offsetWidth<=0&&a.offsetHeight<=0};n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b)){// Serialize array item.
n.each(b,function(b,e){if(c||xc.test(a)){// Treat each array item as a scalar.
d(a,e)}else{// Item is non-scalar (array or object), encode its numeric index.
Bc(a+"["+(typeof e==="object"?b:"")+"]",e,c,d)}})}else if(!c&&n.type(b)==="object"){// Serialize object item.
for(e in b){Bc(a+"["+e+"]",b[e],c,d)}}else{// Serialize scalar item.
d(a,b)}}// Serialize an array of form elements or a set of
// key/values into a query string
n.param=function(a,b){var c,d=[],e=function(a,b){// If value is a function, invoke it and return its value
b=n.isFunction(b)?b():b==null?"":b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};// Set traditional to true for jQuery <= 1.3.2 behavior.
if(b===undefined){b=n.ajaxSettings&&n.ajaxSettings.traditional}// If an array was passed in, assume that it is an array of form elements.
if(n.isArray(a)||a.jquery&&!n.isPlainObject(a)){// Serialize the form elements
n.each(a,function(){e(this.name,this.value)})}else{// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(c in a){Bc(c,a[c],b,e)}}// Return the resulting serialization
return d.join("&").replace(wc,"+")};n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return c==null?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}});n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={// file protocol always yields status code 0, assume 200
0:200,// Support: IE9
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},Fc=n.ajaxSettings.xhr();// Support: IE9
// Open requests must be manually aborted on unload (#5280)
if(a.ActiveXObject){n(a).on("unload",function(){for(var a in Dc){Dc[a]()}})}k.cors=!!Fc&&"withCredentials"in Fc;k.ajax=Fc=!!Fc;n.ajaxTransport(function(a){var b;// Cross domain only allowed if supported through XMLHttpRequest
if(k.cors||Fc&&!a.crossDomain){return{send:function(c,d){var e,f=a.xhr(),g=++Cc;f.open(a.type,a.url,a.async,a.username,a.password);// Apply custom fields if provided
if(a.xhrFields){for(e in a.xhrFields){f[e]=a.xhrFields[e]}}// Override mime type if needed
if(a.mimeType&&f.overrideMimeType){f.overrideMimeType(a.mimeType)}// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
if(!a.crossDomain&&!c["X-Requested-With"]){c["X-Requested-With"]="XMLHttpRequest"}// Set headers
for(e in c){f.setRequestHeader(e,c[e])}// Callback
b=function(a){return function(){if(b){delete Dc[g];b=f.onload=f.onerror=null;if(a==="abort"){f.abort()}else if(a==="error"){d(// file: protocol always yields status 0; see #8605, #14207
f.status,f.statusText)}else{d(Ec[f.status]||f.status,f.statusText,// Support: IE9
// Accessing binary-data responseText throws an exception
// (#11426)
typeof f.responseText==="string"?{text:f.responseText}:undefined,f.getAllResponseHeaders())}}}};// Listen to events
f.onload=b();f.onerror=b("error");// Create the abort callback
b=Dc[g]=b("abort");try{// Do send the request (this may raise an exception)
f.send(a.hasContent&&a.data||null)}catch(h){// #14683: Only rethrow if this hasn't been notified as an error yet
if(b){throw h}}},abort:function(){if(b){b()}}}}});// Install script dataType
n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){n.globalEval(a);return a}}});// Handle cache's special case and crossDomain
n.ajaxPrefilter("script",function(a){if(a.cache===undefined){a.cache=false}if(a.crossDomain){a.type="GET"}});// Bind script tag hack transport
n.ajaxTransport("script",function(a){// This transport only deals with cross domain requests
if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:true,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove();c=null;if(a){e(a.type==="error"?404:200,a.type)}});l.head.appendChild(b[0])},abort:function(){if(c){c()}}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;this[a]=true;return a}});// Detect, normalize options and install callbacks for jsonp requests
n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==false&&(Hc.test(b.url)?"url":typeof b.data==="string"&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(h||b.dataTypes[0]==="jsonp"){// Get callback name, remembering preexisting value associated with it
e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback;// Insert callback into url or form data
if(h){b[h]=b[h].replace(Hc,"$1"+e)}else if(b.jsonp!==false){b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e}// Use data converter to retrieve json after script execution
b.converters["script json"]=function(){if(!g){n.error(e+" was not called")}return g[0]};// force json dataType
b.dataTypes[0]="json";// Install callback
f=a[e];a[e]=function(){g=arguments};// Clean-up function (fires after converters)
d.always(function(){// Restore preexisting value
a[e]=f;// Save back as free
if(b[e]){// make sure that re-using the options doesn't screw things around
b.jsonpCallback=c.jsonpCallback;// save the callback name for future use
Gc.push(e)}// Call if it was a function and we have a response
if(g&&n.isFunction(f)){f(g[0])}g=f=undefined});// Delegate to script
return"script"}});// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
n.parseHTML=function(a,b,c){if(!a||typeof a!=="string"){return null}if(typeof b==="boolean"){c=b;b=false}b=b||l;var d=v.exec(a),e=!c&&[];// Single tag
if(d){return[b.createElement(d[1])]}d=n.buildFragment([a],b,e);if(e&&e.length){n(e).remove()}return n.merge([],d.childNodes)};// Keep a copy of the old load method
var Ic=n.fn.load;/**
 * Load a url into a page
 */
n.fn.load=function(a,b,c){if(typeof a!=="string"&&Ic){return Ic.apply(this,arguments)}var d,e,f,g=this,h=a.indexOf(" ");if(h>=0){d=n.trim(a.slice(h));a=a.slice(0,h)}// If it's a function
if(n.isFunction(b)){// We assume that it's the callback
c=b;b=undefined}else if(b&&typeof b==="object"){e="POST"}// If we have elements to modify, make the request
if(g.length>0){n.ajax({url:a,// if "type" variable is undefined, then "GET" method will be used
type:e,dataType:"html",data:b}).done(function(a){// Save response for use in complete callback
f=arguments;g.html(d?// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
n("<div>").append(n.parseHTML(a)).find(d):// Otherwise use the full result
a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])})}return this};n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;/**
 * Gets a window from an element
 */
function Kc(a){return n.isWindow(a)?a:a.nodeType===9&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};// Set position first, in-case top/left are set even on static elem
if(k==="static"){a.style.position="relative"}h=l.offset();f=n.css(a,"top");i=n.css(a,"left");j=(k==="absolute"||k==="fixed")&&(f+i).indexOf("auto")>-1;// Need to be able to calculate position if either top or left is auto and position is either absolute or fixed
if(j){d=l.position();g=d.top;e=d.left}else{g=parseFloat(f)||0;e=parseFloat(i)||0}if(n.isFunction(b)){b=b.call(a,c,h)}if(b.top!=null){m.top=b.top-h.top+g}if(b.left!=null){m.left=b.left-h.left+e}if("using"in b){b.using.call(a,m)}else{l.css(m)}}};n.fn.extend({offset:function(a){if(arguments.length){return a===undefined?this:this.each(function(b){n.offset.setOffset(this,a,b)})}var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(!f){return}b=f.documentElement;// Make sure it's not a disconnected DOM node
if(!n.contains(b,d)){return e}// If we don't have gBCR, just use 0,0 rather than error
// BlackBerry 5, iOS 3 (original iPhone)
if(typeof d.getBoundingClientRect!==U){e=d.getBoundingClientRect()}c=Kc(f);return{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}},position:function(){if(!this[0]){return}var a,b,c=this[0],d={top:0,left:0};// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
if(n.css(c,"position")==="fixed"){// We assume that getBoundingClientRect is available when computed position is fixed
b=c.getBoundingClientRect()}else{// Get *real* offsetParent
a=this.offsetParent();// Get correct offsets
b=this.offset();if(!n.nodeName(a[0],"html")){d=a.offset()}// Add offsetParent borders
d.top+=n.css(a[0],"borderTopWidth",true);d.left+=n.css(a[0],"borderLeftWidth",true)}// Subtract parent offsets and element margins
return{top:b.top-d.top-n.css(c,"marginTop",true),left:b.left-d.left-n.css(c,"marginLeft",true)}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&(!n.nodeName(a,"html")&&n.css(a,"position")==="static")){a=a.offsetParent}return a||Jc})}});// Create scrollLeft and scrollTop methods
n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);if(f===undefined){return g?g[c]:b[e]}if(g){g.scrollTo(!d?f:a.pageXOffset,d?f:a.pageYOffset)}else{b[e]=f}},b,e,arguments.length,null)}});// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){if(c){c=xb(a,b);// if curCSS returns percentage, fallback to offset
return vb.test(c)?n(a).position()[b]+"px":c}})});// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){// margin is only for outerHeight, outerWidth
n.fn[d]=function(d,e){var f=arguments.length&&(c||typeof d!=="boolean"),g=c||(d===true||e===true?"margin":"border");return J(this,function(b,c,d){var e;if(n.isWindow(b)){// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
// isn't a whole lot we can do. See pull request at this URL for discussion:
// https://github.com/jquery/jquery/pull/764
return b.document.documentElement["client"+a]}// Get document width or height
if(b.nodeType===9){e=b.documentElement;// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
// whichever is greatest
return Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])}// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return d===undefined?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:undefined,f,null)}})});// The number of elements contained in the matched element set
n.fn.size=function(){return this.length};n.fn.andSelf=n.fn.addBack;// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return n})}var// Map over jQuery in case of overwrite
Lc=a.jQuery,// Map over the $ in case of overwrite
Mc=a.$;n.noConflict=function(b){if(a.$===n){a.$=Mc}if(b&&a.jQuery===n){a.jQuery=Lc}return n};// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if(typeof b===U){a.jQuery=a.$=n}return n});/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if(typeof jQuery==="undefined"){throw new Error("Bootstrap's JavaScript requires jQuery")}/* ========================================================================
 * Bootstrap: transition.js v3.1.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";// CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
// ============================================================
function b(){var a=document.createElement("bootstrap");var b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b){if(a.style[c]!==undefined){return{end:b[c]}}}return false}// http://blog.alexmaccaw.com/css-transitions
a.fn.emulateTransitionEnd=function(b){var c=false,d=this;a(this).one(a.support.transition.end,function(){c=true});var e=function(){if(!c)a(d).trigger(a.support.transition.end)};setTimeout(e,b);return this};a(function(){a.support.transition=b()})}(jQuery);/* ========================================================================
 * Bootstrap: alert.js v3.1.1
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";// ALERT CLASS DEFINITION
// ======================
var b='[data-dismiss="alert"]';var c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){var c=a(this);var d=c.attr("data-target");if(!d){d=c.attr("href");d=d&&d.replace(/.*(?=#[^\s]*$)/,"")}var e=a(d);if(b)b.preventDefault();if(!e.length){e=c.hasClass("alert")?c:c.parent()}e.trigger(b=a.Event("close.bs.alert"));if(b.isDefaultPrevented())return;e.removeClass("in");function f(){e.trigger("closed.bs.alert").remove()}a.support.transition&&e.hasClass("fade")?e.one(a.support.transition.end,f).emulateTransitionEnd(150):f()};// ALERT PLUGIN DEFINITION
// =======================
var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this);var e=d.data("bs.alert");if(!e)d.data("bs.alert",e=new c(this));if(typeof b=="string")e[b].call(d)})};a.fn.alert.Constructor=c;// ALERT NO CONFLICT
// =================
a.fn.alert.noConflict=function(){a.fn.alert=d;return this};// ALERT DATA-API
// ==============
a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery);/* ========================================================================
 * Bootstrap: button.js v3.1.1
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";// BUTTON PUBLIC CLASS DEFINITION
// ==============================
var b=function(c,d){this.$element=a(c);this.options=a.extend({},b.DEFAULTS,d);this.isLoading=false};b.DEFAULTS={loadingText:"loading..."};b.prototype.setState=function(b){var c="disabled";var d=this.$element;var e=d.is("input")?"val":"html";var f=d.data();b=b+"Text";if(!f.resetText)d.data("resetText",d[e]());d[e](f[b]||this.options[b]);// push to event loop to allow forms to submit
setTimeout(a.proxy(function(){if(b=="loadingText"){this.isLoading=true;d.addClass(c).attr(c,c)}else if(this.isLoading){this.isLoading=false;d.removeClass(c).removeAttr(c)}},this),0)};b.prototype.toggle=function(){var a=true;var b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");if(c.prop("type")=="radio"){if(c.prop("checked")&&this.$element.hasClass("active"))a=false;else b.find(".active").removeClass("active")}if(a)c.prop("checked",!this.$element.hasClass("active")).trigger("change")}if(a)this.$element.toggleClass("active")};// BUTTON PLUGIN DEFINITION
// ========================
var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this);var e=d.data("bs.button");var f=typeof c=="object"&&c;if(!e)d.data("bs.button",e=new b(this,f));if(c=="toggle")e.toggle();else if(c)e.setState(c)})};a.fn.button.Constructor=b;// BUTTON NO CONFLICT
// ==================
a.fn.button.noConflict=function(){a.fn.button=c;return this};// BUTTON DATA-API
// ===============
a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);if(!c.hasClass("btn"))c=c.closest(".btn");c.button("toggle");b.preventDefault()})}(jQuery);/* ========================================================================
 * Bootstrap: carousel.js v3.1.1
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";// CAROUSEL CLASS DEFINITION
// =========================
var b=function(b,c){this.$element=a(b);this.$indicators=this.$element.find(".carousel-indicators");this.options=c;this.paused=this.sliding=this.interval=this.$active=this.$items=null;this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:true};b.prototype.cycle=function(b){b||(this.paused=false);this.interval&&clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval));return this};b.prototype.getActiveIndex=function(){this.$active=this.$element.find(".item.active");this.$items=this.$active.parent().children();return this.$items.index(this.$active)};b.prototype.to=function(b){var c=this;var d=this.getActiveIndex();if(b>this.$items.length-1||b<0)return;if(this.sliding)return this.$element.one("slid.bs.carousel",function(){c.to(b)});if(d==b)return this.pause().cycle();return this.slide(b>d?"next":"prev",a(this.$items[b]))};b.prototype.pause=function(b){b||(this.paused=true);if(this.$element.find(".next, .prev").length&&a.support.transition){this.$element.trigger(a.support.transition.end);this.cycle(true)}this.interval=clearInterval(this.interval);return this};b.prototype.next=function(){if(this.sliding)return;return this.slide("next")};b.prototype.prev=function(){if(this.sliding)return;return this.slide("prev")};b.prototype.slide=function(b,c){var d=this.$element.find(".item.active");var e=c||d[b]();var f=this.interval;var g=b=="next"?"left":"right";var h=b=="next"?"first":"last";var i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=false;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});this.$element.trigger(j);if(j.isDefaultPrevented())return;this.sliding=true;f&&this.pause();if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})}if(a.support.transition&&this.$element.hasClass("slide")){e.addClass(b);e[0].offsetWidth;// force reflow
d.addClass(g);e.addClass(g);d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active");d.removeClass(["active",g].join(" "));i.sliding=false;setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(d.css("transition-duration").slice(0,-1)*1e3)}else{d.removeClass("active");e.addClass("active");this.sliding=false;this.$element.trigger("slid.bs.carousel")}f&&this.cycle();return this};// CAROUSEL PLUGIN DEFINITION
// ==========================
var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this);var e=d.data("bs.carousel");var f=a.extend({},b.DEFAULTS,d.data(),typeof c=="object"&&c);var g=typeof c=="string"?c:f.slide;if(!e)d.data("bs.carousel",e=new b(this,f));if(typeof c=="number")e.to(c);else if(g)e[g]();else if(f.interval)e.pause().cycle()})};a.fn.carousel.Constructor=b;// CAROUSEL NO CONFLICT
// ====================
a.fn.carousel.noConflict=function(){a.fn.carousel=c;return this};// CAROUSEL DATA-API
// =================
a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c=a(this),d;var e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));//strip for ie7
var f=a.extend({},e.data(),c.data());var g=c.attr("data-slide-to");if(g)f.interval=false;e.carousel(f);if(g=c.attr("data-slide-to")){e.data("bs.carousel").to(g)}b.preventDefault()});a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery);/* ========================================================================
 * Bootstrap: collapse.js v3.1.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";// COLLAPSE PUBLIC CLASS DEFINITION
// ================================
var b=function(c,d){this.$element=a(c);this.options=a.extend({},b.DEFAULTS,d);this.transitioning=null;if(this.options.parent)this.$parent=a(this.options.parent);if(this.options.toggle)this.toggle()};b.DEFAULTS={toggle:true};b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"};b.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in"))return;var b=a.Event("show.bs.collapse");this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide");d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0);this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto");this.transitioning=0;this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])};b.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in"))return;var b=a.Event("hide.bs.collapse");this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight;this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");this.transitioning=1;var d=function(){this.transitioning=0;this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!a.support.transition)return d.call(this);this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350)};b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};// COLLAPSE PLUGIN DEFINITION
// ==========================
var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this);var e=d.data("bs.collapse");var f=a.extend({},b.DEFAULTS,d.data(),typeof c=="object"&&c);if(!e&&f.toggle&&c=="show")c=!c;if(!e)d.data("bs.collapse",e=new b(this,f));if(typeof c=="string")e[c]()})};a.fn.collapse.Constructor=b;// COLLAPSE NO CONFLICT
// ====================
a.fn.collapse.noConflict=function(){a.fn.collapse=c;return this};// COLLAPSE DATA-API
// =================
a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d;var e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"");//strip for ie7
var f=a(e);var g=f.data("bs.collapse");var h=g?"toggle":c.data();var i=c.attr("data-parent");var j=i&&a(i);if(!g||!g.transitioning){if(j)j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(c).addClass("collapsed");c[f.hasClass("in")?"addClass":"removeClass"]("collapsed")}f.collapse(h)})}(jQuery);/* ========================================================================
 * Bootstrap: dropdown.js v3.1.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";// DROPDOWN CLASS DEFINITION
// =========================
var b=".dropdown-backdrop";var c="[data-toggle=dropdown]";var d=function(b){a(b).on("click.bs.dropdown",this.toggle)};d.prototype.toggle=function(b){var c=a(this);if(c.is(".disabled, :disabled"))return;var d=f(c);var g=d.hasClass("open");e();if(!g){if("ontouchstart"in document.documentElement&&!d.closest(".navbar-nav").length){// if mobile we use a backdrop because click events don't delegate
a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",e)}var h={relatedTarget:this};d.trigger(b=a.Event("show.bs.dropdown",h));if(b.isDefaultPrevented())return;d.toggleClass("open").trigger("shown.bs.dropdown",h);c.focus()}return false};d.prototype.keydown=function(b){if(!/(38|40|27)/.test(b.keyCode))return;var d=a(this);b.preventDefault();b.stopPropagation();if(d.is(".disabled, :disabled"))return;var e=f(d);var g=e.hasClass("open");if(!g||g&&b.keyCode==27){if(b.which==27)e.find(c).focus();return d.click()}var h=" li:not(.divider):visible a";var i=e.find("[role=menu]"+h+", [role=listbox]"+h);if(!i.length)return;var j=i.index(i.filter(":focus"));if(b.keyCode==38&&j>0)j--;// up
if(b.keyCode==40&&j<i.length-1)j++;// down
if(!~j)j=0;i.eq(j).focus()};function e(d){a(b).remove();a(c).each(function(){var b=f(a(this));var c={relatedTarget:this};if(!b.hasClass("open"))return;b.trigger(d=a.Event("hide.bs.dropdown",c));if(d.isDefaultPrevented())return;b.removeClass("open").trigger("hidden.bs.dropdown",c)})}function f(b){var c=b.attr("data-target");if(!c){c=b.attr("href");c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,"")}var d=c&&a(c);return d&&d.length?d:b.parent()}// DROPDOWN PLUGIN DEFINITION
// ==========================
var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this);var e=c.data("bs.dropdown");if(!e)c.data("bs.dropdown",e=new d(this));if(typeof b=="string")e[b].call(c)})};a.fn.dropdown.Constructor=d;// DROPDOWN NO CONFLICT
// ====================
a.fn.dropdown.noConflict=function(){a.fn.dropdown=g;return this};// APPLY TO STANDARD DROPDOWN ELEMENTS
// ===================================
a(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",c,d.prototype.toggle).on("keydown.bs.dropdown.data-api",c+", [role=menu], [role=listbox]",d.prototype.keydown)}(jQuery);/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";// MODAL CLASS DEFINITION
// ======================
var b=function(b,c){this.options=c;this.$element=a(b);this.$backdrop=this.isShown=null;if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}};b.DEFAULTS={backdrop:true,keyboard:true,show:true};b.prototype.toggle=function(a){return this[!this.isShown?"show":"hide"](a)};b.prototype.show=function(b){var c=this;var d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d);if(this.isShown||d.isDefaultPrevented())return;this.isShown=true;this.escape();this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this));this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");if(!c.$element.parent().length){c.$element.appendTo(document.body)}c.$element.show().scrollTop(0);if(d){c.$element[0].offsetWidth}c.$element.addClass("in").attr("aria-hidden",false);c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)})};b.prototype.hide=function(b){if(b)b.preventDefault();b=a.Event("hide.bs.modal");this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=false;this.escape();a(document).off("focusin.bs.modal");this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.bs.modal");a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()};b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){if(this.$element[0]!==a.target&&!this.$element.has(a.target).length){this.$element.focus()}},this))};b.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){a.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off("keyup.dismiss.bs.modal")}};b.prototype.hideModal=function(){var a=this;this.$element.hide();this.backdrop(function(){a.removeBackdrop();a.$element.trigger("hidden.bs.modal")})};b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null};b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body);this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){if(a.target!==a.currentTarget)return;this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this));if(d)this.$backdrop[0].offsetWidth;// force reflow
this.$backdrop.addClass("in");if(!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else if(b){b()}};// MODAL PLUGIN DEFINITION
// =======================
var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this);var f=e.data("bs.modal");var g=a.extend({},b.DEFAULTS,e.data(),typeof c=="object"&&c);if(!f)e.data("bs.modal",f=new b(this,g));if(typeof c=="string")f[c](d);else if(g.show)f.show(d)})};a.fn.modal.Constructor=b;// MODAL NO CONFLICT
// =================
a.fn.modal.noConflict=function(){a.fn.modal=c;return this};// MODAL DATA-API
// ==============
a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this);var d=c.attr("href");var e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,""));//strip for ie7
var f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());if(c.is("a"))b.preventDefault();e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})});a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery);/* ========================================================================
 * Bootstrap: tooltip.js v3.1.1
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";// TOOLTIP PUBLIC CLASS DEFINITION
// ===============================
var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;this.init("tooltip",a,b)};b.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false};b.prototype.init=function(b,c,d){this.enabled=true;this.type=b;this.$element=a(c);this.options=this.getOptions(d);var e=this.options.trigger.split(" ");for(var f=e.length;f--;){var g=e[f];if(g=="click"){this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this))}else if(g!="manual"){var h=g=="hover"?"mouseenter":"focusin";var i=g=="hover"?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this));this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()};b.prototype.getDefaults=function(){return b.DEFAULTS};b.prototype.getOptions=function(b){b=a.extend({},this.getDefaults(),this.$element.data(),b);if(b.delay&&typeof b.delay=="number"){b.delay={show:b.delay,hide:b.delay}}return b};b.prototype.getDelegateOptions=function(){var b={};var c=this.getDefaults();this._options&&a.each(this._options,function(a,d){if(c[a]!=d)b[a]=d});return b};b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(c.timeout);c.hoverState="in";if(!c.options.delay||!c.options.delay.show)return c.show();c.timeout=setTimeout(function(){if(c.hoverState=="in")c.show()},c.options.delay.show)};b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(c.timeout);c.hoverState="out";if(!c.options.delay||!c.options.delay.hide)return c.hide();c.timeout=setTimeout(function(){if(c.hoverState=="out")c.hide()},c.options.delay.hide)};b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this;var d=this.tip();this.setContent();if(this.options.animation)d.addClass("fade");var e=typeof this.options.placement=="function"?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement;var f=/\s?auto?\s?/i;var g=f.test(e);if(g)e=e.replace(f,"")||"top";d.detach().css({top:0,left:0,display:"block"}).addClass(e);this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition();var i=d[0].offsetWidth;var j=d[0].offsetHeight;if(g){var k=this.$element.parent();var l=e;var m=document.documentElement.scrollTop||document.body.scrollTop;var n=this.options.container=="body"?window.innerWidth:k.outerWidth();var o=this.options.container=="body"?window.innerHeight:k.outerHeight();var p=this.options.container=="body"?0:k.offset().left;e=e=="bottom"&&h.top+h.height+j-m>o?"top":e=="top"&&h.top-m-j<0?"bottom":e=="right"&&h.right+i>n?"left":e=="left"&&h.left-i<p?"right":e;d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e);this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}};b.prototype.applyPlacement=function(b,c){var d;var e=this.tip();var f=e[0].offsetWidth;var g=e[0].offsetHeight;// manually read margins because getBoundingClientRect includes difference
var h=parseInt(e.css("margin-top"),10);var i=parseInt(e.css("margin-left"),10);// we must check for NaN for ie 8/9
if(isNaN(h))h=0;if(isNaN(i))i=0;b.top=b.top+h;b.left=b.left+i;// $.fn.offset doesn't round pixel values
// so we use setOffset directly with our own function B-0
a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0);e.addClass("in");// check to see if placing tip in new offset caused the tip to resize itself
var j=e[0].offsetWidth;var k=e[0].offsetHeight;if(c=="top"&&k!=g){d=true;b.top=b.top+g-k}if(/bottom|top/.test(c)){var l=0;if(b.left<0){l=b.left*-2;b.left=0;e.offset(b);j=e[0].offsetWidth;k=e[0].offsetHeight}this.replaceArrow(l-f+j,j,"left")}else{this.replaceArrow(k-g,k,"top")}if(d)e.offset(b)};b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")};b.prototype.setContent=function(){var a=this.tip();var b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b);a.removeClass("fade in top bottom left right")};b.prototype.hide=function(){var b=this;var c=this.tip();var d=a.Event("hide.bs."+this.type);function e(){if(b.hoverState!="in")c.detach();b.$element.trigger("hidden.bs."+b.type)}this.$element.trigger(d);if(d.isDefaultPrevented())return;c.removeClass("in");a.support.transition&&this.$tip.hasClass("fade")?c.one(a.support.transition.end,e).emulateTransitionEnd(150):e();this.hoverState=null;return this};b.prototype.fixTitle=function(){var a=this.$element;if(a.attr("title")||typeof a.attr("data-original-title")!="string"){a.attr("data-original-title",a.attr("title")||"").attr("title","")}};b.prototype.hasContent=function(){return this.getTitle()};b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},typeof b.getBoundingClientRect=="function"?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())};b.prototype.getCalculatedOffset=function(a,b,c,d){/* placement == 'right' */
return a=="bottom"?{top:b.top+b.height,left:b.left+b.width/2-c/2}:a=="top"?{top:b.top-d,left:b.left+b.width/2-c/2}:a=="left"?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}};b.prototype.getTitle=function(){var a;var b=this.$element;var c=this.options;a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title);return a};b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)};b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")};b.prototype.validate=function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}};b.prototype.enable=function(){this.enabled=true};b.prototype.disable=function(){this.enabled=false};b.prototype.toggleEnabled=function(){this.enabled=!this.enabled};b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)};b.prototype.destroy=function(){clearTimeout(this.timeout);this.hide().$element.off("."+this.type).removeData("bs."+this.type)};// TOOLTIP PLUGIN DEFINITION
// =========================
var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this);var e=d.data("bs.tooltip");var f=typeof c=="object"&&c;if(!e&&c=="destroy")return;if(!e)d.data("bs.tooltip",e=new b(this,f));if(typeof c=="string")e[c]()})};a.fn.tooltip.Constructor=b;// TOOLTIP NO CONFLICT
// ===================
a.fn.tooltip.noConflict=function(){a.fn.tooltip=c;return this}}(jQuery);/* ========================================================================
 * Bootstrap: popover.js v3.1.1
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";// POPOVER PUBLIC CLASS DEFINITION
// ===============================
var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});// NOTE: POPOVER EXTENDS tooltip.js
// ================================
b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype);b.prototype.constructor=b;b.prototype.getDefaults=function(){return b.DEFAULTS};b.prototype.setContent=function(){var a=this.tip();var b=this.getTitle();var c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b);a.find(".popover-content")[// we use append for html objects to maintain js events
this.options.html?typeof c=="string"?"html":"append":"text"](c);a.removeClass("fade top bottom left right in");// IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
// this manually by checking the contents.
if(!a.find(".popover-title").html())a.find(".popover-title").hide()};b.prototype.hasContent=function(){return this.getTitle()||this.getContent()};b.prototype.getContent=function(){var a=this.$element;var b=this.options;return a.attr("data-content")||(typeof b.content=="function"?b.content.call(a[0]):b.content)};b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};b.prototype.tip=function(){if(!this.$tip)this.$tip=a(this.options.template);return this.$tip};// POPOVER PLUGIN DEFINITION
// =========================
var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this);var e=d.data("bs.popover");var f=typeof c=="object"&&c;if(!e&&c=="destroy")return;if(!e)d.data("bs.popover",e=new b(this,f));if(typeof c=="string")e[c]()})};a.fn.popover.Constructor=b;// POPOVER NO CONFLICT
// ===================
a.fn.popover.noConflict=function(){a.fn.popover=c;return this}}(jQuery);/* ========================================================================
 * Bootstrap: scrollspy.js v3.1.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";// SCROLLSPY CLASS DEFINITION
// ==========================
function b(c,d){var e;var f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c);this.$body=a("body");this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f);this.options=a.extend({},b.DEFAULTS,d);this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a";this.offsets=a([]);this.targets=a([]);this.activeTarget=null;this.refresh();this.process()}b.DEFAULTS={offset:10};b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]);this.targets=a([]);var c=this;var d=this.$body.find(this.selector).map(function(){var d=a(this);var e=d.data("target")||d.attr("href");var f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]);c.targets.push(this[1])})};b.prototype.process=function(){var a=this.$scrollElement.scrollTop()+this.options.offset;var b=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight;var c=b-this.$scrollElement.height();var d=this.offsets;var e=this.targets;var f=this.activeTarget;var g;if(a>=c){return f!=(g=e.last()[0])&&this.activate(g)}if(f&&a<=d[0]){return f!=(g=e[0])&&this.activate(g)}for(g=d.length;g--;){f!=e[g]&&a>=d[g]&&(!d[g+1]||a<=d[g+1])&&this.activate(e[g])}};b.prototype.activate=function(b){this.activeTarget=b;a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]';var d=a(c).parents("li").addClass("active");if(d.parent(".dropdown-menu").length){d=d.closest("li.dropdown").addClass("active")}d.trigger("activate.bs.scrollspy")};// SCROLLSPY PLUGIN DEFINITION
// ===========================
var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this);var e=d.data("bs.scrollspy");var f=typeof c=="object"&&c;if(!e)d.data("bs.scrollspy",e=new b(this,f));if(typeof c=="string")e[c]()})};a.fn.scrollspy.Constructor=b;// SCROLLSPY NO CONFLICT
// =====================
a.fn.scrollspy.noConflict=function(){a.fn.scrollspy=c;return this};// SCROLLSPY DATA-API
// ==================
a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery);/* ========================================================================
 * Bootstrap: tab.js v3.1.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";// TAB CLASS DEFINITION
// ====================
var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element;var c=b.closest("ul:not(.dropdown-menu)");var d=b.data("target");if(!d){d=b.attr("href");d=d&&d.replace(/.*(?=#[^\s]*$)/,"")}if(b.parent("li").hasClass("active"))return;var e=c.find(".active:last a")[0];var f=a.Event("show.bs.tab",{relatedTarget:e});b.trigger(f);if(f.isDefaultPrevented())return;var g=a(d);this.activate(b.parent("li"),c);this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})};b.prototype.activate=function(b,c,d){var e=c.find("> .active");var f=d&&a.support.transition&&e.hasClass("fade");function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");b.addClass("active");if(f){b[0].offsetWidth;// reflow for transition
b.addClass("in")}else{b.removeClass("fade")}if(b.parent(".dropdown-menu")){b.closest("li.dropdown").addClass("active")}d&&d()}f?e.one(a.support.transition.end,g).emulateTransitionEnd(150):g();e.removeClass("in")};// TAB PLUGIN DEFINITION
// =====================
var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this);var e=d.data("bs.tab");if(!e)d.data("bs.tab",e=new b(this));if(typeof c=="string")e[c]()})};a.fn.tab.Constructor=b;// TAB NO CONFLICT
// ===============
a.fn.tab.noConflict=function(){a.fn.tab=c;return this};// TAB DATA-API
// ============
a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault();a(this).tab("show")})}(jQuery);/* ========================================================================
 * Bootstrap: affix.js v3.1.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";// AFFIX CLASS DEFINITION
// ======================
var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d);this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this));this.$element=a(c);this.affixed=this.unpin=this.pinnedOffset=null;this.checkPosition()};b.RESET="affix affix-top affix-bottom";b.DEFAULTS={offset:0};b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop();var c=this.$element.offset();return this.pinnedOffset=c.top-a};b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)};b.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var c=a(document).height();var d=this.$window.scrollTop();var e=this.$element.offset();var f=this.options.offset;var g=f.top;var h=f.bottom;if(this.affixed=="top")e.top+=d;if(typeof f!="object")h=g=f;if(typeof g=="function")g=f.top(this.$element);if(typeof h=="function")h=f.bottom(this.$element);var i=this.unpin!=null&&d+this.unpin<=e.top?false:h!=null&&e.top+this.$element.height()>=c-h?"bottom":g!=null&&d<=g?"top":false;if(this.affixed===i)return;if(this.unpin)this.$element.css("top","");var j="affix"+(i?"-"+i:"");var k=a.Event(j+".bs.affix");this.$element.trigger(k);if(k.isDefaultPrevented())return;this.affixed=i;this.unpin=i=="bottom"?this.getPinnedOffset():null;this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed")));if(i=="bottom"){this.$element.offset({top:c-h-this.$element.height()})}};// AFFIX PLUGIN DEFINITION
// =======================
var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this);var e=d.data("bs.affix");var f=typeof c=="object"&&c;if(!e)d.data("bs.affix",e=new b(this,f));if(typeof c=="string")e[c]()})};a.fn.affix.Constructor=b;// AFFIX NO CONFLICT
// =================
a.fn.affix.noConflict=function(){a.fn.affix=c;return this};// AFFIX DATA-API
// ==============
a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this);var c=b.data();c.offset=c.offset||{};if(c.offsetBottom)c.offset.bottom=c.offsetBottom;if(c.offsetTop)c.offset.top=c.offsetTop;b.affix(c)})})}(jQuery);
//# sourceMappingURL=deps8b71c.map