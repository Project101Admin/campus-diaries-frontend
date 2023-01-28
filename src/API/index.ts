import { GenericObject } from "../types/index";
import axios from 'axios';

export class API {
    public config: { headers: { withCredentials: boolean; 'Content-Type': string; credentials: string; }; };
    constructor() {
        this.config = {
            headers: {
                withCredentials: true,
                'Content-Type': 'application/json',
                credentials: 'include',

            },
        };
    }

    getFullUrl(endpoint: string, queryParamObject: GenericObject) {
        return '';
    }

    async getData(endpoint: string, queryParamObject: GenericObject) {
        try {
            const response = await axios.get(this.getFullUrl(endpoint, queryParamObject), this.config);

            return response.data;
        } catch (err) { }
    }

    /**
     *
     * @param {*} endpoint - Server endpoint to call and send data to
     * @param {*} apiPayload - Data object
     * @returns
     */
    async postData(endpoint: string, apiPayload: GenericObject, queryParamObject: GenericObject) {
        try {
            const response = await axios.post(
                this.getFullUrl(endpoint, queryParamObject),
                apiPayload,
                this.config,
            );

            return response.data;
        } catch (err) { }
    }

    /**
     *
     * @param {*} endpoint
     * @param {*} queryParamObject
     * @returns
     */
    async deleteData(endpoint: string, queryParamObject: GenericObject) {
        try {
            const response = await axios.delete(this.getFullUrl(endpoint, queryParamObject), this.config);

            return response.data;
        } catch (err) { }
    }

    async updateData(endpoint: string, apiPayload: GenericObject, queryParamObject: GenericObject) {
        try {
            const response = await axios.put(
                this.getFullUrl(endpoint, queryParamObject),
                apiPayload,
                this.config,
            );

            return response.data;
        } catch (err) { }
    }
}