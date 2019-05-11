import reducer from './reducer';
import createStore from 'antd/lib/table/createStore';

const store  = createStore(reducer);

export default store;