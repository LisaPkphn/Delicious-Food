class FooterBar extends HTMLElement {

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

          .footer{
            display: flex;
            position: fixed;
            bottom: 0;
            width: 100%;
            background-color: rgb(219, 112, 147);
            color: white;
            align-items: center;
            justify-content: center;
          }
          p {
            padding: 15px;
          }


        </style>
        
            <div class="footer">
                <p>Delicious Food by Eisabeth Pakpahan</p>
            </div>
        
      `;
    }
  }
  
  customElements.define('footer-bar', FooterBar);
  