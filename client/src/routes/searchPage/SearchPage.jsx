import React from "react";
import { useSearchParams } from "react-router-dom";
import Gallery from "../../components/gallery/Gallery";
import "./searchPage.css";

const SearchPage = () => {
  let [searchParams] = useSearchParams();

  const search = searchParams.get("search");

  return <Gallery search={search} />;
};

export default SearchPage;

//3:00:00s
