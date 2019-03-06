users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
]
// Kermit the Frog knows Python, JavaScript, C#, HTML, CSS, and SQL.
// Kermit is also interested in guitar, flute, tap, salsa, Black Mirror, and Stranger Things.
// Winnie the Pooh knows Python, Swift, and Java.
// Winnie is also interested in honey, honeycomb, honeysuckle, and Heffalumps.
// Arthur Dent knows JavaScript, HTML, and Go.
// Arthur is also interested in stars, planets, improbability, tea, and yellow bulldozers.
function userLanguages(users){
    var result = "";
    for(var i = 0; i<users.length;i++){
        result += users[i]["fname"]+ " "+users[i]["lname"]+" "+"knows ";
        for (var j=0;j<users[i]["languages"].length-1;j++){
            result += users[i]["languages"][j] +", ";
        }
        result += "and " + users[i]["languages"][j] + ".\n";
        result += users[i]["fname"] + " is also interested in";
        keys = Object.keys(users[i]["interests"]);
        for (var j = 0;j<keys.length-1;j++){
            var interests= users[i]["interests"][keys[j]];
            for(var k=0;k<interests.length;k++){
                result += interests[k]+=", ";
            }
        }
        interests = users[i]["interests"][keys[j]];
        for (var k = 0; k < interests.length-1;k++){
            result += interests[k] += ", ";
        }
        result += "and " + interests[k]+".\n"
    }
    return result;

}
console.log(userLanguages(users));