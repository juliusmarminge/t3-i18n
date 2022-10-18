// src/pages/_app.tsx
import "../styles/globals.css";

import { appWithTranslation } from "next-i18next";
import type { AppType } from "next/app";

import nextI18nConfig from "../../next-i18next.config.mjs";
import { trpc } from "../utils/trpc";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

// @ts-expect-error - propTypes wtf???
const I18nApp = appWithTranslation(MyApp, nextI18nConfig);
const TRPCApp = trpc.withTRPC(I18nApp);

export default TRPCApp;
