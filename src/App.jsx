import "./App.css";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sola from "./Pages/Sola"


 function App() {
  
 

return (
  <BrowserRouter>
    <Routes>
      <Route path="/rodrigo-react/" element={<Home/>}     />

       <Route path="/rodrigo-react/:reformaId" element={<Sola/>}     />

    </Routes>

  </BrowserRouter>
)

}



export default App;
