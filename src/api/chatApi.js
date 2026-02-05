import axiosInstance from "./axios";


export const loginRequest = async (email, password) => {
    const { data } = await axiosInstance.post("/auth/login", {
        UsernameOrEmail: email,
        password,
    });

    return data;
};
export const RegisterRequest = async (form) => {
    const { data } = await axiosInstance.post("/auth/register", {
        ...form,
    });

    return data;
};

export const getConversations = async () => {
    const { data } = await axiosInstance.get("/conversations");
    return data;
};

export const addConversations = async (payload) => {
    const { data } = await axiosInstance.post("/conversations/by-phone", { phoneNumber: payload.phoneNumber, name: payload.name, imageUrl: payload.imageUrl });
    return data;
};
export const deleteConversation = async (id) => {
    const { data } = await axiosInstance.delete(`/conversations/${id}`);
};
export const deleteConversations = async (ids) => {
    const { data } = await axiosInstance.post(`/conversations/bulk-delete`, { conversationIds: ids });
};

export const getMessages = async (conversationId) => {
    const { data } = await axiosInstance.get(`/messages/conversation/${conversationId}`);
    return data;
};
export const deleteMessages = async (messageIds) => {
    const { data } = await axiosInstance.delete(`/messages/bulk`, { data: { messageIds } });
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
