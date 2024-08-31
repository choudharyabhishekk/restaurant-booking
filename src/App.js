import logo from "./logo.svg";
import "./App.css";
import BookingForm from "./Components/BookingForm";
import Navbar from "./Components/Navbar";
import { useReducer, useState } from "react";
const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return state;
    default:
      return state;
  }
};
function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Navbar />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
  );
}

export default App;
