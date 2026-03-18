# 📦 Delivery Exception Management Dashboard



This project is a **simple internal web dashboard** built to manage delivery-related issues (exceptions). It allows operations teams to **log, track, filter, resolve, and delete delivery issues efficiently**.

The application is built using **pure HTML, CSS, and JavaScript (DOM manipulation only)** without any frameworks or backend.

---

## 🚀 Features

### ✅ 1. Delivery Exception Form

* Add new delivery issues with:

  * Delivery ID *(required)*
  * Customer Name *(required)*
  * Issue Type *(dropdown)*
  * Priority *(Low / Medium / High)*
  * Notes *(optional)*
* Form validation included
* Prevents page reload on submit

---

### 📊 2. Exceptions Dashboard (Table)

* Displays all reported issues in a structured table
* Columns:

  * Delivery ID
  * Customer Name
  * Issue Type
  * Priority
  * Status (default: **Open**)
  * Actions

---

### 🔧 3. Row Actions

* **Resolve Button**

  * Changes status from *Open → Resolved*
  * Highlights resolved row
  * Disables button after use

* **Delete Button**

  * Removes the issue from the table
  * Shows confirmation before deletion

---

### 🔍 4. Filters

* Filter by **Issue Type**
* Filter by **Status (Open / Resolved)**
* Uses DOM manipulation (no data deletion)

---

## 🎨 UI / UX Design

* Clean and professional layout
* Neutral color palette (white, grey, blue)
* Proper spacing and alignment
* Responsive enough for desktop usage

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla JS)

---

## 📁 Project Structure

```
project-folder/
│
├── index.html     # Main HTML file
├── style.css      # Styling file
└── script.js      # JavaScript logic
```

---

## ⚙️ How to Run

1. Download or clone the project
2. Open `index.html` in any browser
3. Start adding delivery issues

---

## 🚫 Constraints Followed

* ❌ No frameworks (React, Vue, etc.)
* ❌ No backend
* ❌ No APIs
* ❌ No LocalStorage
* ❌ No async JavaScript

---

## ⭐ Bonus Features Implemented

* Highlight resolved issues
* Disable resolve button after clicking
* Confirmation dialog for delete

---

## 📈 Future Improvements (Optional)

* Add issue count (Open / Resolved)
* Add sorting functionality
* Improve responsive design
* Add search feature

---

## 👨‍💻 Author

Frontend Assignment Submission
Built for real-world practice and learning.

---

## 📌 Conclusion

This project demonstrates:

* Strong understanding of DOM manipulation
* Clean UI design
* Logical event handling
* Real-world problem solving using basic frontend technologies

---
