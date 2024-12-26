import axios from "axios";

import { getToken } from "@/app/utils/auth";

export class BasicProvider {
    // url: string;
    baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/`;
    constructor(url: string) {


        console.log("-=-==-==-=url", process.env.NEXT_PUBLIC_API_URL);

        // http://localhost:3004/api/auth/customer/login
        this.baseURL = `${this.baseURL}${url}`
    }

    async getRequest(data: any) {
        const token = getToken();
        try {
            const response = await axios.get(this.baseURL, {
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

            const response = await axios.post(this.baseURL, data);
            return response;

        } catch (error) {
            console.error("Error Post data:", error);
            throw error;
        }
    }

    async putRequest(data: any) {

        console.log('==============>>>', this.baseURL);

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
