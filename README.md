# 📇 Contact Management Web App (MERN Stack)

A full-stack **Contact Management Web Application** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).
This app allows users to **add, view, and delete contacts** with real-time updates and a clean, responsive UI.

---

## 🚀 Features

* ➕ Add new contacts (Name, Email, Phone, Message)
* 📄 View all saved contacts instantly
* 🗑️ Delete contacts
* ✅ Client-side & server-side validation
* 🔄 Real-time updates without page reload
* 🎨 Responsive & modern UI
* 🌐 RESTful API integration
* 🗄️ MongoDB database storage

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* CSS
* Lucide React Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* CORS

---

## 📁 Project Structure

```
contact-manager/
├── backend/
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contacts.js
│   ├── config/
│   │   └── db.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactList.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/contact-manager.git
cd contact-manager
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend`:

```env
MONGO_URI=mongodb://localhost:27017/contact-manager
PORT=5000
```

Start backend server:

```bash
npm run dev
```

✅ Backend runs on: **[http://localhost:5000](http://localhost:5000)**

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

✅ Frontend runs on: **[http://localhost:3000](http://localhost:3000)**

---

## 🔌 API Endpoints

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| POST   | `/api/contacts`     | Add a new contact |
| GET    | `/api/contacts`     | Get all contacts  |
| DELETE | `/api/contacts/:id` | Delete a contact  |

---

## 🧪 Sample API Request

**POST – Add Contact**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "Hello!"
}


## ❗ Troubleshooting

**MongoDB not connecting**

* Make sure MongoDB service is running
* Check `MONGO_URI` in `.env`

**CORS Error**

* Ensure `app.use(cors())` is present in `server.js`

**Port already in use**

```bash
npx kill-port 3000
npx kill-port 5000
```

---

## 🚀 Future Enhancements

* ✏️ Edit contact functionality
* 🔍 Search & filter contacts
* 🔐 Authentication (Login / Signup)
* 📄 Pagination
* ☁️ Deployment (Vercel / Render)

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repo and submit a pull request.


## 👨‍💻 Author

**Naveen**
GitHub: https://github.com/naveenmishra99190

---

### ⭐ If you like this project, give it a star!

