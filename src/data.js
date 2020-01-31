const data = [
    { 
        name: 'Oree', 
        type1: 'Digital', 
        trait1: 'Zaobian'
    },
    { 
        name: 'Zaobian', 
        type1: 'Digital', 
        trait1: 'Oree'
    },
    {
        name: 'Platypet',
        type1: 'Water',
        type2: 'Toxic',
        trait1: 'Platox'
    },
    {
        name: 'Platox',
        type1: 'Water',
        type2: 'Toxic',
        trait1: 'Platypet'
    },
    {
        name: 'Platimous',
        type1: 'Water',
        type2: 'Toxic',
        trait1: 'Platox'
    },
    { 
        name: 'Swali',
        type1: 'Nature',
        trait1: 'Loali'
    },
    {
        name: 'Loali',
        type1: 'Nature',
        type2: 'Wind',
        trait1: 'Swali'
    },
    {
        name: 'Tateru',
        type1: 'Neutral',
        trait1: 'Soft Touch',
        trait2: 'Resilient'
    },
    { 
        name: 'Paharo',
        type1: 'Wind',
        trait1: 'Paharac'
    },
    { 
        name: 'Paharac',

        type1: 'Wind',
  
        trait1: 'Paharo'
    },
    { 
        name: 'Granpah', 
        type1: 'Wind', 
        trait1: 'Paharac'
    },
    {
        name: 'Bunbun',
        type1: 'Earth',
        type2: 'Crystal',
        trait1: 'Mudrid'
    },
    {
        name: 'Mudrid',
        type1: 'Earth',
        type2: 'Crystal',
        trait1: 'Bunbun'
    },
    { 
        name: 'Hidody', 
        type1: 'Nature', 
        trait1: 'Taifu'
    },
    { 
        name: 'Taifu',
        type1: 'Nature',
        trait1: 'Hidody'
    },
    { 
        name: 'Fomu', 
        type1: 'Water', 
        trait1: 'Wiplump' 
    },
    {
        name: 'Wiplump',
        type1: 'Water',
        type2: 'Wind',
        trait1: 'Fomu'
    },
    { 
        name: 'Skail', 
        type1: 'Neutral',
        trait1: 'Skunch' 
    },
    {
        name: 'Skunch',
        type1: 'Neutral',
        type2: 'Melee',
        trait1: 'Skail'
    },
    { 
        name: 'Houchic', 
        type1: 'Mental',
        trait1: 'Tental'
    },
    { 
        name: 'Tental', 
        type1: 'Mental', 
        trait1: 'Houchic'
    },
    {
        name: 'Orphyll',
        type1: 'Nature',
        type2: 'Toxic',
        trait1: 'Nidrasil'
    },
    {
        name: 'Nidrasil',
        type1: 'Nature',
        type2: 'Toxic',
        trait1: 'Orphyll'
    },
    { 
        name: 'Banapi',
        type1: 'Fire', 
        trait1: 'Capyre' 
    },
    { 
        name: 'Capyre',
        type1: 'Fire', 
        trait1: 'Banapi' 
    },
    { 
        name: 'Lapinite',
        type1: 'Crystal', 
        trait1: 'Azuroc' 
    },
    { 
        name: 'Azuroc',
        type1: 'Crystal', 
        trait1: 'Lapinite' 
    },
    { 
        name: 'Zenoreth',
        type1: 'Crystal', 
        trait1: 'Azuroc' 
    },
    { 
        name: 'Bigu',
        type1: 'Nature', 
        trait1: 'Babawa' 
    },
    {
        name: 'Babawa',
        type1: 'Nature',
        type2: 'Water',
        trait1: 'Bigu'
    },
    { 
        name: 'Kaku',
        type1: 'Nature', 
        trait1: 'Saku' 
    },
    {
        name: 'Saku',
        type1: 'Nature',
        type2: 'Wind',
        trait1: 'Kaku'
    },
    {
        name: 'Valash',
        type1: 'Neutral',
        type2: 'Crystal',
        trait1: 'Scavenger',
        trait2: 'Determined'
    },
    {
        name: 'Barnshe',
        type1: 'Mental',
        type2: 'Wind',
        trait1: 'Neutrality',
        trait2: 'Air Specialist'
    },
    {
        name: 'Gyalis',
        type1: 'Crystal',
        type2: 'Melee',
        trait1: 'Mirroring',
        trait2: 'Resistant'
    },
    { 
        name: 'Occlura',
        type1: 'Crystal', 
        trait1: 'Myx' 
    },
    {
        name: 'Myx',
        type1: 'Crystal',
        type2: 'Mental',
        trait1: 'Occlura'
    },
    { 
        name: 'Raiber',
        type1: 'Fire', 
        trait1: 'Raize' 
    },
    { 
        name: 'Raize',
        type1: 'Fire', 
        trait1: 'Raiber' 
    },
    { 
        name: 'Raican',
        type1: 'Fire', 
        trait1: 'Raize' 
    },
    { 
        name: 'Pewki',
        type1: 'Water', 
        trait1: 'Piraniant' 
    },
    { 
        name: 'Piraniant',
        type1: 'Water', 
        trait1: 'Pewki' 
    },
    {
        name: 'Saipat',
        type1: 'Water',
        type2: 'Melee',
        trait1: 'Amphibian',
        trait2: 'Toxic Affinity'
    },
    { 
        name: 'Crystle',
        type1: 'Crystal', 
        trait1: 'Sherald' 
    },
    { 
        name: 'Sherald',
        type1: 'Crystal', 
        trait1: 'Crystle' 
    },
    { 
        name: 'Hocus',
        type1: 'Mental', 
        trait1: 'Pocus' 
    },
    { 
        name: 'Pocus',
        type1: 'Mental', 
        trait1: 'Hocus' 
    },
    {
        name: 'Sparzy',
        type1: 'Electric',
        trait1: 'Last Rush',
        trait2: 'Lightning Rod'
    },
    { 
        name: 'Mushi',
        type1: 'Toxic', 
        trait1: 'Mushook' 
    },
    {
        name: 'Mushook',
        type1: 'Toxic',
        type2: 'Melee',
        trait1: 'Mushi'
    },
    { 
        name: 'Magmis',
        type1: 'Fire', 
        trait1: 'Mastione' 
    },
    { 
        name: 'Mastione',
        type1: 'Fire', 
        trait1: 'Magmis' 
    },
    { 
        name: 'Umishi',
        type1: 'Water', 
        trait1: 'Ukama' 
    },
    { 
        name: 'Ukama',
        type1: 'Water', 
        trait1: 'Umishi' 
    },
    { 
        name: 'Smazee',
        type1: 'Melee', 
        trait1: 'Baboong' 
    },
    { 
        name: 'Baboong',
        type1: 'Melee', 
        trait1: 'Smazee' 
    },
    { 
        name: 'Spriole',
        type1: 'Nature', 
        trait1: 'Deendre' 
    },
    { 
        name: 'Deendre',
        type1: 'Nature', 
        trait1: 'Spriole' 
    },
    { 
        name: 'Cerneaf',
        type1: 'Nature', 
        trait1: 'Deendre' 
    },
    { 
        name: 'Toxolotl',
        type1: 'Toxic', 
        trait1: 'Noxolotl' 
    },
    { 
        name: 'Noxolotl',
        type1: 'Toxic', 
        trait1: 'Toxolotl' 
    },
    { 
        name: 'Blooze',
        type1: 'Toxic', 
        trait1: 'Goolder' 
    },
    { 
        name: 'Goolder',
        type1: 'Toxic', 
        trait1: 'Blooze' 
    },
    {
        name: 'Zephyruff',
        type1: 'Toxic',
        type2: 'Wind',
        trait1: 'Volarend'
    },
    {
        name: 'Volarend',
        type1: 'Toxic',
        type2: 'Wind',
        trait1: 'Zephyruff'
    },
    {
        name: 'Ganki',
        type1: 'Electric',
        type2: 'Wind',
        trait1: 'Gazuma'
    },
    {
        name: 'Gazuma',
        type1: 'Electric',
        type2: 'Wind',
        trait1: 'Ganki'
    },
    {
        name: 'Oceara',
        type1: 'Water',
        trait1: 'Hydrologist',
        trait2: 'Mithridatism'
    },
    {
        name: 'Shuine',
        type1: 'Crystal',
        type2: 'Water',
        trait1: 'Immunity',
        trait2: 'Guardian'
    },
    {
        name: 'Nessla',
        type1: 'Water',
        type2: 'Electric',
        trait1: 'Electric Synthesize',
        trait2: 'Hydrologist'
    },
    { 
        name: 'Kalazu',
        type1: 'Water', 
        trait1: 'Kalabyss' 
    },
    {
        name: 'Kalabyss',
        type1: 'Water',
        type2: 'Toxic',
        trait1: 'Kalazu'
    },
    {
        name: 'Adoroboros',
        type1: 'Toxic',
        type2: 'Mental',
        trait1: 'Synergy Master',
        trait2: 'Toxic Skin'
    },
    {
        name: 'Tuwai',
        type1: 'Wind',
        trait1: 'Spoilsport',
        trait2: 'Resilient'
    },
    {
        name: 'Tuvine',
        type1: 'Wind',
        type2: 'Crystal',
        trait1: 'Tuwai'
    },
    {
        name: 'Kinu',
        type1: 'Nature',
        type2: 'Mental',
        trait1: 'Protector',
        trait2: 'Benefactor'
    },
    {
        name: 'Vulvir',
        type1: 'Fire',
        type2: 'Earth',
        trait1: 'Vulor'
    },
    {
        name: 'Vulor',
        type1: 'Fire',
        type2: 'Earth',
          trait1: 'Vulvir'
    },
    {
        name: 'Vulcrane',
        type1: 'Fire',
        type2: 'Earth',
          trait1: 'Vulor'
    },
    {
        name: 'Pigepic',
        type1: 'Wind',
        trait1: 'Friendship',
          trait2: 'Fainted Curse'
    },
    {
        name: 'Anahir',
        type1: 'Crystal',
        type2: 'Fire',
        trait1: 'Trauma',
        trait2: 'Flawed Crystal'
    }
]

export { data }