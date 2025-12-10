import RetroButton from './RetroButton';

const ProjectCard = ({ title, description, tags, year, image, url }) => {

  const handleDetailsClick = () => {
    if (url) {
        window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <div className="bg-gray-200 text-black border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] flex flex-col h-full">
      {/* Card Header ala Window */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-2 py-1 flex justify-between items-center">
        <span className="font-bold text-sm truncate">{title}.exe</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-gray-300 border border-black"></div>
          <div className="w-3 h-3 bg-gray-300 border border-black"></div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Image Placeholder (Abu-abu bintik) */}
       <img src={image} alt={title} className="w-full h-32 object-cover mb-4 border border-black bg-gray-400" />

        <h3 className="text-xl font-bold mb-2 uppercase">{title}</h3>
        <p className="text-sm mb-4 font-sans leading-tight flex-1">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 text-xs">
          {tags.map((tag, index) => (
            <span key={index} className="bg-white border border-black px-1">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-auto border-t border-gray-400 pt-2">
            <span className="text-xs text-gray-500">{year}</span>
            <RetroButton onClick={handleDetailsClick} className="text-xs">Details {'>>'}</RetroButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;