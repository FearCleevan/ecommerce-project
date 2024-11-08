import ImageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Initialize the builder with the `new` keyword
const builder = new ImageUrlBuilder(client);

// Example function to use builder if needed
export function imageUrl(source: SanityImageSource) {
  return builder.image(source);
}
