import axios from "axios";


const GET_GL_MASTER_API_BASE_URL = "http://localhost:7878/master/glMasters";
const GL_MASTER_API_BASE_URL = "http://localhost:7878/master/glMaster";
const GL_MASTER_CODE_API_BASE_URL = "http://localhost:7878/master/glMaster/code";
const GL_GROUP_MASTER_CODE_API_BASE_URL = "http://localhost:7878/master/glGroupMasters";
const GL_SUBGROUP_MASTER_CODE_API_BASE_URL = "http://localhost:7878/master/glSubGroups";
const GL_SUB_SUBGROUP_MASTER_CODE_API_BASE_URL = "http://localhost:7878/master/glSubSubGroups";
const GL_NOTE_MASTER_CODE_API_BASE_URL = "http://localhost:7878/master/glNotes";
const GL_CONTRA_NOTE_MASTER_CODE_API_BASE_URL = "http://localhost:7878/master/glContraNotes";
const GL_TYPE_FILTER_MASTER_CODE_API_BASE_URL = "http://localhost:7878/master/glTypeFilters";


class GlMasterService {
    saveGLData(GLData) {
        // console.log("document=====>>>>>"+JSON.stringify(document));
        return axios.post(GL_MASTER_API_BASE_URL, GLData);
    }

    getGlDataList() {
        return axios.get(GET_GL_MASTER_API_BASE_URL);
    }

    getGlById(glId) {
        return axios.get(GL_MASTER_API_BASE_URL + '/' + glId);
    }

    updateGlMaster(GLData, glId) {
        console.log("update gl master record=====>>>>>"+JSON.stringify(GLData));
        return axios.put(GL_MASTER_API_BASE_URL + '/' + glId, GLData);
    }

    deleteGlById(glId) {
        //console.log("deleteDocumentById api hitted==>>>>>>>>"+JSON.stringify(document));
        return axios.delete(GL_MASTER_API_BASE_URL + '/' + glId);
    }

    getGlCode(glType){
        return axios.get(GL_MASTER_CODE_API_BASE_URL+'/'+glType);
    }

    getGlGroupDataList() {
        return axios.get(GL_GROUP_MASTER_CODE_API_BASE_URL);
    }

    getGlSubGroupDataList() {
        return axios.get(GL_SUBGROUP_MASTER_CODE_API_BASE_URL);
    }

    getGlSubSubGroupDataList() {
        return axios.get(GL_SUB_SUBGROUP_MASTER_CODE_API_BASE_URL);
    }

    getGlNoteDataList() {
        return axios.get(GL_NOTE_MASTER_CODE_API_BASE_URL);
    }

    getGlContraNoteDataList() {
        return axios.get(GL_CONTRA_NOTE_MASTER_CODE_API_BASE_URL);
    }

    getGlTypeFilterDataList() {
        return axios.get(GL_TYPE_FILTER_MASTER_CODE_API_BASE_URL);
    }



}
export default new GlMasterService();
