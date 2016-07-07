Config = null;

Assets.getText('/config.json', function (err, res) {
    if (err) Log.error('read config file error');
    else Config = res;
})