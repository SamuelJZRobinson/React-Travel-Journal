export default function Entry(props) {
  return (
    <>
      <div className="entry">
        <div className="left">
          <img src={props.item.img.src} alt={props.item.img.alt} />
        </div>
        <div className="right">
          <div className="address">
            <img className="icon" src="./src/assets/location-pin.png" />
            <p className="country">{props.item.country}</p>
            <p>
              <a href={props.item.mapURL}>
                <u>View on Google Maps</u>
              </a>
            </p>
          </div>
          <h1>{props.item.location}</h1>
          <p className="date">
            {props.item.startDate} - {props.item.endDate}
          </p>
          <p className="description">{props.item.description}</p>
        </div>
      </div>
    </>
  );
}
