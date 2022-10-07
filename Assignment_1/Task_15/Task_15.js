var invites=["Alex","Jim","Ahmed","Raj"]
for(var i=0; i<invites.length; i++){
    console.log(invites[i]+" I would like to invite you to dinner on monday night at my place")
}
console.log("\nJim Cant make it to the dinner\n")
invites[1]="Salman"
for(var i=0; i<invites.length; i++){
    console.log(invites[i]+" I would like to invite you to dinner on monday night at my place")
}