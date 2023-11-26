
vaihtaa = true
let todennäköisyys = 0
let voitot = 0
let testimaara =10000
console.log('alkaa')
for(let i = 0; i <testimaara; i++){
  
    const ovet = [false,false,false]
    //arvonta
    let voittoOvi = Math.floor(Math.random()*3)
    //console.log('voittava ovi', voittoOvi)
    ovet[voittoOvi] = true

    //eka valinta
    let valittuOvi = Math.floor(Math.random()*3)
    //console.log('valittu ovi', valittuOvi)

    //poisto
    let poistettavienMahdollisuudet = [0,1,2]
    poistettavienMahdollisuudet = poistettavienMahdollisuudet.filter(d => d !== valittuOvi && d !== voittoOvi);
    //console.log('poistettavien mahdollisuudet', poistettavienMahdollisuudet)
    const poistettavaOvi = poistettavienMahdollisuudet[Math.floor(Math.random() * poistettavienMahdollisuudet.length)];
    delete ovet[poistettavaOvi[0]]
    if(vaihtaa){
        //vaihtaa ovea
        let vaihdonMahdollisuudet = [0,1,2]
        //console.log(poistettavaOvi)
        vaihdonMahdollisuudet=vaihdonMahdollisuudet.filter(d => d !== valittuOvi && d !== poistettavaOvi);
        //console.log('tahan vaihtaa', vaihdonMahdollisuudet)
        valittuOvi = vaihdonMahdollisuudet[0]

    }
  
    //console.log('ovet jäljellä', ovet)
    if(voittoOvi===valittuOvi) voitot++

}
todennäköisyys = voitot/testimaara
console.log('TODENNÄKÖISYYS: ', todennäköisyys*100,'%')
