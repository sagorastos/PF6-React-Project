import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from './views/Dashboard';
import Courses from './views/Courses';
import Course from './views/Course';
import AddCourse from './views/AddCourse';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/"><Dashboard /></Route>
        <Route exact path="/courses"><Courses /></Route>
        <Route exact path="/courses/:id"><Course /></Route>
        <Route exact path="/add-course"><AddCourse /></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
