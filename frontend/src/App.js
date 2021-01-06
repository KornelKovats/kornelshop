import './index.css';
import Product from './components/Product';
import data from './data';

function App() {
  return (
  <div className="grid-container">  
      <header className="row">
        <div>
          <a className="brand" href="/">Kornel Shop</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
          {
            data.products.map((element) =>
              (
                <Product key={element._id} element={element}/>
              ))
          }
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
