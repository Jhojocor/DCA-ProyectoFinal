export default class Button extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){this.shadowRoot.innerHTML = `
        <h2>hola</h2>
        `}
    }
}

customElements.define('app-button', Button)