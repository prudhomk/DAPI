const digimons = [
  {
    name: 'Botamon', 
    image: 'botamon.jpg',
    series: 'Adventure 01',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Koromon', 
    image: 'koromon.webp',
    series: 'Adventure 01',
    level: 'In-Training', 
    attribute: 'Data', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Agumon', 
    image: 'agumon.webp',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Vaccine/Virus', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Greymon', 
    image: 'greymon.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Dinosaur', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'SkullGreymon', 
    image: 'skullGreymon.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Virus', 
    type: 'Skeleton', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'MetalGreymon', 
    image: 'metalGreymon.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Vaccine/Virus', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'WarGreymon', 
    image: 'warGreymon.webp',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Dragon', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Omnimon', 
    image: 'omnimon.webp',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Lizard', 
    canDigivolve: false,
    tamer: 'Taichi "Tai" Kamiya, Yamato "Matt" Ishida'
  },
  {
    name: 'Punimon', 
    image: 'punimon.webp',
    series: 'Adventure 01',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Yamato "Matt" Ishida'
  },
  {
    name: 'Tsunomon', 
    image: 'tsunomon.webp',
    series: 'Adventure 01',
    level: 'In-Training', 
    attribute: 'Data', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Yamato "Matt" Ishida'
  },
  {
    name: 'Gabumon', 
    image: 'gabumon.webp',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Vaccine/Virus', 
    type: 'Reptile', 
    canDigivolve: true,
    tamer: 'Yamato "Matt" Ishida'
  },
  {
    name: 'Garurumon', 
    image: 'garurumon.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Vaccine/Virus', 
    type: 'Beast', 
    canDigivolve: true,
    tamer: 'Yamato "Matt" Ishida'
  },
  {
    name: 'WereGarurumon', 
    image: 'wereGarurumon.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Beastman', 
    canDigivolve: true,
    tamer: 'Yamato "Matt" Ishida'
  },
  {
    name: 'MetalGarurumon', 
    image: 'metalGarurumon.webp',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'Yamato "Matt" Ishida'
  },
  {
    name: 'Nyokimon', 
    image: 'nyokimon.webp',
    series: 'Adventure 01',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Seed', 
    canDigivolve: true,
    tamer: 'Sora Takenouchi'
  },
  {
    name: 'Yokomon', 
    image: 'yokomon.webp',
    series: 'Adventure 01',
    level: 'In-Training', 
    attribute: 'Data', 
    type: 'Bulb', 
    canDigivolve: true,
    tamer: 'Sora Takenouchi'
  },
  {
    name: 'Biyomon', 
    image: 'biyomon.webp',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Vaccine', 
    type: 'Bird', 
    canDigivolve: true,
    tamer: 'Sora Takenouchi'
  },
  {
    name: 'Birdramon', 
    image: 'birdramon.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Giant Bird', 
    canDigivolve: true,
    tamer: 'Sora Takenouchi'
  },
  {
    name: 'Garudamon', 
    image: 'garudamon.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Birdman', 
    canDigivolve: true,
    tamer: 'Sora Takenouchi'
  },
  {
    name: 'Hououmon', 
    image: 'hououmon.webp',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Holy Beast', 
    canDigivolve: false,
    tamer: 'Sora Takenouchi'
  },
  {
    name: 'Pabumon', 
    image: 'pabumon.webp',
    series: 'Adventure 01',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Koushiro "Izzy" Izumi'
  },
  {
    name: 'Motimon', 
    image: 'motimon.webp',
    series: 'Adventure 01',
    level: 'In-Training', 
    attribute: 'Data', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Koushiro "Izzy" Izumi'
  },
  {
    name: 'Tentomon', 
    image: 'tentomon.webp',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Vaccine/Virus', 
    type: 'Insectoid', 
    canDigivolve: true,
    tamer: 'Koushiro "Izzy" Izumi'
  },
  {
    name: 'Kabuterimon', 
    image: 'kabuterimon.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Insectoid', 
    canDigivolve: true,
    tamer: 'Koushiro "Izzy" Izumi'
  },
  {
    name: 'MegaKabuterimon', 
    image: 'megaKabuterimon.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Insectoid', 
    canDigivolve: true,
    tamer: 'Koushiro "Izzy" Izumi'
  },
  {
    name: 'HerculesKabuterimon', 
    image: 'herculesKabuterimon.webp',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Insectoid', 
    canDigivolve: false,
    tamer: 'Koushiro "Izzy" Izumi'
  },
  {
    name: 'Yuramon', 
    image: 'yuramon.webp',
    series: 'Adventure 01',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Seed', 
    canDigivolve: true,
    tamer: 'Mimi Tachikawa'
  },
  {
    name: 'Tanemon', 
    image: 'tanemon.webp',
    series: 'Adventure 01',
    level: 'In-Training', 
    attribute: 'Data', 
    type: 'Lesser/Bulb', 
    canDigivolve: true,
    tamer: 'Mimi Tachikawa'
  },
  {
    name: 'Palmon', 
    image: 'palmon.webp',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Vaccine', 
    type: 'Vegetation', 
    canDigivolve: true,
    tamer: 'Mimi Tachikawa'
  },
  {
    name: 'Togemon', 
    image: 'togemon.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Vegetation', 
    canDigivolve: true,
    tamer: 'Mimi Tachikawa'
  },
  {
    name: 'Lillymon', 
    image: 'lillymon.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Data', 
    type: 'Fairy', 
    canDigivolve: true,
    tamer: 'Mimi Tachikawa'
  },
  {
    name: 'Rosemon', 
    image: 'rosemon.webp',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Data', 
    type: 'Queen of Flowers', 
    canDigivolve: true,
    tamer: 'Mimi Tachikawa'
  },
  {
    name: 'Pichimon', 
    image: 'pichimon.webp',
    series: 'Adventure 01',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Joe Kido'
  },
  {
    name: 'Bukamon', 
    image: 'bukamon.webp',
    series: 'Adventure 01',
    level: 'In-Training', 
    attribute: 'Data', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Joe Kido'
  },
  {
    name: 'Gomamon', 
    image: 'gomamon.webp',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Vaccine', 
    type: 'Sea Animal', 
    canDigivolve: true,
    tamer: 'Joe Kido'
  },
  {
    name: 'Ikkakumon', 
    image: 'ikkakumon.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Sea Animal', 
    canDigivolve: true,
    tamer: 'Joe Kido'
  },
  {
    name: 'Zudomon', 
    image: 'zudomon.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Sea Animal', 
    canDigivolve: true,
    tamer: 'Joe Kido'
  },
  {
    name: 'Vikemon', 
    image: 'vikemon.webp',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Beast Man', 
    canDigivolve: false,
    tamer: 'Joe Kido'
  },
  {
    name: 'Poyomon', 
    image: 'poyomon.webp',
    series: 'Adventure 01, Adventure 02',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Takeru "T.K." Takaishi'
  },
  {
    name: 'Tokomon', 
    image: 'tokomon.webp',
    series: 'Adventure 01, Adventure 02',
    level: 'In-Training', 
    attribute: 'Data', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Takeru "T.K." Takaishi'
  },
  {
    name: 'Patamon', 
    image: 'patamon.webp',
    series: 'Adventure 01, Adventure 02',
    level: 'Rookie', 
    attribute: 'Vaccine', 
    type: 'Mammal', 
    canDigivolve: true,
    tamer: 'Takeru "T.K." Takaishi'
  },
  {
    name: 'Angemon', 
    image: 'angemon.webp',
    series: 'Adventure 01, Adventure 02',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Angel', 
    canDigivolve: true,
    tamer: 'Takeru "T.K." Takaishi'
  },
  {
    name: 'Pegasusmon', 
    image: 'pegasusmon.webp',
    series: 'Adventure 02',
    level: 'Armor: Digi-Egg of Hope', 
    attribute: 'Vaccine', 
    type: 'Holy Beast', 
    canDigivolve: true,
    tamer: 'Takeru "T.K." Takaishi'
  },
  {
    name: 'MagnaAngemon', 
    image: 'magnaAngemon.webp',
    series: 'Adventure 01, Adventure 02',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Archangel', 
    canDigivolve: true,
    tamer: 'Takeru "T.K." Takaishi'
  },
  {
    name: 'Seraphimon', 
    image: 'seraphimon.webp',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Seraph', 
    canDigivolve: false,
    tamer: 'Takeru "T.K." Takaishi'
  },
  {
    name: 'Chibomon', 
    image: 'chibomon.webp',
    series: 'Adventure 02',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Davis Motomiya'
  },
  {
    name: 'DemiVeemon', 
    image: 'demiVeemon.webp',
    series: 'Adventure 02',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Baby Dragon', 
    canDigivolve: true,
    tamer: 'Davis Motomiya'
  },
  {
    name: 'Veemon', 
    image: 'veemon.webp',
    series: 'Adventure 02',
    level: 'Rookie', 
    attribute: 'Vaccine', 
    type: 'Dragon', 
    canDigivolve: true,
    tamer: 'Davis Motomiya'
  },
  {
    name: 'ExVeemon', 
    image: 'exVeemon.webp',
    series: 'Adventure 02',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Mythical Dragon', 
    canDigivolve: true,
    tamer: 'Davis Motomiya'
  },
  {
    name: 'Flamedramon', 
    image: 'flamedramon.webp',
    series: 'Adventure 02',
    level: 'Armor: Digi-Egg of Courage', 
    attribute: 'Vaccine', 
    type: 'Dragon Man', 
    canDigivolve: false,
    tamer: 'Davis Motomiya'
  },
  {
    name: 'Raidramon', 
    image: 'raidramon.webp',
    series: 'Adventure 02',
    level: 'Armor: Digi-Egg of Friendship', 
    attribute: 'Vaccine', 
    type: 'Animal', 
    canDigivolve: false,
    tamer: 'Davis Motomiya'
  },
  {
    name: 'Palidramon', 
    image: 'palidramon.webp',
    series: 'Adventure 02',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Dragon Humanoid', 
    canDigivolve: true,
    tamer: 'Davis Motomiya, Ken Ichijouji'
  },
  {
    name: 'Imperialdramon Dragon Mode', 
    image: 'imperialdramonDragonMode.webp',
    series: 'Adventure 02',
    level: 'Mega', 
    attribute: 'Vaccine/Virus', 
    type: 'Ancient Dragon', 
    canDigivolve: true,
    tamer: 'Davis Motomiya, Ken Ichijouji'
  },
  {
    name: 'Imperialdramon Fighter Mode', 
    image: 'imperialdramonFighterMode.webp',
    series: 'Adventure 02',
    level: 'Mega', 
    attribute: 'Vaccine/Virus', 
    type: 'Ancient Dragon Man', 
    canDigivolve: true,
    tamer: 'Davis Motomiya, Ken Ichijouji'
  },
  {
    name: 'Imperialdramon Paladin Mode', 
    image: 'imperialdramonPaladinMode.webp',
    series: 'Adventure 02',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Ancient Dragon', 
    canDigivolve: false,
    tamer: 'Davis Motomiya, Ken Ichijouji'
  },
  {
    name: 'Magnamon', 
    image: 'magnamon.webp',
    series: 'Adventure 02',
    level: 'Mega/Armor: Digi-Egg of Miracles', 
    attribute: 'Vaccine', 
    type: 'Holy Knight', 
    canDigivolve: false,
    tamer: 'Davis Motomiya'
  },
  {
    name: 'Leafmon', 
    image: 'leafmon.webp',
    series: 'Adventure 02',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Ken Ichijouji'
  },
  {
    name: 'Minomon', 
    image: 'minomon.webp',
    series: 'Adventure 02',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Larva', 
    canDigivolve: true,
    tamer: 'Ken Ichijouji'
  },
  {
    name: 'Wormmon', 
    image: 'wormon.webp',
    series: 'Adventure 02',
    level: 'Rookie', 
    attribute: 'Virus/Vaccine', 
    type: 'Larva', 
    canDigivolve: true,
    tamer: 'Ken Ichijouji'
  },
  {
    name: 'Stingmon', 
    image: 'stingmon.webp',
    series: 'Adventure 02',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Insectoid', 
    canDigivolve: true,
    tamer: 'Ken Ichijouji'
  },
  {
    name: 'Pururumon', 
    image: 'pururumon.webp',
    series: 'Adventure 02',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Yolei Inoue'
  },
  {
    name: 'Poromon', 
    image: 'poromon.webp',
    series: 'Adventure 02',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Mini Bird', 
    canDigivolve: true,
    tamer: 'Yolei Inoue'
  },
  {
    name: 'Hawkmon', 
    image: 'hawkmon.webp',
    series: 'Adventure 02',
    level: 'Rookie', 
    attribute: 'Data', 
    type: 'Bird', 
    canDigivolve: true,
    tamer: 'Yolei Inoue'
  },
  {
    name: 'Halsemon', 
    image: 'halsemon.webp',
    series: 'Adventure 02',
    level: 'Armor: Digi-Egg of Love', 
    attribute: 'Data', 
    type: 'Bird', 
    canDigivolve: true,
    tamer: 'Yolei Inoue'
  },
  {
    name: 'Shurimon', 
    image: 'shurimon.webp',
    series: 'Adventure 02',
    level: 'Armor: Digi-Egg of Sincerity', 
    attribute: 'Data', 
    type: 'Mutant', 
    canDigivolve: true,
    tamer: 'Yolei Inoue'
  },
  {
    name: 'Aquilamon', 
    image: 'aquilamon.webp',
    series: 'Adventure 02',
    level: 'Champion', 
    attribute: 'Data', 
    type: 'Giant Bird', 
    canDigivolve: true,
    tamer: 'Yolei Inoue'
  },
  {
    name: 'Silphymon', 
    image: 'silphymon.webp',
    series: 'Adventure 02',
    level: 'Ultimate', 
    attribute: 'Data', 
    type: 'Beast Man', 
    canDigivolve: true,
    tamer: 'Yolei Inoue and Kari Kamiya'
  },
  {
    name: 'Tsubumon', 
    image: 'tsubumon.webp',
    series: 'Adventure 02',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Cody Hida'
  },
  {
    name: 'Upamon', 
    image: 'upamon.webp',
    series: 'Adventure 02',
    level: 'In-Training', 
    attribute: 'Vaccine', 
    type: 'Amphibian', 
    canDigivolve: true,
    tamer: 'Cody Hida'
  },
  {
    name: 'Armadillomon', 
    image: 'armadillomon.webp',
    series: 'Adventure 02',
    level: 'Rookie', 
    attribute: 'Vaccine', 
    type: 'Mammal', 
    canDigivolve: true,
    tamer: 'Cody Hida'
  },
  {
    name: 'Submarimon', 
    image: 'submarimon.webp',
    series: 'Adventure 02',
    level: 'Armor: Digi-Egg of Reliability', 
    attribute: 'Vaccine', 
    type: 'Sea Animal', 
    canDigivolve: true,
    tamer: 'Cody Hida'
  },
  {
    name: 'Digmon', 
    image: 'digmon.webp',
    series: 'Adventure 02',
    level: 'Armor: Digi-Egg of Knowledge', 
    attribute: 'Vaccine', 
    type: 'Insectoid', 
    canDigivolve: true,
    tamer: 'Cody Hida'
  },
  {
    name: 'Ankylomon', 
    image: 'ankylomon.webp',
    series: 'Adventure 02',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Dinosaur', 
    canDigivolve: true,
    tamer: 'Cody Hida'
  },
  {
    name: 'Shakkoumon', 
    image: 'shakkoumon.webp',
    series: 'Adventure 02',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Mutant', 
    canDigivolve: true,
    tamer: 'Cody Hida, Takeru "T.K" Takaishi'
  },
  {
    name: 'YukimiBotamon', 
    image: 'yukimiBotamon.webp',
    series: 'Adventure 02',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Kari Kamiya'
  },
  {
    name: 'Nyaromon', 
    image: 'nyaromon.webp',
    series: 'Adventure 01',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Kari Kamiya'
  },
  {
    name: 'Salamon', 
    image: 'salamon.webp',
    series: 'Adventure 02',
    level: 'Rookie', 
    attribute: 'Vaccine', 
    type: 'Mammal', 
    canDigivolve: true,
    tamer: 'Kari Kamiya'
  },
  {
    name: 'Gatomon', 
    image: 'gatomon.webp',
    series: 'Adventure 02',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Holy Beast', 
    canDigivolve: true,
    tamer: 'Kari Kamiya'
  },
  {
    name: 'Nefertimon', 
    image: 'nefertimon.webp',
    series: 'Adventure 02',
    level: 'Armor: Digi-Egg of Light', 
    attribute: 'Vaccine', 
    type: 'Holy Beast', 
    canDigivolve: true,
    tamer: 'Kari Kamiya'
  },
  {
    name: 'Angewomon', 
    image: 'angewomon.webp',
    series: 'Adventure 02',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Archangel', 
    canDigivolve: true,
    tamer: 'Kari Kamiya'
  },
  {
    name: 'Jyarimon', 
    image: 'jyarimon.webp',
    series: 'Tamers',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Takato Matsuki'
  },
  {
    name: 'Gigimon', 
    image: 'gigimon.webp',
    series: 'Tamers',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Takato Matsuki'
  },
  {
    name: 'Guilmon', 
    image: 'guilmon.webp',
    series: 'Tamers',
    level: 'Rookie', 
    attribute: 'Virus', 
    type: 'Reptile', 
    canDigivolve: true,
    tamer: 'Takato Matsuki'
  },
  {
    name: 'Growlmon', 
    image: 'growlmon.webp',
    series: 'Tamers',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Demon Dragon', 
    canDigivolve: true,
    tamer: 'Takato Matsuki'
  },
  {
    name: 'WarGrowlmon', 
    image: 'warGrowlmon.webp',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Virus', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'Takato Matsuki'
  },
  {
    name: 'Megidramon', 
    image: 'megidramon.webp',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Evil Dragon', 
    canDigivolve: false,
    tamer: 'Takato Matsuki'
  },
  {
    name: 'Gallantmon', 
    image: 'gallantmon.webp',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Holy Knight', 
    canDigivolve: true,
    tamer: 'Takato Matsuki'
  },
  {
    name: 'Gallantmon Crimson Mode', 
    image: 'gallantmonCrimsonMode.webp',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Virus/Vaccine', 
    type: 'Holy Knight', 
    canDigivolve: false,
    tamer: 'Takato Matsuki'
  },
  {
    name: 'Zerimon', 
    image: 'zerimon.webp',
    series: 'Tamers',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Henry Wong'
  },
  {
    name: 'Gummymon', 
    image: 'gummymon.webp',
    series: 'Tamers',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Henry Wong'
  },
  {
    name: 'Terriermon', 
    image: 'terriermon.webp',
    series: 'Tamers',
    level: 'Rookie', 
    attribute: 'Vaccine', 
    type: 'Animal', 
    canDigivolve: true,
    tamer: 'Henry Wong'
  },
  {
    name: 'Rapidmon (Armor)', 
    image: 'rapidmonArmor.webp',
    series: 'Tamers',
    level: 'Armor: Digi-Egg of Destiny', 
    attribute: 'Vaccine', 
    type: 'Holy Knight', 
    canDigivolve: false,
    tamer: 'Henry Wong'
  },
  {
    name: 'Gargomon', 
    image: 'gargomon.webp',
    series: 'Tamers',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Beast Man', 
    canDigivolve: true,
    tamer: 'Henry Wong'
  },
  {
    name: 'Rapidmon', 
    image: 'rapidmon.webp',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'Henry Wong'
  },
  {
    name: 'MegaGargomon', 
    image: 'megaGargomon.webp',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Macchine', 
    canDigivolve: false,
    tamer: 'Henry Wong'
  },
  {
    name: 'Relemon', 
    image: 'relemon.webp',
    series: 'Tamers',
    level: 'Fresh', 
    attribute: 'Nonw', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Rika Nonaka'
  },
  {
    name: 'Viximon', 
    image: 'viximon.webp',
    series: 'Tamers',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Rika Nonaka'
  },
  {
    name: 'Renamon', 
    image: 'renamon.webp',
    series: 'Tamers',
    level: 'Rookie', 
    attribute: 'Data', 
    type: 'Beast Man', 
    canDigivolve: true,
    tamer: 'Rika Nonaka'
  },
  {
    name: 'Kyubimon', 
    image: 'kyubimon.webp',
    series: 'Tamers',
    level: 'Champion', 
    attribute: 'Data', 
    type: 'Bewitching Beast', 
    canDigivolve: true,
    tamer: 'Rika Nonaka'
  },
  {
    name: 'Taomon', 
    image: 'taomon.webp',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Data', 
    type: 'Demon Man', 
    canDigivolve: true,
    tamer: 'Rika Nonaka'
  },
  {
    name: 'Sakuyamon', 
    image: 'sakuyamon.webp',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Data', 
    type: 'God Man', 
    canDigivolve: false,
    tamer: 'Rika Nonaka'
  },
  {
    name: 'Cyberdramon', 
    image: 'cyberdramon.webp',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'Ryo Akiyama'
  },
  {
    name: 'Justimon', 
    image: 'justimonBlitzArm.webp',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Cyborg', 
    canDigivolve: false,
    tamer: 'Ryo Akiyama'
  },
  {
    name: 'MetalKoromon', 
    image: 'metalKoromon.webp',
    series: 'Tamers',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Machine', 
    canDigivolve: true,
    tamer: 'Kazu Shioda'
  },
  {
    name: 'Kapurimon', 
    image: 'kapurimon.webp',
    series: 'Tamers',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Kazu Shioda'
  },
  {
    name: 'Kokuwamon', 
    image: 'kokuwamon.webp',
    series: 'Tamers',
    level: 'Rookie', 
    attribute: 'Data', 
    type: 'Machine', 
    canDigivolve: true,
    tamer: 'Kazu Shioda'
  },
  {
    name: 'Guardromon', 
    image: 'guardromon.webp',
    series: 'Tamers',
    level: 'Champion', 
    attribute: 'Virus/Data/Vaccine', 
    type: 'Machine', 
    canDigivolve: true,
    tamer: 'Kazu Shioda'
  },
  {
    name: 'Andromon', 
    image: 'andromon.webp',
    series: 'Adventure 01, Adventure 02, Tamers',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'Kazu Shioda'
  },
  {
    name: 'MarineAngemon', 
    image: 'marineAngemon.webp',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Vaccine/Virus', 
    type: 'Pixie', 
    canDigivolve: false,
    tamer: 'Kenta Kitagawa'
  },
  {
    name: 'Conomon', 
    image: 'conomon.webp',
    series: 'Tamers',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Suzie Wong'
  },
  {
    name: 'Kokomon', 
    image: 'kokomon.webp',
    series: 'Tamers',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Suzie Wong'
  },
  {
    name: 'Lopmon', 
    image: 'lopmon.webp',
    series: 'Tamers',
    level: 'Rookie', 
    attribute: 'Data', 
    type: 'Animal', 
    canDigivolve: true,
    tamer: 'Suzie Wong'
  },
  {
    name: 'Wendigomon', 
    image: 'wendigomon.webp',
    series: 'Adventure 02',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Beast Man', 
    canDigivolve: true,
    tamer: 'Willis'
  },
  {
    name: 'Antylamon', 
    image: 'antylamonGood.webp',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Data/Virus', 
    type: 'Holy Beast', 
    canDigivolve: true,
    tamer: 'Suzie Wong'
  },
  {
    name: 'Cherubimon', 
    image: 'cherubimonGood.webp',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Cherub', 
    canDigivolve: false,
    tamer: 'Suzie Wong, Willis'
  },
  {
    name: 'Calumon', 
    image: 'calumon.webp',
    series: 'Tamers',
    level: 'Unknown', 
    attribute: 'Unknown', 
    type: 'Unknown', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Keemon', 
    image: 'keemon.webp',
    series: 'Tamers',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Ai and Mako'
  },
  {
    name: 'Yaamon', 
    image: 'yaamon.webp',
    series: 'Tamers',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Ai and Mako'
  },
  {
    name: 'Impmon', 
    image: 'impmon.webp',
    series: 'Tamers',
    level: 'Rookie', 
    attribute: 'Virus', 
    type: 'Mini Devil', 
    canDigivolve: true,
    tamer: 'Ai and Mako'
  },
  {
    name: 'Beelzemon', 
    image: 'beelzemon.webp',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Demon Lord', 
    canDigivolve: true,
    tamer: 'Ai and Mako'
  },
  {
    name: 'Beelzemon Blast Mode', 
    image: 'beelzemonBlastMode.webp',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Demon Lord', 
    canDigivolve: false,
    tamer: 'Ai and Mako'
  },
  {
    name: 'Leomon', 
    image: '.webp',
    series: 'Adventure 01, Tamers',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Beast Man', 
    canDigivolve: true,
    tamer: 'Jeri Katou'
  },
  {
    name: 'SaberLeomon', 
    image: '.webp',
    series: 'Adventure 01, Tamers',
    level: 'Mega', 
    attribute: 'Data', 
    type: 'Ancient Beast', 
    canDigivolve: true,
    tamer: 'Jeri Katou'
  },
  {
    name: 'Flamemon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Demon Man', 
    canDigivolve: true,
    tamer: 'Takuya Kanbara'
  },
  {
    name: 'Agunimon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Demon Man', 
    canDigivolve: true,
    tamer: 'Takuya Kanbara'
  },
  {
    name: 'BurningGreymon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Demon Dragon', 
    canDigivolve: true,
    tamer: 'Takuya Kanbara'
  },
  {
    name: 'Aldamon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Demon Man', 
    canDigivolve: true,
    tamer: 'Takuya Kanbara'
  },
  {
    name: 'EmperorGreymon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Dragon Warrior', 
    canDigivolve: true,
    tamer: 'Takuya Kanbara'
  },
  {
    name: 'Susanoomon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'God Man', 
    canDigivolve: false,
    tamer: 'Takuya Kanbara, Koji Minamoto, Zoe Orimoto, J.P. Shibayama, Tommy Himi'
  },
  {
    name: 'AncientGreymon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Ancient Dragon', 
    canDigivolve: false,
    tamer: 'Takuya Kanbara'
  },
  {
    name: 'Lobomon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Warrior', 
    canDigivolve: true,
    tamer: 'Koji Minamoto'
  },
  {
    name: 'KendoGarurumon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'Koji Minamoto'
  },
  {
    name: 'BeoWolfmon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Warrior', 
    canDigivolve: true,
    tamer: 'Koji Minamoto'
  },
  {
    name: 'MagnaGarurumon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'Koji Minamoto'
  },
  {
    name: 'AncientGarurumon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Data', 
    type: 'Ancient Beast', 
    canDigivolve: false,
    tamer: 'Koji Minamoto'
  },
  {
    name: 'Beetlemon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'J.P. Shibayama'
  },
  {
    name: 'MetalKabuterimon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'J.P. Shibayama'
  },
  {
    name: 'RhinoKabuterimon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Insectoid', 
    canDigivolve: false,
    tamer: 'J.P. Shibayama'
  },
  {
    name: 'AncientBeetlemon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Ancient Insect', 
    canDigivolve: false,
    tamer: 'J.P. Shibayama'
  },
  {
    name: 'Kazemon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Fairy', 
    canDigivolve: true,
    tamer: 'Zoe Orimoto'
  },
  {
    name: 'Zephyrmon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Bird Man', 
    canDigivolve: true,
    tamer: 'Zoe Orimoto'
  },
  {
    name: 'JetSilphymon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Cyborg', 
    canDigivolve: false,
    tamer: 'Zoe Orimoto'
  },
  {
    name: 'AncientKazemon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Ancient Bird Man', 
    canDigivolve: false,
    tamer: 'Zoe Orimoto'
  },
  {
    name: 'Kumamon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Beast Man', 
    canDigivolve: true,
    tamer: 'Tommy Himi'
  },
  {
    name: 'Korikakumon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Beast', 
    canDigivolve: true,
    tamer: 'Tommy Himi'
  },
  {
    name: 'Daipenmon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Cyborg', 
    canDigivolve: false,
    tamer: 'Tommy Himi'
  },
  {
    name: 'AncientMegatheriummon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Variable', 
    type: 'Ancient Beast', 
    canDigivolve: false,
    tamer: 'Tommy Himi'
  },
  {
    name: 'Loweemon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Warrior', 
    canDigivolve: true,
    tamer: 'Koichi Kimura'
  },
  {
    name: 'JagerLoweemon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'Koichi Kimura'
  },
  {
    name: 'Rhihimon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Warrior', 
    canDigivolve: false,
    tamer: 'Koichi Kimura'
  },
  {
    name: 'AncientSphinxmon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Acient Myhtical Animal', 
    canDigivolve: false,
    tamer: 'Koichi Kimura'
  },
  {
    name: 'Duskmon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Demon Man', 
    canDigivolve: true,
    tamer: 'Koichi Kimura'
  },
  {
    name: 'Velgemon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Giant Bird', 
    canDigivolve: false,
    tamer: 'Koichi Kimura'
  },
  {
    name: 'Ranamon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Fairy', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Calmaramon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Aquatic', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'AncientMermaidmon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Data', 
    type: 'Ancient Aquatic Beast Man', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Arbormon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Petaldramon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Plant', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'AncientTroiamon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Data', 
    type: 'Ancient Plant', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Mercurymon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Mutant', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Sakkakumon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Mutant', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'ShadowSeraphimon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Fallen Angel', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'AncientWisemon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Ancient Mutant', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Grumblemon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Ogre', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Gigasmon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Mineral', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'AncientVolcanomon', 
    image: '.webp',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Ancient Mineral', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Meramon', 
    image: 'meramon.webp',
    series: 'Adventure 01, Adventure 02, Tamers',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Flame', 
    canDigivolve: true,
    tamer: 'Mina'
  },
  {
    name: 'Monzaemon', 
    image: '.webp',
    series: 'Adventure 01, Adventure 02, Frontier',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Puppet', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Frigimon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Ice-Snow', 
    canDigivolve: true,
    tamer: 'Steve'
  },
  {
    name: 'Centarumon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Data', 
    type: 'Beast Man', 
    canDigivolve: true,
    tamer: 'Maria'
  },
  {
    name: 'Elecmon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Whamon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Aquatic Mammal', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Piximon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Vaccine/Data', 
    type: 'Pixie', 
    canDigivolve: true,
    tamer: 'Miyamoto Miyoko'
  },
  {
    name: 'Wizardmon', 
    image: 'wizardmon.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Data', 
    type: 'Wizard', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Datamon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Virus', 
    type: 'Machine', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'DemiDevimon', 
    image: 'demiDevimon.webp',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Virus', 
    type: 'Mini Devil', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Devimon', 
    image: 'devimon.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Fallen Angel', 
    canDigivolve: true,
    tamer: 'Neo Saiba'
  },
  {
    name: 'Etemon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Virus', 
    type: 'Puppet', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'MetalEtemon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Virus/Vaccine', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Parrotmon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Giant Bird', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Kokatorimon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Vaccine/Data', 
    type: 'Giant Bird', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Dokugumon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Insectoid', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Arukenimon', 
    image: '.webp',
    series: 'Adventure 02',
    level: 'Ultimate', 
    attribute: 'Virus', 
    type: 'Demon Beast', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Phantomon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Virus', 
    type: 'Ghost', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'SkullMeramon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Data', 
    type: 'Flame', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Bakemon', 
    image: 'bakemon.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Ghost', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'MegaSeadramon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Data', 
    type: 'Sea Animal', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'MetalSeadramon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Data', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Tuskmon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Dinosaur', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Snimon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Insectoid', 
    canDigivolve: false,
    tamer: 'Sonya'
  },
  {
    name: 'Raremon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Undead', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'RareRaaremon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Undead', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Garbagemon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Virus', 
    type: 'Mutant', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Chuumon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Virus', 
    type: 'Animal', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Ogremon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Ogre', 
    canDigivolve: true,
    tamer: 'Neo Saiba'
  },
  {
    name: 'Vademon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Virus', 
    type: 'Alien', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Gotsumon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Data', 
    type: 'Mineral', 
    canDigivolve: true,
    tamer: 'Rosa'
  },
  {
    name: 'Golemon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Data', 
    type: 'Mineral', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Sukamon', 
    image: '.webp',
    series: 'Adventure 01, Adventure 02',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Mutant', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Nanimon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Invader', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'PlatinumSukamon', 
    image: '.webp',
    series: 'World',
    level: 'Champion', 
    attribute: 'Virus/Vaccine', 
    type: 'Mutant', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Gesomon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Mollusk', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'DarkTyrannomon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Dinosaur', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Mammothmon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Ancient Beast', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Floramon', 
    image: '.webp',
    series: 'Adventure 01, Adventure 02',
    level: 'Rookie', 
    attribute: 'Data', 
    type: 'Plant', 
    canDigivolve: true,
    tamer: 'Catherine Deneuve'
  },
  {
    name: 'Kiwimon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Data', 
    type: 'Ancient Bird', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Blossomon', 
    image: '.webp',
    series: 'Adventure 01, Adventure 02',
    level: 'Ultimate', 
    attribute: 'Data', 
    type: 'Plant', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Woodmon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Plant', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Cherrymon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Virus/Vaccine', 
    type: 'Plant', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Puppetmon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Puppet', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'WaruMonzaemon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Virus', 
    type: 'Puppet', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Scorpiomon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Data', 
    type: 'Ancient Crustacean', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Piedmon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Demon Man', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Machinedramon', 
    image: '.webp',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Machine/Cyborg', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Myotismon', 
    image: 'myotismon.webp',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Virus', 
    type: 'Undead', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'LadyDevimon', 
    image: 'ladyDevimon.webp',
    series: 'Adventure 01, Adventure 02',
    level: 'Ultimate', 
    attribute: 'Virus', 
    type: 'Fallen Angel', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Apocalymon', 
    image: 'apocalymon.webp',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Unidentified', 
    type: 'Unidentified', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Daemon', 
    image: '.webp',
    series: 'Adventure 02',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Demon Lord', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'SkullSatamon', 
    image: 'skullSatamon.webp',
    series: 'Adventure 02',
    level: 'Ultimate', 
    attribute: 'Virus', 
    type: 'Undead', 
    canDigivolve: true,
    tamer: 'Neo Saiba'
  },
  {
    name: 'MarineDevimon', 
    image: 'marineDevimon.webp',
    series: 'Adventure 02',
    level: 'Ultimate', 
    attribute: 'Virus', 
    type: 'Aquatic Beast Man', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Mummymon', 
    image: '.webp',
    series: 'Adventure 02',
    level: 'Ultimate', 
    attribute: 'Virus', 
    type: 'Undead', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Kimeramon', 
    image: '.webp',
    series: 'Adventure 02',
    level: 'Ultimate', 
    attribute: 'Data', 
    type: 'Composite', 
    canDigivolve: true,
    tamer: 'Ken Ichijouji'
  },
  {
    name: 'Millenniummon', 
    image: '.webp',
    series: 'Adventure 02',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Composite', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Kuramon', 
    image: '.webp',
    series: 'Adventure 02',
    level: 'Fresh', 
    attribute: 'Unidentified', 
    type: 'Unidentified', 
    canDigivolve: true,
    tamer: 'Willis'
  },
  {
    name: 'Tsumemon', 
    image: '.webp',
    series: 'Adventure 02',
    level: 'In-Training', 
    attribute: 'Unidentified', 
    type: 'Unidentified', 
    canDigivolve: true,
    tamer: 'Willis'
  },
  {
    name: 'Keramon', 
    image: '.webp',
    series: 'Adventure 02',
    level: 'Rookie', 
    attribute: 'Unidentified', 
    type: 'Unidentified', 
    canDigivolve: true,
    tamer: 'Willis'
  },
  {
    name: 'Chrysalimon', 
    image: '.webp',
    series: 'Adventure 02',
    level: 'Champion', 
    attribute: 'Unidentified', 
    type: 'Unidentified', 
    canDigivolve: true,
    tamer: 'Willis'
  },
  {
    name: 'Infermon', 
    image: '.webp',
    series: 'Adventure 02',
    level: 'Ultimate', 
    attribute: 'Unidentified', 
    type: 'Unidentified', 
    canDigivolve: true,
    tamer: 'Willis'
  },
  {
    name: 'Diaboromon', 
    image: '.webp',
    series: 'Adventure 02',
    level: 'Mega', 
    attribute: 'Unidentified', 
    type: 'Unidentified', 
    canDigivolve: true,
    tamer: 'Willis'
  },
  {
    name: 'Armageddemon', 
    image: '.webp',
    series: 'Adventure 02',
    level: 'Mega', 
    attribute: 'Unidentified', 
    type: 'Unidentified', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Ebonwumon', 
    image: '.webp',
    series: 'Adventure 02, Tamers',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Holy Beast', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Zhuqiaomon', 
    image: '.webp',
    series: 'Adventure 02, Tamers',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Holy Bird', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Azulongmon', 
    image: '.webp',
    series: 'Adventure 02, Tamers',
    level: 'Mega', 
    attribute: 'Data', 
    type: 'Holy Dragon', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Baihumon', 
    image: '.webp',
    series: 'Adventure 02, Tamers',
    level: 'Mega', 
    attribute: 'Data', 
    type: 'Holy Beast', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Huanglongmon', 
    image: '.webp',
    series: 'Fusion',
    level: 'Mega', 
    attribute: 'NO DATA', 
    type: 'God Beast', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Mihiramon', 
    image: '.webp',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Data', 
    type: 'Holy Beast', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Antylamon (Evil)', 
    image: '.webp',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Virus/Data', 
    type: 'Holy Beast', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Majiramon', 
    image: '.webp',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Data', 
    type: 'Holy Dragon', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Sandiramon', 
    image: '.webp',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Virus', 
    type: 'Holy Beast', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Indramon', 
    image: '.webp',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Virus', 
    type: 'Holy Beast', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Pajiramon', 
    image: '.webp',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Virus', 
    type: 'Holy Beast', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Makuramon', 
    image: '.webp',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Data', 
    type: 'Holy Beast', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Sinduramon', 
    image: '.webp',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Data', 
    type: 'Holy Bird', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Caturamon', 
    image: '.webp',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Data', 
    type: 'Holy Beast', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Vikaralamon', 
    image: '.webp',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Holy Beast', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Kumbhiramon', 
    image: '.webp',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Holy Beast', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Vajramon', 
    image: '.webp',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Holy Beast', 
    canDigivolve: true,
    tamer: 'None'
  },

];

export default digimons;
