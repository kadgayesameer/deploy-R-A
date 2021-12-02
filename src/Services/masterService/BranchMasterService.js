import axios from "axios";

const BRANCH_MASTER_API_BASE_URL = "http://localhost:7878/master/branch";
const GET_BRANCH_MASTER_API_BASE_URL = "http://localhost:7878/master/branches";
const GET_COMPANY_MASTER_LIST_BASE_URL = "http://localhost:7878/master/companyMasters";
const GET_COMPANY_MASTER_BY_ID_API_BASE_URL = "http://localhost:7878/master/companyMaster";
const GET_STATE_MASTER_LIST_BASE_URL = "http://localhost:7878/master/states";
const GET_TALUKAS_API_BASE_URL = "http://localhost:7878/master/talukas";
const GET_DISTRICTS_API_BASE_URL = "http://localhost:7878/master/districts";
const GET_DISTRICT_BYSTATEID_API_BASE_URI = "http://localhost:7878/master/state/districts";
const GET_TALUKA_BYDISTRICTID_API_BASE_URI = "http://localhost:7878/master/districts/taluka";


class BranchMasterService {

    saveBranchMaster(branch) {

        return axios.post(BRANCH_MASTER_API_BASE_URL, branch);

    }

    getBranchMaster() {

        return axios.get(GET_BRANCH_MASTER_API_BASE_URL);
    }

    getBranchById(branchId) {
        console.log("getBranchById===" + branchId);
        return axios.get(BRANCH_MASTER_API_BASE_URL + '/' + branchId);
    }

    updateBranchMaster(branchData, branchId) {
        return axios.put(BRANCH_MASTER_API_BASE_URL + '/' + branchId, branchData);

    }

    deleteBranchMaster(branchId) {
        return axios.delete(BRANCH_MASTER_API_BASE_URL + '/' + branchId);
    }

    getCompanyData() {
        return axios.get(GET_COMPANY_MASTER_LIST_BASE_URL);
    }

    getCompanyDataById(companyId) {
        return axios.get(GET_COMPANY_MASTER_BY_ID_API_BASE_URL + '/' + companyId);
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

    getDistrictByStateId(stateId) {
        return axios.get(GET_DISTRICT_BYSTATEID_API_BASE_URI + "/" + stateId);
    }

    getTalukaByDistrictId(districtId) {
        return axios.get(GET_TALUKA_BYDISTRICTID_API_BASE_URI + "/" + districtId);
    }

}

export default new BranchMasterService();