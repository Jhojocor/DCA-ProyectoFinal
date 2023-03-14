class Login extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <h2>holasss</h2>
        `
    }
}

customElements.define('app-login', Login)