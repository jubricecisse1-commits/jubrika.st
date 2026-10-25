// Frais de livraison / expédition — repris à l’identique du catalogue V107
export const doualaDeliveryFees = {"Akwa": 1000, "Ange Raphaël": 1000, "Aéroport / Texaco Aéroport": 1000, "Bali": 1500, "Bassa": 1500, "Beedi": 1000, "Bépanda": 1000, "Bilongué": 1000, "Bois des Singes": 1500, "Bonabéri": 1500, "Bonanjo": 1500, "Bonangang": 1000, "Bonangando": 1000, "Bonapriso": 1500, "Bonassama": 1500, "Bonamoussadi": 1000, "Brazzaville": 1000, "Cité des Palmiers": 1000, "Cité SIC": 1000, "Deïdo": 1000, "Dibom": 1500, "Japoma": 1500, "Kotto": 1000, "Lendi": 1500, "Logbaba": 1000, "Logbessou": 1000, "Logpom": 1000, "Madagascar": 1000, "Maképé": 1000, "Mambanda": 1500, "Ndogbati": 1000, "Ndogbong": 1000, "Ndoghem": 1000, "Ndogpassi": 1000, "Ndogsimbi": 1000, "Ndobo": 1500, "Ndokoti": 1000, "New-Bell": 1000, "Nyalla": 1000, "Nylon": 1000, "Oyack": 1000, "Sodiko": 1000, "Yassa": 1500, "PK 8": 1000, "PK 9": 1000, "PK 10": 1000, "PK 11": 1000, "PK 12": 1000, "PK 13": 1000, "PK 14": 1000, "PK 15": 1500, "PK 16": 1500, "PK 17": 1500, "PK 18": 1500, "PK 19": 1500};
const doualaAliases = {"aeroport": "Aéroport / Texaco Aéroport", "texaco aeroport": "Aéroport / Texaco Aéroport", "texaco": "Aéroport / Texaco Aéroport", "deido": "Deïdo", "bepanda": "Bépanda", "bonaberi": "Bonabéri", "makepe": "Maképé", "bilongue": "Bilongué", "cite sic": "Cité SIC", "cite des palmiers": "Cité des Palmiers", "bois de singe": "Bois des Singes", "bois des singes": "Bois des Singes", "ange raphael": "Ange Raphaël", "new bell": "New-Bell", "ndog bongo": "Ndogbong"};
export const shippingFees = {"Bafoussam": 2000, "Garoua": 4000, "Maroua": 4000, "Guider": 4000, "Bertoua": 3000, "Buea": 2000, "Limbé": 2000, "Kumba": 2000, "Kribi": 2000, "Ebolowa": 2000, "Batouri": 3000, "Foumban": 2000, "Dschang": 2000, "Nkongsamba": 2000, "Edéa": 2000, "Garoua-Boulaï": 3000};
export function normalizeAreaName(value){
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'')
    .toLowerCase()
    .replace(/[-_/]+/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}

