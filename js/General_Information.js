var Action_game_general_score = []
var Adventure_game_general_score = []
var Racing_game_general_score = []
var Shooter_game_general_score = []
var Fighting_game_general_score =[]

var Action_game_general_sale = []
var Adventure_game_general_sale = []
var Racing_game_general_sale = []
var Shooter_game_general_sale = []
var Fighting_game_general_sale =[]

var label = ['1996','1997', '1998', '1999', '2000','2001','2002','2003','2004','2005',
            '2006','2007', '2008', '2009', '2010','2011','2012','2013','2014','2015',
            '2016']
for (var key in game_information){
    if(game_information.hasOwnProperty(key)){
        switch (game_information[key].genre){
            case 'Action':
                Action_game_general_score.push(game_information[key].score)
                Action_game_general_sale.push(game_information[key].Global_Sales / 10)
                break;
            case 'Adventure':
                Adventure_game_general_score.push(game_information[key].score)
                Adventure_game_general_sale.push(game_information[key].Global_Sales /10)
                break;
            case 'Racing':
                Racing_game_general_score.push(game_information[key].score)
                Racing_game_general_sale.push(game_information[key].Global_Sales / 10)
                break;
            case 'Fighting':
                Fighting_game_general_score.push(game_information[key].score)
                Fighting_game_general_sale.push(game_information[key].Global_Sales/ 10)
                break;
            case 'Shooter':
                Shooter_game_general_score.push(game_information[key].score)
                Shooter_game_general_sale.push(game_information[key].Global_Sales /10 )
                break;
        }

    }
}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: label,
        datasets: [{
            label: 'Action-Sale',
            type: 'line',
            data: Action_game_general_sale,
            borderColor: "#8C1212",
            fill: false
        }, {
            label: 'Adventure-Sale',
            type: 'line',
            data: Adventure_game_general_sale,
            borderColor: "#3E7506",
            fill: false
        },{
            label: 'Racing-Sale',
            type: 'line',
            borderColor: "#088787",
            data: Racing_game_general_sale,
            fill: false
        },{
            label: 'Fighting-Sale',
            type: 'line',
            borderColor: "#460B80",
            data: Fighting_game_general_sale,
            fill: false
        },{
            label: 'Shooter-Sale',
            type: 'line',
            borderColor: "#806409",
            data: Shooter_game_general_sale,
            fill: false
        },{
            label: 'Action-Score',
            type: 'bar',
            data: Action_game_general_score,
            backgroundColor: "#FF0000"
        }, {
            label: 'Adventure-Score',
            type: 'bar',
            data: Adventure_game_general_score,
            backgroundColor: "#80FF00"
        },{
            label: 'Racing-Score',
            type: 'bar',
            data: Racing_game_general_score,
            backgroundColor: "#00FFFF"
        },{
            label: 'Fighting-Score',
            type: 'bar',
            data: Fighting_game_general_score,
            backgroundColor: "#8000FF"
        },{
            label: 'Shooter-Score',
            type: 'bar',
            data: Shooter_game_general_score,
            backgroundColor: "#FFC400"
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Bar chart present an average score of games. ' +
                ' Line chart present sale in 10 milions'
        },
        legend: {
            display: true,
            position: 'left'
        }
    }
});

function game_score_click(){
    myChart.getDatasetMeta(0).hidden=true;
    myChart.getDatasetMeta(1).hidden=true;
    myChart.getDatasetMeta(2).hidden=true;
    myChart.getDatasetMeta(3).hidden=true;
    myChart.getDatasetMeta(4).hidden=true;
    myChart.getDatasetMeta(5).hidden=false;
    myChart.getDatasetMeta(6).hidden=false;
    myChart.getDatasetMeta(7).hidden=false;
    myChart.getDatasetMeta(8).hidden=false;
    myChart.getDatasetMeta(9).hidden=false;
    myChart.update();
    displayText(1);
    displayButton(2);

}

function game_sale_click(){
    myChart.getDatasetMeta(0).hidden=false;
    myChart.getDatasetMeta(1).hidden=false;
    myChart.getDatasetMeta(2).hidden=false;
    myChart.getDatasetMeta(3).hidden=false;
    myChart.getDatasetMeta(4).hidden=false;
    myChart.getDatasetMeta(5).hidden=true;
    myChart.getDatasetMeta(6).hidden=true;
    myChart.getDatasetMeta(7).hidden=true;
    myChart.getDatasetMeta(8).hidden=true;
    myChart.getDatasetMeta(9).hidden=true;
    myChart.update();
    displayText(2);
    displayButton(3);
}

function action_click(){
    myChart.getDatasetMeta(0).hidden=false;
    myChart.getDatasetMeta(1).hidden=true;
    myChart.getDatasetMeta(2).hidden=true;
    myChart.getDatasetMeta(3).hidden=true;
    myChart.getDatasetMeta(4).hidden=true;
    myChart.getDatasetMeta(5).hidden=false;
    myChart.getDatasetMeta(6).hidden=true;
    myChart.getDatasetMeta(7).hidden=true;
    myChart.getDatasetMeta(8).hidden=true;
    myChart.getDatasetMeta(9).hidden=true;
    myChart.update();
    displayText(3);
    displayButton(4);
    displayConclusion(1);
}

