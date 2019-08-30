/**Esse arquivo serve para definir rotas */

import React from 'react'; /**O react foi importado porque será trabalhado com JSX */
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { switchCase } from '@babel/types';
import { isAuthenticated } from './auth';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to = ({ pathname: '/', state: {from: props.location}})/>
        )
        )} />
);

/**Stateless Functional Component é um arrow function. Ele é muito utilizado quando não há complexidade, ele só renderiza. */
const Routes = () => (
    <BrowserRouter>
        <Switch> {/**O switch faz com que ele abra somente a primeira rota que ele encontrar */}
            <Route exact path="/" component={() => <h1>Hello World</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;