(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return D}));n("KKXr"),n("Z2Ku"),n("L9s1"),n("0mN4"),n("HEwt"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b"),n("f3/d"),n("Vd3H");var r=n("q1tI"),a=n.n(r),o=n("Bl7J"),i=n("vrFN"),u=n("Wbzz"),c=function(e){var t=e.blogURL,n=e.title,r=e.timeToRead,o=e.fileName,i=e.excerpt,c=e.image;return a.a.createElement("div",{style:{margin:"2.7rem"}},a.a.createElement(u.Link,{to:t,style:{textDecoration:"none"}},a.a.createElement("div",{style:{float:"left"}},c||""),a.a.createElement("div",{style:{marginBottom:"0.4rem"}}," ",a.a.createElement("h3",{style:{color:"rgb(25, 135, 153)",marginBottom:"-0.2rem"}},n),a.a.createElement("span",{style:{fontSize:"0.8rem",color:"#aba4a4"}},r," "," min read • ",p(o)))),a.a.createElement("p",null,i))},p=function(e){return e.split("-").slice(0,3).join("-")},s=n("9eSz"),l=n.n(s),f=(n("bWfx"),n("hHhE"),n("/SS/"),"react-tag-input"),d="react-tag-input__input",m="react-tag-input__tag",v="react-tag-input__tag__content",g="react-tag-input__tag__remove",h="react-tag-input__tag__remove-readonly";n("pIFo");var y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function _(e){return function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return y[e]}))}(function(e){return e.replace(/(\r\n|\n|\r)/gm,"")}(e))}var E,b=(E=function(e,t){return(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}E(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.focused=!1,t.removed=!1,t.preFocusedValue="",t.onPaste=function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain");document.execCommand("insertHTML",!1,_(t))},t.onFocus=function(){t.preFocusedValue=t.getValue(),t.focused=!0},t.onBlur=function(){t.focused=!1;var e=t.props.innerEditableRef.current,n=t.props,r=n.validator,a=n.change;if(!t.removed&&e){if(""===e.innerText)return void t.props.remove();if(r)if(!r(t.getValue()))return void(e.innerText=t.preFocusedValue);a(e.innerText)}},t.onKeyDown=function(e){if(13===e.keyCode)return e.preventDefault(),void t.focusInputRef();var n=t.props.removeOnBackspace,r=t.getValue();return n&&8===e.keyCode&&""===r?(t.removed=!0,t.props.remove(),void t.focusInputRef()):void 0},t.getValue=function(){var e=t.getRef();return e?e.innerText:""},t.getRef=function(){return t.props.innerEditableRef.current},t.focusInputRef=function(){var e=t.props.inputRef;e&&e.current&&e.current.focus()},t}return b(t,e),t.prototype.componentDidMount=function(){this.preFocusedValue=this.getValue()},t.prototype.render=function(){var e=this.props,t=e.value,n=e.className,r=e.innerEditableRef;return a.a.createElement("div",{ref:r,className:n,contentEditable:!0,onPaste:this.onPaste,onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:this.onKeyDown,dangerouslySetInnerHTML:{__html:_(t)}})},t}(a.a.Component),R=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.innerEditableRef=a.a.createRef(),t.remove=function(){return t.props.remove(t.props.index)},t}return R(t,e),t.prototype.render=function(){var e=this.props,t=e.value,n=e.index,r=e.editable,o=e.inputRef,i=e.validator,u=e.update,c=e.readOnly,p=e.removeOnBackspace,s=c?g+" "+h:g;return a.a.createElement("div",{className:m},!r&&a.a.createElement("div",{className:v},t),r&&a.a.createElement(O,{value:t,inputRef:o,innerEditableRef:this.innerEditableRef,className:v,change:function(e){return u(n,e)},remove:this.remove,validator:i,removeOnBackspace:p}),a.a.createElement("div",{className:s,onClick:this.remove}))},t}(a.a.Component),w=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={input:""},t.inputRef=a.a.createRef(),t.onInputChange=function(e){t.setState({input:e.target.value})},t.onInputKeyDown=function(e){var n=t.state.input,r=t.props,a=r.validator,o=r.removeOnBackspace;if(13===e.keyCode){if(e.preventDefault(),""===n)return;if(!(void 0===a||a(n)))return;t.addTag(n)}else if(o&&(8===e.keyCode||46===e.keyCode)){if(""!==n)return;t.removeTag(t.props.tags.length-1)}},t.addTag=function(e){var n=t.props.tags.slice();n.push(e),t.props.onChange(n),t.setState({input:""})},t.removeTag=function(e){var n=t.props.tags.slice();n.splice(e,1),t.props.onChange(n)},t.updateTag=function(e,n){var r=t.props.tags.slice();r[e]=n,t.props.onChange(r)},t}return w(t,e),t.prototype.render=function(){var e=this,t=this.state.input,n=this.props,r=n.tags,o=n.placeholder,i=n.maxTags,u=n.editable,c=n.readOnly,p=n.validator,s=n.removeOnBackspace,l=void 0!==i&&r.length>=i,m=!c&&(u||!1),v=!c&&!l;return a.a.createElement("div",{className:f},r.map((function(t,n){return a.a.createElement(k,{key:n,value:t,index:n,editable:m,readOnly:c||!1,inputRef:e.inputRef,update:e.updateTag,remove:e.removeTag,validator:p,removeOnBackspace:s})})),v&&a.a.createElement("input",{ref:this.inputRef,value:t,className:d,placeholder:o||"Type and press enter",onChange:this.onInputChange,onKeyDown:this.onInputKeyDown}))},t}(a.a.Component),T=function(e,t,n,r){return n.filter((function(e){return r.includes(e)})).length>0&&t.every((function(t){return e.includes(t)}))},C=function(e){return Date.parse(B(e))},B=function(e){return e.split("-").slice(0,3).join("-")},D=(t.default=function(e){var t=e.data,n=t.allMarkdownRemark.edges.sort((function(e,t){return C(t.node.parent.name)-C(e.node.parent.name)})),u=new Set;n.forEach((function(e){e.node.frontmatter.categories.forEach((function(e){return u.add(e)}))}));var p=Object(r.useState)(Array.from(u)),s=p[0],f=p[1],d=Object(r.useState)([]),m=d[0],v=d[1];return a.a.createElement(o.a,null,a.a.createElement(i.a,{title:t.site.siteMetadata.title,description:t.site.siteMetadata.description}),a.a.createElement("div",null,a.a.createElement("div",{style:{margin:"1em"}},a.a.createElement(x,{tags:s,onChange:function(e){return f(e)},placeholder:"by category",editable:!0,removeOnBackspace:!0}),a.a.createElement(x,{tags:m,onChange:function(e){return v(e)},placeholder:"by tag",editable:!0,removeOnBackspace:!0})),a.a.createElement("h4",{style:{textAlign:"center"}},n.map((function(e){var t=e.node;return T(t.frontmatter.tags,m,t.frontmatter.categories,s)?1:0})).reduce((function(e,t){return e+t}))," ","Posts"),n.map((function(e){var t=e.node;return T(t.frontmatter.tags,m,t.frontmatter.categories,s)?a.a.createElement("div",{key:t.id},a.a.createElement(c,{blogURL:t.fields.slug,title:t.frontmatter.title,timeToRead:t.timeToRead,fileName:t.parent.name,excerpt:t.excerpt,image:t.frontmatter.image&&t.frontmatter.image.childImageSharp?a.a.createElement(l.a,{fixed:t.frontmatter.image.childImageSharp.fixed}):null})):null}))))},"2114467176")}}]);
//# sourceMappingURL=component---src-pages-index-js-eba790c2bbee9bf903fa.js.map