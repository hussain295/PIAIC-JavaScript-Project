var initials = "Hussain Burhanuddin"
var small = initials.toLowerCase()
var big = initials.toUpperCase()


str = initials.toLowerCase().split(' ');
for (var i = 0; i < str.length; i++) {
str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); }
  
  

console.log("Name in lower case: " + small)
console.log("Name in upper case: " + big)
console.log("Name in title case: " + str.join(' '))
