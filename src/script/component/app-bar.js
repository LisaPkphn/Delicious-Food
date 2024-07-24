class AppBar extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: times;
          }
          :host {
            display: block;
            width: 100%;
            background-color: rgb(219, 112, 147);
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            justify-content: center;
            align-items: center;
          }
          h2 {
            padding: 15px;
          }
        </style>
        
        <h2>Delicious Food</h2>
      `;
    }
  }
  
  customElements.define('app-bar', AppBar);
  