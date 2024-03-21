"use strict";!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("itowns_widgets",[],e):"object"==typeof exports?exports.itowns_widgets=e():t.itowns_widgets=e()}(self,(()=>(self.webpackChunkitowns=self.webpackChunkitowns||[]).push([[318],{75723:(t,e,o)=>{o.r(e),o.d(e,{C3DTilesStyle:()=>A,Minimap:()=>f,Navigation:()=>c,Scale:()=>y,Searchbar:()=>T,Widget:()=>n});var i=o(73502);const n=class{#t;constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;this.parentElement=e.parentElement||t.domElement,this.position=e.position||o.position,["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right"].includes(this.position)||(console.warn(`'position' optional parameter for 'Widget' constructor is not a valid option. It will be set to '${o.position}'.`),this.position=o.position),this.domElement=document.createElement("div"),this.parentElement.appendChild(this.domElement),this.domElement.style.width=`${e.width||e.size||o.width}px`,this.domElement.style.height=`${e.height||e.size||o.height}px`;const i=this.position.split("-");if(this.domElement.classList.add(`${i[0]}-widget`),i[1])this.domElement.classList.add(`${i[1]}-widget`);else switch(i[0]){case"top":case"bottom":this.domElement.style.left=`calc(50% - ${this.domElement.offsetWidth/2}px)`;break;case"left":case"right":this.domElement.style.top=`calc(50% - ${this.domElement.offsetHeight/2}px)`}e.translate&&(this.domElement.style.transform=`translate(${e.translate.x||0}px, ${e.translate.y||0}px)`),this.domElement.addEventListener("pointerdown",(t=>{t.stopPropagation()})),this.domElement.addEventListener("mousedown",(t=>{t.stopPropagation()}))}show(){this.domElement.style.display=this.#t}hide(){this.#t=window.getComputedStyle(this.domElement).display,this.domElement.style.display="none"}},s={displayCompass:!0,display3DToggle:!0,displayZoomIn:!0,displayZoomOut:!0,animationDuration:500,position:"bottom-left",direction:"column"},a={id:"compass",content:"",info:"Rotate the camera to face North",parentId:"widgets"},l={id:"3d-button",content:"3D",info:"Tilt the camera"},r={id:"zoom-in-button",content:'<span class="widget-zoom-button-logo"></span>',info:"Zoom in",parentId:"zoom-button-bar"},d={id:"zoom-out-button",content:'<span id="zoom-out-logo" class="widget-zoom-button-logo"></span>',info:"Zoom out",parentId:"zoom-button-bar"},c=class extends n{#e;#o(t){return t.time=this.animationDuration,this.#e.controls.lookAtCoordinate(t)}#i(t,e){return this.addButton(t.id,t.content,t.info,e,t.parentId)}constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t.isGlobeView)throw new Error("'Navigation' plugin only supports 'GlobeView'. Therefore, the 'view' parameter must be a 'GlobeView'.");["top","bottom","left","right"].includes(e.position)&&(console.warn(`'position' optional parameter for 'Navigation' is not a valid option. It will be set to '${s.position}'.`),e.position=s.position),super(t,e,s),this.#e=t,this.direction=e.direction||s.direction,["column","row"].includes(this.direction)||(console.warn(`'direction' optional parameter for 'Navigation' constructor is not a valid option. It will be set to '${s.direction}'.`),this.direction=s.direction),this.animationDuration=void 0===e.animationDuration?s.animationDuration:e.animationDuration,this.domElement.id="widgets-navigation",this.domElement.classList.add(`${this.direction}-widget`),(e.displayCompass??s.displayCompass)&&(this.compass=this.#i(a,(()=>{this.#o({heading:0,tilt:89.5})})),t.addEventListener(i.b.CAMERA_MOVED,(t=>{this.compass.style.transform=`rotate(${-t.heading}deg)`}))),(e.display3DToggle??s.display3DToggle)&&(this.toggle3D=this.#i(l,(()=>{this.#o({tilt:this.#e.controls.getTilt()<89?89.5:40})})),t.addEventListener(i.b.CAMERA_MOVED,(t=>{this.toggle3D.innerHTML=t.tilt<89?"2D":"3D"}))),(e.displayZoomIn??s.displayZoomIn)&&(this.zoomIn=this.#i(r,(()=>{this.#o({zoom:Math.min(20,this.#e.controls.getZoom()+1)})}))),(e.displayZoomOut??s.displayZoomOut)&&(this.zoomOut=this.#i(d,(()=>{this.#o({zoom:Math.max(3,this.#e.controls.getZoom()-1)})})))}addButton(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>{},n=arguments.length>4?arguments[4]:void 0,s=document.getElementById(n);s||(s=this.addButtonBar(n));const a=document.createElement("button");return a.className="widget-button",a.id=t,a.innerHTML=e,a.title=o,a.onclick=i,s.appendChild(a),a.tabIndex=-1,window.addEventListener("pointerup",(()=>{document.activeElement===a&&this.#e.domElement.focus()})),a}addButtonBar(t){const e=document.createElement("div");return e.className="widget-button-bar",t&&(e.id=t),this.domElement.appendChild(e),e}};var m=o(62310),h=o(99617),p=o(39510),u=o(232);const g={minScale:2e-6,maxScale:2e-9,zoomRatio:1/30,width:150,height:150,position:"bottom-left"},f=class extends n{constructor(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.isGlobeView)throw new Error("'Minimap' plugin only supports 'GlobeView'. Therefore, the 'view' parameter must be a 'GlobeView'.");if(!e.isColorLayer)throw new Error("'layer' parameter form 'Minimap' constructor should be a 'ColorLayer'.");if(super(t,o,g),this.minScale=o.minScale||g.minScale,this.maxScale=o.maxScale||g.maxScale,this.zoomRatio=o.zoomRatio||g.zoomRatio,this.domElement.id="widgets-minimap",o.cursor){const t=document.createElement("div");t.id="cursor-wrapper",this.domElement.appendChild(t),"string"==typeof o.cursor?t.innerHTML=o.cursor:o.cursor instanceof HTMLElement&&t.appendChild(o.cursor)}this.view=new p.Z(this.domElement,e.source.extent,{camera:{type:u.P.ORTHOGRAPHIC},placement:e.source.extent,noControls:!0,maxSubdivisionLevel:t.tileLayer.maxSubdivisionLevel,disableFocusOnStart:!0}),this.view.addLayer(e),this.domElement.addEventListener("pointerdown",(t=>{t.preventDefault()}));const i=this.view.getScale(o.pitch),n=this.view.camera3D.zoom*this.maxScale/i,s=this.view.camera3D.zoom*this.minScale/i,a=new m.Z(t.referenceCrs),l=new m.Z(this.view.referenceCrs),r=t.controls.getCameraTargetPosition();t.addFrameRequester(h.Ao.AFTER_RENDER,(()=>{const e=t.camera3D.position.distanceTo(r),i=t.getScaleFromDistance(o.pitch,e);this.view.camera3D.zoom=this.zoomRatio*s*i/this.minScale,this.view.camera3D.zoom=Math.min(Math.max(this.view.camera3D.zoom,n),s),this.view.camera3D.updateProjectionMatrix(),a.setFromVector3(t.controls.getCameraTargetPosition()),a.as(this.view.referenceCrs,l),this.view.camera3D.position.x=l.x,this.view.camera3D.position.y=l.y,this.view.camera3D.updateMatrixWorld(!0),this.view.notifyChange(this.view.camera3D)}))}};var w=o(61861),v=o(70378),E=o(29571);const b={width:200,height:30,position:"bottom-left"},y=class extends n{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(t,e,b),this.domElement.id="widgets-scale",this.view=t,this.domElement.innerHTML="Scale",this.width=e.width||b.width,this.view.isGlobeView?(this.view.addEventListener(v.b.GLOBE_INITIALIZED,(()=>{this.update()})),this.view.controls.addEventListener(w.Q.RANGE_CHANGED,(()=>{this.update()}))):this.view.isPlanarView?(this.view.addEventListener(i.b.INITIALIZED,(()=>{this.update()})),this.view.addEventListener(E.uZ.MOVED,(()=>{this.update()}))):console.warn("The 'view' linked to scale widget is neither a 'GlobeView' nor a 'PlanarView'. The scale wont automatically update. You can implement its update automation using 'Scale.update' method.")}addEventListeners(){}update(){let t=Math.round(this.view.getPixelsToMeters(this.width));const e=10**(t.toString().length-1);t=Math.round(t/e)*e;const o=this.view.getMetersToPixels(t);let i="m";t>=1e3&&(t/=1e3,i="km"),this.domElement.innerHTML=`${t} ${i}`,this.domElement.style.width=`${o}px`}};var C=o(45340);const x={width:300,height:38,position:"top",maxSuggestionNumber:10,fontSize:16,placeholder:"Search location"};function L(t,e){var o;return t?(D(t),e>=t.length?e=0:e<0&&(e=t.length-1),null===(o=t[e])||void 0===o||o.classList.add("active"),e):e}function D(t){for(let e=0;e<t.length;e++)t[e].classList.remove("active")}function S(t){for(;t.children.length>1;)t.removeChild(t.lastChild)}const T=class extends n{#n;constructor(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(super(t,o,x),!e||!e.url||!e.parser||"function"!=typeof e.parser)throw new Error("'geocodingOptions' parameter for 'Searchbar' constructor is not a valid option. Please refer to the documentation.");this.#n=e.onSelected??(()=>{}),this.domElement.id="widgets-searchbar",this.domElement.style.height="auto";const i=document.createElement("form");i.setAttribute("autocomplete","off"),i.id="searchbar-autocompletion-form",this.domElement.appendChild(i);const n=document.createElement("input");let s;n.setAttribute("type","text"),n.setAttribute("name","mySearch"),n.setAttribute("placeholder",o.placeholder||x.placeholder),n.style.height=`${o.height||o.size||x.height}px`,n.style.fontSize=`${o.fontSize||x.fontSize}px`,i.appendChild(n),n.addEventListener("input",(()=>{const t=n.value;if(S(i),s=-1,!t)return!1;e.url.searchParams.set("text",t),C.Z.json(e.url).then((a=>{const l=e.parser(a);let r=0;l.forEach(((e,a)=>{if(r===Math.min(l.size,o.maxSuggestionNumber||x.maxSuggestionNumber))return;const d=r;r++;const c=a.toUpperCase().indexOf(t.toUpperCase());if(c>-1){const l=document.createElement("div");l.style.minHeight=n.style.height,l.style.fontSize=`${o.fontSize||x.fontSize}px`;const r=a.slice(0,c),m=a.slice(c,c+t.length),h=a.slice(c+t.length,a.length);l.innerHTML=`<p>${r}<strong>${m}</strong>${h}</p>`,l.setAttribute("location",a),i.appendChild(l),l.addEventListener("mouseover",(()=>{D(i.children),s=d,l.classList.add("active")})),l.addEventListener("click",(()=>{this.#n(e),n.value=l.getAttribute("location"),S(i)}))}}))}))}));const a=(o.position||x.position).includes("top")?1:-1;n.addEventListener("keydown",(e=>{e.stopPropagation();const o=i.getElementsByTagName("div");switch(e.code){case"Escape":S(i),n.value="",t.domElement.focus();break;case"ArrowDown":e.preventDefault(),s=L(o,s+a);break;case"ArrowUp":e.preventDefault(),s=L(o,s-a);break;case"Enter":e.preventDefault(),o[Math.max(s,0)]&&(o[Math.max(s,0)].click(),t.domElement.focus())}})),n.addEventListener("focus",(()=>{i.classList.add("focus")})),n.addEventListener("blur",(()=>{i.classList.remove("focus"),D(i.children)})),i.addEventListener("mouseleave",(()=>{D(i.children),s=-1}))}};var _=o(49075),M=o(11707);const z={width:200,position:"top-right"};class I extends n{constructor(t,e){super(t,e,z),this.domElement.onclick=t=>t.stopImmediatePropagation();const o=document.createElement("select");this.domElement.appendChild(o);const i=new Map,n=()=>{for(const[t,e]of i)e.hidden=t!==o.selectedOptions[0]};o.onchange=n,t.getLayers().filter((t=>!0===t.isC3DTilesLayer)).forEach((e=>{const n=document.createElement("option");n.innerText=e.name,o.add(n);const s=document.createElement("div");this.domElement.appendChild(s),i.set(n,s),e.addEventListener(M.y.ON_TILE_CONTENT_LOADED,(()=>{for(;s.firstChild;)s.firstChild.remove();const o=new Map;for(const[,t]of e.tilesC3DTileFeatures)for(const[,e]of t)for(const t in e.getInfo().batchTable){o.has(t)||o.set(t,[]);const i=e.getInfo().batchTable[t];o.get(t).includes(i)||o.get(t).push(i)}const i=new Map,n=new Map,a=(o,a,l)=>{const r=document.createElement("input");r.setAttribute("type","color"),s.appendChild(r),r.onchange=()=>{const n=o();if(!l.includes(n))return;const s=r.value;i.set(n,(t=>t.getInfo().batchTable[a]==n?s:null)),e.updateStyle(),t.notifyChange()};const d=document.createElement("input");return d.setAttribute("type","range"),d.min=0,d.max=1,d.step=.1,d.value=1,s.appendChild(d),d.onchange=()=>{const i=o();if(!l.includes(i))return;const s=d.value;n.set(i,(t=>t.getInfo().batchTable[a]==i?s:null)),e.updateStyle(),t.notifyChange()},{inputColor:r,opacityElement:d}},l=(t,e)=>{const o=document.createElement("label");o.innerText=t,s.appendChild(o);const i=document.createElement("select");s.appendChild(i),e.forEach((t=>{const e=document.createElement("option");e.value=t,e.text=t,i.add(e)})),a((()=>i.selectedOptions[0].value),t,e)},r=(o,l)=>{const r=document.createElement("label");r.innerText=o,s.appendChild(r);const d=document.createElement("input");d.setAttribute("type","text"),s.appendChild(d);const{inputColor:c,opacityElement:m}=a((()=>d.value),o,l);d.onchange=()=>{if(!l.includes(d.value))return;const s=c.value,a=d.value;i.set(a,(t=>t.getInfo().batchTable[o]==a?s:null));const r=m.value;n.set(a,(t=>t.getInfo().batchTable[o]==a?r:null)),e.updateStyle(),t.notifyChange()}};for(const[t,e]of o)e.length<I.MAX_SELECT_VALUE?l(t,e):r(t,e);e.style=new _.ZP({fill:{color:t=>{let e=null;for(const[,o]of i)e=o(t)||e;return e},opacity:t=>{let e=1;for(const[,o]of n)e=o(t)||e;return e}}})}))})),n()}static get MAX_SELECT_VALUE(){return 10}}const A=I}},t=>(75723,t(t.s=75723))])));
//# sourceMappingURL=itowns_widgets.js.map