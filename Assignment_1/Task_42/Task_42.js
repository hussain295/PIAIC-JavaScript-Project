function make_great(array){
    for(var i=0; i<array.length;i++)
    array[i]="Great "+array[i]
}


function show_magicians(array){
    for(var i=0; i<array.length;i++)
    console.log(array[i])
}
var magicianNames= ['Don Alan', 'Alexander', 'Aldini', 'Ali Bey'];
make_great(magicianNames)
show_magicians(magicianNames)