export const yaoundeDeliveryFees = {"Bastos": 1000, "Cradat": 1000, "Nlongkak": 1000, "Mvog-Ada": 1000, "Essos": 1000, "Mvog-Mbi": 1000, "Mimboman": 1000, "Ekounou": 1000, "Kondengui": 1000, "Nkolndongo": 1000, "Anguissa": 1000, "Omnisports": 1000, "Ngousso": 1000, "Etoudi": 1000, "Emana": 1000, "Messassi": 1000, "Olembe": 1500, "Mballa II": 1500, "Manguier": 1000, "Elig-Essono": 1000, "Elig-Edzoa": 1500, "Tsinga": 1500, "Mokolo": 1000, "Madagascar": 1000, "Messa": 1000, "Briqueterie": 1000, "Cité Verte": 1000, "Obili": 1000, "Ngoa-Ekélé": 1000, "Melen": 1000, "Efoulan": 1000, "Nsam": 1500, "Olezoa": 1000, "Dakar": 1000, "Ahala": 1500, "Obobogo": 1000, "Mvan": 1000, "Odza": 1500, "Messamendongo": 1000, "Ekoumdoum": 1000, "Awae": 1500, "Nkomo": 1000, "Biteng": 1000, "Biyem-Assi": 1000, "Mendong": 1000, "Etoug-Ebe": 1000, "Mvog-Betsi": 1000, "Simbock": 1000, "Nkolbikok": 1000, "Etetak": 1500, "Oyom-Abang": 1500, "Nkolbisson": 1000, "Minkoameyos": 1500, "Nyom": 1000, "Nkolondom": 1000, "Nkolfoulou": 1500, "Acacias": 1000, "Jouvence": 1000, "Nsimeyong": 1000, "Damas": 1000, "Nkomkana": 1000, "Santa Barbara": 1000, "Montée Jouvence": 1000, "Carrefour Régie": 1000, "Etoa-Meki": 1000, "Ekie": 1000, "Nkoabang": 1000, "Soa": 1500, "Mbankomo": 2000, "Febe": 1000, "Dragages": 1000, "Golf": 1000, "Mont Fébé": 1000, "Carrefour MEEC": 1000, "Tradex Éleveur": 1000, "Éleveur": 1000, "Tongolo": 1000, "Mvog Atangana Mballa": 1000, "Carrefour Ahala": 1500, "Carrefour Tropicana": 1000, "Carrefour Nkoabang": 1000, "Carrefour Mvog-Mbi": 1000, "Carrefour Nsam": 1500, "Carrefour Obili": 1000, "Carrefour Etoug-Ebe": 1000, "Carrefour Mendong": 1000, "Carrefour Messassi": 1000, "Carrefour Emana": 1000, "Carrefour Olembe": 1000};
const yaoundeAliases = {"vog ada": "Mvog-Ada", "vog mbi": "Mvog-Mbi", "mimbo man": "Mimboman", "ekunu": "Ekounou", "kodengui": "Kondengui", "kondongo": "Nkolndongo", "gouso": "Ngousso", "etudi": "Etoudi", "mala 2": "Mballa II", "manguie": "Manguier", "elike sono": "Elig-Essono", "elik edjoa": "Elig-Edzoa", "tinga": "Tsinga", "biketeri": "Briqueterie", "ngwaikele": "Ngoa-Ekélé", "melene": "Melen", "foulane": "Efoulan", "sam": "Nsam", "ala": "Ahala", "obogo": "Obobogo", "van": "Mvan", "oja": "Odza", "epundum": "Ekoumdoum", "awai": "Awae", "biemassi": "Biyem-Assi", "etugbebie": "Etoug-Ebe", "vogbetsi": "Mvog-Betsi", "kolbikok": "Nkolbikok", "etekak": "Etetak", "oyoma bank": "Oyom-Abang", "kolbisson": "Nkolbisson", "kemeyos": "Minkoameyos", "myom": "Nyom", "kolondom": "Nkolondom", "akassi": "Acacias", "simeo": "Nsimeyong", "comkana": "Nkomkana", "etoile meki": "Etoa-Meki", "ekie": "Ekie", "kouabang": "Nkoabang", "konfolo": "Nkolfoulou", "bancomo": "Mbankomo", "dragage": "Dragages", "mont febe": "Mont Fébé", "tangolo": "Tongolo", "vokatanga nambala": "Mvog Atangana Mballa", "carrefour aala": "Carrefour Ahala", "carrefour kouabang": "Carrefour Nkoabang", "carrefour vogbe": "Carrefour Mvog-Mbi", "carrefour smart": "Carrefour Nsam", "carrefour etoubebe": "Carrefour Etoug-Ebe", "carrefour mindong": "Carrefour Mendong", "carrefour messa": "Carrefour Messassi", "carrefour imana": "Carrefour Emana", "carrefour olombe": "Carrefour Olembe"};

const doualaNormalized = Object.fromEntries(
  Object.keys(doualaDeliveryFees).map(name => [normalizeAreaName(name), name])
);
const yaoundeNormalized = Object.fromEntries(
  Object.keys(yaoundeDeliveryFees).map(name => [normalizeAreaName(name), name])
);

export function resolveArea(city, value){
  const n = normalizeAreaName(value);
  if(!n) return null;

  let normalizedMap = null;
  let aliases = null;
  if(city === 'Douala'){
    normalizedMap = doualaNormalized;
    aliases = doualaAliases;
  } else if(city === 'Yaoundé'){
    normalizedMap = yaoundeNormalized;
    aliases = yaoundeAliases;
  } else {
    return null;
  }

  if(normalizedMap[n]) return normalizedMap[n];
  if(aliases[n]) return aliases[n];

  const starts = Object.keys(normalizedMap).filter(k => k.startsWith(n) || n.startsWith(k));
  if(starts.length === 1) return normalizedMap[starts[0]];

  return null;
}

export function getDeliveryFee(city, areaValue){
  const areaName = resolveArea(city, areaValue);
  if(city === 'Douala' && areaName) return doualaDeliveryFees[areaName];
  if(city === 'Yaoundé' && areaName) return yaoundeDeliveryFees[areaName];
  return 0;
}
