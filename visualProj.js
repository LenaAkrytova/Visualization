
var popular = "";
var byTopic = "";
var options = [];
var date = "All";
var chosenFilter = "compareTopics";

var countOfDiagrams = 9; /// сколько диаграмм показывать на странице (by defoult 9)
//var chosenMonth = 0;

var dropdownsData = {
    popularList: ['1 most popular', '2 most popular', '3 most popular', '4 most popular', '5 most popular', '6 most popular', '7 most popular', '8 most popular', '9 most popular', '10 most popular', '11 most popular', '12 most popular'],
    popularByTopicList: ['Culture', 'Economics', 'Education', 'Environment', 'Health', 'Politics', 'Security', 'Sport', 'Transport'],
    //customCategoriesList: ['300BillionEuroPackage', 'GMO', 'GunterOettinger', 'Eurostat', 'Demography', 'Sport', 'EuropeanCinema', 'JonathanHill', 'SchengenArea', 'InformationSociety', 'EBRD', 'TransuranicElements', 'MargretheVestager', 'RailTransport', 'MarosSefcovic', 'Competition-StateAid', 'AgricultureRuralDevelopment', 'Roaming', 'EuropeanNeighbourhoodPolicy', 'RatingsAgencies', 'HumanitarianAid', 'EPElection', 'eHealth', 'VytenisAndriukaitis', 'PublicProcurement', 'IntellectualProperty', 'ReferenceMaterials', 'Employment', 'PAC', 'PoliticalUnrest', 'Audit', 'EuropeanCulturalCapitals', 'EnvironmentalProtection', 'GenderEquality', 'EIB', 'SingleEuropeanSky', 'ScientificStrategy', 'KristalinaGeorgieva', 'CustomsUnion', 'TTIP', 'EuropeAid', 'RuralDevelopment', 'EADS', 'TechnologyForesight', 'VAT', 'Youth', 'ENLARGEMENT', 'Erasmus', 'ESA', 'ClimateAction', 'PetroleumRefineries', 'ForgeryMoney', 'MaritimeTransport', 'EducationFilter', 'JohannesHahn', 'Ecology', 'Development', 'EnergyMarketsandStrategies', 'BudgetoftheEU', 'EFSA', 'EPPoliticalGroups', 'EuropeanGreenCapitalAward', 'UGTMS', 'InformationSecurity', 'Lobbyism', 'NatashaBertaud', 'AnimalHealth', 'SocialSituation', 'OSH', 'TobaccoSmuggling', 'Accounting', 'PRESS', 'Drugs', 'Flooding', 'OHIM', 'RacismXenophobia', 'SmallMediumSizeBusinesses', 'MEP', 'MinaAndreeva', 'Counterfeiting', 'FundamentalRights', 'MobilityOfWorkers', 'JRCintheMedia', 'RareEarth', 'TEN-T-News', 'Protectionism', 'Culture', 'Competition-Antitrust', 'WorldEconomy', 'TradeOrganisations', 'ICRC', 'EUInternet', 'Eurozone', 'FoodSafety', 'Globalisation', 'GreenVehicles', 'FoodSecurityFoodAid', 'Innovation', 'PeaceProcess', 'ChildrensRights', 'G8', 'PrivateEquity', 'CrisisResponse', 'Guantanamo', 'MargaritisSchinas', 'G7', 'MilleniumGoals', 'NuclearSafety', 'CivilProtection', 'MARS-STAT', 'DutchPresidencyEU', 'DominantPosition', 'Eurocontrol', 'Discrimination', 'EMF_Health', 'ETF', 'MartinSchulz', 'EU-Canada', 'DigitalContent', 'FransTimmermans', 'Tourism', 'CouncilPresident', 'HumanTraffic', 'G20', 'Telecommunications', 'RegionalPolicy', 'PierreMoscovici', 'MaritimeSafetyEurope', 'FinancialEconomicCrime', 'ECB', 'CybersecurityAntifraud', 'BorderControl', 'Competition', 'FedericaMogherini', 'DimitrisAvramopoulos', 'EuropeanCouncil', 'MaritimeSafetyWorld', 'WorldBank', 'Europol', 'Competition-Mergers', 'PeaceKeeping', 'EU-Japan', 'ClimateChange', 'RenewableEnergies', 'CommunicableDiseases', 'NuclearMedecine', 'mahb', 'Dumping', 'Agriculture', 'FinancialServices', 'Euro', 'Biotechnology', 'PublicHealth', 'NaturalDisasters', 'Society', 'AirTransport', 'EU-Pacific', 'EU-Caribbean', 'NuclearEnergy', 'Jean-ClaudeJuncker', 'ImportsExports', 'EuropeanParliament', 'Environment', 'FightagainstFraud', 'AlternativeEnergy', 'FrontexAgency', 'NuclearDecommissioning', 'EU-China', 'Asylum', 'ManMadeDisasters', 'EU-Africa', 'UNSecretaryGeneral', 'EU-LatinAmerica', 'ECnews', 'Terrorism', 'TaxHaven', 'EU-Asia', 'EU-USA', 'SecurityCouncil', 'TAXUD', 'Nuclear', 'Immigration', 'FRA-EU', 'JRCSafeguards', 'JRCNuclearSecurity', 'UNbodies', 'Security', 'Conflict', 'TerroristAttack'],
    customCategoriesList: ['300BillionEuroPackage',
'Accounting',
'Agriculture',
'AgricultureRuralDevelopment',
'AirTransport',
'AlternativeEnergy',
'AnimalHealth',
'Asylum',
'Audit',
'Biotechnology',
'BluefinTuna',
'BorderControl',
'BudgetoftheEU',
'ChildrensRights',
'Citizenship',
'CivilProtection',
'ClimateAction',
'ClimateChange',
'CommunicableDiseases',
'Competition',
'Competition-Antitrust',
'Competition-Mergers',
'Competition-StateAid',
'Conflict',
'ConsumerPolicy',
'CouncilPresident',
'Counterfeiting',
'CrisisResponse',
'Culture',
'CustomsUnion',
'CybersecurityAntifraud',
'Demography',
'Development',
'DigitalContent',
'DimitrisAvramopoulos',
'Discrimination',
'DominantPosition',
'Drugs',
'Dumping',
'DutchPresidencyEU',
'EADS',
'EBRD',
'ECB',
'ECnews',
'EFSA',
'EIB',
'EMF_Health',
'ENLARGEMENT',
'EPElection',
'EPPoliticalGroups',
'ESA',
'ETF',
'EU-Africa',
'EU-Asia',
'EU-Canada',
'EU-Caribbean',
'EU-China',
'EU-Japan',
'EU-LatinAmerica',
'EU-Pacific',
'EU-USA',
'EUInternet',
'Ecology',
'EducationFilter',
'Employment',
'EnergyMarketsandStrategies',
'Environment',
'EnvironmentalProtection',
'Erasmus',
'Euro',
'Eurocontrol',
'EuropeAid',
'EuropeanCinema',
'EuropeanCouncil',
'EuropeanCulturalCapitals',
'EuropeanGreenCapitalAward',
'EuropeanNeighbourhoodPolicy',
'EuropeanParliament',
'Europol',
'Eurostat',
'Eurozone',
'FRA-EU',
'FedericaMogherini',
'FightagainstFraud',
'FinancialEconomicCrime',
'FinancialServices',
'Flooding',
'FoodSafety',
'FoodSecurityFoodAid',
'ForgeryMoney',
'FransTimmermans',
'FrontexAgency',
'FundamentalRights',
'G20',
'G7',
'G8',
'GMO',
'GenderEquality',
'Globalisation',
'GreenVehicles',
'Guantanamo',
'GunterOettinger',
'HumanTraffic',
'HumanitarianAid',
'ICRC',
'Immigration',
'ImportsExports',
'InformationSecurity',
'InformationSociety',
'Innovation',
'IntellectualProperty',
'JRCNuclearSecurity',
'JRCSafeguards',
'JRCintheMedia',
'Jean-ClaudeJuncker',
'JohannesHahn',
'JonathanHill',
'KristalinaGeorgieva',
'KyotoProtocol',
'Lobbyism',
'MARS-STAT',
'MEP',
'ManMadeDisasters',
'MargaritisSchinas',
'MargretheVestager',
'MaritimeSafetyEurope',
'MaritimeSafetyWorld',
'MaritimeTransport',
'MarosSefcovic',
'MartinSchulz',
'MilleniumGoals',
'MinaAndreeva',
'MobilityOfWorkers',
'NatashaBertaud',
'NaturalDisasters',
'Nuclear',
'NuclearDecommissioning',
'NuclearEnergy',
'NuclearMedecine',
'NuclearSafety',
'OHIM',
'OSH',
'PAC',
'PRESS',
'PeaceKeeping',
'PeaceProcess',
'PetroleumRefineries',
'PierreMoscovici',
'PoliticalUnrest',
'PrivateEquity',
'Protectionism',
'PublicHealth',
'PublicProcurement',
'RacismXenophobia',
'RailTransport',
'RareEarth',
'RatingsAgencies',
'ReferenceMaterials',
'RegionalPolicy',
'RenewableEnergies',
'Roaming',
'RuralDevelopment',
'SchengenArea',
'ScientificStrategy',
'Security',
'SecurityCouncil',
'SingleEuropeanSky',
'SmallMediumSizeBusinesses',
'SocialSituation',
'Society',
'Sport',
'TAXUD',
'TEN-T-News',
'TTIP',
'TaxHaven',
'TechnologyForesight',
'Telecommunications',
'Terrorism',
'TerroristAttack',
'TobaccoSmuggling',
'Tourism',
'TradeOrganisations',
'TransuranicElements',
'UGTMS',
'UNSecretaryGeneral',
'UNbodies',
'VAT',
'VytenisAndriukaitis',
'Whaling',
'WorldBank',
'WorldEconomy',
'Youth',
'eHealth',
'mahb'],
    datesList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August']
};
fillUL(dropdownsData.popularList, document.getElementById("popular"));
fillUL(dropdownsData.popularByTopicList, document.getElementById("popularByTopic"));
fillUL(dropdownsData.datesList, document.getElementById("date"));
fillUL(dropdownsData.customCategoriesList, document.getElementById("custom"));
function fillUL(array, list) {
    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var liItem = document.createElement('li');
        var aItem = document.createElement('a');
        // Set its contents:
        if (list.id == 'custom') {
            aItem.setAttribute('data-value', array[i]);
            aItem.setAttribute('tabIndex', '-1');
            var inputItem = document.createElement('input');
            inputItem.type = "checkbox";
            aItem.appendChild(inputItem);
        }
        aItem.appendChild(document.createTextNode(" " + array[i]));
        liItem.appendChild(aItem);
        // Add it to the list:
        list.appendChild(liItem);
    }
    console.log("filled " + list.id + " dropdown");
    return list;
}

