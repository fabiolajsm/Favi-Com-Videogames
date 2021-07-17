/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');
const agent = session(app);

describe('Videogame routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('GET /videogames', () => {
    it('responds with 200', async () => {
      try {
        await agent.get('/videogames').expect(200);
      }
      catch (err) {
        console.log(err);
      }
    }).timeout(10000);
    it('return an array with 100 videogames', async () => {
      try {
        const res = await agent.get('/videogames');
        expect(res.body).to.have.lengthOf(100);
      }
      catch (err) {
        console.log(err);
      }
    }).timeout(10000);
    it('Videogame should return the same title passed from query', async () => {
      try {
        const res = await agent.get('/videogames/?name=portal 2');
        expect(res.body[0].title).to.be.equal("Portal 2");
      } catch (err) { }
    }).timeout(10000);
    it('If an id doesnt match with the game, show a proper message', async () => {
      try {
        const res = await agent.get('/videogame/nwd');
        expect(res).to.be.equal("Sorry! There's no game that match");
      } catch (err) { }
    }).timeout(10000);
    it('If an id matches with the game, it shows the game', async () => {
      try {
        const res = await agent.get('/videogame/4200');
        expect(res.body[0].name).to.be.equal("Portal 2");
      } catch (err) { }
    }).timeout(10000);
  });
});
