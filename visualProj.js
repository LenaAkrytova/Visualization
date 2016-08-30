
//document.getElementById("month").addEventListener("click", function (viewBy) {
//    //execute(viewBy);
//});
//document.getElementById("year").addEventListener("click", function (viewBy) {
//    //execute(viewBy);
//});
//$('div.dropdown ul.dropdown-menu li a').click(function (e) {
//    var $div = $(this).parent().parent().parent();
//    var $btn = $div.find('button');
//    drawSmallMultiplesByCategory($(this).text());
//    return false;
//});
//$(".dropdown-menu a").click(function () {
//    $(this).closest(".dropdown-menu").prev().dropdown("toggle");
//});
//$('div.dropdown ul.dropdown-menu li').click(function (e) {
//    addToArrOfChosenCategories($(this).text());
//    //document.write($(this).text());
//})

var popular = "";
var byTopic = "";
var options = [];
var date = "All";
var chosenFilter = "popular";

var countOfDiagrams = 9; /// сколько диаграмм показывать на странице (by defoult 9)
//var chosenMonth = 0;


//$('.popular-dropdown li a').click(function (e) {
//    chosenFilter = "popular";
//    popular = $(this).text();
//    console.log("popular pressed and chosen option is: " + $(this).text());
//    return false;
//});
//$('.by-topic-dropdown li a').click(function (e) {
//    chosenFilter = "popularByTopic";
//    byTopic = $(this).text();
//    console.log("popular by topic pressed and chosen option is: " + $(this).text());
//    return false;
//});
//$('.compare-button').click(function (e) {
//    chosenFilter = "compareTopics";
//    console.log("compare topics pressed and buttons text is: " + $(this).text());
//    return false;
//});
//$('.check-dropdown a').on('click', function (event) {
//    var $target = $(event.currentTarget),
//        val = $target.attr('data-value'),
//        $inp = $target.find('input'),
//        idx;
//    if ((idx = options.indexOf(val)) > -1) {
//        options.splice(idx, 1);
//        setTimeout(function () { $inp.prop('checked', false) }, 0);
//    } else {
//        options.push(val);
//        setTimeout(function () { $inp.prop('checked', true) }, 0);
//    }
//    $(event.target).blur();
//    chosenFilter = "customCategories";
//    console.log("custom categories pressed and chosen options are: " + options);
//    return false;
//});
//$('.date-dropdown li a').click(function (e) {
//    date = $(this).text();
//    console.log("date pressed and chosen option is: " + $(this).text());
//    return false;
//});
//$('.go-button').click(function (e) {
//    console.log("go button pressed, drawing the visualization of chosen filter: " + chosenFilter);
//    ////////////////////
//    // это пока временный вариант, чтобы посмотреть, что оно работает
//    drawSmallMultiplesByCategory('2016');
//    //////////////////////
//    return false;
//});
//$(".toggle-close a").click(function () {
//    $(this).closest(".dropdown-menu").prev().dropdown("toggle");
//});

