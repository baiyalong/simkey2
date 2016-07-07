var api = new Restivus({
    apiPath: '/',
    prettyJson: true
});


api.addRoute('/EdgeServerData', {
    post: function () {
        var params = this.bodyParams;
        //log

        return ES.route(params);
    }
})