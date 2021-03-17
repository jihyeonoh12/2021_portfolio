import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import PostProteinPlus from './pages/PostProteinPlus'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={window.location.pathname || ''}>
      <div>
          <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/about" component={About}/>
           <Route path="/digital-design" component={About}/>
           <Route path="/print-design" component={About}/>
           <Route path="/coding" component={About}/>

           <Route path="/post-protein-plus" component={PostProteinPlus}/>
          <Route component={Error}/>
         </Switch>
      </div> 
    </BrowserRouter>

  )
 }
}

export default App;
