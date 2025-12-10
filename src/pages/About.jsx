import { Link } from 'react-router-dom';
import RetroButton from '../components/RetroButton';

const About = () => {
  return (
    <div>
      <h2 className="text-3xl text-yellow-400 border-b-2 border-gray-600 pb-2">Profile_Data.txt</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* KOLOM KIRI: AVATAR / IDENTITAS */}
        <div className="bg-blue-900/20 border-2 border-blue-500 p-4 text-center">
          <div className="w-32 h-32 mx-auto bg-gray-800 border-4 border-white mb-4 flex items-center justify-center overflow-hidden relative">
             <img src="/profile_picture.webp" alt="Avatar" className="text-4xl group-hover:hidden" />
          </div>
          
          <h2 className="text-xl text-white font-bold bg-blue-600 inline-block px-2">BAGAS_A.</h2>
          <p className="text-sm text-blue-300 mt-2">Fullstack Developer</p>
          <p className="text-xs text-gray-400">Loc: Jakarta, ID</p>
        </div>

        {/* KOLOM TENGAH & KANAN: RPG STATS */}
        <div className="md:col-span-2 bg-gray-800 border-2 border-gray-600 p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs px-2 font-bold">
            CONFIDENTIAL
          </div>

          <h3 className="text-xl text-green-400 border-b border-green-800 pb-1 mb-4">
            {'>'} CHAR_STATS
          </h3>

          <div className="space-y-3 font-mono text-sm md:text-base">
            <div className="flex justify-between">
              <span className="text-gray-400">Level (Age):</span>
              <span className="text-white">20</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Class:</span>
              <span className="text-white">Student</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Main OS:</span>
              <span className="text-yellow-300">Windows / Linux</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Weapon:</span>
              <span className="text-white">Laravel, React, VS Code</span>
            </div>
            
            {/* Skill Bar Visual */}
            <div className="mt-4">
              <div className="flex justify-between text-xs text-blue-300 mb-1">
                <span>PHP / Laravel</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-900 h-2 border border-gray-600">
                <div className="bg-blue-500 h-full w-[85%] animate-pulse"></div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex justify-between text-xs text-yellow-300 mb-1">
                <span>React / JS</span>
                <span>70%</span>
              </div>
              <div className="w-full bg-gray-900 h-2 border border-gray-600">
                <div className="bg-yellow-500 h-full w-[70%] animate-pulse"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 3: STATUS UPDATES & CTA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LATEST LOG */}
        <div className="bg-black border border-gray-500 p-4 font-mono text-xs md:text-sm">
           <p className="text-green-500 mb-2">{'>>'} EXPERIENCE_LOG:</p>
           <ul className="space-y-2 text-gray-300">
             <li>[21/09/2025] Creating a subscription application called loomiq for real client with stack Laravel.</li>
             <li>[26/11/2025] Learning React Ecosystem 2 week with AI.</li>
             <li>[10/12/2025] Create PRTFOLIO with react.</li>
             {/* <li>[Music] Listening to: Radiohead - In Rainbows</li> */}
           </ul>
        </div>

        {/* CALL TO ACTION */}
        <div className="flex flex-col justify-center items-center gap-4 border-2 border-dashed border-white p-4">
          <p className="text-center text-yellow-200">Ready to collaborate?</p>
          <div className="flex gap-4">
            <Link to="/projects">
              <RetroButton>View_Works</RetroButton>
            </Link>
            <Link to="/contact">
              <RetroButton className="bg-green-600 hover:bg-green-500 text-white">
                Contact_Me
              </RetroButton>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
export default About;