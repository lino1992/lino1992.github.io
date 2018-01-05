var label = ['1996','1997', '1998', '1999', '2000','2001','2002','2003','2004','2005',
    '2006','2007', '2008', '2009', '2010','2011','2012','2013','2014','2015',
    '2016']
var labelWithIndex = []
var selectedObject = {'franchise' : 'none', 'title' : 'none', 'Global_sales' : 0, 'release_year': 0,
                        'score' : 0, 'editors_choice' : 'none', 'score_phrase' : 'none'}

function getInformation(index, paramter){
    var result = []
    for(var key in all_game[index]){
        result.push(all_game[index][key][paramter])
    }
    return result
}

function getLabel(index){
    var result = []
    for(var key in all_game[index]){
        result.push(all_game[index][key]['franchise'])
    }
    return result[0]
}
for(var test in all_game){
    labelWithIndex.push(getLabel(test))
}

function getObjectInformation(index, label){
    for(var test in all_game){
        if(all_game[test][index]['franchise'] == label){
            selectedObject = all_game[test][index]
            document.getElementById('franchise_label').innerHTML = selectedObject['franchise']
            document.getElementById('title_label').innerHTML = selectedObject['title']
            document.getElementById('global_sales_label').innerHTML = selectedObject['Global_Sales']
            document.getElementById('release_year_label').innerHTML = selectedObject['release_year']
            document.getElementById('score_label').innerHTML = selectedObject['score']
            document.getElementById('editors_choice_label').innerHTML = selectedObject['editor_choice']
            document.getElementById('score_phrase_label').innerHTML = selectedObject['franchise']
            break;
        }
    }

}

var ctx = document.getElementById('franchiseChart').getContext('2d');
var franchiseChart;
function createChart(){
    franchiseChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels:label
        },
        options: {
            title: {
                display: true,
                text: 'Bar chart present the score of games. ' +
                ' Line chart present sale in milions'
            },
            legend: {
                display: true,
                position: 'left'
            },
            // onClick: function(c,i){
            //     var activePoints = franchiseChart.getElementAtEvent(c);
            //     e = i[1];
            //
            //     console.log(e._index)
            //     var selectedLabel = activePoints[0]._model.datasetLabel;
            //     if(selectedLabel != null){
            //         getObjectInformation(e._index,selectedLabel.split('_')[0])
            //     }
            // }
        }
    });
}
createChart()

function selectAction(){
    franchiseChart.destroy();
    createChart()
    addLineData(labelWithIndex.indexOf("Assassin's Creed"), '#000000')
    addLineData(labelWithIndex.indexOf('Batman'), '#0008FF')
    addLineData(labelWithIndex.indexOf('God of War'), '#F7FB00')
    addLineData(labelWithIndex.indexOf('Devil May Cry'), '#FC0417')

    addBarData(labelWithIndex.indexOf("Assassin's Creed"), '#3D3D3D')
    addBarData(labelWithIndex.indexOf('Batman'), '#153096')
    addBarData(labelWithIndex.indexOf('God of War'), '#989A3C')
    addBarData(labelWithIndex.indexOf('Devil May Cry'), '#813B3B')
}

function selectionAdventure(){
    franchiseChart.destroy();
    createChart()
    addLineData(labelWithIndex.indexOf("Rayman"),'#FBFF00')
    addLineData(labelWithIndex.indexOf('Tomb Raider'),'#0094FF')
    addLineData(labelWithIndex.indexOf('Uncharted'),'#002CFF')
    addLineData(labelWithIndex.indexOf('Zelda'), '#00FF15')

    addBarData(labelWithIndex.indexOf("Rayman"),'#7E7F40')
    addBarData(labelWithIndex.indexOf('Tomb Raider'),'#3B6C90')
    addBarData(labelWithIndex.indexOf('Uncharted'),'#3C4C95')
    addBarData(labelWithIndex.indexOf('Zelda'),'#44894A')
}

function selectShooter(){
    franchiseChart.destroy();
    createChart()
    addLineData(labelWithIndex.indexOf("Call of Duty"), '#000000')
    addLineData(labelWithIndex.indexOf('Battlefield'),'#FDBC00')
    addLineData(labelWithIndex.indexOf('Doom'),'#0078FF')
    addLineData(labelWithIndex.indexOf('Halo'),'#00DAFD')
    addLineData(labelWithIndex.indexOf("Tom Clancy's Ghost"),'#24FF00')
    addLineData(labelWithIndex.indexOf('Wolfenstein'),'#FF0E00')

    addBarData(labelWithIndex.indexOf("Call of Duty"),'#757575')
    addBarData(labelWithIndex.indexOf('Battlefield'),'#A4862F')
    addBarData(labelWithIndex.indexOf('Doom'),'#315D90')
    addBarData(labelWithIndex.indexOf('Halo'),'#3798A7')
    addBarData(labelWithIndex.indexOf("Tom Clancy's Ghost"),'#4EA43F')
    addBarData(labelWithIndex.indexOf('Wolfenstein'),'#9F3F3A')
}

function selectRacing(){
    franchiseChart.destroy();
    createChart()
    addLineData(labelWithIndex.indexOf("Burnout"),'#FF0000')
    addLineData(labelWithIndex.indexOf('Forza Horizon'), '#FD01D4')
    addLineData(labelWithIndex.indexOf('Gran Turismo'),'#0300FF')
    addLineData(labelWithIndex.indexOf('Midnight Club'),'#000000')
    addLineData(labelWithIndex.indexOf("Need for Speed"),'#00FDFF')

    addBarData(labelWithIndex.indexOf("Burnout"),'#973D3D')
    addBarData(labelWithIndex.indexOf('Forza Horizon'),'#9F4190')
    addBarData(labelWithIndex.indexOf('Gran Turismo'),'#403E95')
    addBarData(labelWithIndex.indexOf('Midnight Club'),'#717176')
    addBarData(labelWithIndex.indexOf("Need for Speed"),'#399C9D')
}

function selectFighting(){
    franchiseChart.destroy();
    createChart()
    addLineData(labelWithIndex.indexOf("BlazBlue"),'#008BFE')
    addLineData(labelWithIndex.indexOf('Capcom'),'#F5FF01')
    addLineData(labelWithIndex.indexOf('Mortal Kombat'),'#FF7600')
    addLineData(labelWithIndex.indexOf('Street Fighter'),'#FF0000')
    addLineData(labelWithIndex.indexOf('Tekken'),'#FF015B')

    addBarData(labelWithIndex.indexOf("BlazBlue"),'#4878A1')
    addBarData(labelWithIndex.indexOf('Capcom'),'#9FA34A')
    addBarData(labelWithIndex.indexOf('Mortal Kombat'),'#A96E3B')
    addBarData(labelWithIndex.indexOf('Street Fighter'),'#9C3535')
    addBarData(labelWithIndex.indexOf('Tekken'), '#893351')
}
function addBarData(index, barColor){
    franchiseChart.data.datasets.push({
        label:getLabel(index) + '_' + 'score',
        type:'bar',
        backgroundColor: barColor,
        data:getInformation(index, 'score')
    })
    franchiseChart.update();
}
function addLineData(index, lineColor){
    franchiseChart.data.datasets.push({
        label:getLabel(index) + '_' + 'sale',
        type:'line',
        data:getInformation(index, 'Global_Sales'),
        borderColor: lineColor,
        fill: false
    })
    franchiseChart.update();
}
