import axios from "axios";
import {
    ApiUrl
} from '../../Constants/ApiUrl'

class LoginService {
    welcomeMsg() {
        axios.get(`${ApiUrl}/welcome`).then((response) => { //Authorized Request
                console.log(JSON.stringify(response.data));
            },
            (error) => {
                console.log(error);
            })

        axios.get(`${ApiUrl}/signUp`).then((response) => { ////Unauthorized Request
                console.log(JSON.stringify(response.data));
            },
            (error) => {
                console.log(error);
            })
    }
}
export default new LoginService();