import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../pages/admin/Dashboard";
import AddBlog from "../pages/admin/update/AddBlog";
import EditBlog from "../pages/admin/update/EditBlog";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Container>
    <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/blogs" component={Blogs}></Route>
        <Route path="/admin" component={Dashboard}></Route>
        <Route path="/add" component={AddBlog}></Route>
        <Route path="/edit/:id" component={EditBlog}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </Container>
    </BrowserRouter>
  );
};

export default App;
