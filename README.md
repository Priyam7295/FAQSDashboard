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
1. Clone the repository: **git clone https://github.com/Priyam7295/FAQDashboard.git**  
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
<img src="https://github.com/user-attachments/assets/6422bbce-b65e-4e6f-9773-161a211624d1" alt="Admin Portal" width="300" />

### FAQ List
<img src="https://github.com/user-attachments/assets/d6ca8ba7-7771-4760-901a-0a0023f10f76" alt="FAQ List" width="300" />

### Language Selection
<img src="https://github.com/user-attachments/assets/6d38e113-c73d-43e6-a913-3a6f450afa94" alt="Language Selection" width="300" />
<img src="https://github.com/user-attachments/assets/c2be0115-9a77-4429-8312-e8913d5111ba" alt="Language Selection" width="300" />




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
