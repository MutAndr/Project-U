"use strict";
/*jshint globalstrict: true*/

let depth = 12,
    propolzla = 0,
    dney = 0;

if (depth <=7) {dney = 1;}
else {propolzla = 7; dney = 1; while (propolzla < depth) {propolzla += 5; dney++;}}

console.log(dney);