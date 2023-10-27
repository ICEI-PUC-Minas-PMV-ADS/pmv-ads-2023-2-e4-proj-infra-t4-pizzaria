import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWNhMWJiMWIwMzZhY2U0NWNiYWIxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5ODM1MzA2MSwiZXhwIjoxNjk4NjEyMjYxfQ.wW-Y2yvXeF-8b_vRnLn6rTvHsB6Djloz9-SEQWh4MZc"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {token:`Bearer ${TOKEN}`}
})