import React from 'react'
import {Link} from 'react-router-dom'
import{
    ListGroup,
    ListGroupItem,
    Button
}from 'reactstrap'


export const CourseList = () => {
    return (
        <ListGroup className="mt-4">
            <ListGroupItem className="d-flex"> 
                <strong> Course one</strong>
            <div className="ml-auto">
                <Link to="/editCourse/1" className="btn btn-warning mr-1">Edit</Link>
                <Button color="danger" >Delete</Button>
            </div>
            </ListGroupItem>
        </ListGroup>
    )
}
