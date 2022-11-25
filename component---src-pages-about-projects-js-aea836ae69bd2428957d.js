/*! For license information please see component---src-pages-about-projects-js-aea836ae69bd2428957d.js.LICENSE.txt */
(self.webpackChunkmaria_portfolio=self.webpackChunkmaria_portfolio||[]).push([[731],{5900:function(e,t){var n;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var a in n)i.call(n,a)&&n[a]&&e.push(a);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},660:function(e,t,n){"use strict";n.r(t),n.d(t,{InView:function(){return f},observe:function(){return c},useInView:function(){return d}});var i=n(7294);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l=new Map,o=new WeakMap,a=0;function s(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(o.has(n)||(a+=1,o.set(n,a.toString())),o.get(n)):"0":e[t]);var n})).toString()}function c(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var i=function(e){var t=s(e),n=l.get(t);if(!n){var i,r=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var n,l=t.isIntersecting&&i.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=l),null==(n=r.get(t.target))||n.forEach((function(e){e(l,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},l.set(t,n)}return n}(n),r=i.id,o=i.observer,a=i.elements,c=a.get(e)||[];return a.has(e)||a.set(e,c),c.push(t),o.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),l.delete(r))}}function u(e){return"function"!=typeof e.children}var f=function(e){var t,n;function l(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),u(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=l).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=l.prototype;return o.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},o.componentWillUnmount=function(){this.unobserve(),this.node=null},o.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,i=e.rootMargin,r=e.trackVisibility,l=e.delay;this._unobserveCb=c(this.node,this.handleChange,{threshold:t,root:n,rootMargin:i,trackVisibility:r,delay:l})}},o.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},o.render=function(){if(!u(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var l=this.props,o=l.children,a=l.as,s=l.tag,c=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(l,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return(0,i.createElement)(a||s||"div",r({ref:this.handleNode},c),o)},l}(i.Component);function d(e){var t=void 0===e?{}:e,n=t.threshold,r=t.delay,l=t.trackVisibility,o=t.rootMargin,a=t.root,s=t.triggerOnce,u=t.skip,f=t.initialInView,d=(0,i.useRef)(),m=(0,i.useState)({inView:!!f}),h=m[0],p=m[1],g=(0,i.useCallback)((function(e){void 0!==d.current&&(d.current(),d.current=void 0),u||e&&(d.current=c(e,(function(e,t){p({inView:e,entry:t}),t.isIntersecting&&s&&d.current&&(d.current(),d.current=void 0)}),{root:a,rootMargin:o,threshold:n,trackVisibility:l,delay:r}))}),[Array.isArray(n)?n.toString():n,a,o,s,u,l,r]);(0,i.useEffect)((function(){d.current||!h.entry||s||u||p({inView:!!f})}));var v=[g,h.inView,h.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}f.displayName="InView",f.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1},t.default=f},5238:function(e,t,n){"use strict";t.Z=void 0;var i=o(n(7294)),r=o(n(5697)),l=o(n(5900));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(e){var t=e.animate,n=e.className,r=e.layout,o=e.children;return i.default.createElement("div",{className:(0,l.default)(n,"vertical-timeline",{"vertical-timeline--animate":t,"vertical-timeline--two-columns":"2-columns"===r,"vertical-timeline--one-column-left":"1-column"===r||"1-column-left"===r,"vertical-timeline--one-column-right":"1-column-right"===r})},o)};a.propTypes={children:r.default.oneOfType([r.default.arrayOf(r.default.node),r.default.node]).isRequired,className:r.default.string,animate:r.default.bool,layout:r.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"])},a.defaultProps={animate:!0,className:"",layout:"2-columns"};var s=a;t.Z=s},7038:function(e,t,n){"use strict";t.Z=void 0;var i=a(n(7294)),r=a(n(5697)),l=a(n(5900)),o=n(660);function a(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t=e.children,n=e.className,r=e.contentArrowStyle,a=e.contentStyle,s=e.date,c=e.dateClassName,u=e.icon,f=e.iconClassName,d=e.iconOnClick,m=e.onTimelineElementClick,h=e.iconStyle,p=e.id,g=e.position,v=e.style,b=e.textClassName,y=e.intersectionObserverProps,k=e.visible;return i.default.createElement(o.InView,y,(function(e){var o=e.inView,y=e.ref;return i.default.createElement("div",{ref:y,id:p,className:(0,l.default)(n,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===g,"vertical-timeline-element--right":"right"===g,"vertical-timeline-element--no-children":""===t}),style:v},i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{style:h,onClick:d,className:(0,l.default)(f,"vertical-timeline-element-icon",{"bounce-in":o||k,"is-hidden":!(o||k)})},u),i.default.createElement("div",{style:a,onClick:m,className:(0,l.default)(b,"vertical-timeline-element-content",{"bounce-in":o||k,"is-hidden":!(o||k)})},i.default.createElement("div",{style:r,className:"vertical-timeline-element-content-arrow"}),t,i.default.createElement("span",{className:(0,l.default)(c,"vertical-timeline-element-date")},s))))}))};s.propTypes={children:r.default.oneOfType([r.default.arrayOf(r.default.node),r.default.node]),className:r.default.string,contentArrowStyle:r.default.shape({}),contentStyle:r.default.shape({}),date:r.default.node,dateClassName:r.default.string,icon:r.default.element,iconClassName:r.default.string,iconStyle:r.default.shape({}),iconOnClick:r.default.func,onTimelineElementClick:r.default.func,id:r.default.string,position:r.default.string,style:r.default.shape({}),textClassName:r.default.string,visible:r.default.bool,intersectionObserverProps:r.default.shape({root:r.default.object,rootMargin:r.default.string,threshold:r.default.number,triggerOnce:r.default.bool})},s.defaultProps={children:"",className:"",contentArrowStyle:null,contentStyle:null,icon:null,iconClassName:"",iconOnClick:null,onTimelineElementClick:null,iconStyle:null,id:"",style:null,date:"",dateClassName:"",position:"",textClassName:"",visible:!1,intersectionObserverProps:{rootMargin:"0px 0px -40px 0px"}};var c=s;t.Z=c},7772:function(e,t,n){"use strict";e.exports={VerticalTimeline:n(5238).Z,VerticalTimelineElement:n(7038).Z}},8339:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var i=n(7294),r=n(5617),l=n(8038),o=n(7772);function a(){return i.createElement(l.Z,{img:r.Z},i.createElement(o.VerticalTimeline,null,i.createElement(o.VerticalTimelineElement,{className:"vertical-timeline-element--work font-light",contentStyle:{background:"rgb(115,26,114)",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  rgb(192,15,244)"},date:"July 2022-October 2022",iconStyle:{background:"rgb(115,26,114)",color:"#fff"}},i.createElement("h3",{className:"vertical-timeline-element-title font-normal"},"Software Engineering Intern"),i.createElement("h4",{className:"vertical-timeline-element-subtitle font-extralight"},"Google, Munich Germany")),i.createElement(o.VerticalTimelineElement,{className:"vertical-timeline-element--work font-light",contentStyle:{background:"rgb(115,26,114)",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  rgb(192,15,244)"},date:"September 2021-November 2021",iconStyle:{background:"rgb(115,26,114)",color:"#fff"}},i.createElement("h3",{className:"vertical-timeline-element-title font-normal"},"STEP Intern"),i.createElement("h4",{className:"vertical-timeline-element-subtitle font-extralight"},"Google, Munich Germany")),i.createElement(o.VerticalTimelineElement,{className:"vertical-timeline-element--work font-light",contentStyle:{background:"rgb(115,26,114)",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  rgb(192,15,244)"},date:"September 2020-February 2021",iconStyle:{background:"rgb(115,26,114)",color:"#fff"}},i.createElement("h3",{className:"vertical-timeline-element-title font-normal"},"Programming Trainer"),i.createElement("h4",{className:"vertical-timeline-element-subtitle font-extralight"},"Logiscool, Bucharest Romania")),i.createElement(o.VerticalTimelineElement,{className:"vertical-timeline-element--work font-light",contentStyle:{background:"rgb(115,26,114)",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  rgb(192,15,244)"},date:"May 2020",iconStyle:{background:"rgb(115,26,114)",color:"#fff"}},i.createElement("h3",{className:"vertical-timeline-element-title font-normal"},"Project: Academy Network"),i.createElement("h4",{className:"vertical-timeline-element-subtitle font-extralight"}," Built in C a system that aggregates information about 100k+ scientific articles and responds to queries using the latest saved data.")),i.createElement(o.VerticalTimelineElement,{className:"vertical-timeline-element--work font-light",contentStyle:{background:"rgb(115,26,114)",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  rgb(192,15,244)"},date:"May 2020",iconStyle:{background:"rgb(115,26,114)",color:"#fff"}},i.createElement("h3",{className:"vertical-timeline-element-title font-normal"},"Project: Academy Network"),i.createElement("h4",{className:"vertical-timeline-element-subtitle font-extralight"}," Built in C a system that aggregates information about 100k+ scientific articles and responds to queries using the latest saved data."))))}},5617:function(e,t,n){"use strict";t.Z=n.p+"static/fata_in_munti2-a1c1578c5f0851856a44efaa1a394c76.jpg"}}]);
//# sourceMappingURL=component---src-pages-about-projects-js-aea836ae69bd2428957d.js.map