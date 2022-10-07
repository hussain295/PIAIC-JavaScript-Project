function make_great(array){
    for(var i=0; i<array.length;i++)
    array[i]="Great "+array[i]
}


function show_magicians(array){
    for(var i=0; i<array.length;i++)
    console.log(array[i])
}
var magicianNames= ['Don Alan', 'Alexander', 'Aldini', 'Ali Bey'];
var copyMagicianNames = [...magicianNames]

make_great(copyMagicianNames)
show_magicians(copyMagicianNames)
show_magicians(magicianNames)
