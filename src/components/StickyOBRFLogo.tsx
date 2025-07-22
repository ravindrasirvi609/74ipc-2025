import Image from "next/image";

const StickyOBRFLogo = () => {
  return (
    <div className="fixed bottom-4 left-4 z-50 group">
      <div className="bg-white rounded-lg shadow-lg p-2 md:p-3 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <Image
          src="/logos/OBRF Logo.png"
          alt="OBRF Logo"
          width={60}
          height={60}
          className="object-contain transition-all duration-300 group-hover:brightness-110 md:w-[70px] md:h-[70px]"
          priority={false}
        />
      </div>

      {/* Tooltip - hidden on mobile, visible on desktop */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
        OBRF Partner
      </div>
    </div>
  );
};

export default StickyOBRFLogo;
