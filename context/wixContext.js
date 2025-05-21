"use client"

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products , collections } from "@wix/stores";
import Cookies from "js-cookie";
import { Children, createContext } from "react";

const refreshToken =   JSON.parse(Cookies.get("refreshToken") || "{}");

const WixClient = createClient({
    modules: {
      products,
      collections,
      //currentcart,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
      tokens: {
        refreshToken , accessToken : {value: "" , expiresAt : 0},
      },
    }),
  });

  export const WixClientContext = createContext(WixClient);

  export const WixClientContextProvider = ({children})=>{
    return <WixClientContext.Provider value={WixClient}>{children}</WixClientContext.Provider>
  }
  