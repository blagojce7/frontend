import React,{Component} from 'react'
import '../blagojche/style.css'
import CourseService from '../service/CourseService';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import {toast} from 'react-toastify';

toast.configure();

class DelSoTri extends React.Component{

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

    // async handleToken(token){  
    //     const response = await axios.post('/api/payment',{
    //         token
    //     });
    //     const {status } = response.data
    //     if (status === 'success'){
    //         toast('Success! Check your email',
    //         {type: 'success'})
    //     } else{
    //         toast('Something went wrong',
    //         {type: 'error'})
    //     }

    //     // console.log({token,addresses})
    // }

    handleToken(token){
        console.log({token})
    }

    render(){
        return(
            <div>
                

                <div className="infosection">
            <div className="infotext">
                <p className="courses">PACKAGE</p>
                <p className="text">Choose The Course Package <br />That Suits Your Needs</p>
            </div>
        
        <div className="allrows">
            <div className="container">
                <div className="row">
{
                this.state.courses.slice(0,3).map(
                            course => 
                        
                    <div className="col-md-4" key={course.id}>
                            <img src={course.image} alt="" />

                            <div className="allrowsbody">
                <h3 className="title">{course.name}</h3>
                <p>{course.description}</p>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                <div className="media-body">{course.description}</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Easy to learn</div>
                                    </li>
                                </ul>
                <p className="price">Starting at <span>{course.price} $</span></p>
                                <StripeCheckout 
                                    stripeKey="pk_test_51HoyOXJYSPEp87BjKGr02VJq6W5Faoec1cm8UWYH5r34y0vxrpym3oCEBuSVPLUadU6tTIpDh8nVO0Lhwhmjhbey00O4BhZnEG"
                                    token={this.handleToken}
                                    amount={course.price * 100} 
                                    image={course.image}
                                />
                                
                                {/* <div className="button">
                                    <a className="btn-solid-reg page-scroll" href="#Buy">BUY</a>
                                </div> */}
                            </div>
                    </div>
    
                    
                )}
</div>
</div>
</div>

         
    </div>  
    



        
            </div>
        )
    
    
    }
}
export default DelSoTri