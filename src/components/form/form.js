class Form extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <h2>Form hexo</h2>
        `
    }
}

customElements.define('app-form', Form)