import Axios from "axios";
import { LIST_OF_USER, REGISTER_USER } from "./types";

export function getUserList(dataToSubmit) {
    // const request = Axios.get("/get-user-list").then(response => response.data);

    const request = Axios.get("/get-user-list", dataToSubmit)
        .then(response => {
            console.log(response);
            return { success: true, data: response.data };
        })
        .catch(error => {
            return { success: false, data: error };
        });

    return {
        type: LIST_OF_USER,
        payload: request
    };
}

export function registerUser(dataToSubmit) {
    const request = Axios.post("/register", dataToSubmit)
        .then(response => {
            return { success: true, data: response.data };
        })
        .catch(error => {
            return { success: false, error: error };
        });

    return {
        type: REGISTER_USER,
        payload: request
    };
}
