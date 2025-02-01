const FAQ = require('../../models/FAQ');
// const FAQ = require('../../models/FAQ');

require('dotenv').config();

const axios = require("axios");

const API_KEY = process.env.GOOGLE_TRANSLATE_API_KEY; 

async function translateText(text, targetLang) {
  const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;

  try {
    const response = await axios.post(url, {
      q: text,
      target: targetLang,
    });

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Translation API Error:", error.response ? error.response.data : error.message);
    return null;  
  }
}


const updateFAQ = async (req, res) => {
    // console.log("put request called")
    try {
        const toUpdate = await FAQ.findById(req.params.id);
        console.log(toUpdate);
        let { question, answer, translations } = toUpdate;

        // Perform translations
        const question_hi = await translateText(question, "hi") || translations.question_hi;
        const answer_hi = await translateText(answer, "hi") || translations.answer_hi;

        const question_bn = await translateText(question, "bn") || translations.question_bn;
        const answer_bn = await translateText(answer, "bn") || translations.answer_bn;

        // const updatedFaq = await FAQ.findByIdAndUpdate(req.params.id, req.body, { new: true });

        console.log("hindi questin",question_hi);

        const updatedFaq = await FAQ.findByIdAndUpdate(
            req.params.id,
            {
                question: req.body.question || question,
                answer: req.body.answer || answer,
                translations: {
                    question_hi,
                    answer_hi,
                    question_bn,
                    answer_bn,
                },
            },
            { new: true } 
        );
        console.log(updatedFaq);
        res.status(200).json(updatedFaq);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to update FAQ" });        

    }
}


module.exports= {updateFAQ}