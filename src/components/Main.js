import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Customers from "./Customers";
import Trainings from "./Trainings";
import CalendarComponent from "./Calendar";
import Chart from "./Charts";
import BarChart from "./Charts";
import TrainingDurationChart from "./Charts";


const Main  = () => (
    <Switch>
        <Route exact path="/" component={Customers}/>
        <Route path="/customers" component={Customers}/>
        <Route path="/trainings" component={Trainings}/>
        <Route path="/calendar" component={CalendarComponent}/>
        <Route path="/chart" component={TrainingDurationChart}/>
    </Switch>
);

export default Main;
