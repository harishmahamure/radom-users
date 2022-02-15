import { useEffect, useState } from "react";
import { getProfileData } from "../api/api";
import { Result, RootObject } from "../common/interfaces";
import { db } from "../utils/db";

export const useProfile = () => {
  const [data, setData] = useState<RootObject | undefined>(undefined);
  const [count, setCount] = useState(0);
  const [showNotification, setShowNotification] = useState({
    show: false,
    message: "",
  });
  useEffect(() => {
    async function fetchData() {
      const response = await getProfileData();
      setData(response);
    }
    fetchData();
  }, [count]);

  const addFriend = async (result: Result) => {
    await db.friends.add({ result });
    setShowNotification({
      show: true,
      message: `Send Request to ❤️ ${result.name.first}`,
    });
    setTimeout(() => {
      setCount(count + 1);
      setShowNotification({
        show: false,
        message: "",
      });
    }, 3000);
  };

  const cancelRequest = () => {
    setCount(count + 1);
  };

  return {
    data,
    addFriend,
    cancelRequest,
    showNotification,
  };
};
