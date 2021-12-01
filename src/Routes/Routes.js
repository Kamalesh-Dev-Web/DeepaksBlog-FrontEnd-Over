import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../components/Home/Home";
import LandingPage from "../components/LandingPage/LandingPage";
import Website from "../components/website/website";
import SuperUserForm from "../components/SuperUser/Form/Form";
import BlogDetails from "../components/BlogDetails/BlogDetails";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/website" component={Website} />
          <Route path="/blogs" exact component={Home} />
          <Route path="/blogs/:id" exact component={BlogDetails} />
          <Route path="/auth">Hi Auth Page</Route>
          <Route path="/blogs/search" exact component={Home} />
          {/* <Route path="/blogs/:id" exact component={PostDetails} /> */}
          <Route path="/addpost" component={SuperUserForm} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
