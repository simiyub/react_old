import React from 'react';
import Enzyme, {shallow, configure} from 'enzyme';
import index from '../index';
//import fquare from '../index';
import { isMainThread } from 'worker_threads';

describe ( "index", ()=>{
    it('renders without crashing',()=>{
        let mountedIndex = shallow(<index/>);
    })

}

)