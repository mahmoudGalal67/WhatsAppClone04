import axiosInstance from "./axios";


export const loginRequest = async (email, password) => {
    const { data } = await axiosInstance.post("/auth/login", {
        UsernameOrEmail: email,
        password,
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
export const deleteConversations = async (id) => {
    const { data } = await axiosInstance.delete(`/conversations/${id}`);
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
