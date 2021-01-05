import { REGISTER_USER } from "../_actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = {}, action) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, register: action.payload };

        default:
            return state;
    }
}
