import React from 'react'
import Popular from './popular'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import {Nav} from './nav.js'
import Home from './Home'
import Battle from './Battle'
import Results from './Results'

class App extends React.Component {
   render() {
     return(
       <Router>
         <div className='container'>
           <Nav />
           <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/battle' component={Battle}/>
             <Route path='/battle/results' component={Results}/>
             <Route path='/popular' component={Popular} />
             <Route render={() => <p> Page Not Found </p>} />
           </Switch>
         </div>
       </Router>
     )
   }
}

export default App;
