export default class Suggest extends HTMLElement{
    static get observedAttributes(){
        return["img", "name", "follow", "number"];
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    /*attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }*/

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles/suggest.css">

        <section class="suggestBox">
            <div>
                <img class="img" src="xd">
                <h1>xd <br> <span>Followed by xd and xd more</span></h1>
            </div>
            <h2>Follow</h2>
        </section>
        `}
    }
}

customElements.define('app-suggest', Suggest)