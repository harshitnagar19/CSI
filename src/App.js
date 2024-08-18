import { createContext ,useState } from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './components/Home';
// import AboutCollege from './components/AboutCollege';

export const context = createContext(null);
function App() {
  const [cart , setCart] = useState([]) // example for to use context API
  return (
    <div> 
      <BrowserRouter> 
      <Routes>
        <Route  path="/"  element={<Home/>}/>
      {/* / <Route path="/" element={<context.Provider value={{cart , setCart}} ></context.Provider> }/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}
//in other files
// import context 
// const {cart , setCart} = useContext(context)     

export default App;
