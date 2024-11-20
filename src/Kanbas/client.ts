import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENT_API = `${REMOTE_SERVER}/api/enrollment/enroll`;

export const createEnrollment = async (course: any) => {
  const response = await axios.post(`${ENROLLMENT_API}/${course._id}`, course);
  return response.data;
};

export const deleteEnrollment = async (course: any) => {
  const { data } = await axios.delete(
    `${ENROLLMENT_API}/${course._id}`,
    course
  );
  return data;
};
