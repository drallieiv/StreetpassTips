import Island from 'streetpass-tips/models/fishing/island';
import Bait from 'streetpass-tips/models/fishing/bait';
import Spot from 'streetpass-tips/models/fishing/spot';
import Fish from 'streetpass-tips/models/fishing/fish';

let islands_raw = [
  {id: 'Pre', name: 'Prelude Island', ticket: null, spots_id: ['BeBa','SyRi','CyLa','PDSC']},
  {id: 'Gio', name: 'Giovanna Island', ticket: 'silver', spots_id: ['AriB','FePo','ShLa','CoPi','EmRi']},
  {id: 'Mer', name: 'Mermaid Island', ticket: 'silver', spots_id: ['SaRe','StRo','PaLa','MaPo','MaRi','HiLa']},
  {id: 'Mem', name: 'Memento Island', ticket: 'silver', spots_id: ['SaRe','StRo','PaLa','MaPo','MaRi','HiLa']},
  {id: 'Atl', name: 'Atlantis Island', ticket: 'silver', spots_id: ['DaPo','BePo','MiRi','KoLa','GrLa','KaPo']},
  {id: 'Pos', name: 'Poseidon Island', ticket: 'gold', spots_id: ['SePi','ClLa','ArRo','EuRi','PoDS','WyLa']},
  {id: 'Myt', name: 'Mythroll Island', ticket: 'gold', spots_id: ['MDS1','CuCa','BaRi','AbJu','MDS2']},
  {id: 'Oce', name: 'Oceanora Island', ticket: 'gold', spots_id: ['YuRe','FoLa','BrBe','ODS1','ArcB','HaRi','ODS2']},
  {id: 'Mys', name: 'Mysteria Island', ticket: 'gold', spots_id: ['MyDS','SeRi','MaJu','SuRi','EnCa']},
];

