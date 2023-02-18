import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Navegation from "./components/Navegation";
import Totop from "./components/Totop";
import Footer from "./components/Footer";
import Lista from "./pages/Lista";
import Error from "./pages/Error";
import Balances from "./pages/Balances";
import Descripcion from "./pages/Descripcion"
import "./App.css";

function App() {
  return (
    <>
      <Navegation />
      <Totop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/balances" element={<Balances />} />
        <Route path="/caracteristicas" element={<Descripcion />} />
        <Route path="/productos/:lista" element={<Lista />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
