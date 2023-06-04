import { addPost } from "../../services/db";

export default class  CreatePost extends HTMLElement{
    username = "";
    image = "";
    comment = "";

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();

        const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener("click", async ()=>{
            
            if(this.username && this.image && this.comment) {
                const postData = {
                    username: this.username,
                    image: this.image,
                    comment: this.comment
                }
                try {
                    await addPost(postData);
                    alert("Post created");

                    const event: CustomEvent = new CustomEvent("form-fullfilled",{composed: true});
                    this.dispatchEvent(event);
                } catch (error) {
                    console.error(error);
                    alert("An error occurred while creating the post");
                }
            } else {
                alert("Required fields");
            }
        });

        const usernameInput = this.shadowRoot?.querySelector('#username');
        const imageInput = this.shadowRoot?.querySelector('#image');
        const commentInput = this.shadowRoot?.querySelector('#comment');
        
        usernameInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.username = value;
        });

        imageInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.image = value;
        });

        commentInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.comment = value;
        });
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles/createpost.css">
       <section class="form-container">
            <div class="master-container">

                <div class="article">
                    <div class="input">
                        <input class="input__field" type="text" placeholder="Username" id="username"/>
                        <input class="input__field" type="text" placeholder="Image" id="image"/>
                        <input class="input__field" type="text" placeholder="Comment" id="comment"/>
                        <button type="submit">Create post</button>
                    </div>
                </div>
                <img class="promotion" src="https://pbs.twimg.com/media/Fxw42kmWcAAUF1l?format=jpg&name=4096x4096">

                </img>

            </div>
        </section>
        `
    }
}

customElements.define("app-create-post", CreatePost);