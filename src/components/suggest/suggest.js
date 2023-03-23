class Suggest extends HTMLElement{
    static get observedAttributes(){
        return["img", "name", "follow", "number"];
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

        <section class="suggestBox">
            <div>
                <img class="img" src="${this.img}">
                <h1>${this.name} <br> <span>Followed by ${this.follow} and ${this.number} more</span></h1>
            </div>
            <h2>Follow</h2>
        </section>
        `
    }
}

customElements.define('app-suggest', Suggest)