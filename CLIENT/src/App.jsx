import React from "react";
import FAQForm from "../components/FAQForms";
import FAQGet from "../components/FAQGet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//       <FAQForm />
//       <FAQGet/>
//     </div>
//   );
// }


function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
    <Router> {/* Use BrowserRouter instead of Router */}
      <Routes>
        <Route path="/" element={<FAQForm />} />
        <Route path="/faqs" element={<FAQGet />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
