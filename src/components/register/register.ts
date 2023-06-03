import { addUser } from "../../services/db";

export default class Register extends HTMLElement{

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

            addUser({email,password}).then(value => {
                if(value){
                    const event: CustomEvent = new CustomEvent("register-success",{})
                    console.log(this);
                    this.dispatchEvent(event);
                }
            })
        })
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <section class="Register">
        <link rel="stylesheet" href="./styles/Register.css">
            <img class="Logo" src="https://pbs.twimg.com/media/FrsDBPnXgAEPTV7?format=png&name=240x240">
            <h3>Registrate para ver fotos y videos de tus amigos</h3>
            <button>Log in with Facebook</button>
            <h3>OR</h3>
            <app-form></app-form>
            <p id="Terms">By signing up, you agree to our <b>Terms, Data Policy</b> and <b>Cookies Policy</b></p>
        </section>
        <section class="GoLogin">
            <p>Have an account? <t>Enter</t></p>
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

customElements.define("app-register",Register);