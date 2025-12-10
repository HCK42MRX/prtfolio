import { Link } from 'react-router-dom';
import RetroButton from '../components/RetroButton';

const Home = () => {
  return (
    // Font-sans untuk body text agar lebih mudah dibaca
    <div className="space-y-6 font-sans">

      {/* HEADER SECTION (Tetap sama karena sudah Inggris/Tech) */}
      <div className="border-b-2 border-dashed border-gray-600 pb-4 font-mono">
        <h2 className="text-4xl text-yellow-400 font-bold tracking-wider animate-pulse">
            Welcome_User.exe
        </h2>
        <p className="text-lg text-green-400 mt-2">
            {'>'} System Ready... Connection Established.
        </p>
      </div>

      {/* MAIN INTRO - English Version (Informal Vibe) */}
      <div className="text-gray-300 text-lg leading-relaxed space-y-4">
        <p>
          <span className="text-yellow-200 font-bold text-xl">Hello World! 👋</span>
        </p>
        <p>
          Welcome to my *digital base*. I'm <span className="text-blue-300 font-bold border-b border-blue-300">Bagas</span>.
        </p>
        <p>
          I'm just a regular guy who is super enthusiastic about *grinding* skills in Web Development. Feel free to explore this humble portfolio and make yourself at home.
        </p>
        {/* Pesan untuk hacker dipisah sedikit biar lucu */}
        <p className="text-gray-400 text-sm italic">
          (But please, dear hackers, kalo bisa jangan menyerang 😞)
        </p>
      </div>

      {/* STATUS BOX - English Version */}
      <div className="bg-blue-900/30 p-4 border-2 border-blue-500 mt-6 shadow-[4px_4px_0px_0px_rgba(0,0,200,0.5)]">
        <p className="text-sm text-blue-300 font-bold font-mono mb-1">{'>'} LATEST_STATUS:</p>
        {/* Menggunakan istilah game "pushing rank" dan "GG" (Good Game) */}
        <p className="text-green-300">
          Still on the long journey of "pushing rank" to become a GG Fullstack Developer. <span className="text-yellow-400 font-bold italic">(Anjay!)</span>
        </p>
      </div>

      {/* CTA TOMBOL */}
      <div className="pt-4 font-mono">
        <Link to="/projects">
            <RetroButton>View My Works {">>"}</RetroButton>
        </Link>
      </div>
    </div>
  );
};
export default Home;