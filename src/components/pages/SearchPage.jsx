import React, { useState } from "react";
import InputBox from "../ui/atoms/InputBox";
import SearchLists from "../ui/molecules/SearchLists";
import SectionLayout from "../ui/molecules/SectionLayout";

const SearchPage = ({ isLogin, onHeaderActive }) => {
  const { access_token } = isLogin || {};
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState(null);
  const onSearchInputChange = (e) => setSearchInput(e.target.value);
  const onSearchDataUpadate = (value) => setSearchData(value);

  return (
    <SectionLayout
      title="Search! what you curious"
      onHeaderActive={onHeaderActive}
    >
      <InputBox
        onChange={onSearchInputChange}
        searchInput={searchInput}
        isLogin={access_token}
        onSearchDataUpadate={onSearchDataUpadate}
      />
      {searchData && <SearchLists searchData={searchData} />}
    </SectionLayout>
  );
};

export default SearchPage;
