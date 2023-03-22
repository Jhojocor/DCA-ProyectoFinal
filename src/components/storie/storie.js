class Storie extends HTMLElement{
    static get observedAttributes(){
        return["img", "name"];
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
        <link rel="stylesheet" href="./styles/storie.css">
            <section class="storie1">
                <img class="imgPrueba" src="${this.img}" alt="PicStories">
                <p>${this.name}</p>
            </section>
        `
    }
}

customElements.define('app-storie', Storie)