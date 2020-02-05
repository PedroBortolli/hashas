const data = [
    {
        name: 'Oree',
        type1: 'Digital',
        trait1: 'Zaobian',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/9/99/Oree.png/250px-Oree.png?version=be49bf47c5dd84fff22f85d8154c3ffc'
    },
        {
        name: 'Zaobian',
        type1: 'Digital',
        trait1: 'Oree',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/54/Zaobian.png/250px-Zaobian.png?version=cc9cfb9398169a6ca15b2b0a5ecb3a78'
    },
        {
        name: 'Platypet',
        type1: 'Water',
        type2: 'Toxic',
        trait1: 'Platox',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/0/03/Platypet.png/250px-Platypet.png?version=c67001e7b2c9bc9d51c99a3ada63901b'
    },
    {
        name: 'Platox',
        type1: 'Water',
        type2: 'Toxic',
        trait1: 'Platypet',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/7b/Platox.png/250px-Platox.png?version=1a591b367bd135a041bff34d1b90c89c'
    },
    {
        name: 'Platimous',
        type1: 'Water',
        type2: 'Toxic',
        trait1: 'Platox',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/7f/Platimous.png/250px-Platimous.png?version=4d26af36afe7f53a1ac87c7bae37c16c'
    },
    {
        name: 'Swali',
        type1: 'Nature',
        trait1: 'Loali',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/8a/Swali.png/250px-Swali.png?version=71a390aa66be7f05d1cb833c23e3fc07'
    },
        {
        name: 'Loali',
        type1: 'Nature',
        type2: 'Wind',
        trait1: 'Swali',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/0/0c/Loali.png/250px-Loali.png?version=d76dbe38010f6b2366b8632440487857'
    },
    {
        name: 'Tateru',
        type1: 'Neutral',
        trait1: 'Soft Touch',
        trait2: 'Resilient',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/55/Tateru.png/250px-Tateru.png?version=6bdaab87e5320c9d7836e7f20886cfc1'
    },
    {
        name: 'Paharo',
        type1: 'Wind',
        trait1: 'Paharac',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/1/1c/Paharo.png/250px-Paharo.png?version=931b16b6679375fd6bee753b8ddaf0d0'
    },
        {
        name: 'Paharac',
        type1: 'Wind',
        trait1: 'Paharo',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/2c/Paharac.png/250px-Paharac.png?version=415ed2494c1c351d7d630c56ed01fc95'
    },
        {
        name: 'Granpah',
        type1: 'Wind',
        trait1: 'Paharac',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/d/d5/Granpah.png/250px-Granpah.png?version=7145d16ca67fabd7029ce8230ba3a4d0'
    },
        {
        name: 'Bunbun',
        type1: 'Earth',
        type2: 'Crystal',
        trait1: 'Mudrid',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/3/38/Bunbun.png/250px-Bunbun.png?version=6e93d45b1ecbe30473c8a120ebf43edf'
    },
    {
        name: 'Mudrid',
        type1: 'Earth',
        type2: 'Crystal',
        trait1: 'Bunbun',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/f5/Mudrid.png/250px-Mudrid.png?version=ac895e6b3e62190ba4d4b351afed1032'
    },
    {
        name: 'Hidody',
        type1: 'Nature',
        trait1: 'Taifu',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/1/1a/Hidody.png/250px-Hidody.png?version=02d1797386953394720f23e14793ae1e'
    },
        {
        name: 'Taifu',
        type1: 'Nature',
        trait1: 'Hidody',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/3/36/Taifu.png/250px-Taifu.png?version=7f62ea46113407cad16d296efc8d567a'
    },
        {
        name: 'Fomu',
        type1: 'Water',
        trait1: 'Wiplump',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/76/Fomu.png/250px-Fomu.png?version=f26a576737492e369d78b384d64cd6d8'
    },
        {
        name: 'Wiplump',
        type1: 'Water',
        type2: 'Wind',
        trait1: 'Fomu',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/f7/Wiplump.png/250px-Wiplump.png?version=2fd95f3d8d3f574bef210d92b559ffc2'
    },
    {
        name: 'Skail',
        type1: 'Neutral',
        trait1: 'Skunch',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/77/Skail.png/250px-Skail.png?version=1c6d883d20a9324286671868b54eec02'
    },
        {
        name: 'Skunch',
        type1: 'Neutral',
        type2: 'Melee',
        trait1: 'Skail',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/4b/Skunch.png/250px-Skunch.png?version=32f8420e59a00039c6cd76f38334b226'
    },
    {
        name: 'Houchic',
        type1: 'Mental',
        trait1: 'Tental',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/a/af/Houchic.png/250px-Houchic.png?version=599ba4f08db27a03e9493c73e69605cb'
    },
        {
        name: 'Tental',
        type1: 'Mental',
        trait1: 'Houchic',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/3/37/Tental.png/250px-Tental.png?version=1eb805a04e3ef2bc672d89cd7ea8d0b6'
    },
        {
        name: 'Orphyll',
        type1: 'Nature',
        type2: 'Toxic',
        trait1: 'Nidrasil',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/b/b3/Orphyll.png/250px-Orphyll.png?version=80e136c8dff53c85b5cdec0b22ad5051'
    },
    {
        name: 'Nidrasil',
        type1: 'Nature',
        type2: 'Toxic',
        trait1: 'Orphyll',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/5b/Nidrasil.png/250px-Nidrasil.png?version=c5fb32d9632c9c202f77d3582f0a18d6'
    },
    {
        name: 'Banapi',
        type1: 'Fire',
        trait1: 'Capyre',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/27/Banapi.png/250px-Banapi.png?version=185bd91e665278ad4b70a6a4dc4ca42f'
    },
        {
        name: 'Capyre',
        type1: 'Fire',
        trait1: 'Banapi',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/c/cf/Capyre.png/250px-Capyre.png?version=d3c0bc298fa2142b5abf324b167193e4'
    },
        {
        name: 'Lapinite',
        type1: 'Crystal',
        trait1: 'Azuroc',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/6/69/Lapinite.png/250px-Lapinite.png?version=a4c5c27584e856fbc34dd0d34829ce06'
    },
        {
        name: 'Azuroc',
        type1: 'Crystal',
        trait1: 'Lapinite',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/9/9a/Azuroc.png/250px-Azuroc.png?version=17c1e097ac20a6cffc6789cedf8f8868'
    },
        {
        name: 'Zenoreth',
        type1: 'Crystal',
        trait1: 'Azuroc',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/22/Zenoreth.png/250px-Zenoreth.png?version=157e33919d2150667fe8eb471d1b5fee'
    },
        {
        name: 'Bigu',
        type1: 'Nature',
        trait1: 'Babawa',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/0/09/Bigu.png/250px-Bigu.png?version=24e2192d9bb46fc3986c8e7f2134b309'
    },
        {
        name: 'Babawa',
        type1: 'Nature',
        type2: 'Water',
        trait1: 'Bigu',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/b/b9/Babawa.png/250px-Babawa.png?version=cfb16bf66dc7a09067f9ddb088855c11'
    },
    {
        name: 'Kaku',
        type1: 'Nature',
        trait1: 'Saku',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/4e/Kaku.png/250px-Kaku.png?version=621735cf3f014afa71890bbde56ec202'
    },
        {
        name: 'Saku',
        type1: 'Nature',
        type2: 'Wind',
        trait1: 'Kaku',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/2a/Saku.png/250px-Saku.png?version=df60d201b6ae8340edea0f7b993e3f1e'
    },
    {
        name: 'Valash',
        type1: 'Neutral',
        type2: 'Crystal',
        trait1: 'Scavenger',
        trait2: 'Determined',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/80/Valash.png/250px-Valash.png?version=550813faa5fe91e8e5b84ff03a525083'
    },
    {
        name: 'Barnshe',
        type1: 'Mental',
        type2: 'Wind',
        trait1: 'Neutrality',
        trait2: 'Air Specialist',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/6/6c/Barnshe.png/250px-Barnshe.png?version=50a894010b67adaf7af592db1a31802a'
    },
    {
        name: 'Gyalis',
        type1: 'Crystal',
        type2: 'Melee',
        trait1: 'Mirroring',
        trait2: 'Resistant',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/d/d6/Gyalis.png/250px-Gyalis.png?version=77871f88bf39ad1ecbcc3758613262f6'
    },
    {
        name: 'Occlura',
        type1: 'Crystal',
        trait1: 'Myx',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/3/38/Occlura.png/250px-Occlura.png?version=5569e7e9cad8354696651f36c589d165'
    },
        {
        name: 'Myx',
        type1: 'Crystal',
        type2: 'Mental',
        trait1: 'Occlura',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/0/07/Myx.png/250px-Myx.png?version=9adf2b9fbee40af02a3cb5af3d158878'
    },
    {
        name: 'Raiber',
        type1: 'Fire',
        trait1: 'Raize',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/c/c8/Raiber.png/250px-Raiber.png?version=bed732746b7818bc495ed76f1ceac907'
    },
        {
        name: 'Raize',
        type1: 'Fire',
        trait1: 'Raiber',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/f4/Raize.png/250px-Raize.png?version=33bf489d7d50a5f631b6e1141989a978'
    },
        {
        name: 'Raican',
        type1: 'Fire',
        trait1: 'Raize',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/9/90/Raican.png/250px-Raican.png?version=c7889fd0d01ba97db473efae862698ad'
    },
        {
        name: 'Pewki',
        type1: 'Water',
        trait1: 'Piraniant',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/86/Pewki.png/250px-Pewki.png?version=463f88a7398f1ec5c08aefdfb9473ba9'
    },
        {
        name: 'Piraniant',
        type1: 'Water',
        trait1: 'Pewki',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/0/01/Piraniant.png/250px-Piraniant.png?version=61c78067f3e253e320de3f185d3d5007'
    },
        {
        name: 'Saipat',
        type1: 'Water',
        type2: 'Melee',
        trait1: 'Amphibian',
        trait2: 'Toxic Affinity',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/e/e3/Saipat.png/250px-Saipat.png?version=228eb2f6dc2edc1f2a8b31f3f301346e'
    },
    {
        name: 'Crystle',
        type1: 'Crystal',
        trait1: 'Sherald',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/a/ac/Crystle.png/250px-Crystle.png?version=7b700e68a21790e67fe5fb6edb5e7019'
    },
        {
        name: 'Sherald',
        type1: 'Crystal',
        trait1: 'Crystle',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/ff/Sherald.png/250px-Sherald.png?version=7c0a388c556a40439425aa43f566358c'
    },
        {
        name: 'Hocus',
        type1: 'Mental',
        trait1: 'Pocus',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/d/d7/Hocus.png/250px-Hocus.png?version=fef98f08c5fea97385ed36931d5b5635'
    },
        {
        name: 'Pocus',
        type1: 'Mental',
        trait1: 'Hocus',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/fb/Pocus.png/250px-Pocus.png?version=7c2ab438239957313985627902ca26ce'
    },
        {
        name: 'Sparzy',
        type1: 'Electric',
        trait1: 'Last Rush',
        trait2: 'Lightning Rod',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/80/Sparzy.png/250px-Sparzy.png?version=2e48ac98b1c077a9ab73f01b07365152'
    },
    {
        name: 'Mushi',
        type1: 'Toxic',
        trait1: 'Mushook',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/78/Mushi.png/250px-Mushi.png?version=b14f77181db5677a6e9510bf09f22742'
    },
        {
        name: 'Mushook',
        type1: 'Toxic',
        type2: 'Melee',
        trait1: 'Mushi',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/9/90/Mushook.png/250px-Mushook.png?version=ad509c17396ecc5e692f43b3c4ad18aa'
    },
    {
        name: 'Magmis',
        type1: 'Fire',
        trait1: 'Mastione',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/5d/Magmis.png/250px-Magmis.png?version=87725b0c4699375b069ad5b21af167ad'
    },
        {
        name: 'Mastione',
        type1: 'Fire',
        trait1: 'Magmis',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/3/32/Mastione.png/250px-Mastione.png?version=cc14b00d2d3f6ea31961232acc1af16c'
    },
        {
        name: 'Umishi',
        type1: 'Water',
        trait1: 'Ukama',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/4f/Umishi.png/250px-Umishi.png?version=e09799f74fb9f824ad5a7c81bd9fc11b'
    },
        {
        name: 'Ukama',
        type1: 'Water',
        trait1: 'Umishi',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/75/Ukama.png/250px-Ukama.png?version=cd0a61eb461f881292c89a0255e1bdbc'
    },
        {
        name: 'Smazee',
        type1: 'Melee',
        trait1: 'Baboong',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/f7/Smazee.png/250px-Smazee.png?version=7935f03519b742cab5db6f412b746f07'
    },
        {
        name: 'Baboong',
        type1: 'Melee',
        trait1: 'Smazee',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/28/Baboong.png/250px-Baboong.png?version=3089a006c1697f592a47467468b3a209'
    },
        {
        name: 'Spriole',
        type1: 'Nature',
        trait1: 'Deendre',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/80/Spriole.png/250px-Spriole.png?version=72b01ba26964c374ecc9b6c9d8274beb'
    },
        {
        name: 'Deendre',
        type1: 'Nature',
        trait1: 'Spriole',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/42/Deendre.png/250px-Deendre.png?version=d4eb283c5362a2699dae876d76d2394e'
    },
        {
        name: 'Cerneaf',
        type1: 'Nature',
        trait1: 'Deendre',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/fa/Cerneaf.png/250px-Cerneaf.png?version=0eb9476fcb6fe44b4a0d708700dc74ba'
    },
        {
        name: 'Toxolotl',
        type1: 'Toxic',
        trait1: 'Noxolotl',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/4e/Toxolotl.png/250px-Toxolotl.png?version=efcfdaf33849137624965651a3ef900d'
    },
        {
        name: 'Noxolotl',
        type1: 'Toxic',
        trait1: 'Toxolotl',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/55/Noxolotl.png/250px-Noxolotl.png?version=8e3345c350c224df38b1aa079719fa81'
    },
        {
        name: 'Blooze',
        type1: 'Toxic',
        trait1: 'Goolder',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/ff/Blooze.png/250px-Blooze.png?version=800b800a0899827cd8f5ef022376290e'
    },
        {
        name: 'Goolder',
        type1: 'Toxic',
        trait1: 'Blooze',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/26/Goolder.png/250px-Goolder.png?version=f21bc7b49920b4f0743b39e465a6843b'
    },
        {
        name: 'Zephyruff',
        type1: 'Toxic',
        type2: 'Wind',
        trait1: 'Volarend',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/f7/Zephyruff.png/250px-Zephyruff.png?version=420e27d345e6f1e1834c3391443a19b1'
    },
    {
        name: 'Volarend',
        type1: 'Toxic',
        type2: 'Wind',
        trait1: 'Zephyruff',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/87/Volarend.png/250px-Volarend.png?version=c897ec310683c1e52035cbb7fdfbba54'
    },
    {
        name: 'Ganki',
        type1: 'Electric',
        type2: 'Wind',
        trait1: 'Gazuma',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/b/bc/Ganki.png/250px-Ganki.png?version=d18706728e9cc3706caea19e24063ac4'
    },
    {
        name: 'Gazuma',
        type1: 'Electric',
        type2: 'Wind',
        trait1: 'Ganki',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/5c/Gazuma.png/250px-Gazuma.png?version=358b25834f69fa0d65e3fa4fbc276f96'
    },
    {
        name: 'Oceara',
        type1: 'Water',
        trait1: 'Hydrologist',
        trait2: 'Mithridatism',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/26/Oceara.png/250px-Oceara.png?version=2d39fe51d12d259fe1223416010943db'
    },
    {
        name: 'Shuine',
        type1: 'Crystal',
        type2: 'Water',
        trait1: 'Immunity',
        trait2: 'Guardian',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/d/d9/Shuine.png/250px-Shuine.png?version=eaf40b01f6d3abacab71b426f04889ca'
    },
    {
        name: 'Nessla',
        type1: 'Water',
        type2: 'Electric',
        trait1: 'Electric Synthesize',
        trait2: 'Hydrologist',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/81/Nessla.png/250px-Nessla.png?version=f3f2884421cc242fa075c15059360426'
    },
    {
        name: 'Kalazu',
        type1: 'Water',
        trait1: 'Kalabyss',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/fc/Kalazu.png/250px-Kalazu.png?version=cf1db3bce51a47d2974bb53de228edcb'
    },
        {
        name: 'Kalabyss',
        type1: 'Water',
        type2: 'Toxic',
        trait1: 'Kalazu',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/9/90/Kalabyss.png/250px-Kalabyss.png?version=f0f8a29fec8bbdfd9401e190524b0719'
    },
    {
        name: 'Adoroboros',
        type1: 'Toxic',
        type2: 'Mental',
        trait1: 'Synergy Master',
        trait2: 'Toxic Skin',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/26/Adoroboros.png/250px-Adoroboros.png?version=b88b44f15eb65ebe8a64356b6ebabfca'
    },
    {
        name: 'Tuwai',
        type1: 'Wind',
        trait1: 'Spoilsport',
        trait2: 'Resilient',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/d/db/Tuwai.png/250px-Tuwai.png?version=805a9cfdfcc1eda50fcb2c28b12544bc'
    },
    {
        name: 'Tuvine',
        type1: 'Wind',
        type2: 'Crystal',
        trait1: 'Tuwai',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/7e/Tuvine.png/250px-Tuvine.png?version=2f3b9f3ddfd21caf0e4e7611a5e41407'
    },
    {
        name: 'Kinu',
        type1: 'Nature',
        type2: 'Mental',
        trait1: 'Protector',
        trait2: 'Benefactor',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/47/Kinu.png/250px-Kinu.png?version=c95a1071861eff359212a23f041a96ac'
    },
    {
        name: 'Vulvir',
        type1: 'Fire',
        type2: 'Earth',
        trait1: 'Vulor',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/40/Vulvir.png/250px-Vulvir.png?version=f5f2e45a794db7f97995c215897efcc4'
    },
    {
        name: 'Vulor',
        type1: 'Fire',
        type2: 'Earth',
        trait1: 'Vulvir',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/6/61/Vulor.png/250px-Vulor.png?version=90c3f46db61376a05daf98b50056546a'
    },
    {
        name: 'Vulcrane',
        type1: 'Fire',
        type2: 'Earth',
        trait1: 'Vulor',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/b/b3/Vulcrane.png/250px-Vulcrane.png?version=8f0e791f8cda4fa1c5fb998a830385b4'
    },
    {
        name: 'Pigepic',
        type1: 'Wind',
        trait1: 'Friendship',
        trait2: 'Fainted Curse',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/20/Pigepic.png/250px-Pigepic.png?version=d8e3923974707a3ff5f64a5c62441ba2'
    },
    {
        name: 'Anahir',
        type1: 'Crystal',
        type2: 'Fire',
        trait1: 'Trauma',
        trait2: 'Flawed Crystal',
        img: 'https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/e/ea/Anahir.png/250px-Anahir.png?version=b68cc0007bc9309aadfddf4789691427'
    }
]

export { data }