export default function Entry() {
  return (
    <>
      <div class="entry">
        <div className="left">
          <img src="./src/assets/paris.jpg" />
        </div>
        <div className="right">
          <div className="address">
            <img className="icon" src="./src/assets/location-pin.png" />
            <p>PARIS</p>
            <p>
              <a href="#">
                <u>View on Google Maps</u>
              </a>
            </p>
          </div>
          <h1>Eiffel Tower</h1>
          <p class="date">24 Jan 2025 - 8 Aug 2025</p>
          <p class="description">
            The Eiffel Tower is a wrought-iron lattice tower in Paris, France.
            Built in 1889, it stands 330 meters tall and is an iconic symbol of
            French architecture and engineering.
          </p>
        </div>
      </div>
    </>
  );
}
