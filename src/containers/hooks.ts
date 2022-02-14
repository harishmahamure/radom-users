import { useEffect, useState } from "react";
import { getProfileData } from "../api/api";
import { RootObject } from "../common/interfaces";

export const useProfile = () => {
  const [data, setData] = useState<RootObject | undefined>(undefined);
  useEffect(() => {
    async function fetchData() {
      const response = await getProfileData();
      setData(response);
    }
    fetchData();
  }, []);

  return {
    data,
  };
};
