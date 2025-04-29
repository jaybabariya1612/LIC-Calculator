# LIC Premium Calculator

A simple LIC (Life Insurance Corporation) Premium Calculator web app that allows users to estimate premium payments and maturity amount based on user input like Sum Assured, Policy Term, Bonus Rate, and Payment Mode.

## 📌 Features

- Accepts user inputs for:
  - Sum Assured
  - Policy Term (in years)
  - Bonus Rate (per ₹1000 Sum Assured)
  - Premium Amount
  - Payment Mode (Monthly, Half-Yearly, Yearly)
- Calculates:
  - Total Premium Paid
  - Total Bonus Earned
  - Maturity Amount
- Displays year-wise breakdown in tabular format
- Responsive and styled user interface

## 🖼️ Demo

![Demo](images/LIC-UI-IMAGE.png)


## 📁 File Structure
LIC/
├── images/                # Folder containing image assets like logo/favicon
│   └── LIC.png
├── index.css              # Main stylesheet for layout and styles
├── index.html             # Main HTML file for the web app
├── readme.md              # Project README file
├── responsive.css         # Additional CSS for responsive design
└── script.js              # JavaScript logic for calculation and DOM manipulation



## 🚀 How to Run

1. Clone or download this repository.
2. Make sure all files (`index.html`, `index.css`, `responsive.css`, `script.js`, `images/LIC.png`) are in the same directory.
3. Open `index.html` in any modern browser.

## ⚙️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## 📊 Calculation Logic

- **Bonus** = `Policy Term × Bonus Rate`
- **Maturity Amount** = `Sum Assured + Bonus`
- **Premium Breakdown** varies based on selected payment mode:
  - Monthly → `Sum Assured / Policy Term / 12`
  - Half-Yearly → `Sum Assured / Policy Term / 2`
  - Yearly → `Sum Assured / Policy Term`

## 📌 Notes

- The app doesn't submit data to any server – it's purely client-side.
- Make sure JavaScript is enabled in your browser for functionality.

## 🧑‍💻 Author

Created by [JAY BABARIYA].

## 📃 License

This project is open-source and free to use.
