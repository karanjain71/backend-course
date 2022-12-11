import axiosApi  from "./api_helper"
import * as url from "./url_helper"

const config = {
    headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST",
        // "Authorization" : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdW1pdGFnYXJ3YWxAZ21haWwuY29tIiwiaWF0IjoxNjcwNzg0ODk2LCJleHAiOjE2NzE0ODQ4OTZ9.AEWRH4bzOoVP371c8UdNHTHtOClJZCdRoOyYbLo8sXMtKnNin_nAwikJ9SgUBSO8yRID4YiuOM88EqGd9ByjDQ"
    }
  };    

export const userLogin = async () => {
    const token = await axiosApi.post(url.LOGIN_USER,{
        "email": "pratiksingh@gmail.com",
        "password": "12345"
    },config)
    return token;
}

export const checkingAuth = async () => {
    const token = await axiosApi.post(url.LOGIN_USER,{
        "email": "karanjain71@gmail.com",
        "password": "12345"
    })
    console.log(token, "Here")
    return token;
}