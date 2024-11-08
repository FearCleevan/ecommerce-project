import { draftMode } from "next/headers";
import { client } from "../../../sanity/lib/client";
import { redirect } from "next/navigation";
import { validatePreviewUrl } from "../../../sanity/preview-url-secret";

const token = process.env.SANITY_API_READ_TOKEN;

export async function GET(request: Request) {
  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    client.withConfig({ token }),
    request.url
  );

  if (!isValid) {
    return new Response("Invalid secret", { status: 401 });
  }

  // Enable the preview mode in Next.js
  (await draftMode()).enable();

  // Redirect to the preview page or wherever you want
  return redirect(redirectTo);
}

// 4:32:58 / 5:11:14
