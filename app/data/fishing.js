
var islands = [
  {id: 'Pre', name: 'Prelude Island', ticket: null, spots_id: ['BeBa','SyRi','CyLa','PDSC']},
  {id: 'Gio', name: 'Giovanna Island', ticket: 'silver', spots_id: ['AriB','FePo','ShLa','CoPi','EmRi']},
  {id: 'Mer', name: 'Mermaid Island', ticket: 'silver', spots_id: ['SaRe','StRo','PaLa','MaPo','MaRi','HiLa']},
  {id: 'Atl', name: 'Atlantis Island', ticket: 'silver', spots_id: ['DaPo','BePo','MiRi','KoLa','GrLa','KaPo']},
  {id: 'Pos', name: 'Poseidon Island', ticket: 'gold', spots_id: ['SePi','ClLa','ArRo','EuRi','PoDS','WyLa']},
  {id: 'Myt', name: 'Mythroll Island', ticket: 'gold', spots_id: ['MDS1','CuCa','BaRi','AbJu','MDS2']},
  {id: 'Oce', name: 'Oceanora Island', ticket: 'gold', spots_id: ['YuRe','FoLa','BrBe','ODS1','ArcB','HaRi','ODS2']},
  {id: 'Mys', name: 'Mysteria Island', ticket: 'gold', spots_id: ['MyDS','SeRi','MaJu','SuRi','EnCa']},
];

var spots = [
  {id: 'BeBa', name: 'Beginniner\'s Bay', type:'C'},
  {id: 'SyRi', name: 'Sylvana River', type:'R'},
  {id: 'CyLa', name: 'Cypress Lake', type:'L'},
  {id: 'PDSC', name: 'Prelude Deep-Sea Cruise', type:'D'},

  {id: 'AriB', name: 'Ariana Beach', type:'C'},
  {id: 'FePo', name: 'Fernhollow Pond', type:'L'},
  {id: 'ShLa', name: 'Shangri Lake', type:'L'},
  {id: 'CoPi', name: 'Coleville Pier', type:'C'},
  {id: 'EmRi', name: 'Emberwood River', type:'R'},

  {id: 'SaRe', name: 'Sanzaneeta Reef', type:'C'},
  {id: 'StRo', name: 'Steelsbay Rock', type:'C'},
  {id: 'PaLa', name: 'Parker Lake', type:'L'},
  {id: 'MaPo', name: 'Marshview Pond', type:'L'},
  {id: 'MaRi', name: 'Maple River', type:'R'},
  {id: 'HiLa', name: 'Highland Lake', type:'L'},

  {id: 'DaPo', name: 'Dayton Point', type:'C'},
  {id: 'BePo', name: 'Beauford Pond', type:'C'},
  {id: 'MiRi', name: 'Mistfall River', type:'C'},
  {id: 'KoLa', name: 'Kohu Lake', type:'C'},
  {id: 'GrLa', name: 'Graydale Lake', type:'C'},
  {id: 'KaPo', name: 'Kastamoor Pond', type:'C'},

  {id: 'SePi', name: 'Seraphia Pier', type:'C'},
  {id: 'ClLa', name: 'Clearwater Lake', type:'L'},
  {id: 'ArRo', name: 'Aruna Rock', type:'C'},
  {id: 'EuRi', name: 'Eureka River', type:'R'},
  {id: 'PoDS', name: 'Psoeidon Deep-Sea Cruise', type:'D'},
  {id: 'WyLa', name: 'Wyverdun Lake', type:'L'},

  {id: 'MDS1', name: 'Mythroll Deep-Sea Cruise 1', type:'D'},
  {id: 'CuCa', name: 'Cutty\'s Cave', type:'C'},
  {id: 'BaRi', name: 'Bangaban River', type:'R'},
  {id: 'AbJu', name: 'Abunda Jungle', type:'C'},
  {id: 'MDS2', name: 'Mythroll Deep-Sea Cruise 2', type:'C'},

  {id: 'YuRe', name: 'Yunali Reef', type:'C'},
  {id: 'FoLa', name: 'Foxmere Lake', type:'L'},
  {id: 'BrBe', name: 'Bridgecliff Beach', type:'C'},
  {id: 'ODS1', name: 'Oceanora Deep-Sea Cruise 1', type:'D'},
  {id: 'ArcB', name: 'Arcana Beach', type:'C'},
  {id: 'HaRi', name: 'Hazeldown River', type:'R'},
  {id: 'ODS2', name: 'Oceanora Deep-Sea Cruise 2', type:'D'},

  {id: 'MyDS', name: 'Mysteria Deep-Sea Cruise', type:'D'},
  {id: 'SeRi', name: 'Sellbrook River', type:'R'},
  {id: 'MaJu', name: 'Mahtori Jungle', type:'R'},
  {id: 'SuRi', name: 'Sulani River', type:'R'},
  {id: 'EnCa', name: 'Enigma Cave', type:'C'}
];

var islandMap;
var spotsMap;

class DbFishing {

  constructor(){
    console.log("Init Fishing DB");

    // Prep in Map
    spotsMap = this.arrayToMap(spots);
    islandMap = this.arrayToMap(islands);

    // Build Links
    for(var island of islands){
      island.spots = [];
      for(var sId of island.spots_id){
        var spot = spotsMap.get(sId);
        if(spot !== undefined){
          island.spots.push(spot);
          spot.island = island;
        }else{
          console.error("Invalid Link to spot "+sId);
        }

      }
    }
  }

  arrayToMap(elements){
    var eltMap = new Map();
    for(let element of elements){
      if(eltMap.get(element.id) === undefined){
          eltMap.set(element.id, element);
      }
      else{
        console.error("Duplicate element with Id "+element.id, element, eltMap.get(element.id));
      }
    }
    return eltMap;
  }

  getAllIslands() {
    return islands;
  }

}
export let dbFishing = new DbFishing();
