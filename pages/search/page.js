import React, { useState, useEffect } from "react";
import Product from "./components/Product";

// This component is a search page for products from an e-commerce platform I used to freelance for

const SearchPage = () => {
  const [query, setQuery] = useState(""); // store the search query (needed to make the useEffect to make the request)
  const [results, setResults] = useState([]); // storing the results

  // this use effect calls the backend api using the query, sets the data where it's needed and only
  // makes another request if the `query` variable changes.
  useEffect(() => {
    if (query.length > 3) {
      fetch(
        `https://crossrem-4-bpb8u.ondigitalocean.app/api/v1/shops/search-products/?query=${query}`
      )
        .then((response) => response.json())
        .then((data) => setResults(data))
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      setResults([]);
    }
    console.log(results);
  }, [query]);

  // prevent the form default submit event and updates the query state var only when the submission event happens
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setQuery(document.getElementById("searchBar").value);
  };

  return (
    <div className="flex flex-col gap-5 items-center">
      <h1 className="underline text-2xl">Search for Products</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          id="searchBar"
          className="text-black"
          type="text"
          placeholder="Search for items..."
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <p>Results</p>
        {/*  Turnary statement renders
             results only if the results array is not 
             empty otherwise it shows "no results" */}
        {results && results.length > 0 ? (
          <div className="flex flex-col gap-2">
            {results.map((item) => (
              <Product
                key={item.id}
                description={item.description}
                name={item.name}
                price={item.selling_price}
              />
            ))}
          </div>
        ) : (
          <p>No results</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