let spots_raw = [
  {id: 'BeBa', name: 'Beginniner\'s Bay', type:'C', fish_id:['Sard','BlRo','LaBF','JaSB','BlSB']},
  {id: 'SyRi', name: 'Sylvana River', type:'R', fish_id:['Dace','PaCh','DaCh','RaTr']},
  {id: 'CyLa', name: 'Cypress Lake', type:'L', fish_id:['BlGr','CrCa','CrFi','SmBa']},
  {id: 'PDSC', name: 'Prelude Deep-Sea Cruise', type:'D', fish_id:['JapW','PaSy','ChGr','SkTu','RSBr','Leed']},

  {id: 'AriB', name: 'Ariana Beach', type:'C', fish_id:['BBSt','FilF','Bacu','RiFl']},
  {id: 'FePo', name: 'Fernhollow Pond', type:'L', fish_id:['Tadp','SpLo','DaSl','Carp']},
  {id: 'ShLa', name: 'Shangri Lake', type:'L', fish_id:['CrCa','BlGr','ChST','Catf']},
  {id: 'CoPi', name: 'Coleville Pier', type:'C', fish_id:['Mack','PaHr','JaHM','LaHa','JaSM']},
  {id: 'EmRi', name: 'Emberwood River', type:'R', fish_id:['PaCh','DaCh','IwTr','RaTr','Rhiz']},

  {id: 'SaRe', name: 'Sanzaneeta Reef', type:'C', fish_id:['FilF','PrCo','CoTa','BlSB','BaKn']},
  {id: 'StRo', name: 'Steelsbay Rock', type:'C', fish_id:['BlRa','Bacu','BoxF','OkAM','FlMu']},
  {id: 'PaLa', name: 'Parker Lake', type:'L', fish_id:['AmBu','DaSl','YePe','NoPi']},
  {id: 'MaPo', name: 'Marshview Pond', type:'L', fish_id:['Tadp','SpLo','ChST','Snak','GoBa']},
  {id: 'MaRi', name: 'Maple River', type:'R', fish_id:['IwTr','SweF','ChrS','RaTr','IrSh']},
  {id: 'HiLa', name: 'Highland Lake', type:'L', fish_id:['CrCa','BlGr','YePe','Snak','NoPi','Ness']},

  {id: 'ClCa', name: 'Clifton Cave', type:'C', fish_id:['FoGo','LioF','FilF','BlTa','MoEe']},
  {id: 'MoPo', name: 'Mossmeadow Pond', type:'L', fish_id:['SpLo','CrCa','AmBu','SmBa','LaBa']},
  {id: 'RaRi', name: 'Rainhaven River', type:'R', fish_id:['Dace','IwTr','SweF','ChuS']},
  {id: 'MaPi', name: 'Matsunoa Pier', type:'C', fish_id:['PaHr','JaHM','BlRa','OkAM','TiBF']},
  {id: 'MDSC', name: 'Memento Deep-Sea Cruise', type:'D', fish_id:['PaSy','SpSq','ReKC','AlPo','Yell','Dunk']},

  {id: 'DaPo', name: 'Dayton Point', type:'C', fish_id:['Mack','BoxF','Porc','CoOc','Flou']},
  {id: 'BePo', name: 'Beauford Pond', type:'L', fish_id:['Tadp','AmBu','CrFi','SmBa','Eel']},
  {id: 'MiRi', name: 'Mistfall River', type:'R', fish_id:['IwTr','SweF','ChrS','RaTr','KiSa']},
  {id: 'KoLa', name: 'Kohu Lake', type:'L', fish_id:['CrCa','DaSl','ChST','Koi','GoKo']},
  {id: 'GrLa', name: 'Graydale Lake', type:'L', fish_id:['CrCa','BlGr','YePe','SmBa','LaTr']},
  {id: 'KaPo', name: 'Kastamoor Pond', type:'L', fish_id:['Tadp','SpLo','CrFi','SaBi','WaCF']},
  {id: 'ADSC', name: 'Atlantis Deep-Sea Cruise', type:'D', fish_id:['PaSy','SpSq','SnCr','PaCo','Kron','GiSq']},


  {id: 'SePi', name: 'Seraphia Pier', type:'C', fish_id:['LaBF','BlRa','Porc','LaHa','JaBS','NPGO']},
  {id: 'ClLa', name: 'Clearwater Lake', type:'L', fish_id:['CrCa','BlGr','Stic','SmBa','AlST']},
  {id: 'ArRo', name: 'Aruna Rock', type:'C', fish_id:['CoTa','PrCo','IPSe','GarF','LoGr','Tarp']},
  {id: 'EuRi', name: 'Eureka River', type:'R', fish_id:['PaCh','DaCh','ChrS','RaTr','Taim']},
  {id: 'PoDS', name: 'Psoeidon Deep-Sea Cruise', type:'D', fish_id:['ChGr','ReGu','JaSC','Mahi','PBFT','GoTu']},
  {id: 'WyLa', name: 'Wyverdun Lake', type:'L', fish_id:['BlGr','ChST','ClnL','Eel','LaTr','Drag']},

  {id: 'MDS1', name: 'Mythroll Deep-Sea Cruise 1', type:'D', fish_id:['FlOc','GiIs','FlyF','SaSh','SwoF','GoSF']},
  {id: 'CuCa', name: 'Cutty\'s Cave', type:'C', fish_id:['SpLb','IoHa','KoAn','GarF','TNSh','Bloo']},
  {id: 'BaRi', name: 'Bangaban River', type:'R', fish_id:['Pira','SiFF','DwGo','NoBa','Arow']},
  {id: 'AbJu', name: 'Abunda Jungle', type:'C', fish_id:['Pira','DwGo','AngF','Dora','GiCa']},
  {id: 'MDS2', name: 'Mythroll Deep-Sea Cruise 2', type:'C', fish_id:['JapW','FlyF','MeDF','WhSh','Krak','Oarf']},

  {id: 'YuRe', name: 'Yunali Reef', type:'C', fish_id:['ButF','ClnF','LiDr','JaBS','ScHa']},
  {id: 'FoLa', name: 'Foxmere Lake', type:'L', fish_id:['DaSl','CrFi','YePe','SmBa','AlGa']},
  {id: 'BrBe', name: 'Bridgecliff Beach', type:'C', fish_id:['Porc','SpLb','SeHo','GarF','HuWr','ChCh']},
  {id: 'ODS1', name: 'Oceanora Deep-Sea Cruise 1', type:'D', fish_id:['JapW','SpSq','Ambr','SpAl','Coel','GoBr']},
  {id: 'ArcB', name: 'Arcana Beach', type:'C', fish_id:['FoGo','OSEm','PinF','HoCr','GWSh','GoSh']},
  {id: 'HaRi', name: 'Hazeldown River', type:'R', fish_id:['Dace','PaCh','DaCh','StiF','GoRT']},
  {id: 'ODS2', name: 'Oceanora Deep-Sea Cruise 2', type:'D', fish_id:['PaSy','ReKC','SnCr','FrSh','FooF','Levi']},

  {id: 'MyDS', name: 'Mysteria Deep-Sea Cruise', type:'D', fish_id:['ReGu','VipF','PelE','SunF','MaRa','SpER']},
  {id: 'SeRi', name: 'Sellbrook River', type:'R', fish_id:['IwTr','SweF','ChrS','RaTr','Stur','GoSa']},
  {id: 'MaJu', name: 'Mahtori Jungle', type:'R', fish_id:['Pira','SiFF','OCSR','NiPe','GFSR']},
  {id: 'SuRi', name: 'Sulani River', type:'R', fish_id:['DwGo','EleF','AngF','EleE','Arap']},
  {id: 'EnCa', name: 'Enigma Cave', type:'C', fish_id:['Stic','GiPi','AlST','SaBi','AfLF','UFO']}
];

