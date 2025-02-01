const FAQ = require('../../models/FAQ');

const getFAQs = async (req, res) => {
    const { lang } = req.query;
    console.log("Received language:", lang);  

    try {
        const faqs = await FAQ.find();

        // 1. Default english language
        if (lang === "en") {
            return res.status(200).json(faqs);
        } 
        // 2. Hindi language
        else if(lang ==="hi"){
            const translatedFaqs = faqs.map(faq => {
                const { question_hi, answer_hi } = faq.translations;
                return {
                    question: question_hi || faq.question, 
                    answer: answer_hi || faq.answer, 
                };
            });

            // console.log("akdja",translatedFaqs);
            return res.status(200).json(translatedFaqs);            
        }
        
        // 3. Bengali language
        else if(lang==="bn"){
            const translatedFAQs = faqs.map(  faq=>{
                const {question_bn , answer_bn} = faq.translations;
                return {
                    question:question_bn|| faq.question,
                    answer:answer_bn||faq.answer,
                }
            }
            
        )
        return res.status(200).json(translatedFAQs);            
        }

        else {
            console.log(`FAQs not found for language: ${lang}`);
            return res.status(400).json({ message: `FAQs not found for language: ${lang}` });
        }

    } catch (error) {
        console.error('Error fetching FAQs:', error);
        return res.status(500).json({ message: 'Error fetching FAQs' });
    }
};

module.exports = { getFAQs };
