import React, { useState, useEffect } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BookingForm.css"; // Ensure this CSS file is properly imported
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { data } from "../data/Plandata";
import { tourData } from "../data/TourInfoData";
import "./FormStyles.css"
// Load your Stripe public key from environment variable
const stripePromise = loadStripe(
  "pk_test_51PVEJzRubgkgcMPJhZk2EoXCG6WMcsEtIkPGGnHjV9hF1wC9cJdDEyBwnDNGlwpT93saVvdKINyKAwyua7RefYDW002UBt9UWp"
);

export default function BookingForm() {
  const [adults, setAdults] = useState(1);
  const [childrenWithBed, setChildrenWithBed] = useState(0);
  const [childrenWithoutBed, setChildrenWithoutBed] = useState(0);
  const [infants, setInfants] = useState(0);
  const [travelDate, setTravelDate] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("standard"); // Default package type
  const [totalPrice, setTotalPrice] = useState(0);
  const [priceCalculated, setPriceCalculated] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const currentId = location.pathname.split("/")[2];
  const currentData = data.filter((v) => v.id == currentId);
  const startingPrice = currentData[0].price;
  const imageurl = currentData[0].image_background;
  

  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  const handleCalculatePrice = (e) => {
    e.preventDefault();

    if (!travelDate || !contactNumber || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    let calculatedPrice = 0;

    // Calculate price based on the selected package type
    switch (selectedPackage) {
      case "standard":
        calculatedPrice += adults * startingPrice;
        calculatedPrice += childrenWithoutBed * (startingPrice * 0.5);
        calculatedPrice += childrenWithBed * (startingPrice * 1);
        calculatedPrice += infants * (startingPrice * 1.5);
        break;
      case "deluxe":
        calculatedPrice += adults * (startingPrice + 1000);
        calculatedPrice += childrenWithoutBed * ((startingPrice + 1000) * 0.5);
        calculatedPrice += childrenWithBed * ((startingPrice + 1000) * 1);
        calculatedPrice += infants * ((startingPrice + 1000) * 1.5);
        break;
      case "premium":
        calculatedPrice += adults * (startingPrice + 2000);
        calculatedPrice += childrenWithoutBed * ((startingPrice + 2000) * 0.5);
        calculatedPrice += childrenWithBed * ((startingPrice + 2000) * 1);
        calculatedPrice += infants * ((startingPrice + 2000) * 1.5);
        break;
      default:
        break;
    }

    // Update total price state
    setTotalPrice(calculatedPrice);
    setPriceCalculated(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!priceCalculated) {
      handleCalculatePrice(e);
    } else {
      try {
        const stripe = await stripePromise;
        const response = await axios.post(
          "http://localhost:7000/api/create-checkout-session",
          {
            totalPrice,
            selectedPackage,
          }
        );

        const { id } = response.data;

        // Redirect to Stripe Checkout
        const { error } = await stripe.redirectToCheckout({
          sessionId: id,
        });

        if (error) {
          console.error("Error redirecting to Stripe Checkout:", error);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
  };

  const handleAdultsChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setAdults(value);
    }
  };

  const handleChildrenWithBedChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setChildrenWithBed(value);
    }
  };

  const handleChildrenWithoutBedChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setChildrenWithoutBed(value);
    }
  };

  const handleInfantChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setInfants(value);
    }
  };

  const handlePackageChange = (e) => {
    setSelectedPackage(e.target.value);
  };


  // Package information

    const currentInfo = tourData.filter((v) => v.id == currentId);
    if (!currentInfo) {
        return <p>No tour data available for the selected ID.</p>;
      }
    
     const { inclusions, exclusions, days } = currentInfo[0].accommodation;
    
  console.log(currentInfo)

  return (
    <>
     <Header /> 

      <section>
        <div className="text-center">
            <img className="fade-in-left"
            src={currentData[0].image_background}
            />
        </div>
      </section>
      <section className="py-4">
      <div className="text-center fade-in-left text-success">
        <hr className="border border-primary border-2 opacity-50" />
        <h1>Package Information</h1>
        <hr className="border border-danger border-2 opacity-50" />
      </div>

      <div className="container">
        <div className="row">
          {/* Left Div */}
          <div className="col-md-6 mb-4">
            <div className="row">
              <div className="col-md-6 text-secondary">
                <h3>What your tour price includes?</h3>
                <table className="table table-bordered table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th>Included</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inclusions.map((inclusion, index) => (
                      <tr key={index}>
                        <td>{inclusion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="col-md-6 text-secondary">
                <h3>What your tour price does not include?</h3>
                <table className="table table-bordered table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th>Not Included</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exclusions.map((exclusion, index) => (
                      <tr key={index}>
                        <td>{exclusion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Div */}
          <div className="col-md-6">
            <h2>Day-wise Information</h2>
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>Day</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {days.map((info, index) => (
                  <tr key={index}>
                    <td><strong>Day {info.day}</strong></td>
                    <td>{info.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
      <section>
      <hr className="border border-primary border-2 opacity-50" />
        <div className="container mt-5">
          <div className="d-flex justify-content-center align-items-center">
            <h2 className="p-2 text-primary">Fill in your details</h2>
          </div>

          <div className="d-flex justify-content-center align-items-center my-3">
            <div className="wrapper">
              <div className="option">
                <input
                  className="input"
                  type="radio"
                  name="packageType"
                  value="standard"
                  checked={selectedPackage === "standard"}
                  onChange={handlePackageChange}
                />
                <div className="btn">
                  <span className="span">Standard</span>
                </div>
              </div>
              <div className="option">
                <input
                  className="input"
                  type="radio"
                  name="packageType"
                  value="deluxe"
                  checked={selectedPackage === "deluxe"}
                  onChange={handlePackageChange}
                />
                <div className="btn">
                  <span className="span">Deluxe</span>
                </div>
              </div>
              <div className="option">
                <input
                  className="input"
                  type="radio"
                  name="packageType"
                  value="premium"
                  checked={selectedPackage === "premium"}
                  onChange={handlePackageChange}
                />
                <div className="btn">
                  <span className="span">Premium</span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="booking-form">
          <div className="mb-4">
            <label htmlFor="travellers" className="form-label p-2">
              Travellers
            </label>
            <div className="row">
              <div className="col-md-3 mx-3">
                <label htmlFor="adults" className="form-label">
                  Adult
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="adults"
                  value={adults}
                  onChange={handleAdultsChange}
                />
              </div>
              <div className="col-md-3 mx-3">
                <label htmlFor="childrenWithBed" className="form-label">
                  Child (With bed)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="childrenWithBed"
                  value={childrenWithBed}
                  onChange={handleChildrenWithBedChange}
                />
              </div>
              <div className="col-md-3 mx-3">
                <label htmlFor="childrenWithoutBed" className="form-label">
                  Child (Without bed)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="childrenWithoutBed"
                  value={childrenWithoutBed}
                  onChange={handleChildrenWithoutBedChange}
                />
              </div>
              <div className="col-md-3 mx-3">
                <label htmlFor="infants" className="form-label">
                  Infant
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="infants"
                  value={infants}
                  onChange={handleInfantChange}
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="travelDate" className="form-label">
              Date of Travel
            </label>
            <input
              type="date"
              className="form-control"
              id="travelDate"
              value={travelDate}
              min={today} // Disable past dates
              required
              onChange={(e) => setTravelDate(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contactNumber" className="form-label">
              Contact Details
            </label>
            <input
              type="tel"
              className="form-control"
              id="contactNumber"
              value={contactNumber}
              required
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              value={acceptedTerms}
              required
              id="termsCheckbox"
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="termsCheckbox">
              I accept the Privacy Policy & Terms & Conditions
            </label>
          </div>

          {totalPrice > 0 && (
            <div className="alert alert-info">Total Price: {totalPrice}</div>
          )}

          <button type="submit" className="btn btn-primary btn-lg btn-block">
            {totalPrice > 0 ? "Proceed" : "Calculate Package Price"}
          </button>
        </form>
        </div>
      </section>
    </>
  );
}
