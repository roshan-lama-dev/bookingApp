import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Quantity } from "./components/quantity/Quantity";
import { Home } from "./pages/home/Home";
import { HotelDetails } from "./pages/hotelDetails/HotelDetails";
import { Hotel } from "./pages/hotels/Hotel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/q" element={<Quantity />} />
        <Route path="/hoteldetail" element={<HotelDetails />} />
        {/* <Header /> */}
      </Routes>
    </div>
  );
}

export default App;