//var dropdownsData = {
//    popularList: ['1 most popular', '2 most popular', '3 most popular', '4 most popular', '5 most popular', '6 most popular', '7 most popular', '8 most popular', '9 most popular', '10 most popular', '11 most popular', '12 most popular'],
//    popularByTopicList: ['Culture', 'Education', 'Environment', 'Health', 'Economics', 'Politics', 'Security', 'Sport', 'Transport'],
//    customCategoriesList: ['300BillionEuroPackage', 'GMO', 'GunterOettinger', 'Eurostat', 'Demography', 'Sport', 'EuropeanCinema', 'JonathanHill', 'SchengenArea', 'InformationSociety', 'EBRD', 'TransuranicElements', 'MargretheVestager', 'RailTransport', 'MarosSefcovic', 'Competition-StateAid', 'AgricultureRuralDevelopment', 'Roaming', 'EuropeanNeighbourhoodPolicy', 'RatingsAgencies', 'HumanitarianAid', 'EPElection', 'eHealth', 'VytenisAndriukaitis', 'PublicProcurement', 'IntellectualProperty', 'ReferenceMaterials', 'Employment', 'PAC', 'PoliticalUnrest', 'Audit', 'EuropeanCulturalCapitals', 'EnvironmentalProtection', 'GenderEquality', 'EIB', 'SingleEuropeanSky', 'ScientificStrategy', 'KristalinaGeorgieva', 'CustomsUnion', 'TTIP', 'EuropeAid', 'RuralDevelopment', 'EADS', 'TechnologyForesight', 'VAT', 'Youth', 'ENLARGEMENT', 'Erasmus', 'ESA', 'ClimateAction', 'PetroleumRefineries', 'ForgeryMoney', 'MaritimeTransport', 'EducationFilter', 'JohannesHahn', 'Ecology', 'Development', 'EnergyMarketsandStrategies', 'BudgetoftheEU', 'EFSA', 'EPPoliticalGroups', 'EuropeanGreenCapitalAward', 'UGTMS', 'InformationSecurity', 'Lobbyism', 'NatashaBertaud', 'AnimalHealth', 'SocialSituation', 'OSH', 'TobaccoSmuggling', 'Accounting', 'PRESS', 'Drugs', 'Flooding', 'OHIM', 'RacismXenophobia', 'SmallMediumSizeBusinesses', 'MEP', 'MinaAndreeva', 'Counterfeiting', 'FundamentalRights', 'MobilityOfWorkers', 'JRCintheMedia', 'RareEarth', 'TEN-T-News', 'Protectionism', 'Culture', 'Competition-Antitrust', 'WorldEconomy', 'TradeOrganisations', 'ICRC', 'EUInternet', 'Eurozone', 'FoodSafety', 'Globalisation', 'GreenVehicles', 'FoodSecurityFoodAid', 'Innovation', 'PeaceProcess', 'ChildrensRights', 'G8', 'PrivateEquity', 'CrisisResponse', 'Guantanamo', 'MargaritisSchinas', 'G7', 'MilleniumGoals', 'NuclearSafety', 'CivilProtection', 'MARS-STAT', 'DutchPresidencyEU', 'DominantPosition', 'Eurocontrol', 'Discrimination', 'EMF_Health', 'ETF', 'MartinSchulz', 'EU-Canada', 'DigitalContent', 'FransTimmermans', 'Tourism', 'CouncilPresident', 'HumanTraffic', 'G20', 'Telecommunications', 'RegionalPolicy', 'PierreMoscovici', 'MaritimeSafetyEurope', 'FinancialEconomicCrime', 'ECB', 'CybersecurityAntifraud', 'BorderControl', 'Competition', 'FedericaMogherini', 'DimitrisAvramopoulos', 'EuropeanCouncil', 'MaritimeSafetyWorld', 'WorldBank', 'Europol', 'Competition-Mergers', 'PeaceKeeping', 'EU-Japan', 'ClimateChange', 'RenewableEnergies', 'CommunicableDiseases', 'NuclearMedecine', 'mahb', 'Dumping', 'Agriculture', 'FinancialServices', 'Euro', 'Biotechnology', 'PublicHealth', 'NaturalDisasters', 'Society', 'AirTransport', 'EU-Pacific', 'EU-Caribbean', 'NuclearEnergy', 'Jean-ClaudeJuncker', 'ImportsExports', 'EuropeanParliament', 'Environment', 'FightagainstFraud', 'AlternativeEnergy', 'FrontexAgency', 'NuclearDecommissioning', 'EU-China', 'Asylum', 'ManMadeDisasters', 'EU-Africa', 'UNSecretaryGeneral', 'EU-LatinAmerica', 'ECnews', 'Terrorism', 'TaxHaven', 'EU-Asia', 'EU-USA', 'SecurityCouncil', 'TAXUD', 'Nuclear', 'Immigration', 'FRA-EU', 'JRCSafeguards', 'JRCNuclearSecurity', 'UNbodies', 'Security', 'Conflict', 'TerroristAttack'],
//    datesList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August']
//};
//fillUL(dropdownsData.popularList, document.getElementById("popular"));
//fillUL(dropdownsData.popularByTopicList, document.getElementById("popularByTopic"));
//fillUL(dropdownsData.datesList, document.getElementById("date"));
//fillUL(dropdownsData.customCategoriesList, document.getElementById("custom"));
//function fillUL(array, list) {
//    for (var i = 0; i < array.length; i++) {
//        // Create the list item:
//        var liItem = document.createElement('li');
//        var aItem = document.createElement('a');
//        // Set its contents:
//        if (list.id == 'custom') {
//            aItem.setAttribute('data-value', array[i]);
//            aItem.setAttribute('tabIndex', '-1');
//            var inputItem = document.createElement('input'); 
//            inputItem.type = "checkbox";
//            aItem.appendChild(inputItem);
//        }
//        aItem.appendChild(document.createTextNode(" " + array[i]));
//        liItem.appendChild(aItem);
//        // Add it to the list:
//        list.appendChild(liItem);
//    }
//    console.log("filled " + list.id + " dropdown");
//    return list;
//}

