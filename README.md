# 🤖 ZARA — Rule-Based AI Chatbot

ZARA is a friendly, rule-based AI chatbot built as part of the **DecodeLabs AI Internship 2026 (Project 1)**.

This repository contains **two versions** of ZARA:

1. **CLI Version** — a terminal-based chatbot built with **Python**
2. **Web Version** — a browser-based chat interface built with **HTML, CSS, and JavaScript**

Both versions share the same core conversation logic and rules.

---

## 📂 Project Structure

```
ZARA_Rule_Based_AI_Chatbot/
│
├── cli/
│   └── ZARA_Rule_Based_AI_Chatbot.py            # Python terminal chatbot
│
├── web/
│   ├── Ai_chatbot.html         # Page structure
│   ├── Ai_chatbot.css           # Styling
│   └── Ai_chatbot.js            # Chatbot logic & interactivity
│
└── README.md
```

---

## ✨ Features

- Friendly greeting and conversation responses
- Tells jokes
- Shares motivational quotes
- Shares fun facts
- Tracks number of messages sent
- Milestone message every 5 messages
- Graceful exit / farewell ("bye", "exit", "quit")
- Fallback response for unrecognized input

---

## 🖥️ CLI Version (Python)

A simple terminal chatbot using `if-elif` rule-based logic and a `while` loop.

### How to run
```bash
cd cli
python ZARA_Rule_Based_AI_Chatbot.py
```

### Example
```
You  : hello
ZARA : Hello! I am ZARA. How can I help you today?

You  : tell me a joke
ZARA : Why do programmers prefer dark mode?
       Because light attracts bugs! :)
```

Type `bye`, `exit`, or `quit` to end the conversation.

---

## 🌐 Web Version (HTML, CSS, JavaScript)

A chat-style web interface with message bubbles, a typing indicator, quick-reply chips, and a live message counter.

### How to run
1. Open the `web/` folder
2. Open `Ai_chatbot.html` in any browser

No installation or server required — runs entirely in the browser.

### Tech used
| Technology | Purpose |
|------------|---------|
| HTML       | Page structure |
| CSS        | Styling and layout |
| JavaScript | Chatbot logic and interactivity |

---

## 🗣️ Supported Commands

| You can type | ZARA responds with |
|---------------|--------------------|
| `hello`, `hi`, `hey` | A greeting |
| `how are you` | A friendly status update |
| `what is your name`, `who are you` | Introduces itself |
| `what can you do`, `help` | Lists its capabilities |
| `joke`, `tell me a joke` | A programming joke |
| `motivate me`, `motivation`, `quote` | A motivational quote |
| `fact`, `fun fact` | A fun fact |
| `bye`, `exit`, `quit` | Ends the conversation |
| Anything else | A fallback "I didn't understand" message |

---

## 🚀 Future Improvements

- Connect the web frontend to the Python backend using Flask
- Add more conversation topics
- Add voice input/output
- Deploy the web version online (GitHub Pages)

---

## 👩‍💻 About

Built as **Project 1** for the **DecodeLabs AI Internship 2026**, focused on understanding rule-based logic, conditionals, and basic chatbot design — extended with a custom web interface.

---

## 📄 License

This project is open-source and free to use for learning purposes.
