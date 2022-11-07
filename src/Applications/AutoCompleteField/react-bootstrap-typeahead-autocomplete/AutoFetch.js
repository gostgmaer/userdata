import axios from "axios";
import { set } from "firebase/database";
import React, { useState } from "react";
import { Typeahead, AsyncTypeahead } from "react-bootstrap-typeahead";

const AutoFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const handleSearch = async (query) => {
    setIsLoading(true);
    let res = await axios.get(
      `https://api.github.com/search/users?q=${query}+in:login&page=1&per_page=50`
    );
    const value = res.data.items;
    setOptions(value);

    console.log(value);
  };
  const filterBy = () => true;

  return (
    <AsyncTypeahead
      filterBy={filterBy}
      id="async-example"
      isLoading={isLoading}
      labelKey="login"
      minLength={3}
      onSearch={handleSearch}
      options={options}
      placeholder="Search for a Github user..."
      renderMenuItemChildren={(option) => (
        <>
          <span>{option.login}</span>
        </>
      )}
    />
  );
};

export default AutoFetch;
