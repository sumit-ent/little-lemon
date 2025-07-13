import BookingForm from "../BookingForm/BookingForm";
import "./BookingPage.css";

function BookingPage({ formState, setFormState }) {
  return (
    <div className="booking-container">
      <BookingForm formState={formState} setFormState={setFormState} />
    </div>
  );
}

export default BookingPage;
