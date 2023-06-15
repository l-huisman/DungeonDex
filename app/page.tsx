
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
        <input className="w-96 h-12 p-3 rounded-lg bg-transparent" placeholder="Goblin" />
        {/* Center text in button */}
        <button className="w-24 h-12 p-3 bg-red-600 hover:bg-red-700 text-center">Search</button>
        <button className="w-24 h-12 p-3 bg-red-600 hover:bg-red-700 text-center">Random</button>
        <button className="w-12 h-12 p-3 bg-red-600 hover:bg-red-700 text-center">+</button>
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
