document.getElementById("day").addEventListener("click", function (viewBy) {
    execute(viewBy);
});
document.getElementById("month").addEventListener("click", function (viewBy) {
    execute(viewBy);
});
document.getElementById("year").addEventListener("click", function (viewBy) {
    execute(viewBy);
});

document.getElementById('month').click();

function execute(viewBy) {

    var view = viewBy;
    var time;
    d3.json("NewsItemsData.json", convert);
    function convert(d) {
        var time = new Array(32).fill(0);
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
                        //document.write("newsTime is " + newsTime + "&nbsp" + "<br>");
                        date = newsTime.replace('T', '-').split("-", 3);
                        //document.write("date is " + date + "&nbsp" + "<br>");
                        day = parseInt(date[2]);
                        //document.write("day is " + day + "&nbsp" + "<br>");
                        time[day]++;
                        //document.write("time is " + time[day] + "&nbsp" + "<br>");
                    }
                }
            }
            else {
                //document.write("Error reading entity" + "&nbsp" + i + "&nbsp" + arr[i] + "&nbsp" + "<br>");
            }
        }

        function getmax() {
            var numbers = time,
                max = numbers[0];
            for (var i = 0; i < numbers.length; i++) {
                if (numbers[i] > max) {
                    max = numbers[i];
                    //console.log(max);
                }
            }
            return max;
        }



        var height = 500,
        width = 500,
        margin = 30,
        YAxisMaxValue = getmax() + 10;
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
        var scaleX = d3.scale.linear()
                    .domain([0, 32])
                    .range([0, xAxisLength]);//// функция интерполяции значений на ось Y
        var scaleY = d3.scale.linear()
                    .domain([YAxisMaxValue, 0])
                    .range([0, yAxisLength]);//// масштабирование реальных данных в данные для нашей координатной системы

        //document.write(time + "&nbsp" + "<br>");
        for (i = 0; i < time.length; i++)
            data.push({ x: scaleX(i) + margin, y: scaleY(time[i]) + margin });//// создаем ось X   
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
    }
}


