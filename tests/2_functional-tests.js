const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  // #1
  test("Translation with text and locale fields: POST request to /api/translate", function(done) {
    let testText = "Mangoes are my favorite fruit.";
    let testLocale = "american-to-british";
    let expectedResponse = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send({ text: testText, locale: testLocale })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, expectedResponse);
        done();
      });
  });
  // #2
  test("Translation with text and invalid locale field: POST request to /api/translate", function(done) {
    let testText = "Mangoes are my favorite fruit.";
    let testLocale = "invalid";
    let expectedResponse = "Invalid value for locale field";
    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send({ text: testText, locale: testLocale })
      .end(function(err, res) {
        assert.equal(res.status, 500);
        assert.equal(res.body.error, expectedResponse);
        done();
      });
  });
  // #3
  test("Translation with missing text field: POST request to /api/translate", function(done) {
    let testText = "";
    let testLocale = "american-to-british";
    let expectedResponse = "Required field(s) missing";
    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send({ locale: testLocale })
      .end(function(err, res) {
        assert.equal(res.status, 500);
        assert.equal(res.body.error, expectedResponse);
        done();
      });
  });
  // #4
  test("Translation with missing locale field: POST request to /api/translate", function(done) {
    let testText = "Mangoes are my favorite fruit.";
    let testLocale = "";
    let expectedResponse = "Required field(s) missing";
    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send({ text: testText })
      .end(function(err, res) {
        assert.equal(res.status, 500);
        assert.equal(res.body.error, expectedResponse);
        done();
      });
  });
  // #5
  test("Translation with empty text: POST request to /api/translate", function(done) {
    let testText = "";
    let testLocale = "american-to-british";
    let expectedResponse = "No text to translate";
    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send({ text: testText, locale: testLocale })
      .end(function(err, res) {
        assert.equal(res.status, 500);
        assert.equal(res.body.error, expectedResponse);
        done();
      });
  });
  // #6
  test("Translation with text that needs no translation: POST request to /api/translate", function(done) {
    let testText = "Mangoes are my favourite fruit.";
    let testLocale = "american-to-british";
    let expectedResponse = "Everything looks good to me!";
    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send({ text: testText, locale: testLocale })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, expectedResponse);
        done();
      });
  });
});