$('.popular-dropdown li a').click(function (e) {
    document.getElementById('label').innerHTML = "Show " + $(this).text() + " filter is chosen";
    document.getElementById('label-gen').innerHTML = ", press GO button to visualize";
    chosenFilter = "popular";
    popular = $(this).text();
    console.log("popular pressed and chosen option is: " + $(this).text());
    return false;
});

$('.by-topic-dropdown li a').click(function (e) {
    document.getElementById('label').innerHTML = "Show most popular for " + $(this).text() + " topic is chosen";
    document.getElementById('label-gen').innerHTML = ", press GO button to visualize";
    chosenFilter = "popularByTopic";
    countOfDiagrams = 9;
    byTopic = $(this).text();
    console.log("popular by topic pressed and chosen option is: " + $(this).text());
    return false;
});

$('.compare-button').click(function (e) {
    document.getElementById('label').innerHTML = "Compare topics filter is chosen";
    document.getElementById('label-gen').innerHTML = ", press GO button to visualize";
    chosenFilter = "compareTopics";
    drawAllTopics(date);
    console.log("compare topics pressed and buttons text is: " + $(this).text());
    return false;
});

$('.check-dropdown a').on('click', function (event) {
    document.getElementById('label').innerHTML = "Show custom categories filter is chosen";
    document.getElementById('label-gen').innerHTML = ", press GO button to visualize";

    var $target = $(event.currentTarget),
        val = $target.attr('data-value'),
        $inp = $target.find('input'),
        idx;

    if ((idx = options.indexOf(val)) > -1) {
        options.splice(idx, 1);
        setTimeout(function () { $inp.prop('checked', false) }, 0);
    } else {
        if (options.length < 12) {
            options.push(val);
            setTimeout(function () { $inp.prop('checked', true) }, 0);
        }
    }

    $(event.target).blur();

    chosenFilter = "customCategories";
    console.log("custom categories pressed and chosen options are: " + options);
    return false;
});

