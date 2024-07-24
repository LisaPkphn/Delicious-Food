class SearchBar extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
      this.render();
    }
  
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
  
  
    get value() {
      return this.shadowDOM.querySelector('#searchElement').value;
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          .search-container {
            display: flex;
            margin: 0 auto;
            max-width: 400px;
          }
    
          .search-container > input {
            height: 40px;
            width: 80%;
            border: 2px solid rgb(219, 112, 147)
            ;
            border-radius: 6px;
          }

          .search-container > button {
            width: 20%;
            height: 40px;
            border: 2px solid rgb(219, 112, 147);
            margin-left: 10px;
            cursor: pointer;
            text-align: center;
            font-weight: bold;
            border-radius: 6px;
          }
         
          .search-container > button:hover {
            background-color: rgb(219, 112, 147);
            color: white;
            border: 2px solid black;
            }

          @media screen and (max-width: 550px) {
            .search-container {
            flex-direction: column;
            position: static;
            }
          }
        </style>
        
        <div id="search-container" class="search-container">
          <input placeholder="Search Food" id="searchElement" type="search">
          <button id="searchButtonElement" type="submit">Search</button>
        </div>
      `;
  
      this.shadowDOM.querySelector('#searchButtonElement')
          .addEventListener('click', this._clickEvent);
    }
  }
  
  customElements.define('search-bar', SearchBar);
  