Here is a complete, step-by-step instruction manual you can drop right into your `README.md` file. It covers everything from scratch for both Linux/Mac and Windows, so anyone can get this running in minutes.

---

# 🔮 AI Palmistry & Tarot Intelligence Platform - Setup Guide

Welcome to the project! This guide will walk you through setting up the frontend (React/Vite), the backend (FastAPI), and the database (PostgreSQL via Docker).

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your machine:

* **Node.js & npm** (For the frontend)
* **Python 3.10+** (For the backend)
* **Docker Desktop** (For the database)
* **Git** (To clone the repository)

---

## 🚀 Initial Setup (First Time Only)

### Step 1: Start the PostgreSQL Database

We use Docker to run the database so you don't have to install PostgreSQL locally.

Open a terminal and run this command to download and start the database:

```bash
docker run --name tarot-db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=tarot_db -p 5432:5432 -d postgres

```

*(This creates a background database container named `tarot-db` running on port 5432).*

### Step 2: Set Up the Backend (FastAPI)

You will need a dedicated terminal for the backend.

1. Open a terminal and navigate to the backend folder:
```bash
cd backend

```


2. Create a Python Virtual Environment:
* **Windows:** `python -m venv venv`
* **Linux/Mac:** `python3 -m venv venv`


3. Activate the Virtual Environment:
* **Windows:** `venv\Scripts\activate`
* **Linux/Mac:** `source venv/bin/activate`


4. Install the Dependencies:
```bash
pip install fastapi uvicorn sqlalchemy psycopg2-binary pydantic[email] pyjwt bcrypt python-multipart

```


5. Start the Backend Server:
```bash
uvicorn main:app --reload --port 8000

```



*(Leave this terminal running!)*

### Step 3: Set Up the Frontend (React)

Open a **second, separate terminal** window.

1. Navigate to the root folder of the project (where `package.json` is located).
2. Install the Node modules:
```bash
npm install

```


3. Start the Frontend Server:
```bash
npm run dev

```



*(Your frontend will usually start on `http://localhost:3000` or `http://localhost:5173`)*.

---

## 💻 How to Use the App

Once both servers are running:

1. Open your browser and go to the frontend URL (e.g., `http://localhost:3000/register`).
2. Register a new user account.
3. Log in with those credentials to access the Dashboard.
*(Your user data is now safely stored in the local Docker PostgreSQL database!)*

---

## 🛑 How to Shut Everything Down Safely

When you are done coding for the day, follow these steps to close up:

1. **Stop Frontend:** Go to your frontend terminal and press **`Ctrl + C`**.
2. **Stop Backend:** Go to your backend terminal and press **`Ctrl + C`**.
3. **Deactivate Python:** In the backend terminal, type `deactivate` and hit Enter.
4. **Stop Database:** In any terminal, run `docker stop tarot-db`.

---

## 🔁 Daily Start-Up Routine (Next Time You Code)

You do **not** need to do the full setup every time! When you come back tomorrow, just do this:

**1. Start the Database:**

```bash
docker start tarot-db

```

**2. Start the Backend:**

* Open a terminal, `cd backend`
* **Windows:** `venv\Scripts\activate` | **Linux/Mac:** `source venv/bin/activate`
* `uvicorn main:app --reload --port 8000`

**3. Start the Frontend:**

* Open a new terminal in the main folder
* `npm run dev`