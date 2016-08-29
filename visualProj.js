
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

var set; /// это чтобы джейсона туда сохранить (временно)
var arrOfCategories; /// массив всех уникальных категорий
var arrCount = []; /// массив популярости соответствующей категории из arrOfCategories
var arrOfSuperCategories = []; /// массив глобальных категорий (не уникальных), вписаных вручную, соответствуют arrOfCategories
var arrOfInfoNews = []; /// массив объектов. Каждый объект - это название категории, ее популярность и ее глобальная категория
var arrOfChosenCategories = []; /// массив категорий, выбранных пользователем

/// массивы подкатегорий соответствующих (названию) глобальных категорий
var economics = [];
var education = [];
var environment = [];
var culture = [];
var health = [];
var politics = [];
var sport = [];
var security = [];
var transportation = [];
/// массив всех 9 массивов (которые выше) 
var allTopics = Create2DArray();


var countOfDiagrams = 9; /// сколько диаграмм показывать на странице (by defoult 9)
var YAxisMaxValueYear = 0;   /// максимальное значение на оси У
var YAxisMaxValueMonth = 0; ///  максимальное значение на оси X
var flag = ''; /// показать весь год или по месяцам

var flagForTopics = ''; /// показать 9 глобальных категорий, или 9 самых популярных из одной категории, но, может, он и не  нужен...



//////////////////////////////////////////////////////////////////////////
////   TBD    
// проверять чтобы countOfDiagrams был не больше 12 когда пользователь выбирает категории вручную
// создать вручную массив суперкатегорий
// поменяеть стринги из названий на кнопочках
// в некоторых "суперкатегориях" кол-во категорий меньше 9 - проверить как оно будет работать
// тут есть баг - почему-то двумерный массив allTopics размером 13, а не 9... хорошо бы поправить, но пока просто нужно иметь в виду, что считать нужно не до allTopics.length, а до 9
//
// если нужно нарисовать графики категорий из ОДНОЙ глобальной категории, то вызываем обычную ф-цию execute для нескольких нужных подкатегорий
// если нужно нарисовать 9 графиков глобальных категорий, то нужно вызывать отдельную функцию deawAllForTopics







d3.json("NewsItemsSmallData.json", initialize);