let baits_raw = [
  {id: 'K', color: 'black', name: 'Bug/Larva', image:"Bait_K.png", hexcolor:"#000000"},
  {id: 'W', color: 'white', name: 'Crab Claw', image:"Bait_White.png", hexcolor:"#FFFFEE"},
  {id: 'N', color: 'brown', name: 'Beetle', image:"Bait_Brown.png", hexcolor:"#6E4826"},
  {id: 'P', color: 'pink', name: 'Seashell', image:"Bait_Pink.png", hexcolor:"#FD5B78"},
  {id: 'U', color: 'purple', name: 'Starfish', image:"Bait_Purple.png", hexcolor:"#534491"},
  {id: 'b', color: 'light-blue', name: 'Sardine', image:"Bait_LightBlue.png", hexcolor:"#02A4D3"},
  {id: 'B', color: 'blue', name: 'Fossil', image:"Bait_Blue.png", hexcolor:"#02478E"},
  {id: 'g', color: 'light-green', name: 'Water Flea', image:"Bait_LightGreen.png", hexcolor:"#6EA523"},
  {id: 'G', color: 'green', name: 'Seaweed', image:"Bait_Green.png", hexcolor:"#016D39"},
  {id: 'O', color: 'orange', name: 'Roe', image:"Bait_Orange.png", hexcolor:"#FF6600"},
  {id: 'Y', color: 'yellow', name: 'Shrimp', image:"Bait_Yellow.png", hexcolor:"#FFD300"},
  {id: 'R', color: 'red', name: 'Worm', image:"Bait_Red.png", hexcolor:"#FF0c0c"},
];

