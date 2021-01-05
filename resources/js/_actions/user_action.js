import Axios from "axios";
import { REGISTER_USER } from "./types";

export function registerUser(dataToSubmit) {
    const response = Axios.post("/register", dataToSubmit)
        .then(response => {
            return { success: true, data: response.data };
        })
        .catch(error => {
            return { success: false, error: error };
        });

    return {
        type: REGISTER_USER,
        payload: response
    };
}
