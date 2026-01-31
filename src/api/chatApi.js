import axiosInstance from "./axios";

export const getConversations = async () => {
    const { data } = await axiosInstance.get("/conversations");
    return data;
};

export const getMessages = async (conversationId) => {
    const { data } = await axiosInstance.get(`/messages/conversation/${conversationId}`);
    return data;
};

export const getContacts = async () => {
    const { data } = await axiosInstance.get("/contacts");
    return data;
};

export const sendMessage = async (phoneNumber, content) => {
    const { data } = await axiosInstance.post("/messages/send", {
        phoneNumber,
        content,
    });
    return data;
};
