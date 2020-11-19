import React from 'react'
import CourseService from '../service/CourseService';
import {Link} from 'react-router-dom';
import axios from 'axios';
// import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import '../blagojche/pages/listcoursescss.css'

class CoursesComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            courses:[]
        }
    }

    componentDidMount(){
        CourseService.getCourses().then((response)=>{
            this.setState({courses:response.data})
        });
    }

    deleteRow(id, e){

        axios.delete(`/api/courses/${id}`)
    
          .then(res => {
            console.log(res);
            console.log(res.data);
            const course = this.state.courses.filter(item => item.id !== id);
            this.setState({ courses:course });
            
          })
          
          
      
    
      }
   
    render (){
        

        return(
        

        <div>
            <h1 className="listcourses">Courses List</h1>
            <Link className="btn btn-warning button" to='/addCourse'>Add Course</Link>
            <Link to='/' className="btn btn-info button">Home</Link>

            <table className="table table-dark mx-auto ">
                <thead>
                    <tr>
                        <td>CourseID</td>
                        <td>description</td>
                        <td>image</td>
                        <td>name</td>
                        <td>price</td>
                        <td>Action</td>
                        <td>Instructor</td>
                        <td>Category</td>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.courses.map(
                            course => 
                            <tr key = {course.id}>
                                <td>{course.id}</td>
                                <td>{course.description}</td>
                                <td><img src={course.image} alt="" /></td>
                                <td>{course.name}</td>
                                <td>{course.price}</td>
                                
                        
                                <td>{course.instructor.name}</td>
                                <td>{course.category.name}</td>
                                <td>
                                    <Link className="delete" onClick={(e) => this.deleteRow(course.id, e)}>Delete</Link>
                                    <Link className="edit" to={`/editCourse/${course.id}`}>Edit</Link>
                                 </td>

                           </tr>

                            
                        )
                    }
                </tbody>
            </table>

        </div>
        )
}
        

}

export default CoursesComponent;