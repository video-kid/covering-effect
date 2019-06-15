$(document).ready(function () {
    let addUnit = (value, unit) => {
        return value + unit;
    };

    let addPercentChar = (value) => {
        return addUnit(value, "%");
    };

    let setVelocity = (velocity) => {
        let velocityLevel = 1;
        if (velocity <= 1 && velocity > 0) {
            velocityLevel = 100 / velocity;
        }
        return velocityLevel;
    }


    let coverElemMover = (coverElement, defaultCoverPos, velocityLevel) => {
        coverElement.css("transform", "translateX(" + addPercentChar(defaultCoverPos) + ")");
        let skipValue = $(window).outerHeight() / setVelocity(velocityLevel);
        $(window).scroll(() => {
            let scrollTopPos = $(window).scrollTop();
            let currentPercent = Math.round(scrollTopPos / skipValue) + defaultCoverPos;
            if (currentPercent <= 105) {
                coverElement.css("transform", "translateX(" + addPercentChar(currentPercent) + ")");
            }
        })
    };

    let defaultCoverSetting = 0;
    let headerCoverElement = $(".header > .cover");
    coverElemMover(headerCoverElement, defaultCoverSetting, 0.4);
});