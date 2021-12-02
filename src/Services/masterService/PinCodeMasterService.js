import axios from "axios";

const GET_PINCODES_API_BASE_URL = "http://localhost:7878/master/pinCodes";
const GET_PINCODE_BY_ID_API_BASE_URL = "http://localhost:7878/master/pinCode";
const SAVE_PINCODE_API_BASE_URL = "http://localhost:7878/master/pinCode";
const DELETE_PINCODE_API_BASE_URL = "http://localhost:7878/master/pinCode";
const PUT_PINCODE_API_BASE_URL = "http://localhost:7878/master/pinCode";
const GET_STATE_MASTER_LIST_BASE_URL = "http://localhost:7878/master/states";
const GET_TALUKAS_API_BASE_URL = "http://localhost:7878/master/talukas";
const GET_DISTRICTS_API_BASE_URL = "http://localhost:7878/master/districts";
const GET_PINCODE_API_BASE_URL = "http://localhost:7878/master/pinCode/code";
const GET_DISTRICT_BYSTATEID_API_BASE_URI = "http://localhost:7878/master/state/districts";
const GET_TALUKA_BYDISTRICTID_API_BASE_URI = "http://localhost:7878/master/districts/taluka";
class PinCodeMasterService {
  getPinCodes() {
    return axios.get(GET_PINCODES_API_BASE_URL);
  }

  getPinCode(pinCodeId) {
    return axios.get(GET_PINCODE_API_BASE_URL + "/" + pinCodeId);
  }

  savePinCode(pinCode) {
    return axios.post(SAVE_PINCODE_API_BASE_URL, pinCode);
  }

  getDistrictByStateId(stateId) {
    return axios.get(GET_DISTRICT_BYSTATEID_API_BASE_URI + "/" + stateId);
  }

  deletePinCode(pinCodeId) {
    return axios.delete(DELETE_PINCODE_API_BASE_URL + "/" + pinCodeId);
  }

  updatePinCode(pinCodeId, pinCode) {
    return axios.put(PUT_PINCODE_API_BASE_URL + "/" + pinCodeId, pinCode);
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

  getPinCode(pinCode)
  {
        return axios.get(GET_PINCODE_API_BASE_URL + '/' + pinCode);
  }

  getTalukaByDistrictId(districtId) {
    return axios.get(GET_TALUKA_BYDISTRICTID_API_BASE_URI + "/" + districtId);
}
}

export default new PinCodeMasterService();
