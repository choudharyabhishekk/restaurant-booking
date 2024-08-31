import logo from "./logo.svg";
import "./App.css";
import BookingForm from "./Components/BookingForm";
import Navbar from "./Components/Navbar";
import { useState } from "react";

function App() {
  const [availableTimes, setAvailableTimes] = useState();

  return (
    <>
      <Navbar />
      <BookingForm availableTimes={(availableTimes, setAvailableTimes)} />
    </>
  );
}

export default App;