///// создаем массивы (в т.ч. массив объектов),
///// определяем максимальный размер по оси У за месяц и за год,
///// получаем отортированный массив объектов
function initialize(d)
{
    var time = Create2DArray();  /// двумерный массив - 13 рядов - месяцы. Каждый ряд - 32 шт. - дни соответствующего месяца. (нужен отдельный для КАЖДОЙ уникальной новости) Каждый (i,j) - это сколько новостей (по соотв. теме) было в этот день 
    var yearTime = new Array(13).fill(0);  /// для каждой уникальной новости количество ее упоминаний - каждая ячейка - сумма соответствующего ряда в time (т.е. сколько раз в месяц), сумма всех ячеек - сколько раз в год
    var arr = d; /// массив объектов из джейсона (зачем-то)
    var newsTime; /// для того чтобы разделить дату на составные части (день, месяц)
    var tmp, date, day, month;  /// тут и так понятно
    set = new StringSet(); /// тут временно будут храниться названия категорий
    //document.write("set" + "&nbsp" + "<br>");

    //initialize array of categoriesNames 
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

    // создаем массив суперкатегорий
    arrOfSuperCategories = ["Politics",
"Transportation",
"Politics",
"Environment",
"Environment",
"Environment",
"Politics",
"Sport",
"Politics",
"Economics",
"Politics",
"Environment",
"Transportation",
"Politics",
"Politics",
"Politics",
"Environment",
"Health",
"Sport",
"Health",
"Sport",
"Environment",
"Politics",
"Politics",
"Education",
"Environment",
"Sport",
"Environment",
"Environment",
"Economics",
"Health",
"Economics",
"Environment",
"Politics",
"Environment",
"Economics",
"Economics",
"Education",
"Politics",
"Politics",
"Politics",
"Politics",
"Transportation",
"Environment",
"Politics",
"Politics",
"Education",
"Politics",
"Culture",
"Environment",
"Economics",
"Sport",
"Sport",
"Economics",
"Politics",
"Education",
"Sport",
"Education",
"Environment",
"Politics",
"Education",
"Politics",
"Politics",
"Politics",
"Health",
"Education",
"Sport",
"Sport",
"Economics",
"Transportation",
"Economics",
"Sport",
"Environment",
"Health",
"Education",
"Culture",
"Politics",
"Sport",
"Politics",
"Politics",
"Security",
"Politics",
"Economics",
"Culture",
"Culture",
"Environment",
"Culture",
"Politics",
"Health",
"Politics",
"Politics",
"Politics",
"Politics",
"Culture",
"Politics",
"Economics",
"Politics",
"Politics",
"Politics",
"Security",
"Education",
"Economics",
"Politics",
"Politics",
"Politics",
"Politics",
"Politics",
"Politics",
"Transportation",
"Health",
"Health",
"Sport",
"Security",
"Politics",
"Politics",
"Politics",
"Politics",
"Politics",
"Culture",
"Education",
"Politics",
"Transportation",
"Politics",
"Politics",
"Environment",
"Politics",
"Health",
"Politics",
"Politics",
"Health",
"Culture",
"Politics",
"Politics",
"Politics",
"Security",
"Economics",
"Sport",
"Politics",
"Education",
"Politics",
"Politics",
"Politics",
"Politics",
"Environment",
"Politics",
"Economics",
"Health",
"Economics",
"Education",
"Environment",
"Politics",
"Environment",
"Education",
"Economics",
"Politics",
"Sport",
"Environment",
"Politics",
"Health",
"Politics",
"Environment",
"Health",
"Sport",
"Economics",
"Economics",
"Security",
"Environment",
"Economics",
"Security",
"Politics",
"Politics",
"Politics",
"Politics",
"Politics",
"Economics",
"Culture",
"Transportation",
"Security",
"Security",
"Politics",
"Security",
"Environment",
"Politics",
"Environment",
"Politics",
"Politics",
"Security",
"Politics",
"Security",
"Security",
"Health",
"Security",
"Politics",
"Security",
    ];

    //заполняем массивы arrOfCategories, arrCount, arrOfInfoNews
    //заодно initialize year max and month max
    for (z = 0; z < arrOfCategories.length; z++)
    {
        var currCat = arrOfCategories[z];
        var infoNew = new infoNews(currCat); /// сразу заполняем поле newsCategoryName соответствующего объекта в массиве arrOfInfoNews (два других поля при этом становятся 0)
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

        /// считаем общую сумму в год
        totalInYear = SumOfArr(yearTime);
        arrCount[z] = totalInYear;

        /// заполняем поле newsYearCount соответствующего объекта в массиве arrOfInfoNews
        infoNew.newsYearCount = totalInYear;

        /// заполняем поле topic соответствующего объекта в массиве arrOfInfoNews
        infoNew.topic = arrOfSuperCategories[z];

        /// заполняем поле newsYearCount соответствующего объекта в массиве arrOfInfoNews
        arrOfInfoNews[z] = infoNew;
        //document.write(infoNew.newsCategoryName + "&nbsp" + infoNew .newsYearCount + "&nbsp" + infoNew.topic + "<br>");
        
        /// создаем массив глобальных категорий с подкатегориями (двумерный)
        createArrOfTopics();

        /// initialize year max and month max
        tmp = initMaxYearAndMaxMonth(yearTime, 'byYear');
        if (tmp > YAxisMaxValueYear) {
            YAxisMaxValueYear = tmp;
        }

        tmp = initMaxYearAndMaxMonth(time, 'byMonth');
        if (tmp > YAxisMaxValueMonth) {
            YAxisMaxValueMonth = tmp;
        }
    }

    /// это просто распечатка массива, если нужно
    //for (z = 0; z < arrOfCategories.length; z++) {
    //    document.write(arrOfInfoNews[z].newsCategoryName + "<br>");
    //}

    /// сортируем по популярности для дефолтного фильтра
    sortBy("popularity");

    ////eto chtoby raspechatat' v "tipa json" formate
    //document.write("[" + "<br>");
    //for (z = 0; z < arrOfCategories.length; z++) {
    //    //document.write("infoNew is " + "&nbsp" + arrOfInfoNews[z].newsCategoryName + "&nbsp" + arrOfInfoNews[z].newsYearCount + "<br>");
    //    document.write("{" + "<br>" + '"category": { "term": "' + arrOfInfoNews[z].newsCategoryName + '" },' + "<br>" + '"popularity": "' + arrOfInfoNews[z].newsYearCount + '"' + "<br>" + '},' + "<br>");
    //}
    //document.write("<br>" + "]");


    //////test
    createArrOfTopics();
}

