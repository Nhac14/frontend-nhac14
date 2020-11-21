import React from 'react';
import 'antd/dist/antd.css';
import HeaderX from './pages/layout/HeaderX/HeaderX.js';
import Content from './pages/Home/Content.js';
import FooterX from './pages/layout/Footer/FooterX.js';
import UserProfile from './pages/userProfile/UserProfile/UserProfile.js';


function App(){
   
      return (
         <div>
            <HeaderX/>
            {/* <UserProfile/> */}
           
            {/* <Content />  */}
            <FooterX/>
         </div>
      );
   }

export default App;