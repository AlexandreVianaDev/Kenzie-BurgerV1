import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main"
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import { api } from "./services/api";

function App() {
  const [productsAPI, setProductsAPI] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const getProduts = async () => {
      try {
        // console.log("fiz requisição")
        const productsFromApi = await api.get("products");
        setProductsAPI(productsFromApi.data);
        setProducts(productsFromApi.data);
      } catch (error) {
        console.log(error);
      } finally {
        // console.log("acabou")
      }
    };
    getProduts();
  }, []);

  useEffect(() => {
    setProducts(filteredProducts);
  }, [filteredProducts]);

  useEffect(() => {
    if (products.length < 1) {
    }
  }, [products]);

  const showProducts = (inputValue) => {
    const filtered = productsAPI.filter((product) => {
      return product.name.includes(inputValue);
    });
    setFilteredProducts(filtered);
  };

  const handleClick = (productId) => {
    const productToCart = products.find((product) => product.id === productId);
    const checkIfProductIsOnCart = currentSale.findIndex(
      (product) => product.id === productToCart.id
    );

    if (checkIfProductIsOnCart === -1) {
      productToCart.quantity = 1;
      setCurrentSale([...currentSale, productToCart]);
    } else {
      handleQuantitiyIncrease(productId);
    }
  };

  const handleQuantitiyIncrease = (id) => {
    const index = currentSale.findIndex((product) => product.id === id);
    const newCart = [...currentSale];
    newCart[index].quantity++;
    setCurrentSale(newCart);
  };

  const handleQuantitiyDecrease = (id) => {
    const index = currentSale.findIndex((product) => product.id === id);
    let newCart = [...currentSale];
    if (newCart[index].quantity >= 1) {
      newCart[index].quantity--;
      setCurrentSale(newCart);
      if (newCart[index].quantity < 1) {
        const cartFiltred = newCart.filter(product => product.quantity > 0)
        setCurrentSale(cartFiltred);
      }
    } else {
      setCurrentSale(newCart);
    }
  };

  return (
    <>
      <Header
        showProducts={showProducts}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Main>
        <div className="container">
          <section className="section__cards">
            <ProductsList
              products={products}
              handleClick={handleClick}
            ></ProductsList>
          </section>
          <section className="section__cart">
            <Cart
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
              handleQuantitiyIncrease={handleQuantitiyIncrease}
              handleQuantitiyDecrease={handleQuantitiyDecrease}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
            ></Cart>
          </section>
        </div>
      </Main>
    </>
  );
}

export default App;
