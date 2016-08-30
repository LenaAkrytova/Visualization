var popular = ""; // сохраняет выбранный стринг из кнопочки популар
var byTopic = "";
var options = []; // сохраняет все выбранные опции
var date = "2016"; 
var chosenFilter = "popular"; // тут сохраняется какой у тебя выбранный последний фильтр

$('.popular-dropdown li a').click(function (e) {
	chosenFilter = "popular";
	popular = $(this).text();
    //console.log("popular pressed and chosen option is: " + $(this).text());
	alert("popular pressed and chosen option is: " + $(this).text());
    return false;
});

$('.by-topic-dropdown li a').click(function (e) {
	chosenFilter = "popularByTopic";
	byTopic = $(this).text();
    console.log("popular by topic pressed and chosen option is: " + $(this).text());
    return false;
});

$('.compare-button').click(function (e) {
	chosenFilter = "compareTopics";
    console.log("compare topics pressed and buttons text is: " + $(this).text());
    return false;
});

$( '.check-dropdown a' ).on( 'click', function( event ) {

   var $target = $( event.currentTarget ),
       val = $target.attr( 'data-value' ),
       $inp = $target.find( 'input' ),
       idx;

   if ( ( idx = options.indexOf( val ) ) > -1 ) {
      options.splice( idx, 1 );
      setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
   } else {
      options.push( val );
      setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
   }

   $( event.target ).blur();
   
   chosenFilter = "customCategories";
   console.log( "custom categories pressed and chosen options are: " + options );
   return false;
});

$('.date-dropdown li a').click(function (e) {
	date = $(this).text();
    console.log("date pressed and chosen option is: " + $(this).text());
    return false;
});

$('.go-button').click(function (e) {
    console.log("go button pressed, drawing the visualization of chosen filter: " + chosenFilter);
	//drawSmallMultiplesByCategory($(this).text());
    return false;
});

$(".toggle-close a").click(function () {
    $(this).closest(".dropdown-menu").prev().dropdown("toggle");
});
