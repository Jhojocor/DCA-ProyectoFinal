import "./components/index.js"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <app-button></app-button>
        <app-profile></app-profile>
        <app-createpost></app-createpost>
        <app-login></app-login>
        <app-register></app-register>
        <app-form></app-form>
        <app-nav></app-nav>
        <app-storie></app-storie>
        <app-suggest></app-suggest>
        <app-postss></app-postss>
        <app-home></app-home>
        `
    }
}

customElements.define('app-container', AppContainer)