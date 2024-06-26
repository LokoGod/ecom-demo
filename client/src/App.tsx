import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Landing from "./pages/Landing";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import Test from "./pages/Test";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster richColors />
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/test" element={<Test />} />
          <Route path="/productDetail" element={<ProductDetail />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
