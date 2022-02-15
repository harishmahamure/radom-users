import React from "react";
import { useProfile } from "./hooks";
import { Card } from "../components/index";
const Home = () => {
  const {
    data: { results = [] } = {},
    addFriend,
    cancelRequest,
    showNotification,
    requests = 0,
  } = useProfile();
  const {
    dob,
    email = "email@example.com",
    name: { title = "Mr", first = "Placeholder", last = "Name" } = {},
    location: { country = "India" } = {},
    login: { password = "xxxxxxx" } = {},
  } = results?.[0] || {};

  const addFriendWrapper = () => {
    addFriend(results?.[0]);
  };

  const date = dob?.date
    ? new Date(dob?.date)?.toLocaleDateString()
    : "xx/xx/xxxx";

  return (
    <>
      <Card
        url={results[0]?.picture?.large}
        altTag="profile"
        dob={date}
        contact={email}
        name={title + ". " + first + " " + last}
        location={country}
        password={password?.toString()}
        addFriend={addFriendWrapper}
        cancelRequest={cancelRequest}
        showNotification={showNotification}
        requests={requests}
      />
    </>
  );
};

export default Home;
