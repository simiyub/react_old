//Overiding the axios file.  Jest will use this one rather than that in the node_modules
const axiosMock = jest.genMockFromModule('axios');

//mock respose should be
//All properties and values in "" not '' as we are using json
let mockResponse = {
    data: { "shops":
    [
        {
            "location"  : "test location",
            "address"   : "test address"
        }
    ]

    }
};

axiosMock.get.mockImplementation(req);

function req(){
    return new Promise(function(resolve){
        axiosMock.delayTimer = setTimeout(function(){
            resolve(mockResponse);
        }, 5000);
    })
}

module.exports = axiosMock;