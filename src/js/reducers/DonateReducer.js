import { DONATE_TO_PROJECT, CLEAR_DONATION_STATE } from '../actions/DonateActions';

export default function(state = [], action) {
    switch (action.type) {
        case DONATE_TO_PROJECT:
            return action.donation;
        case CLEAR_DONATION_STATE:
            return action.donation;
        default:
            return state;
    }
}
