import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

const fetchStats = () => {
  return axios.get(`${API_BASE_URL}/stats`).then(({ data }) => data);
};

const fetchCourses = () => {
  return axios.get(`${API_BASE_URL}/courses`).then(({ data }) => data);
};

const fetchInstructors = () => {
  return axios.get(`${API_BASE_URL}/instructors`).then(({ data }) => data);
};

export { fetchStats, fetchCourses, fetchInstructors };
