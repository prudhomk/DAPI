import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import DigitalMonster from '../lib/models/DigitalMonster.js';

describe('digimon routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  const digimon = { 
    name: 'Agumon',
    image: './agumon.webp',
    series: 'Adventure 01',
    level: 'Rookie',
    attribute: 'bingo',
    type: 'Lizard',
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  };

  test('create a digimon', async () => {

    const res = await request(app)
      .post('/api/v1/digimons')
      .send(digimon);

    expect(res.body).toEqual({ ...digimon, id: '1' });
  });

  test('get all digimon', async () => {
    await DigitalMonster.create(digimon);

    const secondDigimon = { 
      name: 'Terriermon',
      image: './bigchungus.webp',
      series: 'Adventure 02',
      level: 'Rookie',
      attribute: 'bingo',
      type: 'Animal',
      canDigivolve: true,
      tamer: 'Willis, Henry Wong'
    };

    await DigitalMonster.create(secondDigimon);
    const res = await request(app)
      .get('/api/v1/digimons')
      .send(digimon)
      .send(secondDigimon);

    expect(res.body).toEqual([{ ...digimon, id: '1' }, { ...secondDigimon, id: '2' }]);
  });

  test('find digimon by id', async () => {
    const newDigimon = await DigitalMonster.create(digimon);

    const res = await request(app)
      .get(`/api/v1/digimons/${newDigimon.id}`);

    expect(res.body).toEqual({ ...digimon, id: '1' });
  });

  test('query digimon', async () => {
    const newDigimon = await DigitalMonster.create(digimon);

    const secondDigimon = await DigitalMonster.create({ 
      name: 'Terriermon',
      image: './funnyjoke.webp',
      series: 'Adventure 02',
      level: 'Rookie',
      attribute: 'bingo',
      type: 'Animal',
      canDigivolve: true,
      tamer: 'Willis, Henry Wong'
    });
    
    const res = await request(app)
      .get('/api/v1/digimons/query/query?canDigivolve=true');
    expect(res.body).toEqual([newDigimon, secondDigimon]);

    const resSecond = await request(app)
      .get('/api/v1/digimons/query/query?level=rookie&type=lizard');
    expect(resSecond.body).toEqual([newDigimon]);
  });

  test('edit a digimon', async () => {
    const wrongDigimon = await DigitalMonster.create({
      name: 'Gabumon',
      image: './originalname.webp',
      series: 'Adventure 01',
      level: 'Rookie',
      attribute: 'bingo',
      type: 'Animal',
      canDigivolve: true,
      tamer: 'Yamato "Matt" Ishida'
    });

    wrongDigimon.type = 'Reptile';
    const res = await request(app)
      .put(`/api/v1/digimons/${wrongDigimon.id}`)
      .send(wrongDigimon);

    expect(res.body).not.toEqual({ ...wrongDigimon, id: '3' });
  });

  test('delete a digimon', async () => {
    const pokemon = await DigitalMonster.create({
      name: 'Pikachu',
      image: './pikachu.jpeg',
      series: 'Pokemon',
      level: '6',
      attribute: 'bingo',
      type: 'Electric Mouse',
      canDigivolve: false,
      tamer: 'Ash Ketchum'
    });

    const res = await request(app)
      .delete(`/api/v1/digimons/${pokemon.id}`)
      .send(pokemon);
    
    expect(res.body).toEqual({ ...pokemon, id: '1' });
  });

  afterAll(() => {
    pool.end();
  });
});
