"use client";

import { useState, useMemo } from "react";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import Header from "@/components/Header";
import { CreatureContextProvider } from "@/components/context/CreatureContext";
import { CreatureFrame } from "@/components/CreatureFrame";


const HomePage = () => {
  const [creature, setCreature] = useState<any | undefined>(undefined);

  const value = useMemo(() => ({ creature, setCreature }), [creature, setCreature]);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Header />
      <CreatureContextProvider>
        <SearchBar />
        <CreatureFrame />
      </CreatureContextProvider>
      <Footer />
    </main>
  );
};
export default HomePage;

