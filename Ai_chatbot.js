// ==========================================
//  ZARA Chatbot — JavaScript Logic
//  DecodeLabs AI Internship 2026
// ==========================================

const msgs    = document.getElementById('messages');
const input   = document.getElementById('user-input');
const counter = document.getElementById('msg-counter');
let messageCount = 0;

// ── Rule-based reply engine (mirrors Python if/elif logic) ──
function getReply(raw) {
  const t = raw.trim().toLowerCase();

  if (!t) return null;

  // Greetings
  if (['hello', 'hi', 'hey'].includes(t))
    return 'Hello! I am ZARA. How can I help you today?';

  // How are you
  if (t === 'how are you')
    return 'I am doing great! I am always happy to chat with you.';

  // Bot name
  if (['what is your name', 'who are you'].includes(t))
    return 'My name is ZARA! I am a rule-based AI chatbot.';

  // Help / what can you do
  if (['what can you do', 'help'].includes(t))
    return 'I can:\n• Chat with you\n• Tell you a joke\n• Share a motivational quote\n• Give you a fun fact';

  // Joke
  if (['joke', 'tell me a joke'].includes(t))
    return 'Why do programmers prefer dark mode?\nBecause light attracts bugs! 🙂';

  // Motivation
  if (['motivate me', 'motivation', 'quote'].includes(t))
    return '"The only way to do great work is to love what you do."\n— Steve Jobs';

  // Fun fact
  if (['fact', 'fun fact'].includes(t))
    return 'The first computer bug was a real bug! A moth was found inside a Harvard computer in 1947.';

  // Exit / farewell
  if (['bye', 'exit', 'quit'].includes(t))
    return '__bye__';

  // Fallback
  return 'Sorry, I did not understand that.\nTry: hello / joke / fact / motivate me / help';
}

// ── Helper: current time string ──
function now() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// ── Add a chat bubble to the messages area ──
function addBubble(text, who) {
  const row = document.createElement('div');
  row.className = 'msg-row ' + who;

  const av = document.createElement('div');
  av.className = 'msg-avatar';
  av.textContent = who === 'bot' ? 'ZA' : 'You';

  const bub = document.createElement('div');
  bub.className = 'bubble';
  bub.innerHTML = text.replace(/\n/g, '<br>') + `<div class="meta">${now()}</div>`;

  if (who === 'bot') row.append(av, bub);
  else               row.append(bub, av);

  msgs.appendChild(row);
  msgs.scrollTop = msgs.scrollHeight;
}

// ── Show animated typing indicator ──
function showTyping() {
  const row = document.createElement('div');
  row.className = 'msg-row bot';
  row.id = 'typing-row';

  const av = document.createElement('div');
  av.className = 'msg-avatar';
  av.textContent = 'ZA';

  const bub = document.createElement('div');
  bub.className = 'bubble';
  bub.innerHTML = '<div class="typing"><span></span><span></span><span></span></div>';

  row.append(av, bub);
  msgs.appendChild(row);
  msgs.scrollTop = msgs.scrollHeight;
}

// ── Remove typing indicator ──
function removeTyping() {
  const r = document.getElementById('typing-row');
  if (r) r.remove();
}

// ── Disable chat after goodbye ──
function disableChat() {
  input.disabled = true;
  document.getElementById('send-btn').disabled = true;
  document.querySelectorAll('.chip').forEach(c => (c.disabled = true));
}

// ── Main send handler ──
function handleSend(text) {
  const raw = (text !== undefined ? text : input.value).trim();
  if (!raw) return;
  input.value = '';

  // Show user bubble
  addBubble(raw, 'user');

  // Increment message counter
  messageCount++;
  counter.textContent = messageCount + (messageCount === 1 ? ' message' : ' messages');

  // Show typing, then reply after delay
  showTyping();
  setTimeout(() => {
    removeTyping();

    const reply = getReply(raw);

    if (reply === '__bye__') {
      addBubble('Goodbye! It was nice talking to you. See you soon! 👋', 'bot');
      disableChat();
      return;
    }

    addBubble(reply, 'bot');

    // Milestone message every 5 messages (mirrors Python logic)
    if (messageCount % 5 === 0) {
      setTimeout(() => addBubble(`You have sent ${messageCount} messages! 🎉`, 'bot'), 300);
    }

  }, 700);
}

// ── Quick-reply chip click ──
function sendChip(btn) {
  handleSend(btn.textContent);
}

// ── Event listeners ──
document.getElementById('send-btn').addEventListener('click', () => handleSend());
input.addEventListener('keydown', e => { if (e.key === 'Enter') handleSend(); });

// ── Welcome message on load ──
setTimeout(() => {
  addBubble('Hello! I am ZARA, your friendly rule-based AI chatbot. How can I help you today?', 'bot');
}, 400);