import { GET_PROJECTS } from '../actions/ProjectActions';

export default function(state = [], action) {
    switch (action.type) {
        case GET_PROJECTS:
            return action.projects;
        default:
            return state;
    }
}
