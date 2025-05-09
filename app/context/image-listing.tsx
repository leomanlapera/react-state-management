import { places } from "./data";
import { Place } from "./place";

export function ImageListing() {
  const listItems = places.map((place) => (
    <li key={place.id} className="flex items-center gap-4 my-4">
      <Place place={place} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}
