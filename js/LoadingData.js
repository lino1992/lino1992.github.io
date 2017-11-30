function load_json(callback, fileName) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', fileName, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
var game_information = [];
var action_game = [];
var adventure_game = [];
var racing_game = [];
var fighting_game = [];
var shooter_game = [];

function init(){
    load_json(function(response){
        var actual_Json = JSON.parse(response)
        game_information = actual_Json;
    }, 'Data_General/Game_information.json')
    load_json(function (response) {
        var actual_Json = JSON.parse(response)
        action_game = actual_Json;
    }, 'Action/Action_franchise.json')
    load_json(function (response) {
        var actual_Json = JSON.parse(response)
        adventure_game = actual_Json;
    }, 'Adventure/Adventure_franchise.json')
    load_json(function (response) {
        var actual_Json = JSON.parse(response)
        shooter_game = actual_Json;
    }, 'Shooter/Shooter_franchise.json')
    load_json(function (response) {
        var actual_Json = JSON.parse(response)
        racing_game = actual_Json;
    }, 'Racing/Racing_franchise.json')
    load_json(function (response) {
        var actual_Json = JSON.parse(response)
        fighting_game = actual_Json;
    }, 'Fighting/Fighting_franchise.json')
}

init();