var dropdownsData = {
    popularList: ['1 most popular', '2 most popular', '3 most popular', '4 most popular', '5 most popular', '6 most popular', '7 most popular', '8 most popular', '9 most popular', '10 most popular', '11 most popular', '12 most popular'],
    popularByTopicList: ['Culture', 'Economics', 'Education', 'Environment', 'Health', 'Politics', 'Security', 'Sport', 'Transport'],
    customCategoriesList: ['300BillionEuroPackage', 'GMO', 'GunterOettinger', 'Eurostat', 'Demography', 'Sport', 'EuropeanCinema', 'JonathanHill', 'SchengenArea', 'InformationSociety', 'EBRD', 'TransuranicElements', 'MargretheVestager', 'RailTransport', 'MarosSefcovic', 'Competition-StateAid', 'AgricultureRuralDevelopment', 'Roaming', 'EuropeanNeighbourhoodPolicy', 'RatingsAgencies', 'HumanitarianAid', 'EPElection', 'eHealth', 'VytenisAndriukaitis', 'PublicProcurement', 'IntellectualProperty', 'ReferenceMaterials', 'Employment', 'PAC', 'PoliticalUnrest', 'Audit', 'EuropeanCulturalCapitals', 'EnvironmentalProtection', 'GenderEquality', 'EIB', 'SingleEuropeanSky', 'ScientificStrategy', 'KristalinaGeorgieva', 'CustomsUnion', 'TTIP', 'EuropeAid', 'RuralDevelopment', 'EADS', 'TechnologyForesight', 'VAT', 'Youth', 'ENLARGEMENT', 'Erasmus', 'ESA', 'ClimateAction', 'PetroleumRefineries', 'ForgeryMoney', 'MaritimeTransport', 'EducationFilter', 'JohannesHahn', 'Ecology', 'Development', 'EnergyMarketsandStrategies', 'BudgetoftheEU', 'EFSA', 'EPPoliticalGroups', 'EuropeanGreenCapitalAward', 'UGTMS', 'InformationSecurity', 'Lobbyism', 'NatashaBertaud', 'AnimalHealth', 'SocialSituation', 'OSH', 'TobaccoSmuggling', 'Accounting', 'PRESS', 'Drugs', 'Flooding', 'OHIM', 'RacismXenophobia', 'SmallMediumSizeBusinesses', 'MEP', 'MinaAndreeva', 'Counterfeiting', 'FundamentalRights', 'MobilityOfWorkers', 'JRCintheMedia', 'RareEarth', 'TEN-T-News', 'Protectionism', 'Culture', 'Competition-Antitrust', 'WorldEconomy', 'TradeOrganisations', 'ICRC', 'EUInternet', 'Eurozone', 'FoodSafety', 'Globalisation', 'GreenVehicles', 'FoodSecurityFoodAid', 'Innovation', 'PeaceProcess', 'ChildrensRights', 'G8', 'PrivateEquity', 'CrisisResponse', 'Guantanamo', 'MargaritisSchinas', 'G7', 'MilleniumGoals', 'NuclearSafety', 'CivilProtection', 'MARS-STAT', 'DutchPresidencyEU', 'DominantPosition', 'Eurocontrol', 'Discrimination', 'EMF_Health', 'ETF', 'MartinSchulz', 'EU-Canada', 'DigitalContent', 'FransTimmermans', 'Tourism', 'CouncilPresident', 'HumanTraffic', 'G20', 'Telecommunications', 'RegionalPolicy', 'PierreMoscovici', 'MaritimeSafetyEurope', 'FinancialEconomicCrime', 'ECB', 'CybersecurityAntifraud', 'BorderControl', 'Competition', 'FedericaMogherini', 'DimitrisAvramopoulos', 'EuropeanCouncil', 'MaritimeSafetyWorld', 'WorldBank', 'Europol', 'Competition-Mergers', 'PeaceKeeping', 'EU-Japan', 'ClimateChange', 'RenewableEnergies', 'CommunicableDiseases', 'NuclearMedecine', 'mahb', 'Dumping', 'Agriculture', 'FinancialServices', 'Euro', 'Biotechnology', 'PublicHealth', 'NaturalDisasters', 'Society', 'AirTransport', 'EU-Pacific', 'EU-Caribbean', 'NuclearEnergy', 'Jean-ClaudeJuncker', 'ImportsExports', 'EuropeanParliament', 'Environment', 'FightagainstFraud', 'AlternativeEnergy', 'FrontexAgency', 'NuclearDecommissioning', 'EU-China', 'Asylum', 'ManMadeDisasters', 'EU-Africa', 'UNSecretaryGeneral', 'EU-LatinAmerica', 'ECnews', 'Terrorism', 'TaxHaven', 'EU-Asia', 'EU-USA', 'SecurityCouncil', 'TAXUD', 'Nuclear', 'Immigration', 'FRA-EU', 'JRCSafeguards', 'JRCNuclearSecurity', 'UNbodies', 'Security', 'Conflict', 'TerroristAttack'],
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
    byTopic = $(this).text();
    console.log("popular by topic pressed and chosen option is: " + $(this).text());
    return false;
});

