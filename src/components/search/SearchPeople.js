import React, { useState, useEffect } from "react";
import PersonCard from "./PersonCard";
import Input from "../formElements/Input";

function SearchPeople() {
  const [data, setData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  let noResult = "No results found...";

  const getData = async (resolve, reject) => {
    const fetchData = await fetch(
      "https://aravindtwitter.herokuapp.com/twittersearch?key=adobe"
    );
    if (!fetchData.ok) {
      throw new Error("Something went wrong!!");
    }
    const response = await fetchData.json();
    return response;
  };

  useEffect(() => {
    getData().then((res) => {
      setData(res);
      setUsersData(res.statuses);
    });
  }, []);

  // Debouncing method
  let debounceTimer;

  const debounce = (callback, time) => {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(callback, time);
  };
  // Updating the user data based on input valuesdehu8jicg
  const updateUsersData = () => {
    if (data.statuses && data.statuses.length > 0) {
      setUsersData(
        data.statuses.filter((item) =>
          item.text.includes(inputValue.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    debounce(updateUsersData, 700);
  }, [inputValue]);

  return (
    <div className="bg-color-greyLighter h-vh py-10 px-6">
      <div className="search-bar d-flex items-center colGap-4 w-75 m-auto pb-6">
        <Input
          id="search-field"
          type="text"
          label="seach here"
          placeholder="enter here"
          value={inputValue}
          setValue={setInputValue}
          class="flex-1"
        />
        <div className="button mb--2">
          <button
            onClick={() => {
              if (inputValue !== "") return updateUsersData;
            }}
          >
            Search
          </button>
        </div>
      </div>
      <ul className="users-list">
        {usersData.length > 0
          ? usersData.map((user) => (
              <li key={user.id}>
                <PersonCard data={user} />
              </li>
            ))
          : noResult}
      </ul>
    </div>
  );
}
export default SearchPeople;
