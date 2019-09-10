import React, { Component } from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import MovieList from "./MovieList";
import MovieEdit from "./MovieEdit";

class App extends Component {
  state = {
    editMode: false,
    id: undefined
  };

  toEditMode = e => {
    console.log("toEditMode", e.id);
    this.setState({
      editMode: true,
      id: e.id
    });
  };
  
  toListMode = () => {
    console.log("toListMode");
    this.setState({
      editMode: false,
      id: undefined
    });
  };

  // routes() {
  //   return <BrowserRouter>
  //   <Switch>
  //     <Route path = "/movies" exact render = {() => <MovieList movieList = { movieList}/>} ></Route>
  //     <Route path = "/movie/:id" exact render = {() => <MovieEdit movieEdit = { movieEdit}/>} ></Route>
  //     <Redirect to = "/movies"/>
  //     </Switch>
  //     </BrowserRouter>
    
  // }

  render() {
    var component;

    if (this.state.editMode) {
      component = (
        <MovieEdit toListMode={this.toListMode} movieId={this.state.id} />
      );
    } else {
      component = <MovieList toEditMode={this.toEditMode} />;
    }

    return (
      <div className="container">
        <h1>React-Router</h1>
        {component}
      </div>
    );
  }
}

export default App;