let fishes_raw = [
  {id: 'Sard', stars:1, name: 'sardine', type:'C' , baits:'WUbgOR' , points:23, gold:30},
  {id: 'BlRo', stars:1, name: 'black rockfish', type:'C' , baits:'KbBGO' , points:34, gold:50},
  {id: 'LaBF', stars:1, name: 'largescale blackfish', type:'C' , baits:'UbBgO' , points:47, gold:90},
  {id: 'Dace', stars:1, name: 'dace', type:'R' , baits:'UbOR' , points:42, gold:80},
  {id: 'PaCh', stars:1, name: 'pale chub', type:'R' , baits:'NBR' , points:27, gold:70},
  {id: 'DaCh', stars:1, name: 'dark chub', type:'R' , baits: 'PbBG' , points:30, gold:80},
  {id: 'BlGr', stars:1, name: 'bluegill', type:'L' , baits:'KUbB' , points:32, gold:80},
  {id: 'CrCa', stars:1, name: 'crucian carp', type:'L' , baits:'bBOR' , points:28, gold:40},
  {id: 'CrFi', stars:1, name: 'crayfish', type:'L' , baits:'WbgYR' , points:21, gold:60},
  {id: 'JapW', stars:1, name: 'japanese whiting', type:'D' , baits:'NbR' , points:36, gold:90},
  {id: 'PaSy', stars:1, name: 'pacific saury', type:'D' , baits:'WbBg' , points:46, gold:100},
  {id: 'ChGr', stars:1, name: 'chicken grunt', type:'D' , baits:'GgR' , points:48, gold:100},
  {id: 'BBSt', stars:1, name: 'blue bat star', type:'C' , baits:'BR' , points:20, gold:50},
  {id: 'FilF', stars:1, name: 'filefish', type:'C' , baits:'KNPUGY' , points:38, gold:80},
  {id: 'Bacu', stars:1, name: 'barracuda', type:'C' , baits:'KbBO' , points:47, gold:90},
  {id: 'Tadp', stars:1, name: 'tadpole', type:'L' , baits:'BR' , points:16, gold:40},
  {id: 'SpLo', stars:1, name: 'spined loach', type:'L' , baits:'POR' , points:27, gold:70},
  {id: 'DaSl', stars:1, name: 'dark sleeper', type:'L' , baits:'BOR' , points:30, gold:60},
  {id: 'Mack', stars:1, name: 'mackerel', type:'C' , baits:'WBR' , points:45, gold:80},
  {id: 'PaHr', stars:1, name: 'pacific herring', type:'C' , baits:'KPBO' , points:38, gold:90},
  {id: 'JaHM', stars:1, name: 'japanese horse mackerel', type:'C' , baits:'WNbGOR' , points:40, gold:80},
  {id: 'IwTr', stars:1, name: 'iwana trout', type:'R' , baits:'WYR' , points:33, gold:90},
  {id: 'FoGo', stars:1, name: 'forktongue goby', type:'C' , baits:'KUgR' , points:17, gold:50},
  {id: 'LioF', stars:1, name: 'lionfish', type:'C' , baits:'PUBg' , points:38, gold:90},
  {id: 'AmBu', stars:1, name: 'american bullfrog', type:'L' , baits:'KNR' , points:26, gold:80},
  {id: 'BlRa', stars:1, name: 'black rabbitfish', type:'C' , baits:'NPR' , points:41, gold:100},
  {id: 'SpSq', stars:1, name: 'spear squid', type:'D' , baits:'WPgR' , points:42, gold:100},
  {id: 'PrCo', stars:1, name: 'pennant coralfish', type:'C' , baits:'KWNBG' , points:33, gold:100},
  {id: 'CoTa', stars:1, name: 'convict tang', type:'C' , baits:'KWBY' , points:33, gold:90},
  {id: 'YePe', stars:1, name: 'yellow perch', type:'L' , baits:'KYR' , points:42, gold:100},
  {id: 'IPSe', stars:1, name: 'Indo-Pacific sergeant', type:'C' , baits:'KWbgO' , points:33, gold:100},
  {id: 'ButF', stars:1, name: 'butterfly fish', type:'C' , baits:'UYOR' , points:26, gold:80},
  {id: 'Pira', stars:1, name: 'piranha', type:'R' , baits:'KNPR' , points:42, gold:90},
  {id: 'SiFF', stars:1, name: 'siamese fighting fish', type:'R' , baits:'bR' , points:20, gold:70},
  {id: 'DwGo', stars:1, name: 'dwarf gourami', type:'R' , baits:'UR' , points:19, gold:80},
  {id: 'JaSB', stars:1, name: 'japanese sea bass', type:'C' , baits:'PGgR' , points:132, gold:240},
  {id: 'BlSB', stars:1, name: 'black sea bream', type:'C' , baits:'KWNUbY' , points:113, gold:240},
  {id: 'RaTr', stars:1, name: 'rainbow trout', type:'R' , baits:'WBGY' , points:114, gold:260},
  {id: 'SmBa', stars:1, name: 'smallmouth bass', type:'L' , baits:'KPBg' , points:111, gold:200},
  {id: 'SkTu', stars:1, name: 'skipjack tuna', type:'D' , baits:'bBg' , points:119, gold:270},
  {id: 'RiFl', stars:1, name: 'righteye flounder', type:'C' , baits:'KPUB' , points:114, gold:260},
  {id: 'Carp', stars:1, name: 'carp', type:'L' , baits:'PGYR' , points:112, gold:220},
  {id: 'LaHa', stars:1, name: 'largehead hairtail', type:'C' , baits:'UbB' , points:224, gold:370},
  {id: 'JaSM', stars:1, name: 'japanese Spanish mackerel', type:'C' , baits:'PUGgO' , points:124, gold:270},
  {id: 'Catf', stars:1, name: 'catfish', type:'L' , baits:'KNYR' , points:113, gold:240},
  {id: 'LaBa', stars:1, name: 'largemouth bass', type:'L' , baits:'WBYR' , points:110, gold:180},
  {id: 'OkAM', stars:1, name: 'okhotsk atka mackerel', type:'C' , baits:'WbB' , points:114, gold:260},
  {id: 'AlPo', stars:1, name: 'alaska pollack', type:'D' , baits:'NPR' , points:123, gold:250},
  {id: 'FlMu', stars:1, name: 'flathead mullet', type:'C' , baits:'GYR' , points:113, gold:240},
  {id: 'NoBa', stars:1, name: 'northern barramundi', type:'R' , baits:'NUR' , points:113, gold:250},

  {id: 'ChST', stars:2, name: 'chinese softshell turtle', type:'L' , baits:'KPYO' , points:80, gold:200},
  {id: 'BlTa', stars:2, name: 'blue tang', type:'C' , baits:'WBY' , points:70, gold:200},
  {id: 'SweF', stars:2, name: 'sweetfish', type:'R' , baits:'WbB' , points:78, gold:180},
  {id: 'ReKC', stars:2, name: 'red king crab', type:'D' , baits:'PbO' , points:102, gold:230},
  {id: 'BoxF', stars:2, name: 'boxfish', type:'C' , baits:'WBGY' , points:88, gold:190},
  {id: 'ChrS', stars:2, name: 'cherry salmon', type:'R' , baits:'WBGg' , points:88, gold:200},
  {id: 'Porc', stars:2, name: 'porcupinefish', type:'C' , baits:'PGgY' , points:92, gold:200},
  {id: 'SnCr', stars:2, name: 'snow crab', type:'D' , baits:'NUbO' , points:86, gold:220},
  {id: 'ReGu', stars:2, name: 'red gurnard', type:'D' , baits:'UR' , points:98, gold:190},
  {id: 'ClnL', stars:2, name: 'clown loach', type:'L' , baits:'KUgO' , points:70, gold:200},
  {id: 'ClnF', stars:2, name: 'clownfish', type:'C' , baits:'WGgO' , points:52, gold:240},
  {id: 'LiDr', stars:2, name: 'little dragonfish', type:'C' , baits:'PGgY' , points:50, gold:200},
  {id: 'OSEm', stars:2, name: 'orange-striped emperor', type:'C' , baits:'KPB' , points:96, gold:200},
  {id: 'IoHa', stars:2, name: 'longnose hawkfish', type:'C' , baits:'WUB' , points:46, gold:180},
  {id: 'KoAn', stars:2, name: 'koran angelfish', type:'C' , baits:'UBgY' , points:84, gold:180},
  {id: 'FlyF', stars:2, name: 'flying fish', type:'D' , baits:'KWPb' , points:98, gold:190},
  {id: 'EleF', stars:2, name: 'elephantnose fish', type:'R' , baits:'KbO' , points:62, gold:220},
  {id: 'AngF', stars:2, name: 'angelfish', type:'R' , baits:'bB' , points:60, gold:200},
  {id: 'GiPi', stars:2, name: 'giant pikehead', type:'L' , baits:'BGgY' , points:58, gold:180},
  {id: 'Yell', stars:2, name: 'yellowtail', type:'D' , baits:'NbB' , points:310, gold:500},
  {id: 'BaKn', stars:2, name: 'barred knifejaw', type:'C' , baits:'KNPGY' , points:230, gold:520},
  {id: 'MoEe', stars:2, name: 'moray eel', type:'C' , baits:'KUgO' , points:310, gold:480},
  {id: 'ChuS', stars:2, name: 'chum salmon', type:'R' , baits:'WUgO' , points:270, gold:540},
  {id: 'TiBF', stars:2, name: 'tiger blowfish', type:'C' , baits:'KWN' , points:234, gold:580},
  {id: 'NoPi', stars:2, name: 'northern pike', type:'L' , baits:'bGO' , points:352, gold:460},
  {id: 'Snak', stars:2, name: 'snakehead', type:'L' , baits:'WPbg' , points:250, gold:400},
  {id: 'IrSh', stars:2, name: 'iridescent shark', type:'R' , baits:'NBO' , points:230, gold:480},
  {id: 'Flou', stars:2, name: 'flounder', type:'C' , baits:'WPYO' , points:310, gold:520},
  {id: 'Eel', stars:2, name: 'eel', type:'L' , baits:'PBG' , points:310, gold:550},
  {id: 'KiSa', stars:2, name: 'king salmon', type:'R' , baits:'NUb' , points:314, gold:600},
  {id: 'LaTr', stars:2, name: 'lake trout', type:'L' , baits:'KUgO' , points:310, gold:540},
  {id: 'SaBi', stars:2, name: 'saddled bichir', type:'L' , baits:'KNgO' , points:252, gold:550},
  {id: 'PaCo', stars:2, name: 'pacific cod', type:'D' , baits:'WPUY' , points:292, gold:570},
  {id: 'JaBS', stars:2, name: 'japanese bullhead shark', type:'C' , baits:'WPGgY' , points:310, gold:530},
  {id: 'CoOc', stars:2, name: 'common octopus', type:'C' , baits:'WNUYO' , points:230, gold:500},
  {id: 'AlST', stars:2, name: 'alligator snapping turtle', type:'L' , baits:'PGY' , points:244, gold:580},
  {id: 'Taim', stars:2, name: 'taimen', type:'R' , baits:'UgO' , points:432, gold:640},
  {id: 'GarF', stars:2, name: 'garfish', type:'C' , baits:'R' , points:240, gold:500},
  {id: 'LoGr', stars:2, name: 'longtooth grouper', type:'C' , baits:'UbGY' , points:290, gold:530},
  {id: 'Tarp', stars:2, name: 'tarpon', type:'C' , baits:'KNU' , points:474, gold:650},
  {id: 'RSBr', stars:2, name: 'red sea bream', type:'D' , baits:'BY' , points:252, gold:560},
  {id: 'JaSC', stars:2, name: 'japanese spider crab', type:'D' , baits:'bO' , points:324, gold:620},
  {id: 'Mahi', stars:2, name: 'mahimahi', type:'D' , baits:'KUGY' , points:470, gold:630},
  {id: 'Ambr', stars:2, name: 'amberjack', type:'D' , baits:'KPO' , points:372, gold:610},
  {id: 'SpAl', stars:2, name: 'splendid alfonsino', type:'D' , baits:'UYO' , points:230, gold:600},
  {id: 'SaSh', stars:2, name: 'sawshark', type:'D' , baits:'Ub' , points:414, gold:630},
  {id: 'Arow', stars:2, name: 'arowana', type:'R' , baits:'bYO' , points:272, gold:580},
  {id: 'Dora', stars:2, name: 'dorado', type:'R' , baits:'NUGYO' , points:310, gold:590},
  {id: 'NiPe', stars:2, name: 'nile perch', type:'R' , baits:'WPUO' , points:410, gold:680},
  {id: 'WaCF', stars:2, name: 'wels catfish', type:'L' , baits:'KUO' , points:768, gold:1800},
  {id: 'NPGO', stars:2, name: 'north Pacific giant octopus', type:'C' , baits:'NB' , points:1008, gold:2000},
  {id: 'ScHa', stars:2, name: 'scalloped hammerhead', type:'C' , baits:'PgR' , points:1012, gold:2100},
  {id: 'AlGa', stars:2, name: 'alligator gar', type:'L' , baits:'KbG' , points:808, gold:1800},
  {id: 'PBFT', stars:2, name: 'pacific bluefin tuna', type:'D' , baits:'KNgO' , points:848, gold:2000},
  {id: 'GWSh', stars:2, name: 'great white shark', type:'C' , baits:'KWPG' , points:1312, gold:2400},
  {id: 'SwoF', stars:2, name: 'swordfish', type:'D' , baits:'WgY' , points:1108, gold:2100},
  {id: 'TNSh', stars:2, name: 'tawny nurse shark', type:'C' , baits:'GO' , points:812, gold:1900},
  {id: 'SunF', stars:2, name: 'sunfish', type:'D' , baits:'KPG' , points:812, gold:2000},
  {id: 'MaRa', stars:2, name: 'manta ray', type:'D' , baits:'UGR' , points:1212, gold:2300},
  {id: 'GFSR', stars:2, name: 'giant freshwater stingray', type:'R' , baits:'Wg' , points:1112, gold:2200},

  {id: 'Stic', stars:3, name: 'stickleback', type:'L' , baits:'NGY' , points:69, gold:340},
  {id: 'SpLb', stars:3, name: 'spiny lobster', type:'C' , baits:'KGg' , points:126, gold:360},
  {id: 'SeHo', stars:3, name: 'sea horse', type:'C' , baits:'NGY' , points:99, gold:320},
  {id: 'PinF', stars:3, name: 'pinecone fish', type:'C' , baits:'NPGY' , points:96, gold:350},
  {id: 'FlOc', stars:3, name: 'flapjack octopus', type:'D' , baits:'WPY' , points:96, gold:300},
  {id: 'GiIs', stars:3, name: 'giant isopod', type:'D' , baits:'NO' , points:159, gold:420},
  {id: 'VipF', stars:3, name: 'viperfish', type:'D' , baits:'NGY' , points:144, gold:400},
  {id: 'OCSR', stars:3, name: 'ocellate river stingray', type:'R' , baits:'KP' , points:156, gold:380},
  {id: 'Koi', stars:3, name: 'koi', type:'L' , baits:'Ug' , points:354, gold:850},
  {id: 'HuWr', stars:3, name: 'humphead wrasse', type:'C' , baits:'NGg' , points:744, gold:1120},
  {id: 'HoCr', stars:3, name: 'horseshoe crab', type:'C' , baits:'WG' , points:354, gold:920},
  {id: 'Coel', stars:3, name: 'coelacanth', type:'D' , baits:'Ug' , points:717, gold:1280},
  {id: 'StiF', stars:3, name: 'stringfish', type:'R' , baits:'NU' , points:534, gold:1050},
  {id: 'FooF', stars:3, name: 'football fish', type:'D' , baits:'Nb' , points:354, gold:1000},
  {id: 'FrSh', stars:3, name: 'frilled shark', type:'D' , baits:'WN' , points:657, gold:1150},
  {id: 'GiCa', stars:3, name: 'gigantic carp', type:'R' , baits:'Kg' , points:774, gold:1200},
  {id: 'MeDF', stars:3, name: 'mediterranean dealfish', type:'D' , baits:'WN' , points:747, gold:1080},
  {id: 'PelE', stars:3, name: 'pelican eel', type:'D' , baits:'KB' , points:447, gold:1030},
  {id: 'EleE', stars:3, name: 'electric eel', type:'R' , baits:'Nb' , points:714, gold:1240},
  {id: 'AfLF', stars:3, name: 'african lungfish', type:'L' , baits:'Nb' , points:684, gold:1200},
  {id: 'WhSh', stars:3, name: 'whale shark', type:'D' , baits:'NPg' , points:1869, gold:2500},
  {id: 'Stur', stars:3, name: 'sturgeon', type:'R' , baits:'KUG' , points:1698, gold:2600},
  {id: 'Arap', stars:3, name: 'arapaima', type:'R' , baits:'NgY' , points:1524, gold:2700},
  {id: 'SpER', stars:3, name: 'spotted eagle ray', type:'D' , baits:'WUB' , points:1674, gold:2800},
  {id: 'Leed', stars:3, name: 'leedsichthys', type:'D' , baits:'KPGR' , points:1500, gold:4000},
  {id: 'Rhiz', stars:3, name: 'rhizodus', type:'R' , baits:'NbgY' , points:1800, gold:5000},
  {id: 'Dunk', stars:3, name: 'dunkleosteus', type:'D' , baits:'WPB' , points:2400, gold:6000},
  {id: 'Ness', stars:3, name: 'nessie', type:'L' , baits:'GOR' , points:2400, gold:6000},
  {id: 'Kron', stars:3, name: 'kronosaurus', type:'D' , baits:'bG' , points:2400, gold:6000},
  {id: 'Drag', stars:3, name: 'dragon', type:'L' , baits:'PgY' , points:3000, gold:8000},
  {id: 'Levi', stars:3, name: 'leviathan', type:'D' , baits:'KWbB' , points:3000, gold:8000},
  {id: 'Krak', stars:3, name: 'kraken', type:'D' , baits:'UgY' , points:3600, gold:10000},
  {id: 'UFO', stars:3, name: 'UFO', type:'L' , baits:'NbG' , points:4200, gold:12000},

  {id: 'GiSq', stars:3, name: 'giant squid', type:'D' , baits:'KOR' , points:3000, gold:5000, special:true},
  {id: 'Oarf', stars:3, name: 'oarfish', type:'D' , baits:'WBG' , points:3000, gold:5000, special:true},
  {id: 'GoBa', stars:3, name: 'golden bass', type:'L' , baits:'NUbR' , points:3000, gold:6000, special:true},
  {id: 'GoKo', stars:3, name: 'golden koi', type:'L' , baits:'NUBg' , points:3000, gold:6000, special:true},
  {id: 'GoBr', stars:3, name: 'golden bream', type:'D' , baits:'NbBR' , points:3000, gold:6000, special:true},
  {id: 'GoRT', stars:3, name: 'golden rainbow trout', type:'R' , baits:'KPbO' , points:3000, gold:6000, special:true},
  {id: 'GoSa', stars:3, name: 'golden salmon', type:'R' , baits:'WUgO' , points:3000, gold:6000, special:true},
  {id: 'GoTu', stars:3, name: 'golden tuna', type:'D' , baits:'WPBg' , points:4000, gold:8000, special:true},
  {id: 'GoSF', stars:3, name: 'golden swordfish', type:'D' , baits:'PGR' , points:4000, gold:8000, special:true},
  {id: 'GoSh', stars:3, name: 'golden shark', type:'C' , baits:'WbYO' , points:4000, gold:8000, special:true},
  {id: 'ChCh', stars:3, name: 'cheep Cheep', type:'C' , baits:'WBYO' , points:5000, gold:15000, special:true},
  {id: 'Bloo', stars:3, name: 'blooper', type:'C' , baits:'KNPR' , points:5000, gold:15000, special:true},
];

