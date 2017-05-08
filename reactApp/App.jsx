import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header />
            <Content />
            <Managerscreen />
            <Adminscreen />
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
           <div className="logo-sec">
             logo
           </div> 
          <div className="login-sec">
             login
           </div> 
         </div>
      );
   }
}


class Content extends React.Component {
   render() {
      return (
         <div>
           <div className="content-sec">
             content section
           </div> 
         </div>
      );
   }
}



class Managerscreen extends React.Component {
   render() {
      return (
         <div>
           <div className="content-sec">
             Manger screen
           </div> 
         </div>
      );
   }
}




class Adminscreen extends React.Component {
   render() {
      return (
         <div>
           <div className="content-sec">
             Manger screen
           </div> 
         </div>
      );
   }
}

export default App;