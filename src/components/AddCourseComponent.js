    import Axios from 'axios';
    import React, { Component, useState } from 'react';
    import {Link} from 'react-router-dom';
    import axios from 'axios';
    import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
    import '../blagojche/pages/addcoursecss.css'
  
    import {
        Form,
        FormGroup,
        Label,
        Input,
        Button
    }
    from 'reactstrap';
    import Dropdown from './Dropdown';
    import '../blagojche/pages/addcoursecss.css'



    class AddCourseComponent extends React.Component{

       
        state = {
            categories : [],
            instructors : []
        }

        componentDidMount(){
            axios.get('/api/category')
            .then(res => {
                
                this.setState({ categories : res.data});
            });

            axios.get('/api/instructor')
            .then(res => {    
                this.setState({ instructors : res.data});
            });
        }

    addCourse(newCourse){
       var kategoriii = this.refs.kategorija.value;
       var instruktoriii = this.refs.instruktorite.value;

        axios.request({
            method : 'POST',
            url :'/api/courses/' +kategoriii + '/' + instruktoriii,
            data : newCourse
        }).then(response => {
            this.props.history.push('/courses');
        }).catch(err => console.log(err));
    }


    onSubmit(e){
        const newCourse = {
            name : this.refs.name.value,
            image : this.refs.image.value,
            description : this.refs.description.value,
            price : this.refs.price.value
            
        }
        console.log(newCourse);
        this.addCourse(newCourse);
        e.preventDefault();
    };


    
        render(){
        return (


        <div>
            <div class="container">
             <div class="row">
            <div class="col-md-5" id="slikataKajADD">
                    {/* <img src="../blagojche/images/homebackground.jpg" alt="" /> */}
            </div>


            <div class="col-md-7">
                    <h4>Add Course</h4>
                    <div class="input">


            <form onSubmit={this.onSubmit.bind(this)}>

                

                <div className="input-field">
                    <label htmlFor="description"  id="element">description</label>
                    <input type="text" name="description" id="inputs" ref="description"/>
                    
                </div>
                <div className="input-field">
                    <label htmlFor="image" id="element">image</label>
                    <input type="text" name="image" id="inputs" ref="image"/>
                    
                </div>
                <div className="input-field">
                    <label htmlFor="price" id="element">price</label>
                    <input type="number" name="price" id="inputs" ref="price"/>
                    
                </div>
                <div className="input-field">
                    <label htmlFor="name" id="element">Name</label>
                    <input type="text" name="name" id="inputs" ref="name"/>
                    
                </div>
                

                {/* <div className="container p-1"> */}
                    <select className="browser-default custom-select" ref="kategorija">
                        {this.state.categories.map(category =>
                            <option key={category.id} value={category.id}>
                                {category.name} 
                            </option>)}
                    </select>
                {/* </div> */}


                <div className="container p-1">
                    <select className="browser-default custom-select" ref="instruktorite" >
                    {this.state.instructors.map(instructor => 
                        <option key={instructor.id} value={instructor.id}>
                            {instructor.email} 
                        </option>)}
                </select>
                </div>

                

                <input type="submit" value="Save" id="buttonsave"/>
            </form>
            </div>
            </div>

                        </div>
            </div>
        </div>




           
        )
        }
    }



    export default AddCourseComponent;
