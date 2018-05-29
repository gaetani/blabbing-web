import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './containers/App';
import ThreadPage from './containers/ThreadPage';
import TopicPage from './containers/TopicPage';
import MessagesPage from './containers/MessagesPage';

const Routes = () => (
    <div>
        <App/>
        <main>
            <Switch>
                <Route exact path="/" component={TopicPage}/>  
                <Route path="/thread/:threadId/messages" component={MessagesPage}/>  
                <Route path="/thread/:threadId" component={ThreadPage}/>  
            </Switch>
        </main>
    </div>
);

export default Routes;