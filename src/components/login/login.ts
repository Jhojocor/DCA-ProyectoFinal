import { queryUser } from "../../services/db";

export default class Login extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
        const form = this.shadowRoot?.querySelector("app-form");
        form?.addEventListener("form-fullfiled", (evt: any)=>{
            const email = evt.detail.email;
            const password = evt.detail.password;

            queryUser({email,password}).then(value => {
                if(value){
                    const event: CustomEvent = new CustomEvent("login-success",{
                        composed: true
                    })
                    this.dispatchEvent(event);
                }
            })
        })
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <section class="Login">
        <link rel="stylesheet" href="./styles/Login.css">
            <img class="Logo" src="https://pbs.twimg.com/media/FrsDBPnXgAEPTV7?format=png&name=240x240">
            <app-form></app-form>
            <h3>OR</h3>
            <h5 class="Blue">Log in with Facebook</h5>
            <h6 class="Blue">Forgot password?</h6>
        </section>
        <section class="GoRegister">
            <p>Don't have an account? <t id="GoSignUp">Register</t></p>
        </section>
        <section class="Download">
            <p>Download the app</p>
            <img class="Store" src="https://pbs.twimg.com/media/FvV8gUOXoAAhaBq?format=jpg&name=large">
            <img class="Store" src="https://pbs.twimg.com/media/FvV8gUjXsAEc2ht?format=jpg&name=large">
        </section>
        <section>
            <p class="GreySmall">Icesi · About · Blog · Jobs · Help · API  Privacy · Terms · Top Accounts · Hashtags · Locations · TalkiAbout Lite · Contact Uploading & Non-Users · Dance · Food & Drink · Home & Garden · Music · Visual Arts</p>
            <p class="GreySmall">English ˅  ·  © 2023 TalkiAbout from Icesi</p>
        </section>
        `
    }
}

customElements.define("app-login",Login);