import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWNhMWJiMWIwMzZhY2U0NWNiYWIxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5ODI2NTIzOCwiZXhwIjoxNjk4NTI0NDM4fQ.aC3yM1IyKo2c1TUeqFcrGb8vGosuaVwY2boI2LVjBik"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {token:`Bearer ${TOKEN}`}
})