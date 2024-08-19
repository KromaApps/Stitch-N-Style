import { Link } from "react-router-dom";
import designers from "../../services/designersData";

export function TopDesignerSidebar() {
  const featuredDesigners = designers.slice(0, 3);

  return (
    <div>
      <div>
        {featuredDesigners.map((designer) => (
          <Link
            key={designer.id}
            to={`/designers/${designer.id}`}
            className="flex text-black cursor-pointer my-1.5 p-1.5"
          >
            <img
              src={designer.image}
              alt={designer.name}
              className="w-5 h-5 rounded-full mb-4 object-cover"
            />
            {designer.name}
          </Link>
        ))}
      </div>
      <div className="flex justify-center mb-8">
        <Link
          to="/designers"
          className="text-white bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 py-2 px-6 rounded-full shadow-md transition-colors duration-300 ease-in-out"
        >
          See More Designers
        </Link>
      </div>
    </div>
  );
}
