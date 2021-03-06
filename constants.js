/**
 * All the types of awards and the coresponding numbers
 * This is an enum in javascript.
 * For the recond I *hate* javascript.
*/
var AwardTypes = {
    CHAIRMANS: 0,
    WINNER: 1,
    FINALIST: 2,
    WOODIE_FLOWERS: 3,
    DEANS_LIST: 4,
    VOLUNTEER: 5,
    FOUNDERS: 6,
    BART_KAMEN_MEMORIAL: 7,
    MAKE_IT_LOUD: 8,
    ENGINEERING_INSPIRATION: 9,
    ROOKIE_ALL_STAR: 10,
    GRACIOUS_PROFESSIONALISM: 11,
    COOPERTITION: 12,
    JUDGES: 13,
    HIGHEST_ROOKIE_SEED: 14,
    ROOKIE_INSPIRATION: 15,
    INDUSTRIAL_DESIGN: 16,
    QUALITY: 17,
    SAFETY: 18,
    SPORTSMANSHIP: 19,
    CREATIVITY: 20,
    ENGINEERING_EXCELLENCE: 21,
    ENTREPRENEURSHIP: 22,
    EXCELLENCE_IN_DESIGN: 23,
    EXCELLENCE_IN_DESIGN_CAD: 24,
    EXCELLENCE_IN_DESIGN_ANIMATION: 25,
    DRIVING_TOMORROWS_TECHNOLOGY: 26,
    IMAGERY: 27,
    MEDIA_AND_TECHNOLOGY: 28,
    INNOVATION_IN_CONTROL: 29,
    SPIRIT: 30,
    WEBSITE: 31,
    VISUALIZATION: 32,
    AUTODESK_INVENTOR: 33,
    FUTURE_INNOVATOR: 34,
    RECOGNITION_OF_EXTRAORDINARY_SERVICE: 35,
    OUTSTANDING_CART: 36,
    WSU_AIM_HIGHER: 37,
    LEADERSHIP_IN_CONTROL: 38,
    NUM_1_SEED: 39,
    INCREDIBLE_PLAY: 40,
    PEOPLES_CHOICE_ANIMATION: 41,
    VISUALIZATION_RISING_STAR: 42,
    BEST_OFFENSIVE_ROUND: 43,
    BEST_PLAY_OF_THE_DAY: 44,
    FEATHERWEIGHT_IN_THE_FINALS: 45,
    MOST_PHOTOGENIC: 46,
    OUTSTANDING_DEFENSE: 47,
    POWER_TO_SIMPLIFY: 48,
    AGAINST_ALL_ODDS: 49,
    RISING_STAR: 50,
    CHAIRMANS_HONORABLE_MENTION: 51,
    CONTENT_COMMUNICATION_HONORABLE_MENTION: 52,
    TECHNICAL_EXECUTION_HONORABLE_MENTION: 53,
    REALIZATION: 54,
    REALIZATION_HONORABLE_MENTION: 55,
    DESIGN_YOUR_FUTURE: 56,
    DESIGN_YOUR_FUTURE_HONORABLE_MENTION: 57,
    SPECIAL_RECOGNITION_CHARACTER_ANIMATION: 58,
    HIGH_SCORE: 59,
    TEACHER_PIONEER: 60,
    BEST_CRAFTSMANSHIP: 61,
    BEST_DEFENSIVE_MATCH: 62,
    PLAY_OF_THE_DAY: 63,
    PROGRAMMING: 64,
    PROFESSIONALISM: 65,
    GOLDEN_CORNDOG: 66,
    MOST_IMPROVED_TEAM: 67,
    WILDCARD: 68,
    CHAIRMANS_FINALIST: 69,
    OTHER: 70,
    AUTONOMOUS: 71,
}

/**
 * This is a list, loop through or access
 * BannerWorthyAwards[0]
*/
var BannerWorthyAwards = [
    AwardTypes.CHAIRMANS,
    AwardTypes.CHAIRMANS_FINALIST,
    AwardTypes.WINNER,
    AwardTypes.WOODIE_FLOWERS,
]

var tbaAuthKey = "eEw2xnP2lfo4au8unAIYp4xJourubuxF7vz4b1WgHbzmOLQxZHoUomCV1qudfil9";

function tbaRequestHandler(path, callback, ...callbackArgs) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            jstuff = JSON.parse(this.responseText);
            callback(jstuff, callbackArgs);
        }
    };
    xhttp.open("GET", "https://www.thebluealliance.com/api/v3/" + path, true);
    xhttp.setRequestHeader("X-TBA-Auth-Key", tbaAuthKey);
    xhttp.send();
}