import Form from "next/form";
import React from "react";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <div className="flex gap-2">
        {query ? (
          <SearchFormReset />
        ) : (
          <button type="submit" className="search-btn text-white">
            <Search className="size-5 text-[#5751E1]" />
          </button>
        )}
      </div>
      <input
        type="text"
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />
    </Form>
  );
};

export default SearchForm;
