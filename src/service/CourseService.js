import axios from 'axios'

const COURSES_API_REST_URL='/api/courses'

class CourseService{

    getCourses(){
        return axios.get(COURSES_API_REST_URL);
    }
}

export default new CourseService();