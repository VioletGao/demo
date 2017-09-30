var dataMap = {};

function dataFormatter(pList, obj) {
    var temp;
    for (var n = 0; n <= 2; n++) {
        temp = obj[n];
        for (var i = 0; i < temp.length; i++) {            
            obj[n][i] = {
                name : pList[i],
                value : temp[i]
            }
        }
    }
    return obj;
}

/*
 * @range the range of the simulated data
 * @min the minimum value of the simulated data
 */
function dataGenerator(range, min) {
    var d = [];
    var len = 0;
    var now = new Date();
    var value;
    while (len++ < 100) {
        d.push([
            new Date(2015, 9, 1, 0, len * 10000),
            (Math.random()*range + min).toFixed(2) - 0
        ]);
    }							
    return d;
}


dataMap.rubber = dataFormatter(['苯乙烯','苯','二甲苯','丁酮'], {
	0:[155, 117, 226, 335],
	1:[49, 28, 16, 55],
	2:[26, 45, 20, 88],
});

dataMap.oil = dataFormatter(['甲烷','乙烷','乙烯'], {
	0:[208, 345, 360],
	1:[49, 32, 55],
	2:[45, 21, 98],
});


rubberStyrene = [dataGenerator(15, 101), dataGenerator(10, 45), dataGenerator(5, 25)];
rubberBenzene = [dataGenerator(10, 91), dataGenerator(5, 25), dataGenerator(8, 40)];
rubberXylene = [dataGenerator(18, 82), dataGenerator(3, 15), dataGenerator(4, 18)];
rubberMEK = [dataGenerator(20, 330), dataGenerator(10, 50), dataGenerator(10, 80)];

dataMap.rubberGas = [rubberStyrene, rubberBenzene, rubberXylene, rubberMEK];

oilMethane = [dataGenerator(15, 176), dataGenerator(10, 40), dataGenerator(5, 65)];
oilEthane = [dataGenerator(10, 102), dataGenerator(5, 25), dataGenerator(8, 40)];
oilEVA = [dataGenerator(15, 240), dataGenerator(3, 22), dataGenerator(4, 55)];

dataMap.oilGas = [oilMethane, oilEthane, oilEVA];