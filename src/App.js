import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import CoursesComponent from './components/CoursesComponent';
import EditCourseComponent from './components/EditCourseComponent';
import AddCourseComponent from './components/AddCourseComponent';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div >
      <Router>
        
        <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/courses" component={ CoursesComponent} />
            <Route path="/addCourse" component={ AddCourseComponent} />
            <Route path="/editCourse/:id" component={EditCourseComponent} />
   
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