$('.date-dropdown li a').click(function (e) {
    document.getElementById('label-date').innerHTML = ", for " + $(this).text() + " month";
    document.getElementById('label-gen').innerHTML = ", press GO button to visualize";

    date = $(this).text();
    console.log("date pressed and chosen option is: " + $(this).text());
    return false;
});

$('.go-button').click(function (e) {
    document.getElementById('label-gen').innerHTML = "";
    console.log("go button pressed, drawing the visualization of chosen filter: " + chosenFilter);
    if (chosenFilter == "popular")
    {
        //document.write("popular = " + popular + "<br>");
        if (popular == ' 1 most popular')
        {
            countOfDiagrams = 1;
        }
        if (popular == ' 2 most popular')
        {
            countOfDiagrams = 2;
        }
        if (popular == ' 3 most popular')
        {
            countOfDiagrams = 3;
        }
        if (popular == ' 4 most popular')
        {
            countOfDiagrams = 4
        }
        if (popular == ' 5 most popular')
        {
            countOfDiagrams = 5;
        }
        if (popular == ' 6 most popular') {
            countOfDiagrams = 6;
        }
        if (popular == ' 7 most popular') {
            countOfDiagrams = 7;
        }
        if (popular == ' 8 most popular') {
            countOfDiagrams = 8;
        }
        if (popular == ' 9 most popular') {
            countOfDiagrams = 9;
        }
        if (popular == ' 10 most popular') {
            countOfDiagrams = 10;
        }
        if (popular == ' 11 most popular') {
            countOfDiagrams = 11;
        }
        if (popular == ' 12 most popular') {
            countOfDiagrams = 12;
        }
        drawSmallMultiplesByCategory(date);
    }
    if (chosenFilter == "compareTopics")
    {
        drawAllTopics(date);
    }
    if (chosenFilter == "customCategories")
    {
        drawSmallMultiplesByChosenCategory(date);
    }
    if (chosenFilter == "popularByTopic")
    {
        drawSmallMultiplesForMostPopularyCategoriesInChosenTopic(date, byTopic);
    }
    return false;
});

