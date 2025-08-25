type CardProps = {
  image?: string;
  link?: string;
  title: string;
  description: string;
  extra?: string;
  hackathon?: string;
};

function Card({ image, link, title, description, extra, hackathon }: CardProps) {
  return (
    <div className="max-w-sm overflow-hidden p-4 bg-white">
      {image && (
        <img src={image} alt={title} className="w-[30%] h-auto object-cover rounded-xl" />
      )}

      <div className="mt-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2 mb-4">{description}</p>
      </div>

      {extra && 
        <img src={extra} alt={title} className="w-[50%] object-cover rounded-xl" />
      }

      {hackathon && (
        <p className="text-blue-200 mt-2">{hackathon}</p>
      )}

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-500 hover:underline"
        >
          View More →
        </a>
      )}
    </div>
  );
}

export default Card;
