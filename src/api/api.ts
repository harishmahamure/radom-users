export const USER = "api";
import { api } from "./index";
import { RootObject } from "../common/interfaces";

export const getProfileData = async () => {
  const response = await api.get<RootObject>(USER);
  return response.data;
};
