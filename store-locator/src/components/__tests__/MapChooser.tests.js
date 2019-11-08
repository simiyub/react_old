import MapChooser from '../../MapChooser'


describe("MapChooser", function(){
it("returns image file name based on input given to it", function(){
let expected = 'portland.png';
let actual = MapChooser("portland");
expect(actual).toEqual(expected);
})
it("returns image file name based on input given to it", function(){
    let expected = 'none.png';
    let actual = MapChooser();
    expect(actual).toEqual(expected);
    })

})
