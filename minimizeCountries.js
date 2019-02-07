var fs = require('fs');

require.extensions['.json'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};
visited = JSON.parse(require('./visited.json'));

countries = require('./countries_full.json');

countries = JSON.parse(countries);

countries.features = countries.features.filter(function (item) {
    return visited.visited.includes(item.properties.sovereignt)
});

fs.writeFile("./countries.json", JSON.stringify(countries) , function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});


