import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import DigitalMonster from '../lib/models/DigitalMonster.js';
import req from 'express/lib/request';

describe('digimon routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  const digimon = { 
    name: 'Agumon',
    series: 'Adventure 01',
    level: 'Rookie',
    gender: 'male',
    type: 'Lizard',
    canDigivolve: true,
    tamer: 'Taichi "Tai" Kamiya'
  };

  test('create a digimon', async () => {

    const res = await request(app)
      .post('/api/v1/digimon')
      .send(digimon);

    expect(res.body).toEqual({ ...digimon, id: '1' });
  });

  test('get all digimon', async () => {
    await DigitalMonster.create(digimon);

    const secondDigimon = { 
      name: 'Terriermon',
      series: 'Adventure 02',
      level: 'Rookie',
      gender: 'none',
      type: 'Animal',
      canDigivolve: true,
      tamer: 'Willis, Henry Wong'
    };

    await DigitalMonster.create(secondDigimon);
    const res = await request(app)
      .get('/api/v1/digimon')
      .send(digimon)
      .send(secondDigimon);

    expect(res.body).toEqual([{ ...digimon, id: '1' }, { ...secondDigimon, id: '2' }]);
  });

  test('find digimon by id', async () => {
    const newDigimon = await DigitalMonster.create(digimon);

    const res = await request(app)
      .get(`/api/v1/digimon/${newDigimon.id}`);

    expect(res.body).toEqual({ ...digimon, id: '1' });
  });

  test('query digimon', async () => {
    const newDigimon = await DigitalMonster.create(digimon);

    const secondDigimon = { 
      name: 'Terriermon',
      series: 'Adventure 02',
      level: 'Rookie',
      gender: 'none',
      type: 'Animal',
      canDigivolve: true,
      tamer: 'Willis, Henry Wong'
    };
    
    await DigitalMonster.create(secondDigimon);
    const res = await request(app)
      .get('/api/v1/digimon/query/query?');
    expect(res.body).toEqual([newDigimon]);

  });

});
