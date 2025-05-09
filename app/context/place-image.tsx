import { useContext } from "react";
import type { Place } from "./data";
import { getImageUrl } from "./utils";
import { ImageSizeContext } from "./context";

export function PlaceImage({ place }: { place: Place }) {
  const imageSize = useContext(ImageSizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
