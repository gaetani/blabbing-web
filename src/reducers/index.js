import {combineReducers} from 'redux';
import thread from './thread';
import topic from './topic';
import message from './message';
import breadcrumb from './breadcrumb';

const rootReducer = combineReducers({
    thread,
    topic,
    message,
    breadcrumb
})

export default rootReducer;
