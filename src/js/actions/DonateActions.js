import axios from 'axios';

const ROOT_URL = 'http://35.158.19.178:50000/rest';

export const DONATE_TO_PROJECT = 'DONATE_TO_PROJECT';
export const CLEAR_DONATION_STATE = 'CLEAR_DONATION_STATE';

export function donateToProjectMockup(amount, currency, projectId, projectName) {
    let donation = "Thank you for your " + amount + currency + " donation to the project " + projectName + " (id: " + projectId + ")";

    return {
        type: DONATE_TO_PROJECT,
        donation: donation
    };
}

export function donateToProject(amount, currency, projectId, projectName) {
    return function(dispatch) {
        var senderName = "test", senderID = "w100", receiverName = "westindia", receiverID = "w200";
        axios.post(`${ROOT_URL}/donate/` + senderName +"/"+ senderID +"/"+ receiverName +"/"+receiverID +"/"+amount)
            .then(response => {
                let donation = "Thank you for your " + amount + " " + currency + " donation";
                dispatch({ type: DONATE_TO_PROJECT, donation: donation});
            })
            .catch(() => {
                dispatch({ type: DONATE_TO_PROJECT, donation: "Could not register a donation. No contact with server!" });
            });
    }
}


export function clearDonationState() {
    let donation = " ";

    return {
        type: CLEAR_DONATION_STATE,
        donation: donation
    };
}
