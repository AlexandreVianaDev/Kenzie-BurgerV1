import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import { api } from "./services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [productsAPI, setProductsAPI] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [lastInput, setLastInput] = useState("");
  const [cartTotal, setCartTotal] = useState(0);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const getProduts = async () => {
      try {
        const productsFromApi = await api.get("products");
        setProductsAPI(productsFromApi.data);

        searchInput
          ? (showProducts(searchInput), setProducts(filteredProducts))
          : setProducts(productsFromApi.data);
      } catch (error) {
        toast.error(error);
      } // finally {
      //   console.log("acabou")
      // }
    };
    getProduts();
  }, [lastInput]);

  // useEffect(() => {
  //   setProducts(filteredProducts);
  // }, [filteredProducts]);

  const showProducts = (inputValue) => {

    const filtered = productsAPI.filter((product) => {
      return inputValue
        ? product.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            product.category.toLowerCase().includes(inputValue.toLowerCase())
        : true;
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
        const cartFiltred = newCart.filter((product) => product.quantity > 0);
        setCurrentSale(cartFiltred);
      }
    } else {
      setCurrentSale(newCart);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <Header
        showProducts={showProducts}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSearching={setSearching}
        setFilteredProducts={setFilteredProducts}
        lastInput={lastInput}
        setLastInput={setLastInput}
      />
      <Main>
        <div className="container">
          <section className="section__cards">
            <ProductsList
              products={products}
              handleClick={handleClick}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              searching={searching}
              setSearching={setSearching}
              showProducts={showProducts}
              lastInput={lastInput}
              setLastInput={setLastInput}
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
};

export default App;
