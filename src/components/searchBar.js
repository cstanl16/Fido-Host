import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import "SearchBar.css";

function SearchBar({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">

      <div className="searchBar">

        <text className="here"
          type="text"
          value={wordEntered}
          onChange={handleFilter}
        />

      </div>
      
      <div className="searchIcon">
        
        {filteredData.length === 0 ? (
          <SearchIcon />
        ) : (
          <CloseIcon id="clearBtn" onClick={clearInput} />
        )}

      </div>

    </div>
    
  );
}

export default SearchBar;

//{filteredData.length != 0 && (

 //   <div className="dataResult">

//    {filteredData.slice(0, 15).map((value, key) => {
  //    return (
  //      <a className="dataItem" href={value.link} target="_blank">
  //        <p>{value.title} </p>
  //      </a>
  //    );
  //  })}

 // </div>

//)}