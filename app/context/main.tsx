import { useState } from "react";
import { ImageSizeContext } from "./context";
import { ImageListing } from "./image-listing";

export function Main() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <main className="max-w-xl mx-auto px-4 py-10">
      <ImageSizeContext value={imageSize}>
        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={isLarge}
            onChange={(e) => {
              setIsLarge(e.target.checked);
            }}
          />
          Use large images
        </label>
        <ImageListing />
      </ImageSizeContext>
    </main>
  );
}
