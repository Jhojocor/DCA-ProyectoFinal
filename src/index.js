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

        </section>


        `
        //hechos los componentes
    }
}

customElements.define('app-container', AppContainer)