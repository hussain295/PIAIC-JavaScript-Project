const usernames=["abrar","sohaib","admin","mamoon","ammar"]
for(var i=0; i<usernames.length;i++){
    if(usernames[i]=='admin'){
        console.log('Greetings ' + usernames[i] + ' would you like to see a status report?' )
    }
    else{
    console.log(usernames[i] + ', thank you for logging in')
}
}