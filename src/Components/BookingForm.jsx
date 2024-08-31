import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function BookingForm() {
  const [bookingDetails, setBookingDetails] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
  };

  function clearForm() {
    setBookingDetails({ date: "", time: "", guests: "", occasion: "" });
  }

  return (
    <div className="container mt-5 shadow-lg p-4">
      <h2 className="text-center mb-4">Make a Reservation</h2>
      <hr className="opacity-25 " />
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="Select date"
            value={bookingDetails.date}
            onChange={(e) => {
              setBookingDetails({
                ...bookingDetails,
                date: e.target.value,
              });
            }}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="time" className="form-label">
            Time
          </label>

          <select
            value={bookingDetails.time}
            className="form-select"
            onChange={(e) => {
              setBookingDetails({
                ...bookingDetails,
                time: e.target.value,
              });
            }}
          >
            {availableTimes.map((t) => (
              <option>{t}</option>
            ))}
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="guest" className="form-label">
            Number of Guests
          </label>
          <input
            type="number"
            className="form-control"
            id="guest"
            min={1}
            max={10}
            placeholder="Enter number of guests"
            value={bookingDetails.guests}
            onChange={(e) => {
              setBookingDetails({ ...bookingDetails, guests: e.target.value });
            }}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="occasion" className="form-label">
            Occasion (e.g., Birthday, Anniversary)
          </label>
          <input
            type="text"
            className="form-control"
            id="occasion"
            placeholder="Enter occasion"
            value={bookingDetails.occasion}
            onChange={(e) => {
              setBookingDetails({
                ...bookingDetails,
                occasion: e.target.value,
              });
            }}
          />
        </div>
        <input type="submit" className="btn btn-primary w-100" value="Submit" />
      </form>
    </div>
  );
}

export default BookingForm;
