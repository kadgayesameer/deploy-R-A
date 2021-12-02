import React, { Component }  from "react";
import { Route, Redirect } from "react-router-dom";
import AuthenticationService from '../../Services/authService/AuthenticationService'
// const ProtectedRoute = ({ children, ...rest }) => {
//   console.log("children ====>>>  ", children);
//   console.log("rest ====>>>  ", rest);
//   return (
//     <Route {...rest} render={({ location }) => localStorage.getItem("token") ? (children) : (
//           <Redirect to={{pathname: "/login", state: { from: location } }}/>
//         )}
//     />
//   );
// };
// export default ProtectedRoute;


class ProtectedRoute extends Component {    
  render() {
      if(AuthenticationService.isUserLoggedIn()) {
        console.log("ProtectedRoute props ==============>>>>> ",{...this.props})
          return <Route {...this.props}/>
      } else {
          return <Redirect to="/login"/>
      }

  }
}

export default ProtectedRoute



// const ProtectedRoute = ({ children, ...rest }) => {
//   console.log("children ====>>>  ", children);
//   console.log("rest ====>>>  ", rest);
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         localStorage.getItem("token") ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// };
// export default ProtectedRoute;