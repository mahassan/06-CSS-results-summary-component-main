import {LitElement, html, unsafeCSS} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class Results extends LitElement{
    // static styles = css`
    //  ${unsafeCSS()}
    // `
    render(){
        const header = html`
            <header>
                <strong><p>Your Results</p></strong>
            </header>
        `
        return html`
            ${header}
        
        `
    }
}

customElements.define('result-summary', Results)