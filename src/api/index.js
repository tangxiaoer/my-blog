/* eslint-disable */
import { fetchGet, fetchPost } from "@/utils/http.js";


export const checklogin = (parms) => fetchPost('/login/',parms);


export const getliked = () => fetchGet('/likedTags/liked/'); 


export const setliked = (parms) => fetchPost('/likedTags/setliked',parms); 


export const getAbstract = () => fetchGet('/articles/getArticles/'); 


