import { BrowserRouter, Route, Routes } from "react-router";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Master from "./layout/Master";

const App = () => {
   return (
      <div>
          
          <BrowserRouter>

              <Routes>

                  <Route path="/" element={<Master/>}>

                       <Route index element={<Home/>}/>
                       <Route path="/contact" element={<Contact/>}/>

                  </Route>

              </Routes>

          </BrowserRouter>

          

      </div>
   )
} 

export default App;