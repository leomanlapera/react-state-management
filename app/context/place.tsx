import type { Place } from "./data";
import { PlaceImage } from "./place-image";

export function Place({ place }: { place: Place }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}
