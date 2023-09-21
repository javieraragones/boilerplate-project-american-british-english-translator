'use strict';

const Translator = require('../components/translator.js');

module.exports = function(app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let text = req.body.text;
      let locale = req.body.locale;
      let translation = "";
      //console.log(req.body)

      if (text == undefined || !locale) {
        return res.status(500).json({ error: 'Required field(s) missing' });
      }
      if (text == "") {
        return res.status(500).json({ error: 'No text to translate' });
      }
      if (!locale == "american-to-british" || !locale == "british-to-american") {
        return res.status(500).json({ error: 'Invalid value for locale field' });
      }

      if (locale == "american-to-british") {
        translation = translator.toBritishEnglish(text);
      } else if (locale == "british-to-american") {
        translation = translator.toAmericanEnglish(text);
      } else {
        res.status(500).json({ error: "Invalid value for locale field" })
      }
      if (translation == text || !translation) {
        res.status(200).json({ text, translation: "Everything looks good to me!" });
      }
      res.status(200).json({ text, translation: translation[1] })
    });
};
