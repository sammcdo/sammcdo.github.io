'use strict'

$("p.skills").hover(
    (e) => {
        console.log("here");
        $(e.currentTarget).css("font-size", "18px");
    }, (e) => {
        $(e.currentTarget).css("font-size", "16px");
    }
);

console.log($("p.skills"))