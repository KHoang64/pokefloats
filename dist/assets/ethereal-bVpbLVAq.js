import{a9 as Y,v as G,ab as R,aa as O,n as T,C as D,B as V,g as j,ad as X,u as J,ae as W}from"./OrbitControls-DTIdDn8-.js";/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.11.0
 * @author George Michael Brower
 * @license MIT
 */class u{constructor(t,e,i,n,a="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),u.nextNameID=u.nextNameID||0,this.$name.id=`lil-gui-name-${++u.nextNameID}`,this.$widget=document.createElement(a),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue())}onFinishChange(t){return this.onChange(t)}reset(){return this.setValue(this.initialValue),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),t?this.$disable.setAttribute("disabled","disabled"):this.$disable.removeAttribute("disabled"),this)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.getValue();(t!==this._listenValuePrev||Object(t)===t)&&this.updateDisplay(),this._listenValuePrev=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){this.setValue(t)}save(){return this.getValue()}destroy(){this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class N extends u{constructor(t,e,i){super(t,e,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked)}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function S(s){let t,e;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const K={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:S,toHexString:S},y={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},U={isPrimitive:!1,match:Array.isArray,fromHexString(s,t,e=1){const i=y.fromHexString(s);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([s,t,e],i=1){i=255/i;const n=s*i<<16^t*i<<8^e*i<<0;return y.toHexString(n)}},Z={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,e=1){const i=y.fromHexString(s);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:s,g:t,b:e},i=1){i=255/i;const n=s*i<<16^t*i<<8^e*i<<0;return y.toHexString(n)}},Q=[K,y,U,Z];function q(s){return Q.find(t=>t.match(s))}class tt extends u{constructor(t,e,i,n){super(t,e,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=q(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1;const a=()=>{this._setValueFromHexString(this.$input.value)};this.$input.addEventListener("change",a),this.$input.addEventListener("input",a),this.$input.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$input.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$text.addEventListener("input",()=>{const o=S(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){this._setValueFromHexString(t)}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class k extends u{constructor(t,e,i){super(t,e,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{}),this.$disable=this.$button}}class et extends u{constructor(t,e,i,n,a,o){super(t,e,i,"number"),this._initInput(),this.min(n),this.max(a);const l=o!==void 0;this.step(l?o:this._getImplicitStep(),l),this.updateDisplay()}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){const e=(t-this._min)/(this._max-this._min);this.$fill.style.setProperty("width",e*100+"%")}return this._inputFocused||(this.$input.value=t),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("inputmode","numeric"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{const l=parseFloat(this.$input.value);isNaN(l)||this.setValue(this._clamp(l))},e=l=>{const d=parseFloat(this.$input.value);isNaN(d)||(this._snapClampSetValue(d+l),this.$input.value=this.getValue())},i=l=>{l.code==="Enter"&&this.$input.blur(),l.code==="ArrowUp"&&(l.preventDefault(),e(this._step*this._arrowKeyMultiplier(l))),l.code==="ArrowDown"&&(l.preventDefault(),e(-1*this._step*this._arrowKeyMultiplier(l)))},n=l=>{this._inputFocused&&(l.preventDefault(),e(this._normalizeMouseWheel(l)*this._step))},a=()=>{this._inputFocused=!0},o=()=>{this._inputFocused=!1,this.updateDisplay()};this.$input.addEventListener("focus",a),this.$input.addEventListener("input",t),this.$input.addEventListener("blur",o),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",n,{passive:!1})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(h,m,v,z,P)=>(h-m)/(v-m)*(P-z)+z,e=h=>{const m=this.$slider.getBoundingClientRect();let v=t(h,m.left,m.right,this._min,this._max);this._snapClampSetValue(v)},i=h=>{e(h.clientX),this._setActiveStyle(!0),window.addEventListener("mousemove",n),window.addEventListener("mouseup",a)},n=h=>{e(h.clientX)},a=()=>{this._setActiveStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",a)};this.$slider.addEventListener("mousedown",i);let o=!1,l,d;const C=h=>{h.touches.length>1||(this._hasScrollBar?(l=h.touches[0].clientX,d=h.touches[0].clientY,o=!0):(h.preventDefault(),e(h.touches[0].clientX),this._setActiveStyle(!0),o=!1),window.addEventListener("touchmove",b,{passive:!1}),window.addEventListener("touchend",w))},b=h=>{if(o){const m=h.touches[0].clientX-l,v=h.touches[0].clientY-d;Math.abs(m)>Math.abs(v)?(h.preventDefault(),e(h.touches[0].clientX),this._setActiveStyle(!0),o=!1):(window.removeEventListener("touchmove",b),window.removeEventListener("touchend",w))}else h.preventDefault(),e(h.touches[0].clientX)},w=()=>{this._setActiveStyle(!1),window.removeEventListener("touchmove",b),window.removeEventListener("touchend",w)};this.$slider.addEventListener("touchstart",C);const A=h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const v=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+v)};this.$slider.addEventListener("wheel",A,{passive:!1})}_setActiveStyle(t){this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-slider-active",t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120),e+-i}_arrowKeyMultiplier(t){return this._stepExplicit?t.shiftKey?10:1:t.shiftKey?100:t.altKey?1:10}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){const e=this._hasMin?this._min:-1/0,i=this._hasMax?this._max:1/0;return Math.max(e,Math.min(i,t))}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class it extends u{constructor(t,e,i,n){super(t,e,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(n)?n:Object.values(n),this._names=Array.isArray(n)?n:Object.keys(n),this._names.forEach(a=>{const o=document.createElement("option");o.innerHTML=a,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex])}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class nt extends u{constructor(t,e,i){super(t,e,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const st=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Lucida Grande", "Segoe UI", Roboto, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace, "Droid Sans Fallback";
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
.lil-gui .lil-gui {
  --background-color: inherit;
  --text-color: inherit;
  --title-background-color: inherit;
  --title-text-color: inherit;
  --widget-color: inherit;
  --hover-color: inherit;
  --focus-color: inherit;
  --number-color: inherit;
  --string-color: inherit;
  --font-size: inherit;
  --input-font-size: inherit;
  --font-family: inherit;
  --font-family-mono: inherit;
  --padding: inherit;
  --spacing: inherit;
  --widget-height: inherit;
  --name-width: inherit;
  --slider-knob-width: inherit;
  --slider-input-width: inherit;
  --color-input-width: inherit;
  --slider-input-min-width: inherit;
  --color-input-min-width: inherit;
  --folder-indent: inherit;
  --widget-padding: inherit;
  --widget-border-radius: inherit;
  --checkbox-size: inherit;
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --widget-padding: 0 0 0 3px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --widget-padding: 0 0 0 3px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.function .name {
  line-height: unset;
  padding: 0;
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-slider-active .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-slider-active * {
  cursor: ew-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input[type=text] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) * 0.725);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZ5WI2hlYWQAAAMcAAAAJwAAADZfcj23aGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhjAGJgZWBgZ7RnFRdnVJELCRlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB76woyAHicY2BkYGAA4sklsQ/j+W2+MnAzpDBgAyEMYUCSg4EJxAEAvVwFCgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function rt(s){const t=document.createElement("style");t.innerHTML=s;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let F=!1;class M{constructor({parent:t,autoPlace:e=t===void 0,touchStyles:i=!0,container:n,injectStyles:a=!0,title:o="Controls",width:l}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",d=>{(d.code==="Enter"||d.code==="Space")&&(d.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(o),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!F&&a&&(rt(st),F=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.classList.add("allow-touch-styles"),l&&this.domElement.style.setProperty("--width",l+"px")}add(t,e,i,n,a){if(Object(i)===i)return new it(this,t,e,i);const o=t[e];switch(typeof o){case"number":return new et(this,t,e,i,n,a);case"boolean":return new N(this,t,e);case"string":return new nt(this,t,e);case"function":return new k(this,t,e)}console.error(`Failed to add controller for "${e}"`,o,t)}addColor(t,e,i=1){return new tt(this,t,e,i)}addFolder(t){return new M({parent:this,title:t})}load(t,e=!0){if(!("controllers"in t))throw new Error('Invalid load object. Should contain a "controllers" key.');return this.controllers.forEach(i=>{i instanceof k||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof k)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const i=a=>{a.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy()),this._onResize&&window.removeEventListener("resize",this._onResize)}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const g=new M,I=document.querySelector("canvas.webgl"),_=new Y,r={};r.count=1e5;r.size=.01;r.radius=5;r.branches=3;r.spin=3.84;r.randomness=.2;r.randomnessPower=3;r.insideColor="#774131";r.outsideColor="#6b245f";let x=null,L=null,E=null;const p=()=>{E!==null&&(x.dispose(),L.dispose(),_.remove(E)),x=new T;const s=new Float32Array(r.count*3),t=new Float32Array(r.count*3),e=new D(r.insideColor),i=new D(r.outsideColor);for(let n=0;n<r.count;n++){const a=n*3,o=Math.random()*r.radius,l=o*r.spin,d=n%r.branches/r.branches*Math.PI*2,C=Math.pow(Math.random(),r.randomnessPower)*(Math.random()<.5?1:-1)*r.randomness*o,b=Math.pow(Math.random(),r.randomnessPower)*(Math.random()<.5?1:-1)*r.randomness*o,w=Math.pow(Math.random(),r.randomnessPower)*(Math.random()<.5?1:-1)*r.randomness*o;s[a]=Math.cos(d+l)*o+C,s[a+1]=b,s[a+2]=Math.sin(d+l)*o+w;const A=e.clone();A.lerp(i,o/r.radius),t[a]=A.r,t[a+1]=A.g,t[a+2]=A.b}x.setAttribute("position",new V(s,3)),x.setAttribute("color",new V(t,3)),L=new j({size:r.size,sizeAttenuation:!0,depthWrite:!1,blending:X,vertexColors:!0}),E=new J(x,L),_.add(E)};g.add(r,"count").min(100).max(1e6).step(100).onFinishChange(p);g.add(r,"size").min(.001).max(.1).step(.001).onFinishChange(p);g.add(r,"radius").min(.01).max(20).step(.01).onFinishChange(p);g.add(r,"branches").min(2).max(20).step(1).onFinishChange(p);g.add(r,"spin").min(-5).max(5).step(.001).onFinishChange(p);g.add(r,"randomness").min(0).max(2).step(.001).onFinishChange(p);g.add(r,"randomnessPower").min(1).max(10).step(.001).onFinishChange(p);g.addColor(r,"insideColor").onFinishChange(p);g.addColor(r,"outsideColor").onFinishChange(p);p();const c={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{c.width=window.innerWidth,c.height=window.innerHeight,f.aspect=c.width/c.height,f.updateProjectionMatrix(),$.setSize(c.width,c.height),$.setPixelRatio(Math.min(window.devicePixelRatio,2))});const f=new G(75,c.width/c.height,.1,100);f.position.x=3;f.position.y=3;f.position.z=3;_.add(f);const B=new R(f,I);B.enableDamping=!0;const $=new O({canvas:I});$.setSize(c.width,c.height);$.setPixelRatio(Math.min(window.devicePixelRatio,2));const ot=new W,H=()=>{ot.getElapsedTime(),B.update(),$.render(_,f),window.requestAnimationFrame(H)};H();
