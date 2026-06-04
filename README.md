Hello Everyone .......
just we are startig soon....


# AI-Labs Project Tracker 🚀

Welcome to the **Company Project & Repository Tracker**! This dashboard is designed to give managers a centralized, clear overview of all company projects, team activities, and repository contributions in one place.

---

## 🛠️ Tech Stack
* **Frontend:** React (Vite) + Tailwind CSS (v4)
* **Backend:** FastAPI (Python) + Uvicorn

---

## 🚀 Getting Started (Local Setup)

Follow these steps to set up the repository locally on your machine.

### 1. Clone the Repository
Open your terminal and run:
git clone https://github.com/panwarnikita/Project-Tracker.git

cd AI-Labs_Project-Tracker

---

## 💻 Frontend Installation & Run (React)

1. Navigate to the Frontend folder:
cd Frontend

2. Install all required dependencies:
npm install

3. Start the local development server:
npm run dev

*The frontend will open at http://localhost:5174 (or check your terminal output).*

---

## 🐍 Backend Installation & Run (FastAPI)

1. Open a new terminal window and navigate to the Backend folder:
cd Backend

2. Create and activate a Python Virtual Environment (Recommended):
# On Linux/macOS
python3 -m venv venv
source venv/bin/activate

# On Windows (CMD)
python -m venv venv
venv\Scripts\activate

3. Install the required packages:
pip install -r requirements.txt

4. Start the FastAPI server:
uvicorn main:app --reload

*The interactive API documentation will be available at http://127.0.0.1:8000/docs .*

---

## 🌿 Git Workflow for Contributors

To keep the codebase clean and avoid direct merge conflicts on the main branch, please follow this standard workflow:

1. Sync your local repo before starting any new work:
git checkout main
git pull origin main

2. Create a new feature branch for your task:
git checkout -b feature/your-feature-name

3. Commit your changes with clear, descriptive messages:
git add .
git commit -m "feat: added analytics cards component to manager dashboard"

4. Push your branch to the remote repository:
git push origin feature/your-feature-name

5. Open a Pull Request (PR) on GitHub/GitLab against the main branch and assign it for review.

---

## 📂 Project Structure Overview

AI-Labs_Project-Tracker/
├── Backend/
│   ├── main.py
│   └── requirements.txt
├── Frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md

Happy Coding! 💻✨
