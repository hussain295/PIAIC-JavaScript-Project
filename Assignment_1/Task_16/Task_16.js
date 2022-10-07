var invites=["Alex","Jim","Ahmed","Raj"]
for(var i=0; i<invites.length; i++){
    console.log(invites[i]+" I would like to invite you to dinner on monday night at my place")
}
console.log("\nFound a bigger dinner table\n")
invites.push("Abrar")
invites.unshift("Mamoon")
invites.splice(invites.length/2,0,"Hussain")
for(var i=0; i<invites.length; i++){
    console.log(invites[i]+" I would like to invite you to dinner on monday night at my place")
}