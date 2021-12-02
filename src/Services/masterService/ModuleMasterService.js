import axios from "axios";
const GET_MODULEMASTER_API_BASE_URL = "http://localhost:7878/master/module";
const GET_MODULEMASTER_BY_ID_API_BASE_URL = "http://localhost:7878/master/module";
const SAVE_MODULEMASTER_API_BASE_URL = "http://localhost:7878/master/module";
const UPDATE_MODULEMASTER_API_BASE_URL = "http://localhost:7878/master/module";
const DELETE_MODULEMASTER_API_BASE_URL = "http://localhost:7878/master/module";
const SEQ_MODULEMASTER_API_BASE_URL = "http://localhost:7878/master/module/seqNo";

class ModuleMasterService{

    getModuleMasters() {
        return axios.get(GET_MODULEMASTER_API_BASE_URL);
      }
    getModuleMaster(id){
        return axios.get(GET_MODULEMASTER_BY_ID_API_BASE_URL + "/" + id);
    }
    
    saveModuleMaster(master){
        console.log("Inside create=", master);
        return axios.post(SAVE_MODULEMASTER_API_BASE_URL, master);
    }

    getModuleMasterById(id){
        console.log("id==="+id);
        return axios.put(UPDATE_MODULEMASTER_API_BASE_URL + '/' + id);
    }

    deleteModuleMaster(id)
    {
        console.log("Delete id="+id);
        return axios.delete(DELETE_MODULEMASTER_API_BASE_URL + '/' + id);
    }
    getSeqModuleMaster(seqNo)
    {
        console.log("SeqNo="+seqNo);
        return axios.get(SEQ_MODULEMASTER_API_BASE_URL + '/' + seqNo);
    }
    updateModuleMaster(id){
        console.log("edit id==="+id);
        return axios.put(UPDATE_MODULEMASTER_API_BASE_URL + '/' + id);
    }
}

export default new ModuleMasterService()