export const app = express();

var VERSIONS = { 'Pre-Production': '/v0', 'Version 1': '/v1' };

app.get('/', function(req, res) {
    res.json(VERSIONS);
})


for (var version in VERSIONS) {
    app.use(VERSIONS[version], require('./routes' + VERSIONS[version]));
}