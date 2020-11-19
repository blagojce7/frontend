import Axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
}
from 'reactstrap';

import '../blagojche/pages/addcoursecss.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';




class EditCourseComponent extends React.Component{
constructor(props){
    super(props);
    this.state={
        id:'',
        description : '',
        image : '',
        price : '',
        name : ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
}

    componentWillMount(){
        this.getCourseDetails();
    }

    getCourseDetails(){
    let courseId = this.props.match.params.id;
    console.log(courseId);
    axios.get(`/api/courses/${courseId}`)
    .then(response => {
        this.setState({
            id : response.data.id,
            description : response.data.description,
            image : response.data.image,
            price : response.data.price,
            name : response.data.name
        }, () => {
            console.log(this.state);
        });
    }).catch(err => console.log(err));
}
editCourse(newCourse){
    axios.request({
        method : 'PUT',
        url :`/api/courses/${this.state.id}`,
        data : newCourse
    }).then(response => {
        this.props.history.push('/courses');
    }).catch(err => console.log(err));
}

onSubmit(e){
    const newCourse = {
        id : this.refs.id,
        name : this.refs.name.value,
        image : this.refs.image.value,
        description : this.refs.description.value,
        price : this.refs.price.value
    }
    this.editCourse(newCourse);
    e.preventDefault();
}
handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name] : value
    });
}



    render(){
    return (

        <div>
            <div class="container">
             <div class="row">
            <div class="col-md-5" id="slikataKajADD">
                   
            </div>


            <div class="col-md-7">
                    <h4>Edit Course</h4>
                    <div class="input">

        <form onSubmit={this.onSubmit.bind(this)}>
            

            <div className="input-field">
                    <label htmlFor="description"  id="element">description</label>
                    <input type="text" name="description" id="inputs" ref="description"value={this.state.description}
                onChange={this.handleInputChange}/>
                    
                </div>

            <div className="input-field">
                    <label htmlFor="image" id="element">image</label>
                    <input type="text" name="image" id="inputs" ref="image"value={this.state.image}
                onChange={this.handleInputChange}/>
                    
                </div>

            

            <div className="input-field">
                    <label htmlFor="price" id="element">price</label>
                    <input type="number" name="price" id="inputs" ref="price"value={this.state.price}
                onChange={this.handleInputChange}/>
                    
                </div>

            

            <div className="input-field">
                    <label htmlFor="name" id="element">Name</label>
                    <input type="text" name="name" id="inputs" ref="name"value={this.state.name} 
                onChange={this.handleInputChange} />
                    
                </div>
                <input type="submit" value="Save" id="buttonsave"/>
        </form>

        </div>
            </div>

                        </div>
            </div>
        </div>


        // <Form>
        //     <FormGroup>
        //         <Label>Name</Label>
        //         <Input type="text" placeholder="Enter Name" ></Input>
        //     </FormGroup>
        //     <Button type="submit" className="btn btn-warning">Submit</Button>
        //     <Link to="/courses" className="btn btn-danger ml-2">Cancel</Link>
        // </Form>
    )
    }
}



export default EditCourseComponent;
