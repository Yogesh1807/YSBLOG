import React, { Component } from 'react'; 
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/layout/Navbar'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Footer from './Components/layout/Footer'; 
import Home from './Components/layout/Home'; 
import Blog from './Components/layout/Blog'; 

class App extends Component 
{
  constructor(props) 
  { 
    super(props); this.state = {}    
    this.connecToServer = this.connecToServer.bind(this); 
  }

  connecToServer() { fetch('/'); }

  componentDidMount() 
  { 
    this.connecToServer(); 
  }
  render() 
  { 
    return (
    <Router>
        <div className="container-fluid landing">
        <Navbar />
          <Route exact path="/" component={Home} />         
          <Route exact path="/Blog" component={Blog} />         
        <Footer /> 
      </div>      
    </Router>); }
}
export default App;