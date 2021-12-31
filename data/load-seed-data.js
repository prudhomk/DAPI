import client from '../lib/client.js';
import digimons from './digimonData.js';

runDigimon();

async function runDigimon() {
  try {
    await Promise.all(
      digimons.map(digi => {
        return client.query(`
        INSERT INTO digimons (name, image, series, level, attribute, type, can_digivolve, tamer)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `,
        [digi.name, digi.image, digi.series, digi.level, digi.attribute, digi.type, digi.canDigivolve, digi.tamer]);
        
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
