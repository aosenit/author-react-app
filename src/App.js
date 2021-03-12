import Footer from "./Footer"
import Header from "./Header";
import Main from './Main'
import Portfolio from './Portfolio';
import Home from './Home';
import notFound from './notFound';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Layout from "./Layout";
function App() {

  return (
  
     <Router>
       <div className="container">

      <Layout>
        
        <Switch>
                          <Route exact path='/' component={Home}/>
                          <Route exact path='/Portfolio' component={Portfolio}/>
                          <Route exact path='/Services' component={Services}/>
                          <Route exact path='/Testimonial' component={Testimonial}/>
                          <Route exact path='*' component={notFound}/>
        </Switch>                       
      </Layout>
      </div>
     
    </Router>
  );
}


export default App;
