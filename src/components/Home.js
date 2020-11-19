import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import DelSoTri from './DelSoTri'
import '../blagojche/style.css'
import axios from 'axios';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';


class Home extends React.Component{

    
    render(){
        return(

                <div>
                    

                    <div className="home">
                        <div className="nav-menu">
                            <ul>
                                <li><a href="/">HOME</a></li>
                                <li><Link to="/courses">LIST COURSES</Link></li>
                                <li><a href="#">CONTACT</a></li>
                                <li><a href="#">LOGIN</a></li>
                                <li><a href="#">REGISTER</a></li>
                            </ul>
                        </div>

                    <div className="hometext">
                    <div className="courses">
                        <h1>COURSES</h1>
                    </div>

                    <div className="homedescription">
                        <p>The best courses and best teachers in one place</p>
                    </div>

                    <div className="homebutton">
                        <a href="#">More Info</a>
                    </div>
                </div>
        </div>

            <DelSoTri />

            <div class="footer">
        <div>
            <p>ФИНКИ - СКОПЈЕ</p>
            <p>Благојче Китановски</p>
        </div>
    </div>
    </div>
    


        )
    }
}
export default Home