class DbFishing {

  constructor(){
    console.log("Init Fishing DB");

    // Prep in Map
    this.spots = this.arrayToMap(spots_raw, Spot);
    this.islands = this.arrayToMap(islands_raw, Island);
    this.baits = this.arrayToMap(baits_raw, Bait);
    this.fishs = this.arrayToMap(fishes_raw, Fish);

    // Build Links between island and spots
    for(var island of this.islands.values()){
      island.spots = [];
      for(let sId of island.spots_id){
        let spot = this.spots.get(sId);
        if(spot !== undefined){
          island.spots.push(spot);
          spot.island = island;
        }else{
          console.error("Invalid Link to spot "+sId);
        }
      }
      delete island.spots_id;
    }

    // Build Links between spots and fishes
    for(let spot of this.spots.values()){
      spot.fish = [];
      if(spot.fish_id !== undefined){
        for(let fishId of spot.fish_id){
          let fish = this.fishs.get(fishId);
          if(fish !== undefined){
            spot.fish.push(fish);
            if(fish.spot === undefined){
              fish.spot = [];
            }
            fish.spot.push(spot);
          }else{
            console.error("Invalid Link to fish "+fishId);
          }
        }
        delete spot.fish_id;
      }
    }


    // Build links between fish and baits
    for(let fish of this.fishs.values()){
      let baitList = [];
      for(let baitId of fish.baits.split("")){
        let bait = this.baits.get(baitId);
        if(bait !== undefined){
            baitList.push(bait);
        }else{
          console.error("Invalid Link to bait "+baitId);
        }
      }
      fish.set('baits', baitList);
    }

  }

  arrayToMap(elements, objectType){
    var eltMap = new Map();
    for(let element of elements){
      if(eltMap.get(element.id) === undefined){
        if(objectType !== undefined){
          eltMap.set(element.id, objectType.create(element));
        }else{
          eltMap.set(element.id, element);
        }
      }
      else{
        console.error("Duplicate element with Id "+element.id, element, eltMap.get(element.id));
      }
    }
    return eltMap;
  }

  getAllIslands() {
    return [...this.islands.values()];
  }

  getAllBaits(){
    return [...this.baits.values()];
  }

}
export let dbFishing = new DbFishing();
