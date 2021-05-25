import { Cookies } from "react-cookie";

const cookies = new  Cookies();


export function getCookie(name){
    cookies.get(name);
    // console.log("Get Cookies");
}

export function setCookie(name,value,options){
    cookies.set(name,value,options);
    // console.log("Cookies Stored")
}

export function removeCookie(name,options){
    cookies.remove(name,options);
    // console.log("Removed Cookies");
}


