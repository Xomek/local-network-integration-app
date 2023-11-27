import { settingsActions } from "entities/settings/Settings.slice";
import { segmentActions } from "entities/segment/Segment.slice";

const AllActions = { ...settingsActions, ...segmentActions };

export default AllActions;
