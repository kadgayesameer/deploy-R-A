import axios from "axios";

const FETCH_ALL_COMPANY_MASTER_API_BASE_URL = "http://localhost:7878/master/companyMasters";
const SAVE_COMPANY_MASTER_API_BASE_URL = "http://localhost:7878/master/companyMaster";
const GET_COMPANY_MASTER_BY_ID_API_BASE_URL = "http://localhost:7878/master/companyMaster";
const UPDATE_COMPANY_MASTER_API_BASE_URL = "http://localhost:7878/master/companyMaster";
const DELETE_COMPANY_MASTER_API_BASE_URL = "http://localhost:7878/master/companyMaster";
const GET_TALUKA_BYDISTRICTID_API_BASE_URI = "http://localhost:7878/master/districts/taluka";
const GET_DISTRICT_BYSTATEID_API_BASE_URI = "http://localhost:7878/master/state/districts";
const GET_STATE_MASTER_LIST_BASE_URL = "http://localhost:7878/master/states";
const GET_TALUKAS_API_BASE_URL = "http://localhost:7878/master/talukas";
const GET_DISTRICTS_API_BASE_URL = "http://localhost:7878/master/districts";

class CompanyMasterService {

    getCompanyDetails() {

        return axios.get(FETCH_ALL_COMPANY_MASTER_API_BASE_URL);
    }

    saveCompanyMasterData(companyMaster) {
        return axios.post(SAVE_COMPANY_MASTER_API_BASE_URL, companyMaster);
    }

    getCompanyById(adcmId) {
        console.log("adcmId==="+adcmId);
        return axios.get(GET_COMPANY_MASTER_BY_ID_API_BASE_URL +'/'+adcmId);
    }

    updateCompanyMaster(companyData, adcmId) {
        console.log("adcmId===" + adcmId);
        console.log("companyData===" + companyData);
        return axios.put(UPDATE_COMPANY_MASTER_API_BASE_URL + '/' + adcmId, companyData);
    }
    
    deleteCompanyMaster(adcmId) {
        console.log("delete===" + adcmId);
        return axios.delete(DELETE_COMPANY_MASTER_API_BASE_URL + '/' + adcmId);
    }

    getDistrictByStateId(stateId) {
        return axios.get(GET_DISTRICT_BYSTATEID_API_BASE_URI + "/" + stateId);
    }

    getTalukaByDistrictId(districtId) {
        return axios.get(GET_TALUKA_BYDISTRICTID_API_BASE_URI + "/" + districtId);
    }

    getStateData() {
        return axios.get(GET_STATE_MASTER_LIST_BASE_URL);
    }

    getTalukaData() {
        return axios.get(GET_TALUKAS_API_BASE_URL);
    }

    getDistrictData() {
        return axios.get(GET_DISTRICTS_API_BASE_URL);
    }
}
export default new CompanyMasterService();