import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWNhMWJiMWIwMzZhY2U0NWNiYWIxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5ODI3NDE5OCwiZXhwIjoxNjk4NTMzMzk4fQ.XVKalfEOr--Fg8AHNGeZrJMWNdgM1i33gkr6lBUiin4"

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});


export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token: `Bearer ${TOKEN}`}
});