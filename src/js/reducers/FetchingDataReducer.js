import { SEND_DONATE_REQUEST } from '../actions/FetchDataActions';
import { DONATE_TO_PROJECT } from '../actions/DonateActions';

export default function(state = false, action) {
    switch (action.type) {
        case SEND_DONATE_REQUEST:
            return true;
        case DONATE_TO_PROJECT:
            return false;
        default:
            return state;
    }
}
