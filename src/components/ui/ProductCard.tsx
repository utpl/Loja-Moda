export interface ProductCardProps {
  title: string;
  image: string;
  alt: string;
  buttonText: string;
  className?: string;
  Link?: string;

}

export const ProductCard = ({ title, image, alt, buttonText, className = "" }: ProductCardProps) => {
  return (
    <div className={`relative group flex justify-center items-center h-full w-full ${className}`}>
      <img
        className="object-center object-cover h-full w-full"
        src={image}
        alt={alt}
      />
      <button className="absolute bottom-4 z-10 text-base font-medium text-gray-800 py-3 w-36 bg-white">
        {buttonText}
      </button>
      <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
    </div>
  );
};

