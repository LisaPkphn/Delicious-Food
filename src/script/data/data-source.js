class DataSource {
  static searchFood(keyword) {
    return fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`
          <style>
          .eror {
            display: block;
            margin: auto;
            text-align: center;
            line-height: 16px;
          }
        
          .eror > h2 {
            color: rgb(219, 112, 147);
          }
          }</style> 
              <div class="eror">
            <h2>${keyword} is Not Found!</h2>
          </div>
          `);
        }
      });
  }
}

export default DataSource;