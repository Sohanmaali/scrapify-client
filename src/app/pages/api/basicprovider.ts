import axios from "axios";

import { getToken } from "@/app/utils/auth";

export class BasicProvider {
    url: string;
    baseURL = "http://localhost:3001/api";
    constructor(url: string) {
        this.url = url;
    }

    async getRequest(data: any) {
        const token = getToken();
        try {
            const response = await axios.get(this.baseURL + this.url, {
                params: data, // Pass query parameters
                headers: {
                    Authorization: `Bearer ${token}`, // Add the token to the Authorization header
                   
                },
            });
            return response;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }


    async postRequest(data: any) {
        try {
            const response = await axios.post(this.baseURL,  data);
            return response;
        } catch (error) {
            console.error("Error Post data:", error);
            throw error;
        }
    }

    async putRequest(data: any) {

        const token = getToken();
        try {
            const response = await axios.put(this.baseURL, {
                params: data, // Pass query parameters
                headers: {
                    Authorization: `Bearer ${token}`, // Add the token to the Authorization header
                },
            });
            return response;
        } catch (error) {
            console.error("Error updating data:", error);
            throw error;
        }
    }


    async patchRequest(data: any) {
        try {
            const token = getToken();
            const response = await axios.patch(this.baseURL, {
                params: data, // Pass query parameters
                headers: {
                    Authorization: `Bearer ${token}`, // Add the token to the Authorization header
                },
            });
            return response;
        } catch (error) {
            console.error("Error updating data:", error);
            throw error;
        }
    }


    async deleteRequest(data: any) {
        try {
            const response = await axios.delete(this.baseURL, data);
            return response;
        } catch (error) {
            console.error("Error deleting data:", error);
            throw error;
        }
    }

    async trashRequest(data: any) {
        try {
            const response = await axios.patch(this.baseURL, data);
            return response;
        } catch (error) {
            console.error("Error trashing data:", error);
            throw error;
        }
    }
}
