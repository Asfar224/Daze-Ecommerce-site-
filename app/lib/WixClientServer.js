// app/lib/WixClientServer.ts
import { products, collections } from "@wix/stores";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { cookies } from "next/headers";

export const WixClientServer = async() => {
  const cookieStore = await cookies();
  let refreshToken = undefined;

  try {
    refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value ?? "{}");
  } catch (err) {
    console.error("Invalid token:", err);
  }

  return createClient({
    modules: { products, collections },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });
};
