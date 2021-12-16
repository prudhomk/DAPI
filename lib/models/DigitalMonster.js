import digimon from '../controllers/digimon.js';
import pool from '../utils/pool.js';

export default class DigitalMonster {
  id;
  name;
  series;
  level;
  gender;
  type;
  canDigivolve;
  tamer;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.series = row.series;
    this.level = row.level;
    this.gender = row.gender;
    this.type = row.type;
    this.canDigivolve = row.can_digivolve;
    this.tamer = row.tamer;
  }

  static async create({ name, series, level, gender, type, canDigivolve, tamer }) {
    const { rows } = await pool.query(`
    INSERT INTO digimon (name, series, level, gender, type, can_digivolve, tamer)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
    `, [name, series, level, gender, type, canDigivolve, tamer])

    return new DigitalMonster(rows[0])
  }

  static async findAll() {
    const { rows } = await pool.query(`
    SELECT * FROM digimon
    `)

    return rows.map(row => new DigitalMonster(row));
  }

  static async findById(id) {
    const { rows } = await pool.query(`
    SELECT * FROM digimon
    WHERE id = $1
    `, [id])

    return new DigitalMonster(rows[0]);
  }

  static async queryDigimon(query) {
    const category = Object.keys(query)
    const value = Object.values(query)

    const booleanCheck = () => {
      if(category[0].value === true || category[0].value === false) {
        const regex = category[0].split(/(?=[A-Z])/).join('_');
        return `${regex} ` + '= $1 '
      } else {
        const regex = category[0].split(/(?=[A-Z])/).join('_');
        return `${regex} ` + '~* $1 '
      }
    }

    const addParameter = () => {
      let param = '';

      for(let i = 1; i < category.length; i++){
        const regex = category[i].split(/(?=[A-Z])/).join('_');
          param += 'AND ' +`${regex} ` + ``
      }

      return param;
    }

    if(category.length === 1) {
      const { rows } = await pool.query(`
      SELECT * FROM digimon
      WHERE ` + booleanCheck(), [value[0]])

      return rows.map(row => new DigitalMonster(row));
    } else {
      const {rows} = await pool.query(`
        SELECT * FROM digimon
        WHERE ` + booleanCheck() + addParameter(), value)

      return rows.map(row => new DigitalMonster(row));
    }
  }
} 