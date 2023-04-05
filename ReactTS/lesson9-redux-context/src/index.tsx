import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import configureStore from "./myredux/store/configureStore";
import { addBlog } from "./myredux/actions/blogaction";
import App from "./routers/App";
import { Provider } from "react-redux";
import "./style.css";
const mystore: any = configureStore();

mystore.dispatch(
  addBlog({
    img: "https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage.jpg",
    title: "redux js",
    desc: "redux is funny",
  })
);
mystore.dispatch(
  addBlog({
    img: "https://reactjs.org/logo-og.png",
    title: "react js",
    desc: "redux is funny",
  })
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={mystore}>
        <App />
    </Provider>
  </React.StrictMode>
);
