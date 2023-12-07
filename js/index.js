'use strict'

$("p.skills").hover(
    (e) => {
        console.log("here");
        $(e.currentTarget)
        .css("font-size", "18px")
        .css("padding-bottom", "0px")
        .css("padding-top", "0px");
    }, (e) => {
        $(e.currentTarget).css("font-size", "16px")
        .css("padding-bottom", "2px")
        .css("padding-top", "2px");
    }
);

console.log($("p.skills"))