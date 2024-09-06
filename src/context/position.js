import { createContext, useContext, useState } from "react";

export const PositionContext = createContext([]);

export default function PositionContextProvider({ children }) {
    const [position, setPosition] = useState(null);
    return <PositionContext.Provider value={{ position, setPosition }}>
        {children}
    </PositionContext.Provider>
}

export const usePosition = () => {
    return useContext(PositionContext);
}