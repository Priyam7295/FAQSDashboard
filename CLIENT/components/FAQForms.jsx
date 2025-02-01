import React, { useState } from "react";
import axios from "axios";
import "../styles/FAQForms.css"; // Import CSS file
import { useNavigate } from "react-router-dom";

const FAQForm = () => {
  const navigate = useNavigate();
  const [faq, setFaq] = useState({
    question: "",
    answer: "",
    translations: {
      question_hi: "",
      question_bn: "",
      answer_hi: "",
      answer_bn: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("translations")) {
      const lang = name.split(".")[1];
      setFaq((prev) => ({
        ...prev,
        translations: { ...prev.translations, [lang]: value },
      }));
    } else {
      setFaq((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(faq);
      const response = await axios.post("http://localhost:5000/faqs", faq);
      console.log("✅ FAQ Added:", response.data);
      alert("🎉 FAQ Added Successfully!");
      setFaq({
        question: "",
        answer: "",
        translations: {
          question_hi: "",
          question_bn: "",
          answer_hi: "",
          answer_bn: "",
        },
      });
    } catch (error) {
      console.error("❌ Error:", error);
      alert("⚠️ Failed to add FAQ.");
    }
  };

  return (
    <div className="faq-container">
      <h1 className="admin-portal-title">⚙️ Admin Portal</h1>
      <h2 className="faq-title">📜 Add a New FAQ</h2>
      <form onSubmit={handleSubmit} className="faq-form">
        <input
          type="text"
          name="question"
          placeholder="❓ Enter question"
          value={faq.question}
          onChange={handleChange}
          className="faq-input"
          required
        />
        <input
          type="text"
          name="answer"
          placeholder="💬 Enter answer"
          value={faq.answer}
          onChange={handleChange}
          className="faq-input"
          required
        />

        <p className="optional-text">✨ Optional: (self automated)</p>

        <h3 className="faq-section-title">🌍 Translations:</h3>
        <input
          type="text"
          name="translations.question_hi"
          placeholder="🇮🇳 Question in Hindi"
          value={faq.translations.question_hi}
          onChange={handleChange}
          className="faq-input"
        />
        <input
          type="text"
          name="translations.answer_hi"
          placeholder="🇮🇳 Answer in Hindi"
          value={faq.translations.answer_hi}
          onChange={handleChange}
          className="faq-input"
        />
        <input
          type="text"
          name="translations.question_bn"
          placeholder="🇧🇩 Question in Bengali"
          value={faq.translations.question_bn}
          onChange={handleChange}
          className="faq-input"
        />
        <input
          type="text"
          name="translations.answer_bn"
          placeholder="🇧🇩 Answer in Bengali"
          value={faq.translations.answer_bn}
          onChange={handleChange}
          className="faq-input"
        />

        <button type="submit" className="faq-button">
          ➕ Add FAQ
        </button>
      </form>
      <button onClick={() => navigate("/faqs")} className="faq-button2">
        📚 View FAQs
      </button>
    </div>
  );
};

export default FAQForm;
