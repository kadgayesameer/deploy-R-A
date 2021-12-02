import axios from "axios";

const STATE_MASTER_API_BASE_URL = "http://localhost:7878/master/state";
const GET_STATE_MASTER_API_BASE_URL = "http://localhost:7878/master/states";

class StateService {

    saveStateMaster(state) {
        return axios.post(STATE_MASTER_API_BASE_URL, state);
    }

    getStateMaster(){
        console.log("getStateMaster");
        return axios.get(GET_STATE_MASTER_API_BASE_URL);
    }

    getStateById(stateId) {
        //console.log("getStateById==="+stateId);
        return axios.get(STATE_MASTER_API_BASE_URL + '/' + stateId);
    }

    updateStateMaster(stateData, stateId) {
        return axios.put(STATE_MASTER_API_BASE_URL + '/' + stateId, stateData);
    }

    deleteStateMaster(stateId) {
        return axios.delete(STATE_MASTER_API_BASE_URL + '/' + stateId);
    }

    getStateMaster() {
        return axios.get(GET_STATE_MASTER_API_BASE_URL);
    }

}

export default new StateService();