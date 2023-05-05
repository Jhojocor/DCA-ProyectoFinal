export default class Login extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){this.shadowRoot.innerHTML = `
        <h2>holasss</h2>
        `}
    }
}

customElements.define('app-login', Login)