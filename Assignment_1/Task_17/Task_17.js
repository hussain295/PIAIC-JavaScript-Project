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
console.log("\nSorry the table won't arrive in time and I can only invite two people\n")

for(var i=invites.length-1; i>1; i--){
    console.log(invites[i]+" Sorry the dinner has been cancelled")
    invites.pop()
}
for(var i=invites.length-1; i>-1; i--){
    console.log(invites[i]+" I would like to invite you to dinner on monday night at my place")
    invites.pop()
}


