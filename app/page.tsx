import Stats from '../components/stats';
import Image from 'next/image';
import goblinImage from '../public/goblin.png';
import Footer from '../components/footer';
import SearchBar from '../components/searchbar';
import Header from '../components/header';
import e from 'express';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <SearchBar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">Goblin</h1>
        <div className="p-2 border rounded border-red-600">
          <Image src={goblinImage} alt="Goblin" width={192} height={288} />
        </div>
        <Stats monster={{
          armorClass: 15,
          hitPoints: 7,
          speed: ['30ft'],
          strength: 8,
          dexterity: 14,
          constitution: 10,
          intelligence: 10,
          wisdom: 8,
          charisma: 8,
          skills: ['Stealth +6'],
          senses: ['Darkvision 60 ft.', 'passive Perception 9'],
          languages: ['Common', 'Goblin'],
          challenge: '1/4',
          experience: 50

        }} />
      </div>
      <Footer />
    </main>
  );
}
