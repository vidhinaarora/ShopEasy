import "./App.css";

function App() {
  const products = [
    {
      category: "Electronics",
      name: "Product 1",
      price: "$10",
    },
    {
      category: "Home",
      name: "Product 2",
      price: "$20",
    },
    {
      category: "Garden",
      name: "Product 3",
      price: "$30",
    },
    {
      category: "Sports",
      name: "Product 4",
      price: "$40",
    },
  ];

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">ShopEasy</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="login-btn">Login</button>
      </nav>


      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">
          <h1>Find products you love</h1>

          <p>
            Discover our latest products at amazing prices!
          </p>

          <button className="shop-btn">
            Shop Now
          </button>
        </div>

        {/* Right side illustration */}
        <div className="hero-image">
          <div className="box top-box"></div>
          <div className="box bottom-box"></div>
        </div>

      </section>


      {/* Products */}
      <section className="products" id="products">

        {products.map((product, index) => (
          <div className="product-card" key={index}>

            <p className="category">
              {product.category}
            </p>

            <h2>{product.name}</h2>

            <p className="price">
              {product.price}
            </p>

            <button className="buy-btn">
              Buy Now
            </button>

          </div>
        ))}

      </section>

    </div>
  );
}

export default App;