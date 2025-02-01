import React, { useState } from "react";
import axios from "axios";
import "../styles/FAQGet.css";

function FAQGet() {
    const [faqs, setFaqs] = useState([]);
    const [language, setLanguage] = useState("en");
    const [errorMessage, setErrorMessage] = useState("");
    const [editingIndex, setEditingIndex] = useState(null); // Track which FAQ is being edited
    const [editedFaq, setEditedFaq] = useState({}); // Store the edited FAQ details

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const viewFAQs = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/getfaqs?lang=${language}`);
            
            if (response.status === 200) {
                console.log("Language Found!");
                setFaqs(response.data);
                setErrorMessage("");
            }
        } catch (error) {
            console.error("Error fetching FAQs:", error);
            setErrorMessage("An error occurred while fetching FAQs. Please try again later.");
            setFaqs([]);
        }
    };

    // Handle edit button click
    const handleEdit = (index) => {
        setEditingIndex(index);
        setEditedFaq(faqs[index]); // Store the current FAQ being edited
    };

    // Handle input change while editing
    const handleInputChange = (e, field) => {
        setEditedFaq({ ...editedFaq, [field]: e.target.value });
    };

    // Handle saving the edited FAQ
    const handleSave = async (id) => {
        console.log(id);
        try {
            const response = await axios.put(`http://localhost:5000/updatefaq/${id}`, editedFaq);
            if (response.status === 200) {
                console.log("✅ FAQ Updated Successfully");
                alert("FAQ Updated Successfully!");

                // Update the local state
                const updatedFaqs = [...faqs];
                updatedFaqs[editingIndex] = editedFaq;
                setFaqs(updatedFaqs);
                setEditingIndex(null);
            }
        } catch (error) {
            console.error("❌ Error updating FAQ:", error);
            alert("⚠️ Failed to update FAQ.");
        }
    };

    return (
        <div>
            <div className="heading-faqs">📚 FAQs:</div>
            <div className="parent-faqs">
                <div className="view-faqs">
                    <div className="faq-button2" onClick={viewFAQs}>
                        🔍 View FAQs
                    </div>
                    <div className="language-selector">
                        <select value={language} onChange={handleLanguageChange}>
                            <option value="en">English</option>
                            <option value="hi">Hindi</option>
                            <option value="bn">Bengali</option>
                        </select>
                    </div>
                </div>
                <div className="faq-list">
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {faqs.map((faq, index) => (
                        <div key={faq._id} className="faq-item">
                            {editingIndex === index ? (
                                <>
                                    <input
                                        type="text"
                                        value={editedFaq.question}
                                        onChange={(e) => handleInputChange(e, "question")}
                                        className="faq-edit-input"
                                    />
                                    <input
                                        type="text"
                                        value={editedFaq.answer}
                                        onChange={(e) => handleInputChange(e, "answer")}
                                        className="faq-edit-input"
                                    />
                                    <button className="faq-save-btn" onClick={() => handleSave(faq._id)}>💾 Save</button>
                                    <button className="faq-cancel-btn" onClick={() => setEditingIndex(null)}>❌ Cancel</button>
                                </>
                            ) : (
                                <>
                                    <p className="faq-question"><strong>Q:</strong> {faq.question}</p>
                                    <p className="faq-answer"><strong>A:</strong> {faq.answer}</p>
                                    <button className="faq-edit-btn" onClick={() => handleEdit(index)}>✏️ Edit</button>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQGet;
