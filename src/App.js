import { useState } from "react";
import { Card } from "./Card";
import styles from "./App.module.css";
function App() {
  const products = [
    {
      
      title: "lilil",
      price: 119.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      
      title: "lllllyw",
      price: 119.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    }, {
      
      title: "77o7o78Fits 15 Laptops",
      price: 119.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    }, {
      
      title: ";ll7tooi5 Laptops",
      price: 119.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    }, {
      
      title: "iiio Fits 15 Laptops",
      price: 119.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    }, {
      
      title: "uyn - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 119.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    }, {
      
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 119.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
  ]
  const [store, setStore] = useState([])
  return (
    <div className="App">
      <div className={styles.container}>
        {products.map((product) => (
          <Card
            title={product.title}
            price={product.price}
            description={product.description}
            img={product.img}
            setStore={setStore}
            store={store}     
          />
        ))}
         </div>
        <div>
          {store.map((title) => (
            <p onClick={() => setStore(store.filter((item) => item !== title))}>{title}</p>
          ))}
        </div>



    </div>
  );
}

export default App;
