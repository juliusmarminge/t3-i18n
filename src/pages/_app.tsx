// src/pages/_app.tsx
import "../styles/globals.css";

import { appWithTranslation } from "next-i18next";
import type { AppType } from "next/app";

import { trpc } from "../utils/trpc";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

// @ts-expect-error - propTypes wtf???
const I18nApp = appWithTranslation(MyApp);
const TRPCApp = trpc.withTRPC(I18nApp);

export default TRPCApp;
