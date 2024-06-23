import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Landing from "./pages/Landing";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import Test from "./pages/Test";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster richColors />
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
