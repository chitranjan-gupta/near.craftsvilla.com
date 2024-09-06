import { createContext, useContext, useState } from "react";

export const CityContext = createContext([]);

export default function CityContextProvider({ children }) {
    const [city, setCity] = useState(["Mumbai", "Bangalore", "Delhi", "Patna", "Hyderabad", "Chennai", "Pune"]);
    return <CityContext.Provider value={city}>
        {children}
    </CityContext.Provider>
}

export const useCity = () => {
    return useContext(CityContext);
}