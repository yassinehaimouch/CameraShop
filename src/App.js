import Checkout from './components/Checkout/Checkout';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import { useSelector } from 'react-redux'

function App() {
  
  const {isOpen} = useSelector(state => state.navReducer)
  return (
    <div className="relative px-10 md:px-20 lg:px-40 mx-auto">
      <Navbar />
      <Products />
      {isOpen && <Checkout />}
    </div>
  );
}
export default App;
