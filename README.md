# 📚 FAQ Dashboard

A simple and efficient **Admin Portal** where administrators can manage Frequently Asked Questions (FAQs) in multiple languages. 🌍  

## ✨ Features  
- 🛠️ **Admin Panel**: Admins can add FAQs easily.  
- 🌐 **Multi-Language Support**: View FAQs in **English, Hindi, and Bengali**.  
- 🤖 **Automated Translations**: Only English input is required; Hindi & Bengali are automatically generated using **Google Translate API**.  
- 📄 **One-Click Retrieval**: Fetch all FAQs stored in the database effortlessly.  
- 🔄 **User-Friendly Interface**: Users can switch between languages seamlessly.
- 🐳 **Containerization**: Containerized the backend part to increase performance

---

## 🚀 Installation & Setup
1. Clone the repository: **git clone https://github.com/Priyam7295/FAQSDashboard.git**  
2. Navigate to the project directory: **cd FAQDASHBOARD**  

### 🖥️ Backend (Server)

1. Move to the **server** folder: **cd SERVER**  
2. Install dependencies: **npm install**  
3. Build the Docker container: **docker build -t my-faq-app .**  
4. Create a **.env** file (refer to `.env.example`) and add:
   - **PORT=5000**
   - **MONGODB_URL=your_mongodb_url**  
   - **GOOGLE_TRANSLATE_API_KEY=your_api_key**  
5. Run the server using Docker: **docker run --env-file .env -p 5000:5000 my-faq-app**  

✅ **Backend is now running at** `http://localhost:5000` 🎉  

---

### 🖥️ Frontend (Client)

1. Navigate to the **client** folder: **cd CLIENT**  
2. Install dependencies: **npm install**  
3. Start the development server: **npm run dev**  

✅ **Client is now running at** `http://localhost:5173` 🎨  

---
## DEMO

### Admin Portal
<img src="https://github.com/user-attachments/assets/a11eaa00-2033-4298-8d75-65cf9aa57792" alt="Admin Portal" width="300" />

### FAQ List
<img src="https://github.com/user-attachments/assets/48818328-1703-4215-ba3d-d9c1e07f1552" alt="FAQ List" width="300" />

### Language Selection
<img src="https://github.com/user-attachments/assets/36b62d5a-fc20-476e-921c-9444c134fb7e" alt="Language Selection" width="300" />
<img src="https://github.com/user-attachments/assets/3b6ccf1e-71e8-4979-b66f-572ba3b5a94b" alt="Language Selection" width="300" />




---


## 🛠️ Tech Stack  

- **Frontend**: React.js ⚛️  
- **Backend**: Node.js, Express.js 🚀  
- **Database**: MongoDB 🗄️  
- **API Integration**: Google Translate API 🌍  
- **Containerization(Backend)**: Docker 🐳  

---

## 💡 Future Improvements  

- 🏗️ Add authentication for admin access.(Using OAuth or JWT Token)
- 📊 Improve UI/UX for better user experience.  
- 🔍 Implement a search feature for FAQs (May be using RAGs).  

---

## 👨‍💻 Author  

- **Priyam** - [GitHub](https://github.com/Priyam7295)  

---

⭐ **If you like this project, don't forget to give it a star!** ⭐
