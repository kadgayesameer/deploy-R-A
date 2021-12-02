import axios from "axios";

const DOCUMENT_MASTER_API_BASE_URL = "http://localhost:7878/master/document";

const GET_DOCUMENT_MASTER_API_BASE_URL = "http://localhost:7878/master/documents";

class DocumentMasterService {

    saveDocumentData(document) {
       // console.log("document=====>>>>>"+JSON.stringify(document));
        return axios.post(DOCUMENT_MASTER_API_BASE_URL, document);

    }

    getDocumentList(){
        return axios.get(GET_DOCUMENT_MASTER_API_BASE_URL);
    }

    getDocumentListByDoc(docType){
            return axios.get(DOCUMENT_MASTER_API_BASE_URL+'/'+docType);    
    }

    getDocumenById(docId){
        return axios.get(GET_DOCUMENT_MASTER_API_BASE_URL+'/'+docId);
    }
    
    deleteDocumentById(docId){
        //console.log("deleteDocumentById api hitted==>>>>>>>>"+JSON.stringify(document));
        return axios.delete(DOCUMENT_MASTER_API_BASE_URL+'/'+docId);
    }

}

export default new DocumentMasterService();