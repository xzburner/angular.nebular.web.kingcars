let express = require('express');
let app = express();
app.use(express.static('./dist/angular.app.kingcars'));
app.get('/', function (req, res) {
    res.sendFile('index.html', { root: 'dist/angular.app.kingcars/' });
});
app.listen(process.env.PORT || 3000, function () {
    console.log(
        'Express server listening on port %d in %s mode',
        this.address().port,
        app.settings.env
    );
});
