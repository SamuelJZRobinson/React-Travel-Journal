import Entry from "./Entry";
import tourData from "../data/tourData";

export default function MainContent() {
  return (
    <main>
      <div className="entry-container">
        {tourData.map((item) => (
          <Entry key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
