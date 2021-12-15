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
}