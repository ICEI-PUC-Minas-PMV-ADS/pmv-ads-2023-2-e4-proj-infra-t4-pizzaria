import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWNhMWJiMWIwMzZhY2U0NWNiYWIxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5ODM1ODU0MywiZXhwIjoxNjk4NjE3NzQzfQ.SPUTdCEnqgoFmIUeFf3Ia6_l_ncbCC7LszAZhOx-qp4"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {token:`Bearer ${TOKEN}`}
})