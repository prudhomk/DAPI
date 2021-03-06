import pool from '../utils/pool.js';

export default class DigitalMonster {
  id;
  name;
  image;
  series;
  level;
  attribute;
  type;
  canDigivolve;
  tamer;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.image = row.image;
    this.series = row.series;
    this.level = row.level;
    this.attribute = row.attribute;
    this.type = row.type;
    this.canDigivolve = row.can_digivolve;
    this.tamer = row.tamer;
  }

  static async create({ name, image, series, level, attribute, type, canDigivolve, tamer }) {
    const { rows } = await pool.query(`
    INSERT INTO digimons (name, image, series, level, attribute, type, can_digivolve, tamer)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
    `, [name, image, series, level, attribute, type, canDigivolve, tamer])

    return new DigitalMonster(rows[0])
  }

  static async findAll() {
    const { rows } = await pool.query(`
    SELECT * FROM digimons
    `)

    return rows.map(row => new DigitalMonster(row));
  }

  static async findById(id) {
    const { rows } = await pool.query(`
    SELECT * FROM digimons
    WHERE id = $1
    `, [id])

    return new DigitalMonster(rows[0]);
  }

  static async queryDigimon(query) {
    const category = Object.keys(query)
    const value = Object.values(query)

    const booleanCheck = () => {
      console.log(category[0].value);
      if(category[0] === 'canDigivolve') {
        const regex = category[0].split(/(?=[A-Z])/).join('_');
        return `${regex} ` + '= $1 '
      } else {
        const regex = category[0].split(/(?=[A-Z])/).join('_');
        return `${regex} ` + '~* $1 '
      }
    }

    const addParameter = () => {
      let userCategory = '';

      for(let i = 1; i < category.length; i++){
        if(category[i] === 'canDigivolve') {
          userCategory += `AND can_digivolve = $${i+1}`
        } else {
        const regex = category[i].split(/(?=[A-Z])/).join('_');
          userCategory += 'AND ' +`${regex} ` + `~* $${i+1}`;
        }
      }
      return userCategory;
    }

    if(category.length === 1) {
      const { rows } = await pool.query(`
      SELECT * FROM digimons
      WHERE ` + booleanCheck(), [value[0]])

      return rows.map(row => new DigitalMonster(row));
    } else {
      const {rows} = await pool.query(`
        SELECT * FROM digimons
        WHERE ` + booleanCheck() + addParameter(), value)

      return rows.map(row => new DigitalMonster(row));
    }
  }

  static async put(digitalMonster, id) {
    const {rows} = await pool.query(`
    UPDATE digimons
    SET name = $1
        image = $2
        series = $3
        level = $4
        attribute = $5
        type = $6
        can_Digivolve = $7
        tamer = $8
    WHERE id = $9
    RETURNING *`, [digitalMonster.name, digitalMonster.image, digitalMonster.series, digitalMonster.level, digitalMonster.attribute, digitalMonster.type, digitalMonster.canDigivolve, digitalMonster.tamer, id])
    
    return new DigitalMonster(rows[0]);
  }

  static async delete(id) {
    const {rows} = await pool.query(`
    DELETE FROM digimons 
    WHERE id = $1
    RETURNING *
    `, [id])

    return new DigitalMonster(rows[0]);
  }
} 