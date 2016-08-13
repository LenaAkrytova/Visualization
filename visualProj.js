
document.getElementById("month").addEventListener("click", function (viewBy) {
    //execute(viewBy);
});
document.getElementById("year").addEventListener("click", function (viewBy) {
    //execute(viewBy);
});

$('div.dropdown ul.dropdown-menu li a').click(function (e) {
    var $div = $(this).parent().parent().parent();
    var $btn = $div.find('button');
    drawSmallMultiplesByCategory($(this).text());
    //alert($(this).text());
    return false;
});
$(".dropdown-menu a").click(function () {
    $(this).closest(".dropdown-menu").prev().dropdown("toggle");
});

var YAxisMaxValueYear = 0;
var YAxisMaxValueMonth = 0;
var flag = '';
var set;
var arrOfCategories;// = new Array(2);

d3.json("NewsItemsData.json", initialize);
function initialize(d)
{
    var time = Create2DArray();
    var yearTime = new Array(13).fill(0);
    var arr = d;
    var newsTime;
    var tmp, date, day, month;
    set = new StringSet();
    //document.write("ya tut");
    //initialize array of categoriesNames TBD
    for (i = 0; i < d.length; i++) {
        tmp = arr[i]['category'];
        if ('category' in arr[i]) {
            for (j = 0; j < tmp.length; j++) {
                set.add(tmp[j]['term']);
            }
        }
    }
    arrOfCategories = set.values();



    //arrOfCategories[0] = 'JRCNuclearSecurity';
    //arrOfCategories[1] = 'UNbodies';
    //document.write("category is " + arrOfCategories + "&nbsp" + "<br>");

    //initialize year max and month max
    for (z = 0; z < arrOfCategories.length; z++) {
        var currCat = arrOfCategories[z];
        for (var i = 0; i < 13; i++) {
            time[i].fill(0);
        }
        yearTime.fill(0);
        for (i = 0; i < d.length; i++) {
            tmp = arr[i]['category'];
            if ('category' in arr[i]) {
                for (j = 0; j < tmp.length; j++) {
                    if (tmp[j]['term'] == currCat) {
                        newsTime = arr[i]['dc:date'];
                        date = newsTime.replace('T', '-').split("-", 3);
                        month = parseInt(date[1]);
                        day = parseInt(date[2]);
                        time[month][day]++;
                        yearTime[month]++;
                    }
                }
            }
        }
        //flag = 'byYear';
        tmp = initMaxYearAndMaxMonth(yearTime, 'byYear');
        if (tmp > YAxisMaxValueYear) {
            YAxisMaxValueYear = tmp;
        }
        //flag = 'byMonth';
        tmp = initMaxYearAndMaxMonth(time, 'byMonth');
        if (tmp > YAxisMaxValueMonth) {
            YAxisMaxValueMonth = tmp;
        }
    }
    //document.write("set is: " + set.values() + "&nbsp" + "<br>");
    //document.write("YAxisMaxValueYear = " + YAxisMaxValueYear + "&nbsp" + "<br>" + "YAxisMaxValueMonth = " + YAxisMaxValueMonth + "&nbsp" + "<br>");
}
function initMaxYearAndMaxMonth(numbers, flag)
{
    var max = 0;
    if (flag == 'byYear') {
        for (var i = 0; i < numbers.length; i++) {
            //document.write("numbers: " + numbers + "&nbsp" + "<br>");
            if (numbers[i] > max) {
                max = numbers[i];
            }
            //document.write("i = " + i + "&nbsp" + "max[i] = " + max + "&nbsp" + "<br>");
        }
    }
    else if (flag = 'byMonth') {
        for(var i = 0; i < numbers.length; i++) {
            for (var j = 0; j < numbers[i].length; j++) {
                if (numbers[i][j] > max) {
                    max = numbers[i][j];
                }
            }
        }
    }
    return max;
}

function drawSmallMultiplesByCategory(viewBy)
{
    d3.select("body").selectAll("svg").remove();

    for (i = 0; i < 6; i++)
    {
        execute(viewBy, arrOfCategories[i]);
    }
    
    //execute(viewBy, 'JRCNuclearSecurity');
    //execute(viewBy, 'UNbodies');


    //d3.json("NewsItemsData.json", createArr());
    //set = new StringSet();
    //set.add("foo");
    //set.add("bar");

    //alert(set.contains("foo")); // true
    //alert(set.contains("baz")); // false

    //set.values(); // ["foo", "bar"], though not necessarily in that order
    //set.remove("foo");
    //set.values(); // ["bar"]
}






