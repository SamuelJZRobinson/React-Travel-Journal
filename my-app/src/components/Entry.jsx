export default function Entry(props) {
  return (
    <>
      <div className="entry">
        <div className="left">
          <img src={props.img.src} alt={props.img.alt} />
        </div>
        <div className="right">
          <div className="address">
            <img className="icon" src="./src/assets/location-pin.png" />
            <p className="country">{props.country}</p>
            <p>
              <a href={props.mapURL}>
                <u>View on Google Maps</u>
              </a>
            </p>
          </div>
          <h1>{props.location}</h1>
          <p className="date">
            {props.startDate} - {props.endDate}
          </p>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </>
  );
}
