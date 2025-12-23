export const runtime = "edge";

export async function GET(
  request: Request,
  { params }: { params: { token: string } }
) {
  const token = params.token;

  if (!token) {
    return new Response("Missing token", { status: 400 });
  }

  const targetUrl =
    "https://ymelqobjvxfmmjhzullz.supabase.co/functions/v1/token-entry/" + token;

  return fetch(targetUrl, request);
}
