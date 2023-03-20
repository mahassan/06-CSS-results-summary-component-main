import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
class Results extends LitElement{
    static styles = css`
  @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;700;800&family=Overpass:wght@400;700&display=swap');
     div.container{
        //display: flex;
        text-align: center;
     }
     header{
        height: 353px;
        padding-top:26px;
        background: linear-gradient( hsl(252, 100%, 67%), hsl(241, 81%, 54%));
        border-bottom-left-radius:40px;
        border-bottom-right-radius:40px;

     }
     div.circular{
        height: 134px;
        width: 143px;
        background: linear-gradient(hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0));
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
     }
     div.circular>h1{
        color:white;
     }
    `
    render(){
        const header = html`
            <div class='container'>
                <header>
                    <strong><p>Your Results</p></strong>
                    <div class='circular'>
                        <h1>76</h1>
                        of 100
                    </div>
                </header>
            </div>
        `
        return html`
            ${header}
        
        `
    }
}

customElements.define('result-summary', Results)