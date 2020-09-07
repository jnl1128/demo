import React, { Component } from 'react';
import { Home, Signup, Classroom, Monthly } from 'pages';
import { Route, Switch } from 'react-router-dom';
class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={Signup} />
                <Route path="/classroom" component={Classroom} />
                <Route path="/monthly" component={Monthly} />
            </div>
        );
    };
};
export default App;
