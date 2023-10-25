export default function App() {
  return (
    <>
      <div className="main-container">
        <div className="image"></div>
        <div className="summary">
          <h2 className="title">Order Summary</h2>
          <p className="description">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!{" "}
          </p>
          <div className="plan">
            <img src="../images/icon-music.svg" alt="musicIcon" />
            <div className="info">
              <span className="annual">Annual Plan</span>
              <span className="price">$59.99/year</span>
            </div>
            <a href="#">Change</a>
          </div>
          <button className="payment">Proceed to Payment</button>
          <button className="cancel">Cancel Order</button>
        </div>
      </div>
    </>
  );
}
