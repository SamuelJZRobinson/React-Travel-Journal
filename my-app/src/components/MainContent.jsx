import Entry from "./Entry";
import tourData from "../data/tourData";

export default function MainContent() {
  return (
    <main>
      <div className="entry-container">
        {tourData.map((item) => (
          <Entry
            img={item.img}
            country={item.country}
            location={item.location}
            mapURL={item.mapURL}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
}
