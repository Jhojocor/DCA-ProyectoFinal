class Profile extends HTMLElement{
    static get observedAttributes(){
        return["img", "name", "user"];
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles/suggest.css">
        <section class="suggestProfile">
            <img class="img" src="${this.img}">
            <h3>${this.name} <br> <span>${this.user}</span></h3>
        </section>
        `
    }
}

customElements.define('app-profile', Profile)