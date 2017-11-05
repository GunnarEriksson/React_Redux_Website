import { combineReducers } from 'redux';
import ProjectReducer from './ProjectReducer';
import ProjectsReducer from './ProjectsReducer';
import DonateReducer from './DonateReducer';
import FetchingDataReducer from './FetchingDataReducer';

const rootReducer = combineReducers({
  project: ProjectReducer,
  projects: ProjectsReducer,
  donation: DonateReducer,
  isFetching: FetchingDataReducer
});

export default rootReducer;