function execute(viewBy, currCategory) {
    
    var view = viewBy;
    if (viewBy == '2016')
    {
        flag = 'byYear';
    }
    else {
        flag = 'byMonth';
    }
    //var time;
    d3.json("NewsItemsData.json", convert);
    function convert(d) {
        var time = Create2DArray();
        var yearTime = new Array(13).fill(0); 
        var arr = d;
        var category = currCategory;

        //document.write("time is " + time + "&nbsp" + "<br>");
        var newsTime;
        var tmp, date, day;
        for (i = 0; i < d.length; i++) {
            tmp = arr[i]['category'];
            if ('category' in arr[i]) {
                for (j = 0; j < tmp.length; j++) {
                    if (tmp[j]['term'] == category) {
                        newsTime = arr[i]['dc:date'];
                        date = newsTime.replace('T', '-').split("-", 3);
                        month = parseInt(date[1]);
                        day = parseInt(date[2]);
                        time[month][day]++;
                        yearTime[month]++;
                    }
                }
            }
        }
        
        function getmax(view) {
            var numbers = [];
            if (flag == 'byYear')
            {
                numbers = yearTime;
            }
            else if (flag = 'byMonth')
            {
                numbers = time[view];
            }
            max = numbers[0];
            for (var i = 0; i < numbers.length; i++) {
                if (numbers[i] > max) {
                    max = numbers[i];
                }
            }
            return max;
        }

        

        var height = 500,
        width = 500,
        margin = 30,
        //YAxisMaxValue = getmax(view) + 10;
        YAxisMaxValue = (flag == 'byYear') ? YAxisMaxValueYear : YAxisMaxValueMonth;
        YAxisMaxValue += 10;
        data = [];
        //// создание объекта svg
        //d3.select("body").selectAll("svg").remove();
        var svg = d3.select("body").append("svg")
                .attr("class", "axis")
                .attr("width", width)
                .attr("height", height)
            //// длина оси X= ширина контейнера svg - отступ слева и справа
                .attr("align", "center");

        var xAxisLength = width - 2 * margin;
        //// длина оси Y = высота контейнера svg - отступ сверху и снизу
        var yAxisLength = height - 2 * margin;
        //// функция интерполяции значений на ось Х  
        var scaleNum = 32;
        
        if (flag == 'byYear') {
            scaleNum = 13;
        }

        var scaleX = d3.scale.linear()
                    .domain([0, scaleNum])
                    .range([0, xAxisLength]);
        //// функция интерполяции значений на ось Y
        var scaleY = d3.scale.linear()
                    .domain([YAxisMaxValue, 0])
                    .range([0, yAxisLength]);
        //// масштабирование реальных данных в данные для нашей координатной системы

        if (flag == 'byMonth')
        {
            for (i = 0; i < time[view].length; i++) {
                var temp = time[view][i];
                data.push({ x: scaleX(i) + margin, y: scaleY(temp) + margin });
                //// создаем ось X  
            }
        }
        else if (flag == 'byYear')
        {
            for (i = 0; i < yearTime.length; i++) {
                data.push({ x: scaleX(i) + margin, y: scaleY(yearTime[i]) + margin });
                //// создаем ось X  
            }
        }
        var xAxis = d3.svg.axis()
                     .scale(scaleX)
                     .orient("bottom");
        //// создаем ось Y  
        var yAxis = d3.svg.axis()
                     .scale(scaleY)
                     .orient("left");
        //// отрисовка оси Х             
        svg.append("g")
             .attr("class", "x-axis")
             .attr("transform",  // сдвиг оси вниз и вправо
                 "translate(" + margin + "," + (height - margin) + ")")
            .call(xAxis);
        //// отрисовка оси Y 
        svg.append("g")
            .attr("class", "y-axis")
            .attr("transform", // сдвиг оси вниз и вправо на margin
                    "translate(" + margin + "," + margin + ")")
            .call(yAxis);
        //// создаем набор вертикальных линий для сетки   
        d3.selectAll("g.x-axis g.tick")
            .append("line")
            .classed("grid-line", true)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", 0)
            .attr("y2", -(yAxisLength));
        //// рисуем горизонтальные линии координатной сетки
        d3.selectAll("g.y-axis g.tick")
            .append("line")
            .classed("grid-line", true)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", xAxisLength)
            .attr("y2", 0);
        //// функция, создающая по массиву точек линии
        var line = d3.svg.line()
                    .x(function (d) { return d.x; })
                    .y(function (d) { return d.y; });
        //// добавляем путь
        svg.append("g").append("path")
        .attr("d", line(data))
        .style("stroke", "steelblue")
        .style("stroke-width", 2);
        //document.write("yAxis: " + yAxis + "&nbsp" + "<br>");
    }
}


function Create2DArray() {
    var arr = new Array(13);
    for (var i = 0; i < 13; i++) {
        arr[i] = new Array(32).fill(0);
    }
    return arr;
}

function StringSet() {
    var setObj = {}, val = {};

    this.add = function (str) {
        setObj[str] = val;
    };

    this.contains = function (str) {
        return setObj[str] === val;
    };

    this.remove = function (str) {
        delete setObj[str];
    };

    this.values = function () {
        var values = [];
        for (var i in setObj) {
            if (setObj[i] === val) {
                values.push(i);
            }
        }
        return values;
    };
}