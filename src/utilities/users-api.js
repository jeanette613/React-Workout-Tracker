import { application } from "express";

//This is the bast path of the Express
const BASE_URL = '/api/users';

export async function signUp(userData) {
    //Fetch uses an options object as a 
    //other than basic GET requests,
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

}





