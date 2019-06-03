$( document ).ready(function() {
    let addUnit = (value, unit) => {
        return value + unit;
    };

    let addPercentChar = (value) => {
        return addUnit(value, "%");
    };

    let coverElemMover = (CoverElement, defaultCoverPos) => {
        CoverElement.css("left", addPercentChar(defaultCoverPos));
        let onePercentHeight = $(window).outerHeight()/100;
        $(window).scroll(() => {
            let scrollTopPos = $(window).scrollTop();
            let currentPercent = Math.round(scrollTopPos/onePercentHeight) + defaultCoverPos;
            if (currentPercent <= 105) {
                CoverElement.css("left", addPercentChar(currentPercent));
            }
        })
    };

    let defaultCoverSetting = 0;
    let headerCoverElement = $(".header > .cover");
    coverElemMover(headerCoverElement, defaultCoverSetting);
});