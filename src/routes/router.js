import React from 'react'
import { BrowserRouter , Route, Switch, Redirect  } from 'react-router-dom'
// import App from './../App'
import LoginForm from './../pages/login/index'
import Admin from './../admin/admin';
import NoMatch from './../pages/nomatch';
import Base from './../pages/base';
import Home from './../pages/home';
import Leaflet from './../pages/leaflet'
import BaseDetails from './../pages/baseDetails';
import Users from './../pages/users';
import ApplyCheck from './../pages/applyCheck';

// import AppInit from './init'

export default class AppRouter extends React.Component{

    baseDataHook = (baseData)=>{
        this.setState({
            baseData
        })
    }

    componentWillMount(){
        
    }

    render(){
        return (
            <BrowserRouter >
                    <Switch>
                        {/* <Route exact path="/" component={LoginForm}/>  */}
                        <Route path="/login" component={ LoginForm } />
                        <Route path="/admin" render={(props)=>
                            <Admin router={ props }>
                                <Switch>
                                    <Route exact path="/admin" component={ Home } />
                                    <Route path="/admin/home"  component={ Home } />
                                    {/* <Route path="/admin/base" component={ Base } /> */}

                                    <Route path="/admin/base" render={()=>
                                        <Switch>
                                            {/* <Route baseDataHook={ this.baseDataHook } exact path="/admin/base" component={ Base } /> */}
                                            <Route  exact path="/admin/base" render={()=>
                                                    <Base baseDataHook={ this.baseDataHook }></Base>
                                            } />
                                            <Route path="/admin/base/baseDetails" render={props=>  //该方式通过传递props使得BaseDetails可以获得他的父元素Route的props，包括history,location,match
                                                <BaseDetails feild={props}></BaseDetails>
                                            } />
                                        </Switch>
                                    } />

                                    <Route path="/admin/apply_check" component={ ApplyCheck } />
                                    <Route path="/admin/users" component={ Users } />
                                    <Route path="/admin/leaflet" component={ Leaflet } />
                                    <Route component={ NoMatch }></Route>
                                </Switch>
                            </Admin>
                        } />
                        <Redirect to="/login"/>
                    </Switch>
            </BrowserRouter >
        );
    }
}