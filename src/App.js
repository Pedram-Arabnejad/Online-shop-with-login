import React from 'react';
import { BrowserRouter, Route, Router, Routes, Switch } from 'react-router-dom';
import Login from "../src/pages/auth/Login";
import Signin from './pages/auth/Signin';


function App() {
  return (
    // <Router>
    // <Routes>
    //   <Route exact path="/Login" element={<Login/>}/>
    //   <Route path="/Sigbin" element={<Signin/>}/>
    // </Routes>
    // </Router>

    // <Router>
    //   <div>
    //     <Switch>
    //       <Route exact path="/" component={Login} />
    //       {/* <Route path="/register" component={Signin} /> */}
    //     </Switch>
    //   </div>
    // </Router>


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
          <Route path="signin" element={<Signin />} />
        
      </Routes>
    </BrowserRouter>


    // <Signin/>
  );
}

export default App;
