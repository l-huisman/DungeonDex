
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Hero that says Dungeon Dex */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">
          Welcome to Dungeon Dex
        </h1>
        <p className="text-2xl text-center">
          A place to find all your favorite D&amp;D monsters
        </p>
      </div>
      {/* Search bar */}
      <div className="flex flex-row items-center justify-center bg-red-500">
        <input className="w-96 h-12 p-3 rounded-lg bg-transparent placeholder-gray-300" placeholder="Goblin" />
        <button className="w-24 h-12 p-3 bg-red-600 hover:bg-red-700 text-center">Search</button>
        <button className="w-24 h-12 p-3 bg-red-600 hover:bg-red-700 text-center">Random</button>
        <button className="w-12 h-12 p-3 bg-red-600 hover:bg-red-700 text-center">+</button>
      </div>
      {/* Dungeons Dex Entry */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">Goblin</h1>
        <img src="goblin.png" alt="Goblin" className="w-48 h-72" />
        <p className="text-2xl text-center">
          A small, ugly creature that lives in caves, holes, or under bridges.
        </p>
        <table className="table-auto border-collapse ">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-red-600 ">Armor Class</th>
              <th className="px-4 py-2 bg-red-600 ">Hit Points</th>
              <th className="px-4 py-2 bg-red-600 ">Speed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">15</td>
              <td className="px-4 py-2">7 (2d6)</td>
              <td className="px-4 py-2">30 ft.</td>
            </tr>
          </tbody>
        </table>
        <table className="table-auto border-collapse">
          <tbody>
            <tr>
              <td className="px-4 py-2 bg-red-600">Ability</td>
              <td className="px-4 py-2">STR</td>
              <td className="px-4 py-2">DEX</td>
              <td className="px-4 py-2">CON</td>
              <td className="px-4 py-2">INT</td>
              <td className="px-4 py-2">WIS</td>
              <td className="px-4 py-2">CHA</td>
            </tr>
            <tr>
              <td className="px-4 py-2 bg-red-600">Score</td>
              <td className="px-4 py-2">8 (-1)</td>
              <td className="px-4 py-2">14 (+2)</td>
              <td className="px-4 py-2">10 (+0)</td>
              <td className="px-4 py-2">10 (+0)</td>
              <td className="px-4 py-2">8 (-1)</td>
              <td className="px-4 py-2">8 (-1)</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tr>
            <td>
              <div className="flex flex-col items-center justify-center">
                <p className="text-2xl text-center">Skills</p>
                <p className="text-2xl text-center">Stealth +6</p>
              </div>
            </td>
            <td>
              <div className="flex flex-col items-center justify-center">
                <p className="text-2xl text-center">Senses</p>
                <p className="text-2xl text-center">Darkvision 60 ft., passive Perception 9</p>
              </div>
            </td>
            <td>
              <div className="flex flex-col items-center justify-center">
                <p className="text-2xl text-center">Languages</p>
                <p className="text-2xl text-center">Common, Goblin</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex flex-col items-center justify-center">
                <p className="text-2xl text-center">Challenge</p>
                <p className="text-2xl text-center">1/4 (50 XP)</p>
              </div>
            </td>
            <td colSpan={2}>
              <div className="flex flex-col items-center justify-center">
                <p className="text-2xl text-center">Nimble Escape.</p>
                <p className="text-2xl text-center">The goblin can take the Disengage or Hide action as a bonus action on each of its turns.</p>
              </div>
            </td>
          </tr>
        </table>
      </div>
      {/* Footer */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl text-center">
          Made with ❤️ by{" "}
          <a href="https://github.com/l-huisman" className="text-blue-500">
            @Luke Huisman
          </a>
        </p>
      </div>
    </main>
  );
}
