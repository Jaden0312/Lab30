import React from "react";
import './App.css';

//data를 다른 파일에서 불러옴
import data from './Api/data.js';

import Items from './Components/Items/Items.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productData: [],
    }
  }

  componentDidMount() {
    // data.js 에서 온 데이터를 this.state 의 productData 의 [] state를 productData 의 []에 data가 들어간 state 로 setState 함.

    this.setState(() => {
      return { productData: data };
    });


  }


  render() {
    console.log(this.state.productData)
    // 콘솔창을 보면 처음 render() 이 실행 되면 productData 는 [] 인데 바로 다음에 뜨는 콘솔로그는 productData 가 [{}, {}, {}] 인 모양을 보면 아, render() 실행 후 componentDidMount() 실행 되어 state가 바뀌었고, state 가 바뀌었으니 render() 이 다시 돌았구나 알수있음
    const handleChange = (event) => {
      const filteredProduct = this.state.productData.filter((item) => {
        return item.name.includes(event.target.value);
      });

      // 콘솔창에 보면 filteredProduct 는 필터가 잘 되는 것으로 보임!
      console.log(filteredProduct)

      this.setState((state) => {
        return {
          name: filteredProduct,
        }
      })
    }
    return (
      <>
        <div className="container">
          <div className="search-container">
            <input id="searchInput" type="text" placeholder="Write product Name" onChange={handleChange} />
          </div>
          <div className="product">
            <h1>Products</h1>
            <hr />
            <div className="product-item">
              {this.state.productData.map((product) => {
                return <Items key={product.id} image={product.image} name={product.name} new_price={product.new_price} />
              })}
            </div>
          </div>
        </div>


      </>
    );
  }
}


export default App;
