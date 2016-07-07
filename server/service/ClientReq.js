ClientReq = {
    route: function (params) {
        var interfaceID = params && params.data && params.data.interfaceID;
        interfaceID < 101 || interfaceID > 115 ? interfaceID = 100 : null;
        var route = {
            0: 'errParams',
            101: '',
            102: '',
            103: '',
            104: '',
            105: '',
            106: '',
            107: '',
            108: '',
            109: '',
            110: '',
            111: '',
            112: '',
            113: '',
            114: '',
            115: '',
        }
        return this[route[interfaceID]](params)
    },
    errParams: function (params) {

    },
}