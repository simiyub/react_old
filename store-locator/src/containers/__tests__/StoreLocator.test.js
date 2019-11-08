import React from 'react';
import {shallow} from 'enzyme';
import StoreLocator from '../Storelocator';
import axios, {mockAxios} from 'axios';
import renderer from 'react-test-renderer';
describe("StoreLocator", () =>{

    let mountedStoreLocator;
    beforeEach( () =>{
        mountedStoreLocator = shallow(<StoreLocator/>);
    }
    )

    it("renders correctly", ()=>{
        const tree = renderer.create(<StoreLocator/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('calls axios.get in #componentDidMount', ()=>{
        //wait for componentDidMOunt mock before our test
        return mountedStoreLocator.instance().componentDidMount().then(()=>{
            expect(axios.get).toHaveBeenCalled();
        });
    })

    it('calls axios with correct url', ()=>{
        return mountedStoreLocator.instance().componentDidMount().then(()=>{
            expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:3000/data/shops.json');
        })
    })

    it('updates the state with data from the api', ()=>{
        return mountedStoreLocator.instance().componentDidMount().then(()=>{
            expect(mountedStoreLocator.state()).toHaveProperty("shops", 
            [
                {
                    "location"  : "test location",
                    "address"   : "test address"
                }
            ]);
        })

    })

    it('renders without crashing', () =>{
        let mountedStoreLocator = shallow(<StoreLocator/>) ;
    });

    it('renders a header', () =>{
        const headers = mountedStoreLocator.find('Header');
        expect(headers.length).toBe(1);
    })

    it ('renders two buttons', () => {
        const buttons = mountedStoreLocator.find('Button');
        expect(buttons.length).toBe(3);
    })

    it('renders a map', () =>{
        const maps = mountedStoreLocator.find('Map');
        expect(maps.length).toBe(1);
    })
})

describe("chooseMap", ()=>{
    it('updates this.state.currentMap', ()=>{
        let mountedStoreLocator = shallow(<StoreLocator/>);
        let mockEvent = {target:{value:'testland'}};
        mountedStoreLocator.instance().chooseMap(mockEvent);
        expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png');
    })
})
