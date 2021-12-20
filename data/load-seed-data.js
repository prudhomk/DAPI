import client from '../lib/client.js';
import digimon from './digimonData.js';

runDigimon();

async function runDigimon() {
  try {
    await Promise.all(
      digimon.map(digi => {
        return client.query(`
        INSERT INTO digimon (name, series, level, gender, type, can_digivolve, tamer)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        `,
        [digi.name, digi.series, digi.level, digi.gender, digi.type, digi.canDigivolve, digi.tamer]);
        
      })
    );

    console.log('seed data loaded');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
}
