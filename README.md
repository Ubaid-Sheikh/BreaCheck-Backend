# 🛡️ Password Breach Checker (Backend)

This is the backend server for the **Password Breach Checker App**, which securely connects the frontend to the **Have I Been Pwned (HIBP)** API.  
It ensures no plain-text passwords are ever sent or stored — only **SHA-1 hash prefixes** are used for checking password breaches.

---

## 🚀 Features

- 🔐 **Privacy-first design** — never stores or transmits user passwords  
- ⚡ **Fast API proxy** — communicates with HIBP API efficiently  
- 🧩 **Simple & lightweight** — built with Express.js  
- 🌍 **CORS-enabled** for frontend integration  
- 🧾 **Error-handled responses** with proper status codes  

---

## 🧠 How It Works

1. Frontend hashes the entered password using **SHA-1**.  
2. It splits the hash into:
   - `prefix` (first 5 characters)  
   - `suffix` (remaining 35 characters)  
3. Sends both to the backend via `POST /check-password`.  
4. Backend queries HIBP’s public API:
5. Compares the suffix with the HIBP response list.  
6. Returns:
- `breached`: `true` or `false`  
- `count`: number of times the password appeared in breaches  

---

## 🧩 Tech Stack

| Tool | Purpose |
|------|----------|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework |
| **Fetch API** | Query HIBP’s password range endpoint |
| **CORS** | Allow frontend communication |
| **dotenv** (optional) | Manage environment variables |

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/password-breach-checker-backend.git
cd password-breach-checker-backend
npm install
npm start
