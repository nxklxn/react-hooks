import React, { useContext, ReactNode, createContext, useState } from 'react'

/**
 * man erstellt einen Context, um mehreren/allen Components Zugriff auf bestimmte States
 * oder Variablen zu geben. Für jeden erstellten Context, benötigt man aber auch einen
 * ContextProvider, der den Context dann in einem Scope bereitstellt. 
 * Außerdem gehört kann man einen useContext erstellen, um einfacher auf mehrere Variablen
 * des Contexts zuzugreifen
 */

// Typ des Contexts - welche Variablen werden durch den Context geteilt?
type ThemeContextProps = {
    customTheme: string;
    switchTheme: (newtheme:string) => void;
}

// der Context selbst - darüber wird in den anderen Components auf die Variablen zugegriffen
export const ThemeContext = createContext<ThemeContextProps | undefined >( undefined);

// Typ des ContextProviders - enthält children, denn er umschließt am Ende die anderen Components
type ThemeContextProviderProps = {
    children: ReactNode
}

// der ContextProvider selbst - enthält die durch den Context geteilten Variablen & seine children
export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children } : ThemeContextProviderProps ) => {
    const [customTheme, setCustomTheme] = useState<string>('light')
    const switchTheme = (newtheme:string) => {
        setCustomTheme(newtheme)
    }

    return(
        <ThemeContext.Provider value={{ customTheme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    )

}

// der useContext selbst - um auf den bereitgestellten Context zuzugreifen
export const useThemeContext = () : ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used with a Context")
    }
    return context  
}