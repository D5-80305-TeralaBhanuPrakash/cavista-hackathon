import axios from "axios";
import { createUrl,createError } from "./util";



export async function signUpUser(firstName, lastName,email,password,gender,dateOfBirth,phoneNumber) {
    try {
        const url = createUrl('user/register')
        const body = {
            firstName, lastName,email,password,gender,dateOfBirth,phoneNumber
        }
        const response = await axios.post(url,body);
        console.log(response)
        return response.data
    } catch (error) {
        return { error: error.response.data };
    }
}

export async function signInUser(email,password) {
    try {
        const url = createUrl('user/signin')
        const body = {
            email,password
        }
        const response = await axios.post(url,body);
        console.log(response)
        return response.data
    } catch (error) {
        return { error: error.response.data };
    }
}