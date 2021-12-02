import axios from "axios";

const SAVE_DISTRICT_API_BASE_URL = "http://localhost:7878/master/district";
const GET_DISTRICT_API_BASE_URL = "http://localhost:7878/master/districts";
const GET_BY_ID_DISTRICT_API_BASE_URL = "http://localhost:7878/master/district";

const GET_STATE_API_BASE_URL = "http://localhost:7878/master/states";

class DistrictService{

    getDistrict(){
        return axios.get(GET_DISTRICT_API_BASE_URL);
    }
    
    createDistrict(district){
        return axios.post(SAVE_DISTRICT_API_BASE_URL, district);
    }

    getDistrictListById(districtId){
        return axios.get(GET_BY_ID_DISTRICT_API_BASE_URL +'/'+districtId);
    }

    updateDistrictListById(districtId, district){
        return axios.put(SAVE_DISTRICT_API_BASE_URL +'/'+districtId, district);
    }

    deleteDistrict(districtId){
        return axios.delete(GET_BY_ID_DISTRICT_API_BASE_URL +'/'+districtId);
    }

    getStateData(){
        return axios.get(GET_STATE_API_BASE_URL);
    }
    
}

export default new DistrictService()