class FoodItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    *{
      margin: 0;
      padding: 0;
    }

    .container{
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      margin-bottom: 16px;
      border-radius: 10px;

    }
    .fan-art-food{
      width: 100%;
      max-height: 300px;
      object-fit: cover;
      object-position: center;

    }
    .food-title{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      background-color: rgb(219, 112, 147);
      border-top-left-radius: 0.5rem; 
      border-top-right-radius: 0.5rem; 
      color: #fff;
    }
    
    .food-info{
      padding: 10px;
    }

    .food-info > h3{
      margin: 10px;
      color: rgb(219, 112, 147);

    }

    .food-info > p{
      padding: 10px;
      text-align: justify;
      white-space: pre-line;
      
    }


    </style>
      
    <div class="container">
      <div class="food-title">
        <h2>${this._food.strMeal}</h2>
      </div>  
      <img class="fan-art-food" src="${this._food.strMealThumb}" alt="Fan Art">
      <div class="food-info">
        <h3>Instruction</h3>
        <p>${this._food.strInstructions}</p>
      </div>
    </div>
    `;
  }
}

customElements.define('food-item', FoodItem);
