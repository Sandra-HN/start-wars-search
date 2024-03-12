import React, { useState, useMemo } from "react";
import debounce from "lodash.debounce";
import useGetSearchResult from "../hooks/useGetSearchResult";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SearchComponent: React.FC<{ onSelect: (character: any) => void }> = ({
  onSelect,
}) => {
  const [search, setSearch] = useState("");
  const { data, error, isFetching } = useGetSearchResult({ search });

  const handleChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    500
  );
  const HighlightMatch = ({ text, query }: { text: string; query: string }) => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} className="font-bold">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };
  const suggestions = useMemo(() => data?.results || [], [data]);

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        className="w-full max-w-screen-md px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search..."
      />
      {isFetching && <div className="text-sm text-gray-500">Loading...</div>}
      {error && (
        <div className="text-sm text-red-500">Error fetching characters</div>
      )}
      <ul className="mt-2 w-full max-w-screen-md mx-auto">
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          suggestions.map((suggestion: any) => (
            <li
              key={suggestion.name}
              onClick={() => onSelect(suggestion)}
              className="text-white cursor-pointer hover:bg-gray-200 text-left w-full"
            >
              <HighlightMatch text={suggestion.name} query={search} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default SearchComponent;
