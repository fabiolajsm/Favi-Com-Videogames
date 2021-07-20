const { Videogame, conn } = require('../../src/db.js');

describe('Models', function () {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Videogame Model', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('Required fields for Videogames', () => {
      it('should throw an error if is not an object', (done) => {
        Videogame.create('string')
          .then(() => done(new Error('videogame it most to be an object')))
          .catch(() => done());
      });
      it('should throw an error if description is null', (done) => {
        Videogame.create({ name: 'Lord Fritserrolls' })
          .then(() => done(new Error('It has to have a description')))
          .catch(() => done());
      });
      it('should throw an error if img is null', (done) => {
        Videogame.create({ name: 'Barbie magic world', description: 'The best for sundays' })
          .then(() => done(new Error('It has to have a description')))
          .catch(() => done());
      });
    });
  });

});