$('.compare-button').click(function (e) {
    document.getElementById('label').innerHTML = "Compare topics filter is chosen";
    document.getElementById('label-gen').innerHTML = ", press GO button to visualize";
    chosenFilter = "compareTopics";
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
var arrOfInfoNews = []; /// массив объектов. Каждый объект - это название категории, ее популярность и ее глобальная категория
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
var transportation = [];

var allTopics = Create2DArray();/// массив всех 9 массивов (которые выше) 
//var allTopicsName = ['Culture', 'Education', 'Environment', 'Health', 'Economics', 'Politics', 'Security', 'Sport', 'Transport'];
var arr; /// сюда складываем джейсона

var YAxisMaxValueYear = 0;   /// максимальное значение на оси У
var YAxisMaxValueMonth = 0; ///  максимальное значение на оси X
var flag = ''; /// показать весь год или по месяцам

var flagForTopics = ''; /// показать 9 глобальных категорий, или 9 самых популярных из одной категории, но, может, он и не  нужен...



//////////////////////////////////////////////////////////////////////////
////   TBD    
var YAxisMaxValueYearForTopics = 0;
var YAxisMaxValueMonthForTopics = 0; 

// в некоторых "суперкатегориях" кол-во категорий меньше 9 - проверить как оно будет работать
// тут есть баг - почему-то двумерный массив allTopics размером 13, а не 9... хорошо бы поправить, но пока просто нужно иметь в виду, что считать нужно не до allTopics.length, а до 9
// можно еще поменять customCategoriesList - у нас же есть этот массив
// может распределить более равномерно по топикам???
// выбираемые категории отсортированы по популярности в обратном порядке
// если выбрали "by topic",а потом хотим изменить кол-во, то нифига не получится )))
// compare topics выглядит так, будто ничего не делает... может она должна работать как "go"?
// кнопки "data" и т.п. должны менять значение 




d3.json("NewsItemsSmallData.json", initialize);

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
     /// создаем массив глобальных категорий с подкатегориями (двумерный)
    createArrOfTopics();
    
    //////test
    //
}

/// для того, чтобы нарисовать ОДИН график нужно вызвать эту функцию
function execute(viewBy, currCategory)
{
    //var view = viewBy;
    //document.write("viewBy = " + viewBy + "<br>");
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
        if (date == ' February') {
            view = 2;
        }
        if (date == ' March') {
            view = 3;
        }
        if (date == ' April') {
            view = 4;
        }
        if (date == ' May') {
            view = 5;
        }
        if (date == ' June') {
            view = 6;
        }
        if (date == ' July') {
            view = 7;
        }
        if (date == ' August') {
            view = 8;
        }
    }

    
    d3.json("NewsItemsSmallData.json", convert); /// зачем мы это опять делаем так не очень понятно, но, наверное, лучше уже и не трогать
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
        //svg.append("text")
        //  .attr("x", width - 6)
        //  .attr("y", height - 6)
        //  .style("text-anchor", "end")
        //  .text(category);


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
            .style("text-decoration", "underline")
            .text(currCategory);






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

function drawAllTopics(viewBy)
{
    d3.select("body").selectAll("svg").remove();
    drawOneTopicInOneGraph(culture, "Culture", viewBy);
    drawOneTopicInOneGraph(economics, "Economics", viewBy);
    drawOneTopicInOneGraph(education, "Education", viewBy);
    drawOneTopicInOneGraph(environment, "Environment", viewBy);
    drawOneTopicInOneGraph(health, "Health", viewBy);
    drawOneTopicInOneGraph(politics, "Politics", viewBy);
    drawOneTopicInOneGraph(security, "Security", viewBy);
    drawOneTopicInOneGraph(sport, "Sport", viewBy);
    drawOneTopicInOneGraph(transportation, "Transportation", viewBy);
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
    
    tmp = initMaxYearAndMaxMonth(yearTime, 'byYear');
    if (tmp > YAxisMaxValueYearForTopics) {
        YAxisMaxValueYearForTopics = tmp;
    }

    tmp = initMaxYearAndMaxMonth(time, 'byMonth');
    if (tmp > YAxisMaxValueMonthForTopics) {
        YAxisMaxValueMonthForTopics = tmp;
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
        .style("text-decoration", "underline")
        .text(nameOfTopic);


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
        }
    }
    //// создаем ось X  
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

//function MaxYearForOneTopic(numbers)
//{
//    var max = 0;
//    for (var i = 0; i < numbers.length; i++) {
//        if (numbers[i] > max)
//        {
//            max = numbers[i];
//        }
//    }
//    return max;
//}
//function MaxMonthForOneTopic(numbers) {
//    var max = 0;
//    for (var i = 0; i < numbers.length; i++) {
//        for (var j = 0; j < numbers[i].length; j++) {
//            if (numbers[i][j] > max) {
//                max = numbers[i][j];
//            }
//        }
//    }
//    return max;
//}

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

function drawSmallMultiplesByChosenCategory(viewBy) 
{
    d3.select("body").selectAll("svg").remove();
    for (i = 0; i < options.length; i++)
    {
        execute(viewBy, options[i]);
    }
}

function drawSmallMultiplesForMostPopularyCategoriesInChosenTopic(viewBy, chosenTopic) {
    d3.select("body").selectAll("svg").remove();
    if (chosenTopic == " Culture")
    {
        topic = culture;
    }
    if (chosenTopic == " Economics")
    {
        topic = economics;
    }
    if (chosenTopic == " Education")
    {
        topic = education;
    }
    if (chosenTopic == " Environment")
    {
        topic = environment;
    }
    if (chosenTopic == " Health")
    {
        topic = health;
    }
    if (chosenTopic == " Politics")
    {
        topic = politics;
    }
    if (chosenTopic == " Security")
    {
        topic = security;
    }
    if (chosenTopic == " Sport")
    {
        topic = sport;
    }
    if (chosenTopic == " Transportation")
    {
        topic = transportation;
    }
    for (i = 1; i < countOfDiagrams+1; i++)
    {
        var curr = topic.length - i;
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
    sortBy("popularity");
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
    //    document.write("<br>" + "NEW TOPIC" + "&nbsp" + allTopics[i][0].topic + "<br>" + "<br>");
    //    for (z = 0; z < allTopics[i].length; z++) {
    //        document.write(allTopics[i][z].newsCategoryName + "&nbsp" + allTopics[i][z].newsYearCount + "<br>");
    //    }
    //}
}