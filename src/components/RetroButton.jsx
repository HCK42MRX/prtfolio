const RetroButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-1 
        bg-gray-300 text-black font-bold uppercase tracking-wider
        border-t-2 border-l-2 border-white 
        border-b-2 border-r-2 border-black
        active:border-t-black active:border-l-black 
        active:border-b-white active:border-r-white
        active:bg-gray-400
        hover:bg-yellow-200
        transition-colors
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default RetroButton;