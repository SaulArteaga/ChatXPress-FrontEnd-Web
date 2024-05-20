import { ITotalActiveChatsResponse } from "../interfaces/ITotalActiveChatsResponse";
import { ITotalMessagesResponse } from "../interfaces/ITotalMessagesResponse";
import { getInitRequest } from "./request.service";
import { getCookie } from "./storeData.service";

const PATH = "http://localhost:3000/api/v1/";

export const getTotalActiveChats =
  async (): Promise<ITotalActiveChatsResponse> => {
    const request: RequestInfo = `${PATH}chats/active`;
    const token = await getCookie("JWT");
    const response = await fetch(request, getInitRequest(token!));

    const data = await response.json();
    if (data) {
      return data;
    }
    return {} as ITotalActiveChatsResponse;
  };

export const getTotalMessages = async (): Promise<ITotalMessagesResponse> => {
  const request: RequestInfo = `${PATH}message/total`;
  const token = await getCookie("JWT");
  const response = await fetch(request, getInitRequest(token!));

  const data = await response.json();
  if (data) {
    return data;
  }
  return {} as ITotalMessagesResponse;
};
