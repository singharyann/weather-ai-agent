# 🌦️ Weather AI Agent

An AI-powered **customer support agent** that answers weather queries using [OpenAI Agents](https://github.com/openai/openai-agents) and the [wttr.in](https://wttr.in) weather API.  
Built with **Node.js**, **Zod**, and **Axios**.

---

## ✨ Features
- 🤖 AI agent powered by OpenAI Agents SDK
- 🌍 Real-time weather info using [wttr.in](https://wttr.in)
- 🛠️ Extendable with custom tools
- 📦 Lightweight setup with `pnpm`

---

## 📂 Project Structure

```
weather-ai-agent/
├── index.js       # Main entry point
├── package.json   # Project dependencies
├── .env           # API key configuration
└── README.md      # Documentation
```

---

## ⚡ Installation

1. **Clone this repository**
   ```bash
   git clone https://github.com/your-username/weather-ai-agent.git
   cd weather-ai-agent
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```
   *(You can also use `npm install` or `yarn install` if you prefer.)*

3. **Set up environment variables**  
   Create a `.env` file in the project root:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

---

## 🚀 Usage

Run the agent:
```bash
node index.js
```

Example query:
```
Final Answer: The weather in London is Partly cloudy +18°C
```

---

## ⚠️ Troubleshooting

### Missing API Key
If you see:
```
Missing credentials. Please pass an `apiKey`
```
➡ Make sure `.env` contains `OPENAI_API_KEY`.

### 429 Rate Limit / Insufficient Quota
This means your OpenAI account has run out of free credits or quota.  
Check your [plan & billing](https://platform.openai.com/account/billing).

---

## 🔧 Tech Stack
- Node.js
- OpenAI Agents SDK
- Axios
- Zod
- dotenv

---

## 📜 License
This project is licensed under the MIT License.  
Feel free to use and modify.

