const FAQ = require("../../models/FAQ");

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
    return null;  // return null in case of error
  }
}


const createFAQ = async (req, res) => {
  console.log("FAQs to be added to the database:",req.body);
  try {
    const { question, answer, translations } = req.body;
    
    let {question_hi , question_bn ,  answer_hi , answer_bn } = translations;

    if(!question_hi || !question_bn || !answer_hi || !answer_bn){
      console.log("Language not provided for all fields. Translating...");

      const question_hi = await translateText(question, "hi");
      const answer_hi = await translateText(answer, "hi");
  
      const question_bn = await translateText(question, "bn");
      const answer_bn = await translateText(answer, "bn");
      if (question_hi && answer_hi && question_bn && answer_bn) {
        const translations = {
          question_hi,
          answer_hi,
          question_bn,
          answer_bn,
        };
        const newFAQ = new FAQ({ question, answer, translations });
        await newFAQ.save();
        res.status(201).json(newFAQ);

      }



   

    }
    else{

        const newFAQ = new FAQ({ question, answer, translations });
        await newFAQ.save();
        res.status(201).json(newFAQ);
    }


  } catch (error) {
    res.status(500).json({ error: "An error occurred while creating the FAQ." });
  }
};

const getFAQs = async (req, res) => {
  try {
    const { lang } = req.query;
    const faqs = await FAQ.find();
    if (lang) {
      const translatedFAQs = faqs.map((faq) => ({
        question: faq.translations[`question_${lang}`] || faq.question,
        answer: faq.translations[`answer_${lang}`] || faq.answer,
      }));
      return res.status(200).json(translatedFAQs);
    }
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching FAQs." });
  }
};

module.exports = { createFAQ, getFAQs };
