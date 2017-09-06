const race = '100m Dash'
const winner = ['Hunter Gath', 'Singa Song', 'Imda Bos']
const place = 'china'
//ideal situation
const db = {
    name: 'Hunter Gath',
    place: 1,
    race: '100m Dash'
}

//Add ( to return a object , remove {} so I can have implicit return
const win = winner.map((winner, i) => ({
    name: winner,
        race:race,
        place:i
}))

console.log(win)

//Type win in the chrome can show the object 's value
//Type console.table(win) to get the most out of it