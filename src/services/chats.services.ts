import { ITotalActiveChatsResponse } from "../interfaces/ITotalActiveChatsResponse";
import { ITotalMessagesResponse } from "../interfaces/ITotalMessagesResponse";
import { getInitRequest } from "./request.service";
import { getToken } from "./storeData.service";

const PATH = "http://localhost:3002/api/v1/";

/**
 * This function gets a count of all the chats active in the app
 * @returns An object of type ITotalActiveChatsResponse
 */
export const getTotalActiveChats =
  async (): Promise<ITotalActiveChatsResponse> => {
    const request: RequestInfo = `${PATH}chats/active`;
    const token = await getToken("JWT");
    const response = await fetch(request, getInitRequest(token!));

    const data = await response.json();
    if (data) {
      return data;
    }
    return {} as ITotalActiveChatsResponse;
  };

/**
 * This function gets a count of all messages in the database.
 * @returns An object of the type ITotalMessagesResponse
 */
export const getTotalMessages = async (): Promise<ITotalMessagesResponse> => {
  const request: RequestInfo = `${PATH}message/total`;
  const token = await getToken("JWT");
  const response = await fetch(request, getInitRequest(token!));

  const data = await response.json();
  if (data) {
    return data;
  }
  return {} as ITotalMessagesResponse;
};
