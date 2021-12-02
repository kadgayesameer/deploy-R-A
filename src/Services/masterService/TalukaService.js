import axios from "axios";

const SAVE_TALUKA_API_BASE_URL = "http://localhost:7878/master/taluka";

const GET_TALUKAS_API_BASE_URL = "http://localhost:7878/master/talukas";

const DELETE_TALUKAS_API_BASE_URL = "http://localhost:7878/master/taluka";

const GET_TALUKA_API_BASE_URL = "http://localhost:7878/master/taluka";

const UPDATE_TALUKA_API_BASE_URL = "http://localhost:7878/master/taluka";

const GET_DISTRICT_API_BASE_URL = "http://localhost:7878/master/districts";




class TalukaService {

    deleteTaluka(talukaId) {
        return axios.delete(DELETE_TALUKAS_API_BASE_URL + "/" + talukaId);
    }

    createTaluka(taluka) {
        return axios.post(SAVE_TALUKA_API_BASE_URL, taluka);
    }


    updateTALUKA(taluka,talukaId) {
        return axios.put(UPDATE_TALUKA_API_BASE_URL + "/" + talukaId , taluka);
    }

    getTalukas() {
        return axios.get(GET_TALUKAS_API_BASE_URL);
    }

    getTALUKA(talukaId) {
        return axios.get(GET_TALUKA_API_BASE_URL + "/" + talukaId);
    }

    getDistrictData(){
        return axios.get(GET_DISTRICT_API_BASE_URL);
    }
}

export default new TalukaService()
