"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2723],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),h=i,k=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8595:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),l=["components"],o={id:"CrosshairLineOptions",title:"Interface: CrosshairLineOptions",sidebar_label:"CrosshairLineOptions",sidebar_position:0,custom_edit_url:null},s=void 0,p={unversionedId:"api/interfaces/CrosshairLineOptions",id:"api/interfaces/CrosshairLineOptions",title:"Interface: CrosshairLineOptions",description:"Structure describing a crosshair line (vertical or horizontal)",source:"@site/docs/api/interfaces/CrosshairLineOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/CrosshairLineOptions",permalink:"/lightweight-charts/docs/api/interfaces/CrosshairLineOptions",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CrosshairLineOptions",title:"Interface: CrosshairLineOptions",sidebar_label:"CrosshairLineOptions",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"ChartOptions",permalink:"/lightweight-charts/docs/api/interfaces/ChartOptions"},next:{title:"CrosshairOptions",permalink:"/lightweight-charts/docs/api/interfaces/CrosshairOptions"}},c=[{value:"Properties",id:"properties",children:[{value:"color",id:"color",children:[],level:3},{value:"width",id:"width",children:[],level:3},{value:"style",id:"style",children:[],level:3},{value:"visible",id:"visible",children:[],level:3},{value:"labelVisible",id:"labelvisible",children:[],level:3},{value:"labelBackgroundColor",id:"labelbackgroundcolor",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Structure describing a crosshair line (vertical or horizontal)"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"color"},"color"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"color"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Crosshair line color."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"'#758696'")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"width"},"width"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"width"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#linewidth"},(0,a.kt)("inlineCode",{parentName:"a"},"LineWidth"))),(0,a.kt)("p",null,"Crosshair line width."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"1")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"style"},"style"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"style"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineStyle"},(0,a.kt)("inlineCode",{parentName:"a"},"LineStyle"))),(0,a.kt)("p",null,"Crosshair line style."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineStyle#largedashed"},"LineStyle.LargeDashed")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"visible"},"visible"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"visible"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Display the crosshair line."),(0,a.kt)("p",null,"Note that disabling crosshair lines does not disable crosshair marker on Line and Area series.\nIt can be disabled by using ",(0,a.kt)("inlineCode",{parentName:"p"},"crosshairMarkerVisible")," option of a relevant series."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/LineStyleOptions#crosshairmarkervisible"},"LineStyleOptions.crosshairMarkerVisible")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/AreaStyleOptions#crosshairmarkervisible"},"AreaStyleOptions.crosshairMarkerVisible")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/BaselineStyleOptions#crosshairmarkervisible"},"BaselineStyleOptions.crosshairMarkerVisible")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"labelvisible"},"labelVisible"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"labelVisible"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Display the crosshair label on the relevant scale."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"labelbackgroundcolor"},"labelBackgroundColor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"labelBackgroundColor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Crosshair label background color."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"'#4c525e'")))}d.isMDXComponent=!0}}]);