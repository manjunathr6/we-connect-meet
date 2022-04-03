import React, { useState, useEffect, useCallback, useMemo } from "react";
import { FixedSizeList as List } from "react-window";
import PersonCard from "./PersonCard";
import Input from "../formElements/Input";
import SerachTitle from "./SerachTitle";

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

  useEffect(() => {
    setInterval(() => {
      getData().then((res) => {
        setData(res);
        setUsersData(res.statuses);
      });
    }, 30000);
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

  const Row = useCallback(
    ({ index, style }) => {
      return (
        <li style={style}>
          <PersonCard data={usersData[index]} />
        </li>
      );
    },
    [usersData]
  );
  return (
    <div className="bg-color-greyLighter min-h-vh py-10 px-6">
      <SerachTitle />
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
        {/* Styling for this has to be taken care.. */}
        {usersData.length > 0 ? (
          <List
            height={650}
            itemCount={usersData.length}
            itemSize={65}
            width={800}
            className="m-auto"
          >
            {Row}
          </List>
        ) : (
          noResult
        )}

        {/* Withput windowing the code */}
        {/* {usersData.length > 0
          ? usersData.map((user) => (
              <li key={user.id}>
                <PersonCard data={user} />
              </li>
            ))
          : noResult} */}
      </ul>
    </div>
  );
}
export default SearchPeople;
