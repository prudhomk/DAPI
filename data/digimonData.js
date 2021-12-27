const digimons = [
  {
    name: 'Botamon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Koromon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'In-Training', 
    attribute: 'Data', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Agumon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Vaccine/Virus', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Greymon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Dinosaur', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'SkullGreymon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Virus', 
    type: 'Skeleton', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'MetalGreymon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Vaccine/Virus', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'WarGreymon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Dragon', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Omnimon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Lizard', 
    canDigivolve: false,
    tamer: 'Taichi "Tai" Kamiya, Yamato "Matt" Ishida'
  },
  {
    name: 'Punimon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Yamato "Matt" Ishida'
  },
  {
    name: 'Tsunomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'In-Training', 
    attribute: 'Data', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Yamato "Matt" Ishida'
  },
  {
    name: 'Gabumon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Vaccine/Virus', 
    type: 'Reptile', 
    canDigivolve: true,
    tamer: 'Yamato "Matt" Ishida'
  },
  {
    name: 'Garurumon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Vaccine/Virus', 
    type: 'Beast', 
    canDigivolve: true,
    tamer: 'Yamato "Matt" Ishida'
  },
  {
    name: 'WereGarurumon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Beastman', 
    canDigivolve: true,
    tamer: 'Yamato "Matt" Ishida'
  },
  {
    name: 'MetalGarurumon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'Yamato "Matt" Ishida'
  },
  {
    name: 'Nyokimon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Seed', 
    canDigivolve: true,
    tamer: 'Sora Takenouchi'
  },
  {
    name: 'Yokomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'In-Training', 
    attribute: 'Data', 
    type: 'Bulb', 
    canDigivolve: true,
    tamer: 'Sora Takenouchi'
  },
  {
    name: 'Biyomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Vaccine', 
    type: 'Bird', 
    canDigivolve: true,
    tamer: 'Sora Takenouchi'
  },
  {
    name: 'Birdramon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Giant Bird', 
    canDigivolve: true,
    tamer: 'Sora Takenouchi'
  },
  {
    name: 'Garudamon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Birdman', 
    canDigivolve: true,
    tamer: 'Sora Takenouchi'
  },
  {
    name: 'Hououmon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Holy Beast', 
    canDigivolve: false,
    tamer: 'Sora Takenouchi'
  },
  {
    name: 'Pabumon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Koushiro "Izzy" Izumi'
  },
  {
    name: 'Motimon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'In-Training', 
    attribute: 'Data', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Koushiro "Izzy" Izumi'
  },
  {
    name: 'Tentomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Vaccine/Virus', 
    type: 'Insectoid', 
    canDigivolve: true,
    tamer: 'Koushiro "Izzy" Izumi'
  },
  {
    name: 'Kabuterimon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Insectoid', 
    canDigivolve: true,
    tamer: 'Koushiro "Izzy" Izumi'
  },
  {
    name: 'MegaKabuterimon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Insectoid', 
    canDigivolve: true,
    tamer: 'Koushiro "Izzy" Izumi'
  },
  {
    name: 'HerculesKabuterimon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Insectoid', 
    canDigivolve: false,
    tamer: 'Koushiro "Izzy" Izumi'
  },
  {
    name: 'Yuramon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Seed', 
    canDigivolve: true,
    tamer: 'Mimi Tachikawa'
  },
  {
    name: 'Tanemon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'In-Training', 
    attribute: 'Data', 
    type: 'Lesser/Bulb', 
    canDigivolve: true,
    tamer: 'Mimi Tachikawa'
  },
  {
    name: 'Palmon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Vaccine', 
    type: 'Vegetation', 
    canDigivolve: true,
    tamer: 'Mimi Tachikawa'
  },
  {
    name: 'Togemon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Vegetation', 
    canDigivolve: true,
    tamer: 'Mimi Tachikawa'
  },
  {
    name: 'Lillymon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Data', 
    type: 'Fairy', 
    canDigivolve: true,
    tamer: 'Mimi Tachikawa'
  },
  {
    name: 'Rosemon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Data', 
    type: 'Queen of Flowers', 
    canDigivolve: true,
    tamer: 'Mimi Tachikawa'
  },
  {
    name: 'Pichimon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Joe Kido'
  },
  {
    name: 'Bukamon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'In-Training', 
    attribute: 'Data', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Joe Kido'
  },
  {
    name: 'Gomamon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Vaccine', 
    type: 'Sea Animal', 
    canDigivolve: true,
    tamer: 'Joe Kido'
  },
  {
    name: 'Ikkakumon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Sea Animal', 
    canDigivolve: true,
    tamer: 'Joe Kido'
  },
  {
    name: 'Zudomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Sea Animal', 
    canDigivolve: true,
    tamer: 'Joe Kido'
  },
  {
    name: 'Vikemon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Beast Man', 
    canDigivolve: false,
    tamer: 'Joe Kido'
  },
  {
    name: 'Poyomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01, Adventure 02',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Takeru "T.K." Takaishi'
  },
  {
    name: 'Tokomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01, Adventure 02',
    level: 'In-Training', 
    attribute: 'Data', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Takeru "T.K." Takaishi'
  },
  {
    name: 'Patamon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01, Adventure 02',
    level: 'Rookie', 
    attribute: 'Vaccine', 
    type: 'Mammal', 
    canDigivolve: true,
    tamer: 'Takeru "T.K." Takaishi'
  },
  {
    name: 'Angemon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01, Adventure 02',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Angel', 
    canDigivolve: true,
    tamer: 'Takeru "T.K." Takaishi'
  },
  {
    name: 'Pegasusmon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Armor: Digi-Egg of Hope', 
    attribute: 'Vaccine', 
    type: 'Holy Beast', 
    canDigivolve: true,
    tamer: 'Takeru "T.K." Takaishi'
  },
  {
    name: 'MagnaAngemon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01, Adventure 02',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Archangel', 
    canDigivolve: true,
    tamer: 'Takeru "T.K." Takaishi'
  },
  {
    name: 'Seraphimon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Seraph', 
    canDigivolve: false,
    tamer: 'Takeru "T.K." Takaishi'
  },
  {
    name: 'Chibomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Davis Motomiya'
  },
  {
    name: 'DemiVeemon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Baby Dragon', 
    canDigivolve: true,
    tamer: 'Davis Motomiya'
  },
  {
    name: 'Veemon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Rookie', 
    attribute: 'Vaccine', 
    type: 'Dragon', 
    canDigivolve: true,
    tamer: 'Davis Motomiya'
  },
  {
    name: 'ExVeemon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Mythical Dragon', 
    canDigivolve: true,
    tamer: 'Davis Motomiya'
  },
  {
    name: 'Flamedramon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Armor: Digi-Egg of Courage', 
    attribute: 'Vaccine', 
    type: 'Dragon Man', 
    canDigivolve: false,
    tamer: 'Davis Motomiya'
  },
  {
    name: 'Raidramon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Armor: Digi-Egg of Friendship', 
    attribute: 'Vaccine', 
    type: 'Animal', 
    canDigivolve: false,
    tamer: 'Davis Motomiya'
  },
  {
    name: 'Palidramon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Dragon Humanoid', 
    canDigivolve: true,
    tamer: 'Davis Motomiya, Ken Ichijouji'
  },
  {
    name: 'Imperialdramon Dragon Mode', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Mega', 
    attribute: 'Vaccine/Virus', 
    type: 'Ancient Dragon', 
    canDigivolve: true,
    tamer: 'Davis Motomiya, Ken Ichijouji'
  },
  {
    name: 'Imperialdramon Fighter Mode', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Mega', 
    attribute: 'Vaccine/Virus', 
    type: 'Ancient Dragon Man', 
    canDigivolve: true,
    tamer: 'Davis Motomiya, Ken Ichijouji'
  },
  {
    name: 'Imperialdramon Paladin Mode', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Ancient Dragon', 
    canDigivolve: false,
    tamer: 'Davis Motomiya, Ken Ichijouji'
  },
  {
    name: 'Magnamon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Mega/Armor: Digi-Egg of Miracles', 
    attribute: 'Vaccine', 
    type: 'Holy Knight', 
    canDigivolve: false,
    tamer: 'Davis Motomiya'
  },
  {
    name: 'Leafmon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Ken Ichijouji'
  },
  {
    name: 'Minomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Larva', 
    canDigivolve: true,
    tamer: 'Ken Ichijouji'
  },
  {
    name: 'Wormmon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Rookie', 
    attribute: 'Virus/Vaccine', 
    type: 'Larva', 
    canDigivolve: true,
    tamer: 'Ken Ichijouji'
  },
  {
    name: 'Stingmon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Insectoid', 
    canDigivolve: true,
    tamer: 'Ken Ichijouji'
  },
  {
    name: 'Pururumon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Yolei Inoue'
  },
  {
    name: 'Poromon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Mini Bird', 
    canDigivolve: true,
    tamer: 'Yolei Inoue'
  },
  {
    name: 'Hawkmon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Rookie', 
    attribute: 'Data', 
    type: 'Bird', 
    canDigivolve: true,
    tamer: 'Yolei Inoue'
  },
  {
    name: 'Halsemon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Armor: Digi-Egg of Love', 
    attribute: 'Data', 
    type: 'Bird', 
    canDigivolve: true,
    tamer: 'Yolei Inoue'
  },
  {
    name: 'Shurimon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Armor: Digi-Egg of Sincerity', 
    attribute: 'Data', 
    type: 'Mutant', 
    canDigivolve: true,
    tamer: 'Yolei Inoue'
  },
  {
    name: 'Aquilamon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Champion', 
    attribute: 'Data', 
    type: 'Giant Bird', 
    canDigivolve: true,
    tamer: 'Yolei Inoue'
  },
  {
    name: 'Silphymon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Ultimate', 
    attribute: 'Data', 
    type: 'Beast Man', 
    canDigivolve: true,
    tamer: 'Yolei Inoue and Kari Kamiya'
  },
  {
    name: 'Tsubumon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Cody Hida'
  },
  {
    name: 'Upamon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'In-Training', 
    attribute: 'Vaccine', 
    type: 'Amphibian', 
    canDigivolve: true,
    tamer: 'Cody Hida'
  },
  {
    name: 'Armadillomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Rookie', 
    attribute: 'Vaccine', 
    type: 'Mammal', 
    canDigivolve: true,
    tamer: 'Cody Hida'
  },
  {
    name: 'Submarimon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Armor: Digi-Egg of Reliability', 
    attribute: 'Vaccine', 
    type: 'Sea Animal', 
    canDigivolve: true,
    tamer: 'Cody Hida'
  },
  {
    name: 'Digmon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Armor: Digi-Egg of Knowledge', 
    attribute: 'Vaccine', 
    type: 'Insectoid', 
    canDigivolve: true,
    tamer: 'Cody Hida'
  },
  {
    name: 'Ankylomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Dinosaur', 
    canDigivolve: true,
    tamer: 'Cody Hida'
  },
  {
    name: 'Shakkoumon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Mutant', 
    canDigivolve: true,
    tamer: 'Cody Hida, Takeru "T.K" Takaishi'
  },
  {
    name: 'YukimiBotamon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Kari Kamiya'
  },
  {
    name: 'Nyaromon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Kari Kamiya'
  },
  {
    name: 'Salamon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Rookie', 
    attribute: 'Vaccine', 
    type: 'Mammal', 
    canDigivolve: true,
    tamer: 'Kari Kamiya'
  },
  {
    name: 'Gatomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Holy Beast', 
    canDigivolve: true,
    tamer: 'Kari Kamiya'
  },
  {
    name: 'Nefertimon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Armor: Digi-Egg of Light', 
    attribute: 'Vaccine', 
    type: 'Holy Beast', 
    canDigivolve: true,
    tamer: 'Kari Kamiya'
  },
  {
    name: 'Angewomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Archangel', 
    canDigivolve: true,
    tamer: 'Kari Kamiya'
  },
  {
    name: 'Jyarimon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Takato Matsuki'
  },
  {
    name: 'Gigimon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Takato Matsuki'
  },
  {
    name: 'Guilmon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Rookie', 
    attribute: 'Virus', 
    type: 'Reptile', 
    canDigivolve: true,
    tamer: 'Takato Matsuki'
  },
  {
    name: 'Growlmon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Demon Dragon', 
    canDigivolve: true,
    tamer: 'Takato Matsuki'
  },
  {
    name: 'WarGrowlmon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Virus', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'Takato Matsuki'
  },
  {
    name: 'Megidramon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Evil Dragon', 
    canDigivolve: false,
    tamer: 'Takato Matsuki'
  },
  {
    name: 'Gallantmon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Holy Knight', 
    canDigivolve: true,
    tamer: 'Takato Matsuki'
  },
  {
    name: 'Gallantmon Crimson Mode', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Virus/Vaccine', 
    type: 'Holy Knight', 
    canDigivolve: false,
    tamer: 'Takato Matsuki'
  },
  {
    name: 'Zerimon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Henry Wong'
  },
  {
    name: 'Gummymon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Henry Wong'
  },
  {
    name: 'Terriermon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Rookie', 
    attribute: 'Vaccine', 
    type: 'Animal', 
    canDigivolve: true,
    tamer: 'Henry Wong'
  },
  {
    name: 'Rapidmon (Armor)', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Armor: Digi-Egg of Destiny', 
    attribute: 'Vaccine', 
    type: 'Holy Knight', 
    canDigivolve: false,
    tamer: 'Henry Wong'
  },
  {
    name: 'Gargomon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Champion', 
    attribute: 'Vaccine', 
    type: 'Beast Man', 
    canDigivolve: true,
    tamer: 'Henry Wong'
  },
  {
    name: 'Rapidmon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'Henry Wong'
  },
  {
    name: 'MegaGargomon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Macchine', 
    canDigivolve: false,
    tamer: 'Henry Wong'
  },
  {
    name: 'Relemon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Fresh', 
    attribute: 'Nonw', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Rika Nonaka'
  },
  {
    name: 'Viximon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Rika Nonaka'
  },
  {
    name: 'Renamon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Rookie', 
    attribute: 'Data', 
    type: 'Beast Man', 
    canDigivolve: true,
    tamer: 'Rika Nonaka'
  },
  {
    name: 'Kyubimon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Champion', 
    attribute: 'Data', 
    type: 'Bewitching Beast', 
    canDigivolve: true,
    tamer: 'Rika Nonaka'
  },
  {
    name: 'Taomon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Data', 
    type: 'Demon Man', 
    canDigivolve: true,
    tamer: 'Rika Nonaka'
  },
  {
    name: 'Sakuyamon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Data', 
    type: 'God Man', 
    canDigivolve: false,
    tamer: 'Rika Nonaka'
  },
  {
    name: 'Cyberdramon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'Ryo Akiyama'
  },
  {
    name: 'Justimon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Cyborg', 
    canDigivolve: false,
    tamer: 'Ryo Akiyama'
  },
  {
    name: 'MetalKoromon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Machine', 
    canDigivolve: true,
    tamer: 'Kazu Shioda'
  },
  {
    name: 'Kapurimon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Kazu Shioda'
  },
  {
    name: 'Kokuwamon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Rookie', 
    attribute: 'Data', 
    type: 'Machine', 
    canDigivolve: true,
    tamer: 'Kazu Shioda'
  },
  {
    name: 'Guardromon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Champion', 
    attribute: 'Virus/Data/Vaccine', 
    type: 'Machine', 
    canDigivolve: true,
    tamer: 'Kazu Shioda'
  },
  {
    name: 'MarineAngemon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Vaccine/Virus', 
    type: 'Pixie', 
    canDigivolve: false,
    tamer: 'Kenta Kitagawa'
  },
  {
    name: 'Conomon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Suzie Wong'
  },
  {
    name: 'Kokomon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Suzie Wong'
  },
  {
    name: 'Lopmon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Rookie', 
    attribute: 'Data', 
    type: 'Animal', 
    canDigivolve: true,
    tamer: 'Suzie Wong'
  },
  {
    name: 'Wendigomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 02',
    level: 'Champion', 
    attribute: 'Virus', 
    type: 'Beast Man', 
    canDigivolve: true,
    tamer: 'Willis'
  },
  {
    name: 'Antylamon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Ultimate', 
    attribute: 'Data/Virus', 
    type: 'Holy Beast', 
    canDigivolve: true,
    tamer: 'Suzie Wong'
  },
  {
    name: 'Cherubimon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Cherub', 
    canDigivolve: false,
    tamer: 'Suzie Wong, Willis'
  },
  {
    name: 'Calumon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Unknown', 
    attribute: 'Unknown', 
    type: 'Unknown', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Keemon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Ai and Mako'
  },
  {
    name: 'Yaamon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'In-Training', 
    attribute: 'None', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Ai and Mako'
  },
  {
    name: 'Impmon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Rookie', 
    attribute: 'Virus', 
    type: 'Mini Devil', 
    canDigivolve: true,
    tamer: 'Ai and Mako'
  },
  {
    name: 'Beelzemon', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Demon Lord', 
    canDigivolve: true,
    tamer: 'Ai and Mako'
  },
  {
    name: 'Beelzemon Blast Mode', 
    image: 'placeholder.jpeg',
    series: 'Tamers',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Demon Lord', 
    canDigivolve: false,
    tamer: 'Ai and Mako'
  },
  {
    name: 'Leomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01, Tamers',
    level: 'Ultimate', 
    attribute: 'Vaccine', 
    type: 'Beast Man', 
    canDigivolve: true,
    tamer: 'Jeri Katou'
  },
  {
    name: 'SaberLeomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01, Tamers',
    level: 'Mega', 
    attribute: 'Data', 
    type: 'Ancient Beast', 
    canDigivolve: true,
    tamer: 'Jeri Katou'
  },
  {
    name: 'Flamemon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Demon Man', 
    canDigivolve: true,
    tamer: 'Takuya Kanbara'
  },
  {
    name: 'Agunimon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Demon Man', 
    canDigivolve: true,
    tamer: 'Takuya Kanbara'
  },
  {
    name: 'BurningGreymon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Demon Dragon', 
    canDigivolve: true,
    tamer: 'Takuya Kanbara'
  },
  {
    name: 'Aldamon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Demon Man', 
    canDigivolve: true,
    tamer: 'Takuya Kanbara'
  },
  {
    name: 'EmperorGreymon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Dragon Warrior', 
    canDigivolve: true,
    tamer: 'Takuya Kanbara'
  },
  {
    name: 'Susanoomon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'God Man', 
    canDigivolve: false,
    tamer: 'Takuya Kanbara, Koji Minamoto, Zoe Orimoto, J.P. Shibayama, Tommy Himi'
  },
  {
    name: 'AncientGreymon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Ancient Dragon', 
    canDigivolve: false,
    tamer: 'Takuya Kanbara'
  },
  {
    name: 'Lobomon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Warrior', 
    canDigivolve: true,
    tamer: 'Koji Minamoto'
  },
  {
    name: 'KendoGarurumon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'Koji Minamoto'
  },
  {
    name: 'BeoWolfmon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Warrior', 
    canDigivolve: true,
    tamer: 'Koji Minamoto'
  },
  {
    name: 'MagnaGarurumon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'Koji Minamoto'
  },
  {
    name: 'AncientGarurumon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Data', 
    type: 'Ancient Beast', 
    canDigivolve: false,
    tamer: 'Koji Minamoto'
  },
  {
    name: 'Beetlemon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'J.P. Shibayama'
  },
  {
    name: 'MetalKabuterimon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'J.P. Shibayama'
  },
  {
    name: 'RhinoKabuterimon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Insectoid', 
    canDigivolve: false,
    tamer: 'J.P. Shibayama'
  },
  {
    name: 'AncientBeetlemon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Ancient Insect', 
    canDigivolve: false,
    tamer: 'J.P. Shibayama'
  },
  {
    name: 'Kazemon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Fairy', 
    canDigivolve: true,
    tamer: 'Zoe Orimoto'
  },
  {
    name: 'Zephyrmon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Bird Man', 
    canDigivolve: true,
    tamer: 'Zoe Orimoto'
  },
  {
    name: 'JetSilphymon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Cyborg', 
    canDigivolve: false,
    tamer: 'Zoe Orimoto'
  },
  {
    name: 'AncientKazemon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Vaccine', 
    type: 'Ancient Bird Man', 
    canDigivolve: false,
    tamer: 'Zoe Orimoto'
  },
  {
    name: 'Kumamon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Beast Man', 
    canDigivolve: true,
    tamer: 'Tommy Himi'
  },
  {
    name: 'Korikakumon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Beast', 
    canDigivolve: true,
    tamer: 'Tommy Himi'
  },
  {
    name: 'Daipenmon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Cyborg', 
    canDigivolve: false,
    tamer: 'Tommy Himi'
  },
  {
    name: 'AncientMegatheriummon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Variable', 
    type: 'Ancient Beast', 
    canDigivolve: false,
    tamer: 'Tommy Himi'
  },
  {
    name: 'Loweemon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Warrior', 
    canDigivolve: true,
    tamer: 'Koichi Kimura'
  },
  {
    name: 'JagerLoweemon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'Koichi Kimura'
  },
  {
    name: 'Rhihimon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Warrior', 
    canDigivolve: false,
    tamer: 'Koichi Kimura'
  },
  {
    name: 'AncientSphinxmon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Acient Myhtical Animal', 
    canDigivolve: false,
    tamer: 'Koichi Kimura'
  },
  {
    name: 'Duskmon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Demon Man', 
    canDigivolve: true,
    tamer: 'Koichi Kimura'
  },
  {
    name: 'Velgemon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Giant Bird', 
    canDigivolve: false,
    tamer: 'Koichi Kimura'
  },
  {
    name: 'Ranamon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Fairy', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Calmaramon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Aquatic', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'AncientMermaidmon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Data', 
    type: 'Ancient Aquatic Beast Man', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Arbormon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Cyborg', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Petaldramon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Plant', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'AncientTroiamon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Data', 
    type: 'Ancient Plant', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Mercurymon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Mutant', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Sakkakumon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Mutant', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'ShadowSeraphimon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Fallen Angel', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'AncientWisemon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Ancient Mutant', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Grumblemon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Ogre', 
    canDigivolve: true,
    tamer: 'None'
  },
  {
    name: 'Gigasmon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Hybrid', 
    attribute: 'Variable', 
    type: 'Mineral', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'AncientVolcanomon', 
    image: 'placeholder.jpeg',
    series: 'Frontier',
    level: 'Mega', 
    attribute: 'Virus', 
    type: 'Ancient Mineral', 
    canDigivolve: false,
    tamer: 'None'
  },
  {
    name: 'Monodramon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Meicoomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Meramon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Andromon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Monzaemon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Leomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Frigimon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Mojyamon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Centarumon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Elecmon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Whamon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Piximon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Wizardmon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Hackmon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Devimon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Etemon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Parrotmon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Kokatorimon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Myotismon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'DemiDevimon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Dokugumon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'Phantomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },
  {
    name: 'SkullMeramon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Male', 
    type: 'Lizard', 
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  },

];

export default digimons;
