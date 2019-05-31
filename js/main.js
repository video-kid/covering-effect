var NumberToMeasue = function(value, measurment) {
    var newMeasure = value + measurment;
    return newMeasure;
};

var headerMover = function () {
    headerCover = $(".header > .cover");
    defaultCoverPos = 0;
    headerCover.css("left", NumberToMeasue(defaultCoverPos, "%"));
    var onePercentHeight = $(window).outerHeight()/100;
    $(window).scroll(function(){
        var scrollTopPos = $(window).scrollTop();
        var currentPercent = Math.round(scrollTopPos/onePercentHeight) + defaultCoverPos;
        if (currentPercent <= 105) {
            headerCover.css("left", NumberToMeasue(currentPercent, "%"));
        }
    })
};



headerMover();