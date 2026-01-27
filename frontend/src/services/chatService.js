import api from "../api/axios";

export const fetchMessages = async (receiverId) => {
  const res = await api.get(`/chat/${receiverId}`);
  return res.data;
};
