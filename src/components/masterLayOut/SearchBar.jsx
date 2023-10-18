import React, { useState } from "react";
import {
  SearchByKeywordRequest,
  taskListByStatus,
} from "../../ApiRequest/ApiRequest";
const SearchBar = () => {
  const [keyword, setKeyword] = useState("0");
  const handleSearch = (event) => {
    setKeyword(event.target.value);
    if (event.target.value.length === 0) {
      setKeyword("0");
      taskListByStatus("New");
    }
  };

  // handle search btn
  const handleSearchBtn = () => {
    SearchByKeywordRequest(keyword);
  };
  return (
    <div className="container">
      <div className="row pt-2 d-flex justify-content-end">
        <div className="col-10 col-md-5">
          <input
            onChange={handleSearch}
            placeholder="Search"
            className="form-control w-100"
          />
        </div>
        <div className="col-2 col-md-2">
          <button onClick={handleSearchBtn} className="btn btn-success">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
