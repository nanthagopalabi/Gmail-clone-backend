import axios from "axios";
const API_URL = `https://gmail-clone-backend-dqet.onrender.com`;

const API_GMAIL = async (urlObject, payload,token,params) => {
  return await axios({
    method: urlObject.method,
    url: `${API_URL}/${urlObject.endpoint}` ,
    data: payload, // initially it was {} payload
    params:{
      token:params
    },
    headers:{
      "x-auth-token":`${token}`
    }
  });
};
export default API_GMAIL;