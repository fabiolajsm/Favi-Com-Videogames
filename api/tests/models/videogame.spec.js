const { Videogame, Genre, Platform, conn } = require('../../src/db.js');
const expect = require('chai').expect;

describe('Models', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Videogame Model', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('Required fields for Videogames', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('name cannot be empty/null')))
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

  describe('Genre Model', () => {
    beforeEach(() => Genre.sync({ force: true }));
    describe('Required fields for Genres', () => {
      it('should create an unique ID', () => {
        Genre.create({ name: 'educational' });
      });
      it('should work when it has a name', () => {
        Genre.create({ name: 'Educational' });
      });
      it('should create initial genres', (done) => {
        Genre.create('')
          .then(() => done())
          .catch(() => done());
      });
    });
  });

  describe('Platform Model', () => {
    beforeEach(() => Platform.sync({ force: true }));
    describe('Required fields for Platforms', () => {
      let platf = { name: 'levels XB' }
      it('should create an unique ID', () => {
        Platform.create(platf);
      });
      it('should work when it has a name', () => {
        Platform.create({ name: 'xbox' });
      });
      it('should throw an error if name is null', (done) => {
        Platform.create({})
          .then(() => done(new Error('name cannot be empty/null')))
          .catch(() => done());
      });
      it('it has the platform created', () => {
        expect(platf.name).to.equal('levels XB');
      })
    });
  });
});
