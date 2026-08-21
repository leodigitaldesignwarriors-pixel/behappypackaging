// Web3Forms integration — https://web3forms.com
//
// TODO: set NEXT_PUBLIC_WEB3FORMS_KEY in your .env.local. Sign up free at
// web3forms.com (no backend required) to get an access key, then configure
// the autoresponder ("automated form" confirmation email) and any redirect
// behavior for that key from the Web3Forms dashboard.

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function submitToWeb3Forms(data: Record<string, string>): Promise<boolean> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  if (!accessKey) {
    console.warn(
      "NEXT_PUBLIC_WEB3FORMS_KEY is not set — form submission skipped. See src/lib/web3forms.ts."
    );
    return false;
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: accessKey, ...data }),
  });

  const result = await response.json();
  return Boolean(result.success);
}

/** Use when the form includes a file upload — Web3Forms expects multipart/form-data for attachments. */
export async function submitToWeb3FormsMultipart(formData: FormData): Promise<boolean> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  if (!accessKey) {
    console.warn(
      "NEXT_PUBLIC_WEB3FORMS_KEY is not set — form submission skipped. See src/lib/web3forms.ts."
    );
    return false;
  }

  formData.append("access_key", accessKey);

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: formData,
  });

  const result = await response.json();
  return Boolean(result.success);
}
