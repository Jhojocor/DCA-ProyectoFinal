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
        <link rel="stylesheet" href="./styles/nav.css">
        <link rel="stylesheet" href="./styles/storie.css">

        <section id="mainContenedor">

        <section id="NavBar">
            <img class="Logo" src="https://pbs.twimg.com/media/FrsDBPnXgAEPTV7?format=png&name=240x240">
            <div class="section">
                <app-nav img="https://pbs.twimg.com/media/FrsEepdXsAEo2-Z?format=png&name=120x120" text="Home"></app-nav>
                <app-nav img="https://pbs.twimg.com/media/FrsEhGdX0AAJQiZ?format=png&name=120x120" text="Search"></app-nav>
                <app-nav img="https://pbs.twimg.com/media/FrsEchHWcAMxoOi?format=png&name=120x120" text="Messages"></app-nav>
                <app-nav img="https://pbs.twimg.com/media/FrsEeraXgAMNizS?format=png&name=120x120" text="Notifications"></app-nav>
                <app-nav img="https://pbs.twimg.com/media/FrsEchQXsAAX_KM?format=png&name=120x120" text="New"></app-nav>
                <app-nav img="https://pbs.twimg.com/media/FrsEer6XsAE7aO0?format=png&name=120x120" text="Profile"></app-nav>
            </div>
            <div class="End">
                <app-nav img="https://pbs.twimg.com/media/FrsEerWWwAIOOnV?format=png&name=120x120" text="Settings"></app-nav>
            </div>
        </section>

        <section class="arreglo">
        <article class="container1">
            <app-storie name="Cristiano" img="https://img.olympicchannel.com/images/image/private/f_auto/t_1-1_300/primary/pcxgwhoweqzzhiuqbwqw"></app-storie>
            <app-storie name="Neymar Jr" img="https://img.lalr.co/cms/2017/09/01141420/NeymarJR.jpg?size=sm&ratio=sq&f=jpg"></app-storie>
            <app-storie name="Anuel" img="https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/31/a3/4e/31a34e1a-6b2d-27d7-110d-0db9a9aa42c5/pr_source.png/375x375bb.jpg"></app-storie>
            <app-storie name="Mora" img="https://pbs.twimg.com/profile_images/1509033228874694659/KjCCiVZI_400x400.jpg"></app-storie>
        </article>

        </section>

        </section>


        `
        //hechos los componentes
    }
}

customElements.define('app-container', AppContainer)