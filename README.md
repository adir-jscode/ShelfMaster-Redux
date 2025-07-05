# 📚 ShelfMaster Frontend

A modern, minimalist library management system frontend built with **React**, **Redux Toolkit**, **TypeScript**, and **shadcn/ui**.  
Inspired by the Singapore Airlines color palette and design system.

---

## 🌟 Overview

**ShelfMaster** lets you manage books and borrowings with a clean, responsive, and professional UI.  
No login required—just a seamless experience for book lovers, librarians, and admins.

---

## ✨ Features

- **Book Management:**
  - View all books in a table
  - Add, edit, and delete books via modals
  - Borrow books with business logic (copies, due date)
- **Borrow Summary:**
  - Aggregated view: Book Title, ISBN, Total Borrowed
- **Responsive Design:**
  - Mobile, tablet, and desktop ready
- **Optimistic UI & Toasts:**
  - Instant feedback for all actions
- **Type-safe Forms:**
  - Built with React Hook Form + TypeScript
- **Accessible:**
  - Keyboard and screen reader friendly

---

## 🛠️ Tech Stack

- **React** (with Vite or CRA)
- **TypeScript**
- **Redux Toolkit** + **RTK Query**
- **shadcn/ui** (Radix UI + Tailwind CSS)
- **Tailwind CSS** (customized theme)
- **React Router**
- **SweetAlert2** (toasts/dialogs)

---

## 🚀 Demo

_Live demo: [https://sm-redux.vercel.app/](https://sm-redux.vercel.app/)_

---

## 📦 Getting Started

### Prerequisites

- Node.js (18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/adir-jscode/ShelfMaster-Redux.git
   cd ShelMaster-Redux
   ```

2. **Install dependencies:**

   ```
   npm install
   # or
   yarn install
   ```

3. **Configure API endpoints:**

   - Update the API base URL in `src/redux/api/baseApi.ts` if needed.

4. **Start the development server:**

   ```
   npm run dev
   # or
   yarn dev
   ```

5. **Visit:** [http://localhost:5173](http://localhost:5173)

---

## 🖥️ Usage

- **Books Page:**  
  View, add, edit, delete, and borrow books.
- **Borrow Summary:**  
  See total borrowed quantities per book.
- **Responsive Design:**  
  Works beautifully on any device.

---

> _For backend setup and API documentation, see the [ShelfMaster Backend Repo](https://github.com/adir-jscode/ShelfMaster-API)._
