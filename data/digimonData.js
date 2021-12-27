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
    series: 'Adventure 01',
    level: 'Fresh', 
    attribute: 'None', 
    type: 'Slime', 
    canDigivolve: true,
    tamer: 'Takeru "T.K." Takaishi'
  },
  {
    name: 'Tokomon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'In-Training', 
    attribute: 'Data', 
    type: 'Lesser', 
    canDigivolve: true,
    tamer: 'Takeru "T.K." Takaishi'
  },
  {
    name: 'Patamon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
    level: 'Rookie', 
    attribute: 'Vaccine', 
    type: 'Mammal', 
    canDigivolve: true,
    tamer: 'Takeru "T.K." Takaishi'
  },
  {
    name: 'Angemon', 
    image: 'placeholder.jpeg',
    series: 'Adventure 01',
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
    series: 'Adventure 01',
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
