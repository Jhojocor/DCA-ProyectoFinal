(()=>{var e={558:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="\n        <h2>hola</h2>\n        "}}customElements.define("app-button",e)},749:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="\n        <h2>Esto es un home</h2>\n        "}}customElements.define("app-home",e)},138:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="\n        <h2>hola de prueba 2</h2>\n        "}}customElements.define("app-createpost",e)},657:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="\n        <h2>Form hexo</h2>\n        "}}customElements.define("app-form",e)},434:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="\n        <h2>holasss</h2>\n        "}}customElements.define("app-login",e)},602:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="\n        <h2>es un post</h2>\n        "}}customElements.define("app-postss",e)},248:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="\n        <h2>hola de prueba</h2>\n        "}}customElements.define("app-profile",e)},621:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="\n        <h2>registrado pa</h2>\n        "}}customElements.define("app-register",e)},219:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="\n        <h2>stories pa</h2>\n        "}}customElements.define("app-storie",e)},803:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="\n        <h2>sugerido pa</h2>\n        "}}customElements.define("app-suggest",e)}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,n),a.exports}(()=>{"use strict";n(558),n(248),n(138),n(434),n(621),n(657);class e extends HTMLElement{static get observedAttributes(){return["img","text"]}constructor(){super(),this.attachShadow({mode:"open"})}attributeChangedCallback(e,t,n){this[e]=n,this.render()}connectedCallback(){var e;this.render();const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("button");null==t||t.addEventListener("click",(()=>{const e=new CustomEvent("create-post",{composed:!0});this.dispatchEvent(e)}))}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="./styles/nav.css">\n            <link rel="preconnect" href="https://fonts.googleapis.com">\n            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap" rel="stylesheet">\n\n            <div class="IconText">\n                <img src="${this.img}">\n                <h3>${this.text}</h3>\n            </div>\n                `)}}customElements.define("app-nav",e),n(219),n(803),n(602),n(749);class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML='\n        <link rel="stylesheet" href="./styles/nav.css">\n        \n        <section id="mainContenedor">\n\n        <section id="NavBar">\n            <img class="Logo" src="https://pbs.twimg.com/media/FrsDBPnXgAEPTV7?format=png&name=240x240">\n            <div class="section">\n                <app-nav img="https://pbs.twimg.com/media/FrsEepdXsAEo2-Z?format=png&name=120x120" text="Home"></app-nav>\n                <app-nav img="https://pbs.twimg.com/media/FrsEhGdX0AAJQiZ?format=png&name=120x120" text="Search"></app-nav>\n                <app-nav img="https://pbs.twimg.com/media/FrsEchHWcAMxoOi?format=png&name=120x120" text="Messages"></app-nav>\n                <app-nav img="https://pbs.twimg.com/media/FrsEeraXgAMNizS?format=png&name=120x120" text="Notifications"></app-nav>\n                <app-nav img="https://pbs.twimg.com/media/FrsEchQXsAAX_KM?format=png&name=120x120" text="New"></app-nav>\n                <app-nav img="https://pbs.twimg.com/media/FrsEer6XsAE7aO0?format=png&name=120x120" text="Profile"></app-nav>\n            </div>\n            <div class="End">\n                <app-nav img="https://pbs.twimg.com/media/FrsEerWWwAIOOnV?format=png&name=120x120" text="Settings"></app-nav>\n            </div>\n        </section>\n\n        </section>\n\n\n        '}}customElements.define("app-container",t)})()})();