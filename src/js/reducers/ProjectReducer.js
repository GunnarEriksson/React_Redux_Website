import { GET_PROJECT } from '../actions/ProjectActions';

export default function(state = [], action) {
    switch (action.type) {
        case GET_PROJECT:
            return action.project;
        default:
            return state;
    }
}
