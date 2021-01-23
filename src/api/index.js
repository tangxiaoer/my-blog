/* eslint-disable */
import { fetchGet, fetchPost } from "@/utils/http.js";


export const checklogin = (parms) => fetchPost('/login/',parms);
