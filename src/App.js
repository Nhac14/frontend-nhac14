import React from 'react';
import 'antd/dist/antd.css';
import HeaderX from './pages/layout/HeaderX/HeaderX.js';
import Content from './pages/Home/Content.js';
import Footer from './pages/layout/Footer/Footer.js';
import Register from './pages/Register/Register.js';
import Login from './pages/Login/Login.js';

function App(){
   
      return (
         <div>
            <HeaderX/>
            <Register/>
            <Login/>
            {/* <Content />  */}
            <Footer/>
         </div>
      );
   }

export default App;