// sanity/preview-url-secret.ts
import { SanityClient } from '@sanity/client';

export async function validatePreviewUrl(client: SanityClient, url: string) {
  const isValid = url.includes("your-secret-key"); // Implement your validation logic here
  const redirectTo = "/"; // Set your redirect path here if needed
  return { isValid, redirectTo };
}
