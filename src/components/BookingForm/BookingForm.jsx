import React, { useState } from "react";
import "./BookingForm.css";
import inputData from "../../data/inputData.js";
function BookingForm({ formState, setFormState }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleInputChange = (name, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFirstPageSubmit = (e) => {
    e.preventDefault();
    // Validate inputs if necessary
    if (Object.values(formState).every((val) => val !== "")) {
      setCurrentPage(2);
    } else {
      // Highlight invalid fields
      Object.keys(formState).forEach((key) => {
        if (formState[key] === "") {
          document.querySelector(`[name="${key}"]`).style.border =
            "1px solid red";
        } else {
          document.querySelector(`[name="${key}"]`).style.border = "";
        }
      });
    }
  };

  const submitRegistration = (e) => {
    e.preventDefault();
    setCurrentPage(3);
  };

  const renderInputs = (inputs) => {
    return inputs.map((input, index) => {
      if (input.type === "dropdown") {
        return (
          <div key={index} className="form-group">
            <label>
              {input.label}{" "}
              {input.required && <span className="required">*</span>}
            </label>
            <select
              name={input.name}
              onChange={(e) => handleInputChange(input.name, e.target.value)}
              required={input.required}
            >
              {input.options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );
      } else if (input.type === "radio") {
        return (
          <span key={index} className="form-group">
            <label>
              {input.label}{" "}
              {input.required && <span className="required">*</span>}
            </label>
            {input.options.map((option, idx) => (
              <div key={idx} className="radio-group">
                <input
                  type="radio"
                  name={input.name}
                  value={option}
                  onChange={(e) =>
                    handleInputChange(input.name, e.target.value)
                  }
                  required={input.required}
                />
                <span>{option}</span>
              </div>
            ))}
          </span>
        );
      } else if (input.type === "textarea") {
        return (
          <div key={index} className="form-group">
            <label>
              {input.label}{" "}
              {input.required && <span className="required">*</span>}
            </label>
            <textarea
              name={input.name}
              onChange={(e) => handleInputChange(input.name, e.target.value)}
            ></textarea>
          </div>
        );
      } else {
        return (
          <div key={index} className="form-group">
            <label>
              {input.label}{" "}
              {input.required && <span className="required">*</span>}
            </label>
            <input
              type={input.type}
              name={input.name}
              onChange={(e) => handleInputChange(input.name, e.target.value)}
              required={input.required}
            />
          </div>
        );
      }
    });
  };

  return (
    <div className="booking-form">
      {currentPage === 1 && (
        <div className="booking-block">
          <h1 className="booking-header">Little Lemon</h1>
          <h2 className="location-name">Chicago</h2>
          <div className="image-row">
            <img
              src="./restaurant-ambience.jpg"
              alt="Response 1"
              className="response-image"
            />
            <img
              src="/restaurant-chef.jpg"
              alt="Response 2"
              className="response-image"
            />
          </div>
          <form>
            <div className="form-grid">{renderInputs(inputData.page1)}</div>
            <button
              className="booking-button"
              type="button"
              onClick={handleFirstPageSubmit}
            >
              Let's Go
            </button>
          </form>
        </div>
      )}
      {currentPage === 2 && (
        <div className="booking-block">
          <h1 className="booking-header">Little Lemon</h1>
          <h2 className="location-name">Chicago</h2>
          <div className="image-row">
            <img
              src="./restaurant-ambience.jpg"
              alt="Response 1"
              className="response-image"
            />
            <img
              src="/restaurant-chef.jpg"
              alt="Response 2"
              className="response-image"
            />
          </div>
          <h3>Sign in to collect points</h3>
          <form>
            <div className="form-grid">{renderInputs(inputData.page2)}</div>
            <button
              className="booking-button"
              type="button"
              onClick={submitRegistration}
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {currentPage === 3 && (
        <div className="booking-block">
          <h2 className="booking-header" style={{ textAlign: "center" }}>
            Thank You!
          </h2>
          <p className="booking-confirmation">
            Your booking has been successfully submitted.
          </p>
          <p className="booking-confirmation">
            We look forward to welcoming you to Little Lemon!
          </p>
        </div>
      )}
    </div>
  );
}

export default BookingForm;
