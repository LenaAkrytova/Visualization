
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
    return false;
});
$(".dropdown-menu a").click(function () {
    $(this).closest(".dropdown-menu").prev().dropdown("toggle");
});
$('div.dropdown ul.dropdown-menu li').click(function (e) {
    addToArrOfChosenCategories($(this).text());
    //document.write($(this).text());
})

var YAxisMaxValueYear = 0;
var YAxisMaxValueMonth = 0;
var flag = '';
var set;
var arrOfCategories;
var arrCount = [];
var arrOfInfoNews = [];
var arrOfSuperCategories = [];
var arrOfChosenCategories = [];
var countOfDiagrams = 6;

//d3.json("NewsItemsSmallData.json", initialize);
d3.json("NewsItemsSmallData.json", initialize);
function initialize(d)
{
   
    var time = Create2DArray();
    var yearTime = new Array(13).fill(0);
    var arr = d;
    var newsTime;
    var tmp, date, day, month;
    set = new StringSet();
    //document.write("set" + "<br>");

    //initialize array of categoriesNames TBD
    for (i = 0; i < arr.length; i++) {
        tmp = arr[i]['category'];
        if ('category' in arr[i]) {
            if (tmp.length)
            {
                for (j = 0; j < tmp.length; j++) {
                    set.add(tmp[j]['term']);
                }
            }
            else
            {
                set.add(tmp['term']);
            }
            
        }
        else
        {
             //alert(set.contains("fignya kakaya-to"));
        }
    }
    arrOfCategories = set.values();


    arrOfSuperCategories = [];

    //initialize year max and month max
    for (z = 0; z < arrOfCategories.length; z++)
    {
        var currCat = arrOfCategories[z];
        var infoNew = new infoNews(currCat);
        for (var i = 0; i < 13; i++)
        {
            time[i].fill(0);
        }
        yearTime.fill(0);
        for (i = 0; i < d.length; i++)
        {
            tmp = arr[i]['category'];
            if ('category' in arr[i])
            {
                //document.write("category is " + tmp + "&nbsp" + "<br>");
                if (tmp.length)
                {
                    for (j = 0; j < tmp.length; j++) {
                        if (tmp[j]['term'] == currCat) {
                            newsTime = arr[i]['date'];
                            date = newsTime.replace('T', '-').split("-", 3);
                            month = parseInt(date[1]);
                            day = parseInt(date[2]);
                            time[month][day]++;
                            yearTime[month]++;
                        }
                    }
                }
                else
                {
                    if (tmp['term'] == currCat) {
                        newsTime = arr[i]['date'];
                        date = newsTime.replace('T', '-').split("-", 3);
                        month = parseInt(date[1]);
                        day = parseInt(date[2]);
                        time[month][day]++;
                        yearTime[month]++;
                    }
                }
                
            }
        }
        totalInYear = SumOfArr(yearTime);
        arrCount[z] = totalInYear;
        infoNew.newsYearCount = totalInYear;
        arrOfInfoNews[z] = infoNew;
        //document.write("infoNew is " + "&nbsp" + arrOfInfoNews[z].newsCategoryName + "&nbsp" + arrOfInfoNews[z].newsYearCount + "<br>");


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
    
    sortBy("popularity");
    ////eto chtoby raspechatat' v "tipa json" formate
    //document.write("[" + "<br>");
    //for (z = 0; z < arrOfCategories.length; z++) {
    //    //document.write("infoNew is " + "&nbsp" + arrOfInfoNews[z].newsCategoryName + "&nbsp" + arrOfInfoNews[z].newsYearCount + "<br>");
    //    document.write("{" + "<br>" + '"category": { "term": "' + arrOfInfoNews[z].newsCategoryName + '" },' + "<br>" + '"popularity": "' + arrOfInfoNews[z].newsYearCount + '"' + "<br>" + '},' + "<br>");
    //}
    //document.write("<br>" + "]");
}

function initMaxYearAndMaxMonth(numbers, flag)
{
    var max = 0;
    //document.write("flag = " + flag + "&nbsp" + "<br>");
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
    //for (i = 0; i < 6; i++)
    //{
    //    //execute(viewBy, arrOfCategories[i]);
    //}
    for (i = 1; i < countOfDiagrams+1; i++)
    {
        var curr = arrOfInfoNews.length - i;
        execute(viewBy, arrOfInfoNews[curr].newsCategoryName);
    }
}

function execute(viewBy, currCategory) {

    //document.write("ya tut" + "<br>");
    var view = viewBy;
    if (viewBy == '2016')
    {
        flag = 'byYear';
    }
    else
    {
        flag = 'byMonth';
    }
    d3.json("NewsItemsSmallData.json", convert);
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
                if (tmp.length)
                {
                    for (j = 0; j < tmp.length; j++) {
                        if (tmp[j]['term'] == category) {
                            //newsTime = arr[i]['dc:date'];
                            newsTime = arr[i]['date'];
                            date = newsTime.replace('T', '-').split("-", 3);
                            month = parseInt(date[1]);
                            day = parseInt(date[2]);
                            time[month][day]++;
                            yearTime[month]++;
                        }
                    }
                }
                else
                {
                    if (tmp['term'] == category) {
                        newsTime = arr[i]['date'];
                        date = newsTime.replace('T', '-').split("-", 3);
                        month = parseInt(date[1]);
                        day = parseInt(date[2]);
                        time[month][day]++;
                        yearTime[month]++;
                    }
                }
            }
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
        svg.append("text")
          .attr("x", width - 6)
          .attr("y", height - 6)
          .style("text-anchor", "end")
          .text(category);

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

function SumOfArr(array)
{
    var sum = 0;
    for (var i = 0; i < array.length; i++)
    {
        sum += array[i];
    }
    return sum;
}

class infoNews{
    constructor(name)
    {
        this.newsCategoryName = name;
        this.newsYearCount = 0;
    }
}

function sortBy(byThe)
{
    if (byThe == "popularity")
    {
        arrOfInfoNews.sort(function (a, b) {
            if (a.newsYearCount > b.newsYearCount) {
                return 1;
            }
            if (a.newsYearCount < b.newsYearCount) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    }
    else if(byThe == "category")
    {
        arrOfInfoNews.sort(function (a, b) {
            if (a.newsCategoryName > b.newsCategoryName) {
                return 1;
            }
            if (a.newsCategoryName < b.newsCategoryName) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    }
    
}

function addToArrOfChosenCategories(newCategory)
{
    arrOfChosenCategories.push(newCategory);
    //document.write(arrOfChosenCategories);
}


