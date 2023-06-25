import { createContext, useState } from "react";
import { ICreature } from "@/interfaces/ICreature";


type CreateContextProviderProps = {
    children: React.ReactNode;
};

export type CreateContextType = {
    creature: ICreature | undefined;
    setCreature: (creature: ICreature | undefined) => void;
};

export const CreatureContext = createContext({} as CreateContextType);


export const CreatureContextProvider = ({ children }: CreateContextProviderProps) => {
    const [creature, setCreature] = useState<ICreature | undefined>(undefined);
    return (
        <CreatureContext.Provider value={{ creature, setCreature }}>
            {children}
        </CreatureContext.Provider>
    );
}