function adventure_click(){
    myChart.getDatasetMeta(0).hidden=true;
    myChart.getDatasetMeta(1).hidden=false;
    myChart.getDatasetMeta(2).hidden=true;
    myChart.getDatasetMeta(3).hidden=true;
    myChart.getDatasetMeta(4).hidden=true;
    myChart.getDatasetMeta(5).hidden=true;
    myChart.getDatasetMeta(6).hidden=false;
    myChart.getDatasetMeta(7).hidden=true;
    myChart.getDatasetMeta(8).hidden=true;
    myChart.getDatasetMeta(9).hidden=true;
    myChart.update();
    displayText(4);
    displayButton(5);
    displayConclusion(2);
}
function racing_click(){
    myChart.getDatasetMeta(0).hidden=true;
    myChart.getDatasetMeta(1).hidden=true;
    myChart.getDatasetMeta(2).hidden=false;
    myChart.getDatasetMeta(3).hidden=true;
    myChart.getDatasetMeta(4).hidden=true;
    myChart.getDatasetMeta(5).hidden=true;
    myChart.getDatasetMeta(6).hidden=true;
    myChart.getDatasetMeta(7).hidden=false;
    myChart.getDatasetMeta(8).hidden=true;
    myChart.getDatasetMeta(9).hidden=true;
    myChart.update();
    displayText(5);
    displayButton(6);
    displayConclusion(3);
}

function shooter_click(){
    myChart.getDatasetMeta(0).hidden=true;
    myChart.getDatasetMeta(1).hidden=true;
    myChart.getDatasetMeta(2).hidden=true;
    myChart.getDatasetMeta(3).hidden=true;
    myChart.getDatasetMeta(4).hidden=false;
    myChart.getDatasetMeta(5).hidden=true;
    myChart.getDatasetMeta(6).hidden=true;
    myChart.getDatasetMeta(7).hidden=true;
    myChart.getDatasetMeta(8).hidden=true;
    myChart.getDatasetMeta(9).hidden=false;
    myChart.update();
    displayText(6);
    displayButton(7);
    displayConclusion(4);
}
function fighting_click(){
    myChart.getDatasetMeta(0).hidden=true;
    myChart.getDatasetMeta(1).hidden=true;
    myChart.getDatasetMeta(2).hidden=true;
    myChart.getDatasetMeta(3).hidden=false;
    myChart.getDatasetMeta(4).hidden=true;
    myChart.getDatasetMeta(5).hidden=true;
    myChart.getDatasetMeta(6).hidden=true;
    myChart.getDatasetMeta(7).hidden=true;
    myChart.getDatasetMeta(8).hidden=false;
    myChart.getDatasetMeta(9).hidden=true;
    myChart.update();
    displayText(7);
    displayButton(8);
    displayConclusion(5);
}
function end_click(){
    document.getElementById('general_div').style.display = 'none';
    document.getElementById('franchise_div').style.display = 'none';
    document.getElementById('end_div').style.display = 'inline';
}
function displayText(number){
    document.getElementById('general_information').style.display = 'none';
    document.getElementById('game_score').style.display = 'none';
    document.getElementById('sale_number').style.display = 'none';
    document.getElementById('action_general').style.display = 'none';
    document.getElementById('adventure_general').style.display = 'none';
    document.getElementById('fighting_general').style.display = 'none';
    document.getElementById('racing_general').style.display = 'none';
    document.getElementById('shooter_general').style.display = 'none';
    switch (number){
        case 1:
            document.getElementById('game_score').style.display = 'inline';
            break;
        case 2:
            document.getElementById('sale_number').style.display = 'inline';
            break;
        case 3:
            document.getElementById('action_general').style.display = 'inline';
            break;
        case 4:
            document.getElementById('adventure_general').style.display = 'inline';
            break;
        case 5:
            document.getElementById('racing_general').style.display = 'inline';
            break;
        case 6:
            document.getElementById('shooter_general').style.display = 'inline';
            break;
        case 7:
            document.getElementById('fighting_general').style.display = 'inline';
            break;
    }
}
function displayButton(number){
    document.getElementById('button_game_score').style.display = 'none';
    document.getElementById('button_game_sale').style.display = 'none';
    document.getElementById('button_action').style.display = 'none';
    document.getElementById('button_adventure').style.display = 'none';
    document.getElementById('button_racing').style.display = 'none';
    document.getElementById('button_shooter').style.display = 'none';
    document.getElementById('button_fighting').style.display = 'none';
    document.getElementById('button_end').style.display = 'none';
    switch (number){
        case 1:
            document.getElementById('button_game_score').style.display = 'inline';
            break;
        case 2:
            document.getElementById('button_game_sale').style.display = 'inline';
            break;
        case 3:
            document.getElementById('button_action').style.display = 'inline';
            break;
        case 4:
            document.getElementById('button_adventure').style.display = 'inline';
            break;
        case 5:
            document.getElementById('button_racing').style.display = 'inline';
            break;
        case 6:
            document.getElementById('button_shooter').style.display = 'inline';
            break;
        case 7:
            document.getElementById('button_fighting').style.display = 'inline';
            break;
        case 8:
            document.getElementById('button_end').style.display = 'inline';
            break;
    }
}

function displayConclusion(number){
    document.getElementById('action_conlusion').style.display = 'none';
    document.getElementById('adventure_conlusion').style.display = 'none';
    document.getElementById('racing_conlusion').style.display = 'none';
    document.getElementById('shooter_conlusion').style.display = 'none';
    document.getElementById('fighting_conlusion').style.display = 'none';
    switch (number){
        case 1:
            document.getElementById('action_conlusion').style.display = 'inline';
            break;
        case 2:
            document.getElementById('adventure_conlusion').style.display = 'inline';
            break;
        case 3:
            document.getElementById('racing_conlusion').style.display = 'inline';
            break;
        case 4:
            document.getElementById('shooter_conlusion').style.display = 'inline';
            break;
        case 5:
            document.getElementById('fighting_conlusion').style.display = 'inline';
            break;
    }
}

