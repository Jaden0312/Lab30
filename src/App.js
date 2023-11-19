import React from "react";
import './App.css';
import Items from './Components/Items/Items';
import top_2 from "./top_2.jpg";
import top_4 from "./top_4.jpg";
import knit_1 from "./knit_1.jpg";

class App extends React.Component {
  constructor() {
    super();
    this.state = [
      {
        id: 1,
        name: "코튼 베이직 반팔티",
        category: "top",
        image: top_2,
        new_price: "₩22,900",
        old_price: "₩29,900",
      },
      {
        id: 5,
        name: "아카이브 스카시 맨투맨",
        category: "top",
        image: top_4,
        new_price: "₩44,900",
        old_price: "₩51,900",
      },
      {
        id: 7,
        name: "마티느 오버핏 니트",
        category: "knit",
        image: knit_1,
        new_price: "₩59,900",
        old_price: "₩66,900",
      },
    ]
    console.log(this.state);
  }

  
  render() {
  const handleChange = (event) => {
    const filteredProduct = this.state.filter((item) => {
      return item.name.includes(event.target.value);
    });

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
            {this.state.map((item) => {
              return <Items key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
            })}
            {console.log(this.state)}
          </div>
        </div>
      </div>


    </>
  );
}
}


export default App;
