ES = {
    route: function (params) {
        var serviceID = params && params.serviceID;
        serviceID < 1 || serviceID > 3 ? serviceID = 0 : null;
        var route = {
            0: 'errParams',
            1: 'ClientReq',
            2: 'ESResp',
            3: 'ClientLogin'
        }
        return this[route[serviceID]](params && params.payload)
    },
    errParams: function (params) {

        //log

    },
    ClientLogin: function (params) {
        return ClientLogin.route(params)
    },
    ClientReq: function (params) {
        return ClientReq.route(params)
    },
    ESResp: function (params) {
        return ESResp.route(params)
    },
    send: function (msg) {

    },
}