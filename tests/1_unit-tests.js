const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();

suite('Unit Tests', () => {
  //1
  test("Translate Mangoes are my favorite fruit. to British English", function(done) {
    let sentenceToTranslate = "Mangoes are my favorite fruit.";
    let expectedSentence = "Mangoes are my favourite fruit.";
    assert.equal(
      translator.toBritishEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });
  //2
  test("Translate I ate yogurt for breakfast. to British English", function(done) {
    let sentenceToTranslate = "I ate yogurt for breakfast.";
    let expectedSentence = "I ate yoghurt for breakfast.";
    assert.equal(
      translator.toBritishEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });
  //3
  test("Translate We had a party at my friend's condo. to British English", function(done) {
    let sentenceToTranslate = "We had a party at my friend's condo.";
    let expectedSentence = "We had a party at my friend's flat.";
    assert.equal(
      translator.toBritishEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });
  //4
  test("Translate Can you toss this in the trashcan for me? to British English", function(done) {
    let sentenceToTranslate = "Can you toss this in the trashcan for me?";
    let expectedSentence = "Can you toss this in the bin for me?";
    assert.equal(
      translator.toBritishEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });
  //5
  test("Translate The parking lot was full. to British English", function(done) {
    let sentenceToTranslate = "The parking lot was full.";
    let expectedSentence = "The car park was full.";
    assert.equal(
      translator.toBritishEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });
  //6
  test("Translate Like a high tech Rube Goldberg machine. to British English", function(done) {
    let sentenceToTranslate = "Like a high tech Rube Goldberg machine.";
    let expectedSentence = "Like a high tech Heath Robinson device.";
    assert.equal(
      translator.toBritishEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });
  //7
  test("Translate To play hooky means to skip class or work. to British English", function(done) {
    let sentenceToTranslate = "To play hooky means to skip class or work.";
    let expectedSentence = "To bunk off means to skip class or work.";
    assert.equal(
      translator.toBritishEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });
  //8
  test("Translate No Mr. Bond, I expect you to die. to British English", function(done) {
    let sentenceToTranslate = "No Mr. Bond, I expect you to die.";
    let expectedSentence = "No Mr Bond, I expect you to die.";
    assert.equal(
      translator.toBritishEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });
  //9
  test("Translate Dr. Grosh will see you now. to British English", function(done) {
    let sentenceToTranslate = "Dr. Grosh will see you now.";
    let expectedSentence = "Dr Grosh will see you now.";
    assert.equal(
      translator.toBritishEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });
  //10
  test("Translate Lunch is at 12:15 today. to British English", function(done) {
    let sentenceToTranslate = "Lunch is at 12:15 today.";
    let expectedSentence = "Lunch is at 12.15 today.";
    assert.equal(
      translator.toBritishEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });

  //American English
  //11
  test("Translate We watched the footie match for a while. to American English", function(done) {
    let sentenceToTranslate = "We watched the footie match for a while.";
    let expectedSentence = "We watched the soccer match for a while.";
    assert.equal(
      translator.toAmericanEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });
  //12
  test("Translate Paracetamol takes up to an hour to work. to American English", function(done) {
    let sentenceToTranslate = "Paracetamol takes up to an hour to work.";
    let expectedSentence = "Tylenol takes up to an hour to work.";
    assert.equal(
      translator.toAmericanEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });
  //13
  test("Translate First, caramelise the onions. to American English", function(done) {
    let sentenceToTranslate = "First, caramelise the onions.";
    let expectedSentence = "First, caramelize the onions.";
    assert.equal(
      translator.toAmericanEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });
  //14
  test("Translate I spent the bank holiday at the funfair. to American English", function(done) {
    let sentenceToTranslate = "I spent the bank holiday at the funfair.";
    let expectedSentence = "I spent the public holiday at the carnival.";
    assert.equal(
      translator.toAmericanEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });
  //15
  test("Translate I had a bicky then went to the chippy. to American English", function(done) {
    let sentenceToTranslate = "I had a bicky then went to the chippy.";
    let expectedSentence = "I had a cookie then went to the fish-and-chip shop.";
    assert.equal(
      translator.toAmericanEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });
  //16
  test("Translate I've just got bits and bobs in my bum bag. to American English", function(done) {
    let sentenceToTranslate = "I've just got bits and bobs in my bum bag.";
    let expectedSentence = "I've just got odds and ends in my fanny pack.";
    assert.equal(
      translator.toAmericanEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });
  //17
  test("Translate The car boot sale at Boxted Airfield was called off. to American English", function(done) {
    let sentenceToTranslate = "The car boot sale at Boxted Airfield was called off.";
    let expectedSentence = "The swap meet at Boxted Airfield was called off.";
    assert.equal(
      translator.toAmericanEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });
  //18
  test("Translate Have you met Mrs Kalyani? to American English", function(done) {
    let sentenceToTranslate = "Have you met Mrs Kalyani?";
    let expectedSentence = "Have you met Mrs. Kalyani?";
    assert.equal(
      translator.toAmericanEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });
  //19
  test("Translate Prof Joyner of King's College, London. to American English", function(done) {
    let sentenceToTranslate = "Prof Joyner of King's College, London.";
    let expectedSentence = "Prof. Joyner of King's College, London.";
    assert.equal(
      translator.toAmericanEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });
  //20
  test("Translate Tea time is usually around 4 or 4.30. to American English", function(done) {
    let sentenceToTranslate = "Tea time is usually around 4 or 4.30.";
    let expectedSentence = "Tea time is usually around 4 or 4:30.";
    assert.equal(
      translator.toAmericanEnglish(sentenceToTranslate)[0], expectedSentence);
    done();
  });

  //Highlight
  //21
  test("Highlight translation in Mangoes are my favorite fruit.", function(done) {
    let sentenceToTranslate = "Mangoes are my favorite fruit.";
    let expectedSentence = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
    assert.equal(
      translator.toBritishEnglish(sentenceToTranslate)[1], expectedSentence);
    done();
  });
  //22
  test("Highlight translation in I ate yogurt for breakfast.", function(done) {
    let sentenceToTranslate = "I ate yogurt for breakfast.";
    let expectedSentence = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
    assert.equal(
      translator.toBritishEnglish(sentenceToTranslate)[1], expectedSentence);
    done();
  });
  //23
  test("Highlight translation in We watched the footie match for a while.", function(done) {
    let sentenceToTranslate = "We watched the footie match for a while.";
    let expectedSentence = 'We watched the <span class="highlight">soccer</span> match for a while.';
    assert.equal(
      translator.toAmericanEnglish(sentenceToTranslate)[1], expectedSentence);
    done();
  });
  //24
  test("Highlight translation in Paracetamol takes up to an hour to work.", function(done) {
    let sentenceToTranslate = "Paracetamol takes up to an hour to work.";
    let expectedSentence = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
    assert.equal(
      translator.toAmericanEnglish(sentenceToTranslate)[1], expectedSentence);
    done();
  });
});





