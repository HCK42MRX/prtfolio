// src/components/Layout.jsx
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 flex justify-center items-start">
      {/* CONTAINER UTAMA (Main Frame) */}
      <div className="w-full max-w-4xl border-4 border-blue-600 bg-gray-900 shadow-[10px_10px_0px_0px_rgba(0,0,255,0.5)]">
        
        {/* HEADER SECTION */}
        <header className="border-b-4 border-blue-600 p-4 bg-blue-900/20">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl md:text-6xl text-yellow-400 uppercase tracking-widest drop-shadow-md">
                Prt<span className="text-white">Folio</span>
              </h1>
              {/* <p className="text-blue-300 text-lg">--- EST. 2025 ---</p> */}
            </div>
            <div className="text-right hidden md:block">
              <span className="animate-pulse text-green-500">● ONLINE</span>
              <p className="text-sm">Res: 800x600</p>
            </div>
          </div>
        </header>

        {/* MARQUEE TEXT (Running Text ala TV) */}
        <div className="bg-blue-600 text-white p-1 overflow-hidden whitespace-nowrap border-b-4 border-blue-800">
          <div className="inline-block animate-marquee pl-full">
            +++ WELCOME TO MY PORTFOLIO WEBSITE +++ CONTACT ME BY CLICKING “CONTACT_ME” +++ OPEN FOR NEW PROJECTS +++
          </div>
        </div>

        {/* BODY (SIDEBAR + CONTENT) */}
        <div className="flex flex-col md:flex-row min-h-[500px]">
          
          {/* SIDEBAR (Menu Kiri) */}
          <aside className="w-full md:w-64 border-b-4 md:border-b-0 md:border-r-4 border-blue-600 p-4 bg-black">
          <nav className="flex flex-col gap-4 text-2xl font-mono">
  
  {/* Helper function untuk styling biar ga ribet copy-paste */}
  {[
    { path: "/", label: "HOME" },
    { path: "/about", label: "PROFILE" },
    { path: "/projects", label: "WORKS" },
    { path: "/contact", label: "CONTACT_ME" }, // Sesuaikan path ini dgn route kamu (guestbook/contact)
  ].map((link) => (
    <NavLink
      key={link.path}
      to={link.path}
      className={({ isActive }) =>
        `p-2 border-2 transition-all cursor-pointer block 
        ${
          isActive
            ? "bg-yellow-400 text-black border-white font-bold shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]" // Style SAAT AKTIF
            : "text-gray-300 border-transparent hover:bg-yellow-400 hover:text-black hover:border-white" // Style SAAT DIAM
        }`
      }
    >
      [ {link.label} ]
    </NavLink>
  ))}

</nav>
<div className="mt-6 border-t-4 border-blue-600 pt-4">
  <p className="text-yellow-400 text-xs mb-2 font-bold blinking-cursor">{'>'} CONNECT_W/_ME:</p>
  <div className="flex flex-col gap-2 text-sm text-green-300 font-mono">
    
    <a href="https://www.linkedin.com/in/muhammad-bagas-airlangga-9510b82a7/" target="_blank" rel="noopener noreferrer" className="hover:bg-green-900 px-1 hover:text-white transition-colors">
      [ LINKEDIN ]
    </a>
    
    <a href="https://github.com/HCK42MRX" target="_blank" rel="noopener noreferrer" className="hover:bg-green-900 px-1 hover:text-white transition-colors">
      [ GITHUB ]
    </a>
    
    {/* <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" className="hover:bg-green-900 px-1 hover:text-white transition-colors">
      [ INSTAGRAM ]
    </a> */}

  </div>
</div>

            {/* <div className="mt-8 border-2 border-gray-700 p-2 text-center text-sm text-gray-500">
              <p>Pengunjung:</p>
              <p className="text-xl text-green-500 font-bold">00421</p>
            </div> */}
          </aside>

          {/* MAIN CONTENT AREA (Tempat Outlet Berada) */}
          <main className="flex-1 p-6 bg-gray-800 overflow-y-auto relative">
             {/* Outlet ini adalah tempat Halaman Home/About muncul bergantian */}
            <Outlet /> 
            
            {/* Dekorasi Background */}
            <div className="absolute top-0 right-0 p-2 opacity-20 pointer-events-none">
                <h1 className="text-9xl font-bold">0x1b</h1>
            </div>
          </main>

        </div>
        
        {/* FOOTER */}
        <footer className="border-t-4 border-blue-600 p-2 text-center bg-blue-900/50 text-sm">
          (c) 2025 - PRTFOLIO
        </footer>

      </div>
    </div>
  );
};

export default Layout;