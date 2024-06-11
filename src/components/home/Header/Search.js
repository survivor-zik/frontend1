import { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
// import { callAPI } from "../utils/CallApi";

const Search = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });

    setSearchTerm("");
    setCategory("All");
  };

  //   const getSuggestions = () => {
  //     callAPI(`data/suggestions.json`).then((suggestionResults) => {
  //       setSuggestions(suggestionResults);
  //     });
  //   };

  useEffect(() => {
    // getSuggestions();
    setSuggestions(["Home", "Clock"]);
  }, []);

  return (
    <div className="container mx-auto max-w-xl">
      <div className="flex items-center h-10 bg-amazonclone-yellow rounded">
        <input
          className="flex grow items-center h-[100%] rounded-l text-black p-3"
          type="text"
          placeholder="Search your products here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={onHandleSubmit} className="w-[45px]">
          <FaSearch className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      {/* {suggestions && (
        <div className="bg-white text-black w-full z-40 absolute">
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => setSearchTerm(suggestion.title)}
              >
                {suggestion.title}
              </div>
            ))}
        </div>
      )} */}
    </div>
  );
};

export default Search;
