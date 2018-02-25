var dataSet = [
    [ "Davie Joubert", "34324325", "5", "17", "1;17;140" ],
    [ "Steve Humble", "4554354", "3", "20", "1;15;140"],
    [ "Johan Engelbrecht", "534555", "8", "12", "1;11;140"],
    [ "Francis Caruthers", "5435", "9", "18", "1;13;140"],
    [ "Mike Verrier", "432554", "2", "19", "1;11;140" ],
    [ "Gary Kies", "543534543", "3", "20", "1;67;140"],
    [ "Garith Living", "5435435345", "5", "34", "1;27;140"],
    [ "John Elliot", "343242354", "7", "12", "2;17;140" ],
    [ "Anthony Cocks", "342352354", "8", "16", "3;17;140"],
    [ "Andre Ferreira", "6576854", "1", "18", "1;17;170"],
    [ "Rob GortMaker", "87856747645", "8", "19", "1;27;140"],
    [ "Matt Kreeve", "3242354646", "4", "10", "1;57;140"],
    [ "Charde Marshall", "5764674", "3", "20", "7;17;140" ],
    [ "Haley Kennedy", "132435", "0", "21", "3;17;140"],
    [ "Tatyana Fitzpatrick", "7547646546", "3", "18", "3;17;140"],
    [ "Michael Silva", "43252454", "2", "17", "1;47;140"],
    [ "Paul Byrd", "4325433465", "5", "15", "1;27;140"],
    [ "Gloria Little", "43545436363", "9", "12", "1;37;140" ],
    [ "Bradley Greer", "2343454363", "10", "15", "1;55;140"]
];
 
$(document).ready(function() {
    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "Racer Name" },
            { title: "Vehicle Number" },
            { title: "Lap Count" },
            { title: "Total Count" },
            { title: "Best Time" }
        ]
    } );
} );