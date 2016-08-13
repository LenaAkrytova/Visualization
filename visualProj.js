
document.getElementById("month").addEventListener("click", function (viewBy) {
    //execute(viewBy);
});
document.getElementById("year").addEventListener("click", function (viewBy) {
    //execute(viewBy);
});

$('div.dropdown ul.dropdown-menu li a').click(function (e) {
    var $div = $(this).parent().parent().parent();
    var $btn = $div.find('button');
    execute($(this).text());
    //alert($(this).text());
    return false;
});
$(".dropdown-menu a").click(function () {
    $(this).closest(".dropdown-menu").prev().dropdown("toggle");
});

/
function execute(viewBy) {
    var flag = 'byMonth';
    var view = viewBy;
    if (viewBy == '2016')
    {
        flag = 'byYear';
    }
    //var time;
    d3.json("NewsItemsData.json", convert);
    function convert(d) {
        var time = Create2DArray();
        var yearTime = new Array(13).fill(0); 
        var arr = d;
        var category = "JRCNuclearSecurity";

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
                        //document.write("day is " + day + "&nbsp" + "<br>");
                        //document.write("month is " + month + "&nbsp" + "<br>");
                        time[month][day]++;
                        yearTime[month]++;
                    }
                }
            }
            //else {
            //    //document.write("Error reading entity" + "&nbsp" + i + "&nbsp" + arr[i] + "&nbsp" + "<br>");
            //}
        }
        //document.write("yearTime: " + yearTime + "&nbsp" + "<br>");

        //document.write(JSON.stringify(time) + "&nbsp" + "<br>" + "<br>");
        //document.write("time length: "  +time.length + "&nbsp" + "<br>" + "<br>");
        

        //for (var i = 0; i < time[i].length; i++) {
        //for (var z = 0; z < time.length; z++) {
        //        document.write(time[i][z] + "&nbsp");
        //        //console.log(a[z][i]);
        //    }
        //    document.write("<br>");
        //}
      
        //document.write("time is " + time + "&nbsp" + "<br>");


        function getmax(view) {
            var numbers = time[view];
            if (flag == 'byYear')
            {
                numbers = yearTime;
            }
            max = numbers[0];
            for (var i = 0; i < numbers.length; i++) {
                if (numbers[i] > max) {
                    max = numbers[i];
                    //console.log(max);
                }
            }
            return max;
        }

        function Create2DArray(){
            var arr = new Array(13);
            for (var i = 0; i < 13; i++) {
                arr[i] = new Array(32).fill(0);
            }
            return arr;
        }



        var height = 500,
        width = 500,
        margin = 30,
        YAxisMaxValue = getmax(view) + 10;
        //document.write(YAxisMaxValue + "&nbsp" + "<br>");
        data = [];
        //// создание объекта svg
        d3.select("body").selectAll("svg").remove();
        var svg = d3.select("body").append("svg")
                .attr("class", "axis")
                .attr("width", width)
                .attr("height", height)//// длина оси X= ширина контейнера svg - отступ слева и справа
                .attr("align", "center");

        var xAxisLength = width - 2 * margin;//// длина оси Y = высота контейнера svg - отступ сверху и снизу
        var yAxisLength = height - 2 * margin;//// функция интерполяции значений на ось Х  
        var scaleNum = 32;
        
        if (flag == 'byYear') {
            scaleNum = 13;
        }

        var scaleX = d3.scale.linear()
                    .domain([0, scaleNum])
                    .range([0, xAxisLength]);//// функция интерполяции значений на ось Y
        var scaleY = d3.scale.linear()
                    .domain([YAxisMaxValue, 0])
                    .range([0, yAxisLength]);//// масштабирование реальных данных в данные для нашей координатной системы

        //document.write(time + "&nbsp" + "<br>");
        if (flag == 'byMonth')
        {
            for (i = 0; i < time[view].length; i++) {
                var temp = time[view][i];
                data.push({ x: scaleX(i) + margin, y: scaleY(temp) + margin });//// создаем ось X  
                //document.write("i = " + i + "time[3][i] = " + temp + "&nbsp" + "<br>");
            }
        }
        else if (flag == 'byYear')
        {
            for (i = 0; i < yearTime.length; i++) {
                data.push({ x: scaleX(i) + margin, y: scaleY(yearTime[i]) + margin });//// создаем ось X  
            }
        }
        var xAxis = d3.svg.axis()
                     .scale(scaleX)
                     .orient("bottom");//// создаем ось Y  
        var yAxis = d3.svg.axis()
                     .scale(scaleY)
                     .orient("left");//// отрисовка оси Х             
        svg.append("g")
             .attr("class", "x-axis")
             .attr("transform",  // сдвиг оси вниз и вправо
                 "translate(" + margin + "," + (height - margin) + ")")
            .call(xAxis);//// отрисовка оси Y 
        svg.append("g")
            .attr("class", "y-axis")
            .attr("transform", // сдвиг оси вниз и вправо на margin
                    "translate(" + margin + "," + margin + ")")
            .call(yAxis);//// создаем набор вертикальных линий для сетки   
        d3.selectAll("g.x-axis g.tick")
            .append("line")
            .classed("grid-line", true)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", 0)
            .attr("y2", -(yAxisLength));//// рисуем горизонтальные линии координатной сетки
        d3.selectAll("g.y-axis g.tick")
            .append("line")
            .classed("grid-line", true)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", xAxisLength)
            .attr("y2", 0);//// функция, создающая по массиву точек линии
        var line = d3.svg.line()
                    .x(function (d) { return d.x; })
                    .y(function (d) { return d.y; });//// добавляем путь
        svg.append("g").append("path")
        .attr("d", line(data))
        .style("stroke", "steelblue")
        .style("stroke-width", 2);
        //document.write("yAxis: " + yAxis + "&nbsp" + "<br>");
    }
}


