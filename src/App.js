import "./App.css";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import {Navbar} from "./components/navbar";
import {Cart} from "./Pages/Cart/Cart";
import { Home } from "./Pages/Home/Home";
import { HomeContextProvider } from "./ContextProvider/HomeContext";


function App(){
  return <div className="App">
    <HomeContextProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route  path="/cart" element={<Cart />}/>
      </Routes>
    </Router>
    </HomeContextProvider>
  </div>
  
}

export default App;