(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{GPk4:function(e,t,n){"use strict";var s=n("q1tI"),a=n("n4dX"),i=n("Py26"),r=n("fpT5"),o=13,l=9,c=8,u=38,p=40,d={root:"react-tags",rootFocused:"is-focused",selected:"react-tags__selected",selectedTag:"react-tags__selected-tag",selectedTagName:"react-tags__selected-tag-name",search:"react-tags__search",searchInput:"react-tags__search-input",suggestions:"react-tags__suggestions",suggestionActive:"is-active",suggestionDisabled:"is-disabled"},h=function(e){function t(t){e.call(this,t),this.state={query:"",focused:!1,expandable:!1,selectedIndex:-1,classNames:Object.assign({},d,this.props.classNames)},this.inputEventHandlers={onChange:function(){},onBlur:this.handleBlur.bind(this),onFocus:this.handleFocus.bind(this),onInput:this.handleInput.bind(this),onKeyDown:this.handleKeyDown.bind(this)}}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.componentWillReceiveProps=function(e){this.setState({classNames:Object.assign({},d,e.classNames)})},t.prototype.handleInput=function(e){var t=e.target.value;this.props.handleInputChange&&this.props.handleInputChange(t),this.setState({query:t})},t.prototype.handleKeyDown=function(e){var t=this.state,n=t.query,s=t.selectedIndex,a=this.props,i=a.delimiters,r=a.delimiterChars;(i.indexOf(e.keyCode)>-1||r.indexOf(e.key)>-1)&&((n||s>-1)&&e.preventDefault(),this.handleDelimiter()),e.keyCode===c&&0===n.length&&this.props.allowBackspace&&this.deleteTag(this.props.tags.length-1),e.keyCode===u&&(e.preventDefault(),s<=0?this.setState({selectedIndex:this.suggestions.state.options.length-1}):this.setState({selectedIndex:s-1})),e.keyCode===p&&(e.preventDefault(),this.setState({selectedIndex:(s+1)%this.suggestions.state.options.length}))},t.prototype.handleDelimiter=function(){var e=this.state,t=e.query,n=e.selectedIndex;if(t.length>=this.props.minQueryLength){var s=this.suggestions.state.options.findIndex((function(e){return 0===e.name.search(new RegExp("^"+t+"$","i"))})),a=-1===n?s:n;a>-1&&this.suggestions.state.options[a]?this.addTag(this.suggestions.state.options[a]):this.props.allowNew&&this.addTag({name:t})}},t.prototype.handleClick=function(e){document.activeElement!==e.target&&this.input.input.focus()},t.prototype.handleBlur=function(){this.setState({focused:!1,selectedIndex:-1}),this.props.handleBlur&&this.props.handleBlur(),this.props.addOnBlur&&this.handleDelimiter()},t.prototype.handleFocus=function(){this.setState({focused:!0}),this.props.handleFocus&&this.props.handleFocus()},t.prototype.addTag=function(e){e.disabled||("function"!=typeof this.props.handleValidate||this.props.handleValidate(e))&&(this.props.handleAddition(e),this.setState({query:"",selectedIndex:-1}))},t.prototype.deleteTag=function(e){this.props.handleDelete(e),this.props.clearInputOnDelete&&""!==this.state.query&&this.setState({query:""})},t.prototype.render=function(){var e=this,t=this.props.tagComponent||a,n=this.props.tags.map((function(n,a){return s.createElement(t,{key:a,tag:n,classNames:e.state.classNames,onDelete:e.deleteTag.bind(e,a)})})),o=this.state.focused&&this.state.query.length>=this.props.minQueryLength,l=[this.state.classNames.root];return this.state.focused&&l.push(this.state.classNames.rootFocused),s.createElement("div",{className:l.join(" "),onClick:this.handleClick.bind(this)},s.createElement("div",{className:this.state.classNames.selected,"aria-live":"polite","aria-relevant":"additions removals"},n),s.createElement("div",{className:this.state.classNames.search},s.createElement(i,Object.assign({},this.state,{inputAttributes:this.props.inputAttributes,inputEventHandlers:this.inputEventHandlers,ref:function(t){e.input=t},listboxId:"ReactTags-listbox",autofocus:this.props.autofocus,autoresize:this.props.autoresize,expandable:o,placeholder:this.props.placeholder})),s.createElement(r,Object.assign({},this.state,{ref:function(t){e.suggestions=t},listboxId:"ReactTags-listbox",expandable:o,noSuggestionsText:this.props.noSuggestionsText,suggestions:this.props.suggestions,suggestionsFilter:this.props.suggestionsFilter,addTag:this.addTag.bind(this),maxSuggestionsLength:this.props.maxSuggestionsLength}))))},t}(s.Component);h.defaultProps={tags:[],placeholder:"Add new tag",noSuggestionsText:null,suggestions:[],suggestionsFilter:null,autofocus:!0,autoresize:!0,delimiters:[l,o],delimiterChars:[],minQueryLength:2,maxSuggestionsLength:6,allowNew:!1,allowBackspace:!0,tagComponent:null,inputAttributes:{},addOnBlur:!1,clearInputOnDelete:!0},e.exports=h},Py26:function(e,t,n){"use strict";var s=n("q1tI"),a={position:"absolute",width:0,height:0,visibility:"hidden",overflow:"scroll",whiteSpace:"pre"},i=["fontSize","fontFamily","fontWeight","fontStyle","letterSpacing","textTransform"],r=function(e){function t(t){e.call(this,t),this.state={inputWidth:null}}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.componentDidMount=function(){this.props.autoresize&&(this.copyInputStyles(),this.updateInputWidth()),this.props.autofocus&&this.input.focus()},t.prototype.componentDidUpdate=function(e){var t=e.query,n=e.placeholder;t===this.props.query&&n===this.props.placeholder||this.updateInputWidth()},t.prototype.copyInputStyles=function(){var e=this,t=window.getComputedStyle(this.input);i.forEach((function(n){e.sizer.style[n]=t[n]}))},t.prototype.updateInputWidth=function(){var e;this.props.autoresize&&(e=Math.ceil(this.sizer.scrollWidth)+2),e!==this.state.inputWidth&&this.setState({inputWidth:e})},t.prototype.render=function(){var e=this,t=this.props,n=t.inputAttributes,i=t.inputEventHandlers,r=t.query,o=t.placeholder,l=t.expandable,c=t.listboxId,u=t.selectedIndex;return s.createElement("div",{className:this.props.classNames.searchInput},s.createElement("input",Object.assign({},n,i,{ref:function(t){e.input=t},value:r,placeholder:o,role:"combobox","aria-autocomplete":"list","aria-label":o,"aria-owns":c,"aria-activedescendant":u>-1?c+"-"+u:null,"aria-expanded":l,style:{width:this.state.inputWidth}})),s.createElement("div",{ref:function(t){e.sizer=t},style:a},r||o))},t}(s.Component);e.exports=r},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return E}));var s=n("t8Zj"),a=n("q1tI"),i=n.n(a),r=n("Bl7J"),o=n("vrFN"),l=n("Wbzz"),c=function(e){return Date.parse(u(e))},u=function(e){return e.split("-").slice(0,3).join("-")},p=function(e){e.categories,e.addCategories;var t=e.tags,n=e.addTags,s=e.blogURL,a=e.title,r=e.timeToRead,o=e.fileName,c=e.excerpt,p=e.image;return i.a.createElement("div",{style:{margin:"2.7rem"}},i.a.createElement(l.Link,{to:s,style:{textDecoration:"none"}},i.a.createElement("div",{style:{float:"left"}},p||""),i.a.createElement("div",null,i.a.createElement("h3",{style:{color:"rgb(25, 135, 153)",marginBottom:"-0.2rem"}},a))),i.a.createElement("div",{style:{marginBottom:"0.5rem"}},i.a.createElement("span",{style:{fontSize:"0.8rem",color:"#aba4a4"}},r," "," min read • ",u(o)),i.a.createElement("p",{style:{marginBottom:"0"}}),t.map((function(e,t){return i.a.createElement(d,{index:t,addTag:n},e)}))),i.a.createElement("p",null,c))},d=function(e){var t=e.children,n=e.index,s=e.addTag;return i.a.createElement("button",{tabIndex:n,style:{margin:"0 0.2em 0 0.2em",padding:"0.1em",fontSize:"0.8rem",backgroundColor:"Transparent",color:"#aba4a4",border:"solid 0.3px",textAlign:"center"},onClick:function(e){return s({id:-1,name:t})}},i.a.createElement("em",null,t))},h=n("9eSz"),g=n.n(h),m=n("GPk4"),f=n.n(m),y=(n("wGhj"),function(e){var t=e.tags,n=e.setTags,s=e.suggestions,a=e.placeholder;return i.a.createElement(f.a,{tags:t,suggestions:s,placeholder:a,handleValidate:b(s)(t),handleAddition:v(t,n,b(s)),handleDelete:function(e){var s=t.slice(0);s.splice(e,1),n(s)},allowNew:!0})}),v=function(e,t,n){return function(a){n(e)(a)&&t([].concat(Object(s.a)(e),[a]))}},b=function(e){return function(t){return function(n){return e.map((function(e){return e.name})).includes(n.name)&&!t.map((function(e){return e.name})).includes(n.name)}}},x=function(e,t,n,s){return n.filter((function(e){return s.map((function(e){return e.name})).includes(e)})).length>0&&t.every((function(t){return e.includes(t.name)}))},E=(t.default=function(e){var t=e.data,n=t.allMarkdownRemark.edges.sort((function(e,t){return c(t.node.parent.name)-c(e.node.parent.name)})),s=new Set,l=new Set;n.forEach((function(e){var t=e.node;t.frontmatter.categories.forEach((function(e){return s.add(e)})),t.frontmatter.tags.forEach((function(e){l.add(e)}))}));var u=Array.from(s).map((function(e,t){return{id:t,name:e}})),d=Array.from(l).map((function(e,t){return{id:t,name:e}})),h=Object(a.useState)(Array.from(s).map((function(e,t){return{id:t,name:e}}))),m=h[0],f=h[1],E=Object(a.useState)([]),I=E[0],S=E[1];return i.a.createElement(r.a,null,i.a.createElement(o.a,{title:t.site.siteMetadata.title,description:t.site.siteMetadata.description}),i.a.createElement("div",null,i.a.createElement("div",{style:{margin:"1em"}},i.a.createElement(y,{tags:m,setTags:f,placeholder:"by category",suggestions:u})," ",i.a.createElement(y,{tags:I,setTags:S,placeholder:"by tag",suggestions:d})),i.a.createElement("h4",{style:{textAlign:"center"}},n.map((function(e){var t=e.node;return x(t.frontmatter.tags,I,t.frontmatter.categories,m)?1:0})).reduce((function(e,t){return e+t}))," ","Posts"),n.map((function(e){var t=e.node;return x(t.frontmatter.tags,I,t.frontmatter.categories,m)?i.a.createElement("div",{key:t.id},i.a.createElement(p,{categories:t.frontmatter.categories,addCategories:v(m,f,b(u)),tags:t.frontmatter.tags,addTags:v(I,S,b(d)),blogURL:t.fields.slug,title:t.frontmatter.title,timeToRead:t.timeToRead,fileName:t.parent.name,excerpt:t.excerpt,image:t.frontmatter.image&&t.frontmatter.image.childImageSharp?i.a.createElement(g.a,{fixed:t.frontmatter.image.childImageSharp.fixed}):null})):null}))))},"255058020")},fpT5:function(e,t,n){"use strict";var s=n("q1tI");function a(e){return e.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")}function i(e,t){if(t){var n=RegExp(a(t),"gi");e=e.replace(n,"<mark>$&</mark>")}return{__html:e}}function r(e,t,n,s,i){if(!s){var r=new RegExp("(?:^|\\s)"+a(e),"i");s=function(e){return r.test(e.name)}}var o=t.filter((function(t){return s(t,e)})).slice(0,n);return 0===o.length&&i&&o.push({id:0,name:i,disabled:!0,disableMarkIt:!0}),o}var o=function(e){function t(t){e.call(this,t),this.state={options:r(this.props.query,this.props.suggestions,this.props.maxSuggestionsLength,this.props.suggestionsFilter,this.props.noSuggestionsText)}}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.componentWillReceiveProps=function(e){this.setState({options:r(e.query,e.suggestions,e.maxSuggestionsLength,e.suggestionsFilter,e.noSuggestionsText)})},t.prototype.handleMouseDown=function(e,t){t.preventDefault(),this.props.addTag(e)},t.prototype.render=function(){var e=this;if(!this.props.expandable||!this.state.options.length)return null;var t=this.state.options.map((function(t,n){var a=e.props.listboxId+"-"+n,r=[];return e.props.selectedIndex===n&&r.push(e.props.classNames.suggestionActive),t.disabled&&r.push(e.props.classNames.suggestionDisabled),s.createElement("li",{id:a,key:a,role:"option",className:r.join(" "),"aria-disabled":!0===t.disabled,onMouseDown:e.handleMouseDown.bind(e,t)},t.disableMarkIt?t.name:s.createElement("span",{dangerouslySetInnerHTML:i(t.name,e.props.query,t.markInput)}))}));return s.createElement("div",{className:this.props.classNames.suggestions},s.createElement("ul",{role:"listbox",id:this.props.listboxId},t))},t}(s.Component);e.exports=o},n4dX:function(e,t,n){"use strict";var s=n("q1tI");e.exports=function(e){return s.createElement("button",{type:"button",className:e.classNames.selectedTag,title:"Click to remove tag",onClick:e.onDelete},s.createElement("span",{className:e.classNames.selectedTagName},e.tag.name))}},wGhj:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-c264ceea9668b9355dbe.js.map