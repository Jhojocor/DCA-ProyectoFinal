class Nav extends HTMLElement {
    static get observedAttributes(){
        return["img", "text"];
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    connectedCallback() {
        var _a;
        this.render();
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("button");
        btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
            const event = new CustomEvent("create-post", {
                composed: true
            });
            this.dispatchEvent(event);
        });
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./styles/nav.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap" rel="stylesheet">

            <div class="IconText">
                <img src="${this.img}">
                <h3>${this.text}</h3>
            </div>
                `;
        }
    }
}
customElements.define("app-nav", Nav);
export default Nav;
