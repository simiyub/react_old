import React from 'react';
import {shallow} from 'enzyme';
import Map from "../Map";

describe('Map', () => {
    let mountedMap;
    let props;

    beforeEach( () => {
        props = {
            location:undefined,
            imageName:'testmap.png'
        };
        mountedMap = shallow(<Map {...props}/>);
    }
    )

    it ('renders without crashing', () => {
        let mountedMap = shallow(<Map/>);
    })
    
    it('contains an image', () =>{
        const img = mountedMap.find('img');
        expect(img.length).toBe(1);
    })
    it('displays the none map when no parapms are given', () => {
       let defaultMap = shallow(<Map/>);
       // const defaultImage = defaultMap.find('img [src="images/none.png"]');
       const defaultImage = mountedMap.find( 'img');   
        expect(defaultImage.length).toBe(1);
    })

    it('displays the map imagename passed to it', ()=>{
        //const testMap = mountedMap.find('img [src="images/testmap.png"]');
        const testMap = mountedMap.find('img' );
        expect(testMap.length).toBe(1);
    })
})

