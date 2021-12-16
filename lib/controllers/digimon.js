import Router from 'express';
import DigitalMonster from '../models/DigitalMonster.js';

export default Router()
  .post('/', (req, res, next) => {
    DigitalMonster.create(req.body)
      .then(digi => res.send(digi))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    DigitalMonster.findAll()
      .then(digi => res.send(digi))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    DigitalMonster.findById(req.params.id)
      .then(digi => res.send(digi))
      .catch(next);
  });
