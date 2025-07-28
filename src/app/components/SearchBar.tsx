import { useEffect, useState } from "react";
import BasicProvider from "../utils/basicprovider";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const router = useRouter();

  const handleSearch = async (e: any) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
    } else if (value.trim().length > 2) {
      const filteredResults: any = await new BasicProvider(
        `public/dashboard/search?search=${value}`
      ).getRequest();

      setResults(filteredResults?.data);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
  };

  const handleItemClick = (item: any) => {
    setQuery("");
    setResults([]);
    router.push(`/pages/${item?.type}`);
  };

  return (
    <div className="relative hidden md:flex flex-1 justify-center">
      <div className="relative w-1/2 max-w-xs">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-3 border rounded-[50px] outline-none focus:ring-1 focus:ring-darkColor text-black"
          value={query}
          onChange={handleSearch}
        />
        {query ? (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
          >
            <AiOutlineClose size={20} />
          </button>
        ) : (
          <button
            // onClick={clearSearch}
            disabled
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
          >
            <AiOutlineSearch size={20} />
          </button>
        )}

        {results.length > 0
          ? results.map((result: any, index) => (
              <div key={index} className="relative">
                <div className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-50  max-h-80 overflow-y-auto no-scrollbar">
                  {result?.data?.length ? (
                    <div>
                      <div className="px-3 py-2 font-semibold border-b">
                        {result?.type} ({result?.data?.length})
                      </div>

                      <ul className="w-full bg-white">
                        {result?.data &&
                          result?.data.length > 0 &&
                          result.data.map((item: any, innerIndex: number) => (
                            <li
                              key={innerIndex}
                              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => handleItemClick(result)}
                            >
                              {item.name}
                            </li>
                          ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
