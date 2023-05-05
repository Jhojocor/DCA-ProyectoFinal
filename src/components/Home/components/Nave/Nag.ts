class MyNag extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();

        const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener("click",()=>{
            const event: CustomEvent = new CustomEvent("create-post",{
                composed: true
            });

            this.dispatchEvent(event);
        });

    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./styles/nav.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap" rel="stylesheet">
            <section>
                <section class="Options">
                    <img class="Logo" src="https://pbs.twimg.com/media/FrsDBPnXgAEPTV7?format=png&name=240x240">

                    <div class="IconText">
                        <img src="https://pbs.twimg.com/media/FrsEepdXsAEo2-Z?format=png&name=120x120">
                        <h3>Home</h3>
                    </div>
                    <div class="IconText">
                        <img src="https://pbs.twimg.com/media/FrsEhGdX0AAJQiZ?format=png&name=120x120">
                        <h3>Search</h3>
                    </div>
                    <div class="IconText">
                        <img src="https://pbs.twimg.com/media/FrsEchHWcAMxoOi?format=png&name=120x120">
                        <h3>Messages</h3>
                    </div>
                    <div class="IconText">
                        <img src="https://pbs.twimg.com/media/FrsEeraXgAMNizS?format=png&name=120x120">
                        <h3>Notifications</h3>
                    </div>
                    <div class="IconText">
                        <button type="submit" style="border: 0; margin: 0; padding: 0; display: flex">
                            <img src="https://pbs.twimg.com/media/FrsEchQXsAAX_KM?format=png&name=120x120">
                            <h3>New</h3>
                        </button>
                    </div>
                    <div class="IconText">
                        <img class="ProfilePic" src="https://pbs.twimg.com/media/FrsEer6XsAE7aO0?format=png&name=120x120">
                        <h3>Profile</h3>
                    </div>
                </section>

                <section class="End">
                    <div class="IconText">
                        <img src="https://pbs.twimg.com/media/FrsEerWWwAIOOnV?format=png&name=120x120">
                        <h3>Settings</h3>
                    </div>
                </section>
            </section>`
        }
    }

}

customElements.define("my-nav", MyNag);
export default MyNag;