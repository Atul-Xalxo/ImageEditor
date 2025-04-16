import React from "react";
import { useSearchParams } from "react-router-dom";
import Gallery from "../../components/gallery/Gallery";
import "./searchPage.css";

const SearchPage = () => {
  let [searchParams] = useSearchParams();

  const search = searchParams.get("search");
  const boardId = searchParams.get("boardId");

  return <Gallery search={search} board={boardId} />;
};
export default SearchPage;

//3:00:00s
