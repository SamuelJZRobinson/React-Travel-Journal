export default function Entry({
  img,
  country,
  location,
  mapURL,
  startDate,
  endDate,
  description,
}) {
  return (
    <>
      <div className="entry">
        <div className="left">
          <img src={img.src} alt={img.alt} />
        </div>
        <div className="right">
          <div className="address">
            <img className="icon" src="./src/assets/location-pin.png" />
            <p className="country">{country}</p>
            <p>
              <a href={mapURL}>
                <u>View on Google Maps</u>
              </a>
            </p>
          </div>
          <h1>{location}</h1>
          <p className="date">
            {startDate} - {endDate}
          </p>
          <p className="description">{description}</p>
        </div>
      </div>
    </>
  );
}
