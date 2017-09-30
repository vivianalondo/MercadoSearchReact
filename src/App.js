import React, { Component } from 'react';
import axios from 'axios'

var url = "https://api.mercadolibre.com/sites/MCO/search?q="

class App extends Component {
  constructor(props){
    super(props)
    this.state = {text: '',
                  products: []
                };
    this.searchProduct = this.searchProduct.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  searchProduct()
  {
    var self = this
     axios.get(url+this.state.text).then(function(response)
      {
        self.setState({
          products: response.data.results
        })
      }).catch(function(error){
        console.log(error);
      })
  }

  handleInputChange(e) {
   this.setState({text: e.target.value});
 }

  render() {
    return (
      <div className="App">
        <header>
          <h1 >MercadoSearch vivianalondo</h1>
        </header>

        <br/>
        <div>
          <input type="text" name="item" placeholder="Buscar Producto" onChange={this.handleInputChange}/>
          <button onClick={this.searchProduct}>Buscar</button>
        </div>
        <div>
        <ul>
          {
            this.state.products.map(item =>
            <li key={item.id}>
            <div>
              <img src={item.thumbnail} alt="server-error"/>
            </div>
            <div>
              <h4>Artículo: {item.title}</h4>
              <p>Precio: {item.price} {item.currency_id}</p>
              <p>Cantidad Vendidos: {item.sold_quantity}</p>
            </div>
            </li>
            )
          }
        </ul>
        </div>
      </div>
    );
  }
}
export {
  App
}