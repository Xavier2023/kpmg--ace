import axios from "axios";

export default axios.create({
    baseURL: ' http://ec2-18-216-108-190.us-east-2.compute.amazonaws.com/kpmg_ace'
  })