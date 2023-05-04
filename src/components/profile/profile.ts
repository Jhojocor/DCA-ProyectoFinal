export default class Profile extends HTMLElement{
    static get observedAttributes(){
        return["img", "name", "user"];
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
        <section class="suggestProfile">
            <img class="img" src="xd">
            <h3>xd<br> <span>xd</span></h3>
        </section>
        `}
    }
}

customElements.define('app-profile', Profile)