$(".toggle-close a").click(function () {
    $(this).closest(".dropdown-menu").prev().dropdown("toggle");
});



var set; /// это чтобы джейсона туда сохранить (временно)
var arrOfCategories; /// массив всех уникальных категорий
var arrCount = []; /// массив популярости соответствующей категории из arrOfCategories
var arrOfSuperCategories = []; /// массив глобальных категорий (не уникальных), вписаных вручную, соответствуют arrOfCategories

var arrOfPickInYear = [];
var arrOfPickInMonth = [];


var arrOfInfoNews = []; /// массив объектов. Каждый объект - это название категории, ее популярность и ее глобальная категория + максимальное значение в год и за месяц в течение года
var arrOfChosenCategories = []; /// массив категорий, выбранных пользователем

/// массивы подкатегорий соответствующих (названию) глобальных категорий
var culture = [];
var economics = [];
var education = [];
var environment = [];
var health = [];
var politics = [];
var security = [];
var sport = [];
var transport = [];

var allTopics = Create2DArray();/// массив всех 9 массивов (которые выше) 
var arr; /// сюда складываем джейсона

var YAxisMaxValueYear = 0;   /// максимальное значение на оси У
var YAxisMaxValueMonth = 0; ///  максимальное значение на оси X
var YAxisMaxValueYearForTopics = 0;
var YAxisMaxValueMonthForTopics = 0;
var flag = ''; /// показать весь год или по месяцам
var flagForTopics = ''; /// показать 9 глобальных категорий, или 9 самых популярных из одной категории, но, может, он и не  нужен...



//////////////////////////////////////////////////////////////////////////
////   TBD    

d3.json("data/NewsItemsSmallData.js", initialize);

///// создаем массивы (в т.ч. массив объектов),
///// определяем максимальный размер по оси У за месяц и за год,
///// получаем отортированный массив объектов
function initialize(d)
{
    var time = Create2DArray();  /// двумерный массив - 13 рядов - месяцы. Каждый ряд - 32 шт. - дни соответствующего месяца. (нужен отдельный для КАЖДОЙ уникальной новости) Каждый (i,j) - это сколько новостей (по соотв. теме) было в этот день 
    var yearTime = new Array(13).fill(0);  /// для каждой уникальной новости количество ее упоминаний - каждая ячейка - сумма соответствующего ряда в time (т.е. сколько раз в месяц), сумма всех ячеек - сколько раз в год
    var newsTime; /// для того чтобы разделить дату на составные части (день, месяц)
    var tmp, date, day, month;  /// тут и так понятно
    set = new StringSet(); /// тут временно будут храниться названия категорий
    arr = d; /// массив объектов из джейсона
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
"transport",
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
"transport",
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
"transport",
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
"transport",
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
"transport",
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
"transport",
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
"transport",
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
                 
        /// initialize year max and month max
        //tmp = initMaxYearAndMaxMonth(yearTime, 'byYear');
        //if (tmp > YAxisMaxValueYear) {
        //    YAxisMaxValueYear = tmp;
        //}
        //        tmp = initMaxYearAndMaxMonth(time, 'byMonth');
        //if (tmp > YAxisMaxValueMonth) {
        //    YAxisMaxValueMonth = tmp;
        //}
        arrOfPickInYear[z] = initMaxYearAndMaxMonth(yearTime, 'byYear');
        //if (arrOfPickInYear[z] > YAxisMaxValueYear)
        //{
        //    YAxisMaxValueYear = arrOfPickInYear[z];
        //}
        arrOfPickInMonth[z] = initMaxYearAndMaxMonth(time, 'byMonth');
        //if (arrOfPickInMonth[z] > YAxisMaxValueMonth)
        //{
        //    YAxisMaxValueMonth = arrOfPickInMonth[z]
        //}

        /// заполняем поле PickInYear соответствующего объекта в массиве arrOfInfoNews
        infoNew.PickInYear = arrOfPickInYear[z];

        /// заполняем поле PickInMonth соответствующего объекта в массиве arrOfInfoNews
        infoNew.PickInMonth = arrOfPickInMonth[z];

        /// заполняем поле newsYearCount соответствующего объекта в массиве arrOfInfoNews
        arrOfInfoNews[z] = infoNew;
    }

    /// сортируем по популярности для дефолтного фильтра
    sortBy("popularity", arrOfInfoNews);
    //sortBy("category");
    //eto chtoby raspechatat' v "tipa json" formate
    //document.write("[" + "<br>");
    //for (z = 0; z < arrOfCategories.length; z++) {
    //    //document.write(arrOfInfoNews[z].newsCategoryName + "<br>");
    //    //document.write("{" + "<br>" + '"category": { "term": "' + arrOfInfoNews[z].newsCategoryName + '" },' + "<br>" + '"popularity": "' + arrOfInfoNews[z].newsYearCount + '"' + "<br>" + '},' + "<br>");
    //}
    //document.write("<br>" + "]");
    // это просто распечатка массива, если нужно
    //for (z = 0; z < arrOfCategories.length; z++) {
    //    document.write(arrOfInfoNews[z].newsCategoryName + "<br>");
    //}
    /// создаем массив глобальных категорий с подкатегориями (двумерный)
    createArrOfTopics();
    //for (i = 0; i < 9; i++)
    //{
    //    var count = 0;
    //    for (j = 0; j < allTopics[i].length; j++)
    //    {
    //        count += allTopics[i][j].newsYearCount;
    //    }
    //    document.write(count + "<br>");
    //}


    drawAllTopics("All");
    
}

