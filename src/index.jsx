// Application entrypoint.


// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
// import { CookiesProvider} from 'react-cookie';


// ReactDOM.render(<Root/>, document.getElementById('react-root'));
ReactDOM.render(<App/>, document.getElementById('react-root'));


// function Root() {
//   return (
//     <CookiesProvider>
//       <App />
//     </CookiesProvider>
//   );
// }
