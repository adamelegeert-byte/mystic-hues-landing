import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "fr" | "en";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("fr");
  const toggle = () => setLang((l) => (l === "fr" ? "en" : "fr"));
  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

/** Pick a value from a bilingual object based on current language. */
export function pick<T>(lang: Lang, values: { fr: T; en: T }): T {
  return values[lang];
}