/// для того, чтобы нарисовать ОДИН график нужно вызвать эту функцию
function execute(viewBy, currCategory)
{
    if (viewBy == 'All')
    {
        flag = 'byYear';
    }
    else
    {
        flag = 'byMonth';
        if (viewBy == ' January') {
            view = 1;
        }
        else if (date == ' February') {
            view = 2;
        }
        else if (date == ' March') {
            view = 3;
        }
        else if (date == ' April') {
            view = 4;
        }
        else if (date == ' May') {
            view = 5;
        }
        else if (date == ' June') {
            view = 6;
        }
        else if (date == ' July') {
            view = 7;
        }
        else if (date == ' August') {
            view = 8;
        }
    }

    
    d3.json("data/NewsItemsSmallData.js", convert); /// зачем мы это опять делаем так не очень понятно, но, наверное, лучше уже и не трогать
    function convert()
    {
        /// ну, ужас, конечно - все зачем-то по второму разу... но... раз он не будет на это смотреть...
        var time = Create2DArray();
        var yearTime = new Array(13).fill(0);
        //var arr = d;
        var newsTime;
        var tmp, date, day;
        /// хотя, честно говоря, если не делать это по новой для каждой категории, то нужно было бы хранить весь этот огромный массив массивов... так что если не жалко времени на постоянные пересчеты, то какая-то логика в этом есть
        
        var category = currCategory; /// по этой категории будем строить график
        /// снова заполняем табличку
        for (i = 0; i < arr.length; i++) {
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
        var height = 400,
        width = 400,
        margin = 40,
        YAxisMaxValue = (flag == 'byYear') ? YAxisMaxValueYear : YAxisMaxValueMonth;
        YAxisMaxValue += 10;
        data = [];
        //// создание объекта svg
        var svg = d3.select("body").append("svg")
                .attr("class", "axis")
                .attr("width", width)
                .attr("height", height)
            //// длина оси X= ширина контейнера svg - отступ слева и справа
                .attr("align", "center");
    

        svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width - 30)
    .attr("y", height - 6)
	.style("font-size", "12px")
    .text("Date");

        svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("y", 15)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .style("font-size", "11px")
        .text("News");

        svg.append("text")
            .attr("x", 200)
            .attr("y", 15)
            .attr("text-anchor", "middle")
            .attr("dy", ".75em")
            .style("float", "center")
            .style("font-size", "15px")
            .style("font-weight", "bold")
            .text(currCategory);






        var xAxisLength = width - 2 * margin;
        //// длина оси Y = высота контейнера svg - отступ сверху и снизу
        var yAxisLength = height - 2 * margin;
        //// функция интерполяции значений на ось Х  
        
        if (flag == 'byYear')
        {
            dateFrom = new Date(2015, 11, 1);
            dateTo = new Date(2016, 11, 31);
        }
        else {
            dateFrom = createDateForX(0);
            dateTo = createDateForX(31);
        }

        var scaleX = d3.time.scale()
                .domain([dateFrom, dateTo])
                .range([0, xAxisLength]);
        //// функция интерполяции значений на ось Y
        var scaleY = d3.scale.linear()
                    .domain([YAxisMaxValue, 0])
                    .range([0, yAxisLength]);
        //// масштабирование реальных данных в данные для нашей координатной системы

        if (flag == 'byMonth') {
            for (i = 0; i < time[view].length; i++) {
                var temp = time[view][i];
                var day = createDateForX(i);
                data.push({ x: scaleX(day) + margin, y: scaleY(temp) + margin });
                //// создаем ось X  
                var xAxis = d3.svg.axis()
                         .scale(scaleX)
                         .orient("bottom")
                         .ticks(6)
                         .tickFormat(d3.time.format('%d.%b'));
                }
        }
        else if (flag == 'byYear') {
            for (i = 0; i < yearTime.length; i++) {
                var month;
                if (i == 0) {
                    month = new Date(2015, 11, 1);
                }
                else {
                    month = new Date(2016, i - 1, 1);
                }
                data.push({ x: scaleX(month) + margin, y: scaleY(yearTime[i]) + margin });
            }
            //// создаем ось X 
            var xAxis = d3.svg.axis()
                     .scale(scaleX)
                     .orient("bottom")
                     .ticks(12)
                     .tickFormat(d3.time.format('%b'));
        }
       
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

function drawAllTopics(viewBy)
{
    d3.select("body").selectAll("svg").remove();
    /// так, конечно, делать нельзя...но...
    YAxisMaxValueYearForTopics = 16000;
    YAxisMaxValueMonthForTopics = 2200;
    drawOneTopicInOneGraph(security, "Security", viewBy);
    drawOneTopicInOneGraph(politics, "Politics", viewBy);
    drawOneTopicInOneGraph(health, "Health", viewBy);
    drawOneTopicInOneGraph(environment, "Environment", viewBy);
    drawOneTopicInOneGraph(economics, "Economics", viewBy);
    drawOneTopicInOneGraph(culture, "Culture", viewBy);
    drawOneTopicInOneGraph(sport, "Sport", viewBy);
    drawOneTopicInOneGraph(transport, "transport", viewBy);
    drawOneTopicInOneGraph(education, "Education", viewBy);
}

function drawOneTopicInOneGraph(TopicsArr, nameOfTopic, viewBy)
{
    var time = Create2DArray();
    var yearTime = new Array(13).fill(0);
    var newsTime;
    var tmp, date, day;

    if (viewBy == 'All') {
        flag = 'byYear';
    }
    else {
        flag = 'byMonth';
        if (viewBy == ' January') {
            view = 1;
        }
        if (viewBy == ' February') {
            view = 2;
        }
        if (viewBy == ' March') {
            view = 3;
        }
        if (viewBy == ' April') {
            view = 4;
        }
        if (viewBy == ' May') {
            view = 5;
        }
        if (viewBy == ' June') {
            view = 6;
        }
        if (viewBy == ' July') {
            view = 7;
        }
        if (viewBy == ' August') {
            view = 8;
        }
    }


    for (var j = 0; j < TopicsArr.length; j++) /// для каждого объекта (маленькой категории) в массиве глобальной категории
    {
        var category = TopicsArr[j].newsCategoryName; /// по этой категории будем строить график
        for (i = 0; i < arr.length; i++) /// проходим по всему массиву новостей из джейсона
        {
            tmp = arr[i]['category'];
            if ('category' in arr[i])
            {
                if (tmp.length) /// это если там массив категорий для одной новости
                {
                   for (z = 0; z < tmp.length; z++)
                    {
                        if (tmp[z]['term'] == category)
                        {
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
                    if (tmp['term'] == category)
                    {
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
    }
    
       
   /// теперь рисуем - на всякий случай, пока просто повторю код, а не буду выносить в отдельную функцию
    var height = 400,
    width = 400,
    margin = 40,
    YAxisMaxValue = (flag == 'byYear') ? YAxisMaxValueYearForTopics : YAxisMaxValueMonthForTopics;
    YAxisMaxValue += 10;
    data = [];
    //// создание объекта svg
   var svg = d3.select("body").append("svg")
            .attr("class", "axis")
            .attr("width", width)
            .attr("height", height)
        //// длина оси X= ширина контейнера svg - отступ слева и справа
            .attr("align", "center");
    

       svg.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .attr("x", width - 30)
        .attr("y", height - 6)
        .style("font-size", "12px")
        .text("Date");

    svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 15)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .style("font-size", "11px")
    .text("News");

    svg.append("text")
        .attr("x", 200)
        .attr("y", 15)
        .attr("text-anchor", "middle")
        .attr("dy", ".75em")
        .style("float", "center")
        .style("font-size", "15px")
        .style("font-weight", "bold")
        .text(nameOfTopic);


    var xAxisLength = width - 2 * margin;
    //// длина оси Y = высота контейнера svg - отступ сверху и снизу
    var yAxisLength = height - 2 * margin;
    //// функция интерполяции значений на ось Х  
    
    if (flag == 'byYear') {
        dateFrom = new Date(2015, 11, 1);
        dateTo = new Date(2016, 11, 31);
    }
    else {
        dateFrom = createDateForX(0);
        dateTo = createDateForX(31);
    }

    var scaleX = d3.time.scale() 
                .domain([dateFrom, dateTo])
                .range([0, xAxisLength]);

    //// функция интерполяции значений на ось Y
    var scaleY = d3.scale.linear()
                .domain([YAxisMaxValue, 0])
                .range([0, yAxisLength]);
    //// масштабирование реальных данных в данные для нашей координатной системы

    if (flag == 'byMonth') {
        for (i = 0; i < time[view].length; i++) {
            var temp = time[view][i];
            var day = createDateForX(i);
            
            data.push({ x: scaleX(day) + margin, y: scaleY(temp) + margin });
            //// создаем ось X 
            var xAxis = d3.svg.axis()
                         .scale(scaleX)
                         .orient("bottom")
                         .ticks(6)
                         .tickFormat(d3.time.format('%d.%b'));
        }
    }
    else if (flag == 'byYear') {
        for (i = 0; i < yearTime.length; i++) {
            var month;
            if (i == 0) {
                month = new Date(2015, 11, 1);
            }
            else
            {
                month = new Date(2016, i - 1, 1);
            }
            data.push({ x: scaleX(month) + margin, y: scaleY(yearTime[i]) + margin });
        }
    
    //// создаем ось X  
    var xAxis = d3.svg.axis()
                 .scale(scaleX)
                 .orient("bottom")
                 .ticks(12)
                 .tickFormat(d3.time.format('%b'));
    }
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

function initMaxYearAndMaxMonth(numbers, flag)
{
    var max = 0;
    if (flag == 'byYear')
    {
        for (var i = 0; i < numbers.length; i++)
        {
            if (numbers[i] > max)
            {
                max = numbers[i];
            }
        }
    }
   else if (flag = 'byMonth') {
       for (var i = 0; i < numbers.length; i++)
       {
           for (var j = 0; j < numbers[i].length; j++)
           {
               if (numbers[i][j] > max)
               {
                    max = numbers[i][j];
                }
            }
        }
    }
   return max;
}

function MaxYearForOneTopic(array)
{
    var max = 0;
    for (var i = 0; i < array.length; i++)
    {
        if (array[i].PickInYear > max)
        {
            max = array[i].PickInYear;
        }
    }
    return max;
}
function MaxMonthForOneTopic(array) 
{
    var max = 0;
    for (var i = 0; i < array.length; i++) 
    {
        if (array[i].PickInMonth > max)
        {
            max = array[i].PickInMonth;
        }
    }
    return max;
}

function drawSmallMultiplesByCategory(viewBy)
{
    d3.select("body").selectAll("svg").remove();
    YAxisMaxValueYear = 0;
    YAxisMaxValueMonth = 0;
    /// т.к. категории отсортированы по возрастанию, нужно взять ПОСЛЕДНИЕ
    for (i = 1; i < countOfDiagrams+1; i++)
    {
        var curr = arrOfInfoNews.length - i;
        if (viewBy == 'All') {
            if (arrOfInfoNews[curr].PickInYear > YAxisMaxValueYear)
            {
                YAxisMaxValueYear = arrOfInfoNews[curr].PickInYear;
            }
        }
        else
        {
            if (arrOfInfoNews[curr].PickInMonth > YAxisMaxValueMonth)
            {
                YAxisMaxValueMonth = arrOfInfoNews[curr].PickInMonth;
            }
        }
        execute(viewBy, arrOfInfoNews[curr].newsCategoryName);
    }
}

function drawSmallMultiplesByChosenCategory(viewBy) 
{
    d3.select("body").selectAll("svg").remove();
    YAxisMaxValueYear = 0;
    YAxisMaxValueMonth = 0;
    var optionsArr = [];
    for (i = 0; i < options.length; i++)
    {
        for (j = 0; j < arrOfInfoNews.length; j++)
        {
            if (options[i] == arrOfInfoNews[j].newsCategoryName)
            {
                optionsArr[i] = arrOfInfoNews[j];
                if (viewBy == 'All')
                {
                    if (arrOfInfoNews[j].PickInYear > YAxisMaxValueYear)
                    {
                        YAxisMaxValueYear = arrOfInfoNews[j].PickInYear;
                    }
                }
                else
                {
                    if (arrOfInfoNews[j].PickInMonth > YAxisMaxValueMonth)
                    {
                        YAxisMaxValueMonth = arrOfInfoNews[j].PickInMonth;
                    }
                }
            }
        }
    }
    sortBy("popularity", optionsArr);
    for (i = 1; i < optionsArr.length+1; i++)
    {
        var curr = optionsArr.length - i;
        execute(viewBy, optionsArr[curr].newsCategoryName);
    }
}

function drawSmallMultiplesForMostPopularyCategoriesInChosenTopic(viewBy, chosenTopic) {
    d3.select("body").selectAll("svg").remove();
    YAxisMaxValueYear = 0;
    YAxisMaxValueMonth = 0;
    if (chosenTopic == " Culture")
    {
        topic = culture;
    }
    else if (chosenTopic == " Economics")
    {
        topic = economics;
    }
    else if (chosenTopic == " Education")
    {
        topic = education;
    }
    else if (chosenTopic == " Environment")
    {
        topic = environment;
    }
    else if (chosenTopic == " Health")
    {
        topic = health;
    }
    else if (chosenTopic == " Politics")
    {
        topic = politics;
    }
    else if (chosenTopic == " Security")
    {
        topic = security;
    }
    else if (chosenTopic == " Sport")
    {
        topic = sport;
    }
    else if (chosenTopic == " Transport")
    {
        topic = transport;
    }
    if (countOfDiagrams > topic.length)
    {
        countOfDiagrams = topic.length;
    }
    for (i = 1; i < countOfDiagrams+1; i++)
    {
        var curr = topic.length - i;
        if (viewBy == 'All') {
            if (topic[curr].PickInYear > YAxisMaxValueYear)
            {
                YAxisMaxValueYear = topic[curr].PickInYear; // это нелогично, но работает...
            }
        }
        else {
            if (topic[curr].PickInMonth > YAxisMaxValueMonth)
            {
                YAxisMaxValueMonth = topic[curr].PickInMonth;
            }
        }
        execute(viewBy, topic[curr].newsCategoryName);
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

class infoNews
{
    constructor(name)
    {
        this.newsCategoryName = name;
        this.newsYearCount = 0;
        this.topic = "";
        this.PickInYear = 0;
        this.PickInMonth = 0;
    }
}

function sortBy(byThe, arr)
{
    if (byThe == "popularity")
    {
        arr.sort(function (a, b)
        {
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
        arr.sort(function (a, b) {
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
    sortBy("popularity", arrOfInfoNews);
}

/// а тут собираем их в кучку
function createArrOfTopics()
{
    createArrOfOneTopic("Economics", economics);
    createArrOfOneTopic("Education", education);
    createArrOfOneTopic("Environment", environment);
    createArrOfOneTopic("Culture", culture);
    createArrOfOneTopic("Health", health);
    createArrOfOneTopic("Politics", politics);
    createArrOfOneTopic("Sport", sport);
    createArrOfOneTopic("Security", security);
    createArrOfOneTopic("transport", transport);

    allTopics[0] = security;
    allTopics[1] = politics;
    allTopics[2] = health;
    allTopics[3] = environment;
    allTopics[4] = economics;
    allTopics[5] = culture;
    allTopics[6] = sport;
    allTopics[7] = transport;
    allTopics[8] = education;

    /// оставлю это пока для примера как с этим массивом работать
    //for (var i = 0; i < 9; i++)
    //{
    //    document.write("<br>" + "NEW TOPIC" + "&nbsp" + allTopics[i][0].topic + "<br>" + "<br>");
    //    for (z = 0; z < allTopics[i].length; z++) {
    //        document.write(allTopics[i][z].newsCategoryName + "&nbsp" + allTopics[i][z].newsYearCount + "<br>");
    //    }
    //}
}

function createDateForX(dayDate)
{
    if (date == ' January') {
        if (dayDate == 0) {
            day = new Date(2015, 11, 31);
        }
        else
        {
            day = new Date(2016, 0, dayDate);
        }
    }
    else if (date == ' February')
    {
        if (dayDate == 0)
        {
            day = new Date(2016, 0, 31);
        }
        else
        {
            day = new Date(2016, 1, dayDate);
        }
    }
    else if (date == ' March')
    {
        if (dayDate == 0)
        {
            day = new Date(2016, 1, 28);
        }
        else
        {
            day = new Date(2016, 2, dayDate);
        }
    }
    else if (date == ' April')
    {
        if (dayDate == 0)
        {
            day = new Date(2016, 2, 31);
        }
        else
        {
            day = new Date(2016, 3, dayDate);
        }
    }
    else if (date == ' May')
    {
        if (dayDate == 0) {
            day = new Date(2016, 3, 30);
        }
        else
        {
            day = new Date(2016, 4, dayDate);
        }
    }
    else if (date == ' June')
    {
        if (dayDate == 0) {
            day = new Date(2016, 4, 31);
        }
        else {
            day = new Date(2016, 5, dayDate);
        }
    }
    else if (date == ' July')
    {
        if (dayDate == 0) {
            day = new Date(2016, 5, 30);
        }
        else {
            day = new Date(2016, 6, dayDate);
        }
    }
    else if (date == ' August')
    {
        if (dayDate == 0) {
            day = new Date(2016, 6, 31);
        }
        else {
            day = new Date(2016, 7, dayDate);
        }
    }
    return day;
}

function dayFrom()
{
    if (date == ' January') {
        if (dayDate == 0) {
            day = new Date(2015, 11, 31);
        }
        else {
            day = new Date(2016, 0, dayDate);
        }
    }
    else if (date == ' February') {
        if (dayDate == 0) {
            day = new Date(2016, 0, 31);
        }
        else {
            day = new Date(2016, 1, dayDate);
        }
    }
    else if (date == ' March') {
        if (dayDate == 0) {
            day = new Date(2016, 1, 28);
        }
        else {
            day = new Date(2016, 2, dayDate);
        }
    }
    else if (date == ' April') {
        if (dayDate == 0) {
            day = new Date(2016, 2, 31);
        }
        else {
            day = new Date(2016, 3, dayDate);
        }
    }
    else if (date == ' May') {
        if (dayDate == 0) {
            day = new Date(2016, 3, 30);
        }
        else {
            day = new Date(2016, 4, dayDate);
        }
    }
    else if (date == ' June') {
        if (dayDate == 0) {
            day = new Date(2016, 4, 31);
        }
        else {
            day = new Date(2016, 5, dayDate);
        }
    }
    else if (date == ' July') {
        if (dayDate == 0) {
            day = new Date(2016, 5, 30);
        }
        else {
            day = new Date(2016, 6, dayDate);
        }
    }
    else if (date == ' August') {
        if (dayDate == 0) {
            day = new Date(2016, 6, 31);
        }
        else {
            day = new Date(2016, 7, dayDate);
        }
    }
    return day;
}