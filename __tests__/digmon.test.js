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

});
