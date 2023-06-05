import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import APP from "./App";
//import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <APP />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

// export { App };

// const container = document.getElementById("root");

// // Create a root.
// const root = ReactDOM.createRoot(container);

// // Render the app.
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

// import React from "react";
// import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// // // ReactDOM.createRoot(document.getElementById("root")).render(
// //     <React.StrictMode>
// //         <App />
// //     </React.StrictMode>
// // );

// // const container = document.getElementById("app");
// // const root = createRoot(container); // createRoot(container!) if you use TypeScript
// // root.render(<App tab="home"/>);

// // // ReactDOM.render(
// // //   <React.StrictMode>
// // //     <App />
// // //   </React.StrictMode>
// // // );

// // // import React from "react";
// // // import ReactDOM from "react-dom/client";
// // // import App from "./App";
// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
//  );