/// для того, чтобы нарисовать ОДИН график нужно вызвать эту функцию
function execute(viewBy, currCategory)
{
    var view = viewBy;
    if (viewBy == '2016')/// тут поменяется стринг
    {
        flag = 'byYear';
    }
    else {
        flag = 'byMonth';
    }

    d3.json("NewsItemsSmallData.json", convert); /// зачем мы это опять делаем так не очень понятно, но, наверное, лучше уже и не трогать

    function convert(d)
    {
        /// ну, ужас, конечно - все зачем-то по второму разу... но... раз он не будет на это смотреть...
        var time = Create2DArray();
        var yearTime = new Array(13).fill(0);
        var arr = d;
        var newsTime;
        var tmp, date, day;
        /// хотя, честно говоря, если не делать это по новой для каждой категории, то нужно было бы хранить весь этот огромный массив массивов... так что если не жалко времени на постоянные пересчеты, то какая-то логика в этом есть
        
        var category = currCategory; /// по этой категории будем строить график

        /// снова заполняем табличку
        for (i = 0; i < d.length; i++) {
            tmp = arr[i]['category'];
            if ('category' in arr[i]) {
                if (tmp.length) {
                    for (j = 0; j < tmp.length; j++) {
                        if (tmp[j]['term'] == category) {
                            newsTime = arr[i]['date'];
                            date = newsTime.replace('T', '-').split("-", 3);
                            month = parseInt(date[1]);
                            day = parseInt(date[2]);
                            time[month][day]++;
                            yearTime[month]++;
                        }
                    }
                }
                else {
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

        /// это та самая часть, которая рисует... подробнее вникать в нее не буду - там и так уже с комментами)))))
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

        if (flag == 'byMonth') {
            for (i = 0; i < time[view].length; i++) {
                var temp = time[view][i];
                data.push({ x: scaleX(i) + margin, y: scaleY(temp) + margin });
                //// создаем ось X  
            }
        }
        else if (flag == 'byYear') {
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

//function deawAllForTopics()
//{
//    var time = Create2DArray();
//    var yearTime = new Array(13).fill(0);
//    var arr = d;
//    var newsTime;
//    var tmp, date, day;
//    if (flagForTopics == 'All topics')
//    {
//    }
//        var category = currCategory; /// по этой категории будем строить график
//        /// снова заполняем табличку
//        for (i = 0; i < d.length; i++) {
//            tmp = arr[i]['category'];
//            if ('category' in arr[i]) {
//                if (tmp.length) {
//                    for (j = 0; j < tmp.length; j++) {
//                        if (tmp[j]['term'] == category) {
//                            newsTime = arr[i]['date'];
//                            date = newsTime.replace('T', '-').split("-", 3);
//                            month = parseInt(date[1]);
//                            day = parseInt(date[2]);
//                            time[month][day]++;
//                            yearTime[month]++;
//                        }
//                    }
//                }
//                else {
//                    if (tmp['term'] == category) {
//                        newsTime = arr[i]['date'];
//                        date = newsTime.replace('T', '-').split("-", 3);
//                        month = parseInt(date[1]);
//                        day = parseInt(date[2]);
//                        time[month][day]++;
//                        yearTime[month]++;
//                    }
//                }
//            }
//        }
//        /// это та самая часть, которая рисует... подробнее вникать в нее не буду - там и так уже с комментами)))))
//        var height = 500,
//        width = 500,
//        margin = 30,
//        //YAxisMaxValue = getmax(view) + 10;
//        YAxisMaxValue = (flag == 'byYear') ? YAxisMaxValueYear : YAxisMaxValueMonth;
//        YAxisMaxValue += 10;
//        data = [];
//        //// создание объекта svg
//        //d3.select("body").selectAll("svg").remove();
//        var svg = d3.select("body").append("svg")
//                .attr("class", "axis")
//                .attr("width", width)
//                .attr("height", height)
//            //// длина оси X= ширина контейнера svg - отступ слева и справа
//                .attr("align", "center");
//        svg.append("text")
//          .attr("x", width - 6)
//          .attr("y", height - 6)
//          .style("text-anchor", "end")
//          .text(category);
//        var xAxisLength = width - 2 * margin;
//        //// длина оси Y = высота контейнера svg - отступ сверху и снизу
//        var yAxisLength = height - 2 * margin;
//        //// функция интерполяции значений на ось Х  
//        var scaleNum = 32;
//        if (flag == 'byYear') {
//            scaleNum = 13;
//        }
//        var scaleX = d3.scale.linear()
//                    .domain([0, scaleNum])
//                    .range([0, xAxisLength]);
//        //// функция интерполяции значений на ось Y
//        var scaleY = d3.scale.linear()
//                    .domain([YAxisMaxValue, 0])
//                    .range([0, yAxisLength]);
//        //// масштабирование реальных данных в данные для нашей координатной системы
//        if (flag == 'byMonth') {
//            for (i = 0; i < time[view].length; i++) {
//                var temp = time[view][i];
//                data.push({ x: scaleX(i) + margin, y: scaleY(temp) + margin });
//                //// создаем ось X  
//            }
//        }
//        else if (flag == 'byYear') {
//            for (i = 0; i < yearTime.length; i++) {
//                data.push({ x: scaleX(i) + margin, y: scaleY(yearTime[i]) + margin });
//                //// создаем ось X  
//            }
//        }
//        var xAxis = d3.svg.axis()
//                     .scale(scaleX)
//                     .orient("bottom");
//        //// создаем ось Y  
//        var yAxis = d3.svg.axis()
//                     .scale(scaleY)
//                     .orient("left");
//        //// отрисовка оси Х             
//        svg.append("g")
//             .attr("class", "x-axis")
//             .attr("transform",  // сдвиг оси вниз и вправо
//                 "translate(" + margin + "," + (height - margin) + ")")
//            .call(xAxis);
//        //// отрисовка оси Y 
//        svg.append("g")
//            .attr("class", "y-axis")
//            .attr("transform", // сдвиг оси вниз и вправо на margin
//                    "translate(" + margin + "," + margin + ")")
//            .call(yAxis);
//        //// создаем набор вертикальных линий для сетки   
//        d3.selectAll("g.x-axis g.tick")
//            .append("line")
//            .classed("grid-line", true)
//            .attr("x1", 0)
//            .attr("y1", 0)
//            .attr("x2", 0)
//            .attr("y2", -(yAxisLength));
//        //// рисуем горизонтальные линии координатной сетки
//        d3.selectAll("g.y-axis g.tick")
//            .append("line")
//            .classed("grid-line", true)
//            .attr("x1", 0)
//            .attr("y1", 0)
//            .attr("x2", xAxisLength)
//            .attr("y2", 0);
//        //// функция, создающая по массиву точек линии
//        var line = d3.svg.line()
//                    .x(function (d) { return d.x; })
//                    .y(function (d) { return d.y; });
//        //// добавляем путь
//        svg.append("g").append("path")
//        .attr("d", line(data))
//        .style("stroke", "steelblue")
//        .style("stroke-width", 2);
//        //document.write("yAxis: " + yAxis + "&nbsp" + "<br>");
//}

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
    /// т.к. категории отсортированы по возрастанию, нужно взять ПОСЛЕДНИЕ
    for (i = 1; i < countOfDiagrams+1; i++)
    {
        var curr = arrOfInfoNews.length - i;
        execute(viewBy, arrOfInfoNews[curr].newsCategoryName);
    }
}


/// это кучка совсем служебных функций (там, в принципе, и по названию все понятно)
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
        this.topic = "";
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


/// это для того чтобы можно было рисовать выбранные категории TBD 
function addToArrOfChosenCategories(newCategory)
{
    arrOfChosenCategories.push(newCategory);
    //document.write(arrOfChosenCategories);
}

/// тут создается каждый отдельный массив 
function createArrOfOneTopic(topic, TopicsArr)
{
    var topicOfCategory;
    var count = 0;
    for(var i = 0; i < arrOfInfoNews.length; i++)
    {
        topicOfCategory = arrOfInfoNews[i].topic;
         if(topicOfCategory == topic)
         {
             TopicsArr[count] = arrOfInfoNews[i];
             count++;
        }
    }
    //sortBy("popularity");
}

/// а тут собираем их в кучку
function createArrOfTopics()
{
    createArrOfOneTopic("Economics", economics);
    //for (z = 0; z < economics.length; z++) {
    //    document.write(economics[z].newsYearCount + "<br>");
    //}
    
    createArrOfOneTopic("Education", education);
    createArrOfOneTopic("Environment", environment);
    createArrOfOneTopic("Culture", culture);
    createArrOfOneTopic("Health", health);
    createArrOfOneTopic("Politics", politics);
    createArrOfOneTopic("Sport", sport);
    createArrOfOneTopic("Security", security);
    createArrOfOneTopic("Transportation", transportation);

    allTopics[0] = economics;
    allTopics[1] = education;
    allTopics[2] = environment;
    allTopics[3] = culture;
    allTopics[4] = health;
    allTopics[5] = politics;
    allTopics[6] = sport;
    allTopics[7] = security;
    allTopics[8] = transportation;

    /// оставлю это пока для примера как с этим массивом работать
    //for (var i = 0; i < 9; i++)
    //{
    //    document.write("<br>" + "NEW TOPIC" + "<br>" + "<br>");
    //    for (z = 0; z < allTopics[i].length; z++) {
    //        document.write(allTopics[i][z].newsCategoryName + "&nbsp" + allTopics[i][z].topic + "<br>");
    //    }
    //}
}