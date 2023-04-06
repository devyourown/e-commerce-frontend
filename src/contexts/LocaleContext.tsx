import { createContext, useContext, useState } from "react";

interface LocaleContextType {
    locale: string;
    setLocale: (locale: string) => void;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

interface LocalProviderProps {
    defaultValue?: string;
    children: React.ReactNode;
}

export function LocalProvider({ defaultValue = "ko", children }: LocalProviderProps) {
    const [locale, setLocale] = useState<string>(defaultValue);

    return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale(): string {
    const context = useContext(LocaleContext);
    if (!context)
        throw new Error("반드시 LocalProvider 안에 사용해야 합니다.");
    return context.locale;
}

export function useSetLocale(): (locale: string) => void {
    const context = useContext(LocaleContext);
    if (!context)
        throw new Error("반드시 LocalProvider 안에 사용해야 합니다.");
    return context.setLocale;
}