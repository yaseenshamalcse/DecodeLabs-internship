# ============================================================
#  DecodeLabs AI Internship — Project 1
#  Rule-Based AI Chatbot
#  Bot Name   : ZARA
#  Personality: Friendly and helpful
# ============================================================

# Welcome banner
print("==========================================")
print("       ZARA - Rule-Based AI Chatbot       ")
print("     DecodeLabs AI Internship 2026        ")
print("==========================================")
print("Type 'bye' or 'exit' to quit.")
print()

# Message counter
message_count = 0

# Continuous loop - keeps chatbot running
while True:

    # Get user input
    user_input = input("You  : ")

    # Convert to lowercase for easy matching
    user_input = user_input.lower()

    # Ignore empty input
    if user_input == "":
        print("ZARA : Please type something!")
        print()
        continue

    # Count messages
    message_count += 1

    # ── if-else logic for responses ──────────────

    # Greetings
    if user_input == "hello" or user_input == "hi" or user_input == "hey":
        print("ZARA : Hello! I am ZARA. How can I help you today?")

    # How are you
    elif user_input == "how are you":
        print("ZARA : I am doing great! I am always happy to chat with you.")

    # Bot name
    elif user_input == "what is your name" or user_input == "who are you":
        print("ZARA : My name is ZARA! I am a rule-based AI chatbot.")

    # What can you do
    elif user_input == "what can you do" or user_input == "help":
        print("ZARA : I can:")
        print("       - Chat with you")
        print("       - Tell you a joke")
        print("       - Share a motivational quote")
        print("       - Give you a fun fact")

    # Joke (Custom Topic 1)
    elif user_input == "joke" or user_input == "tell me a joke":
        print("ZARA : Why do programmers prefer dark mode?")
        print("       Because light attracts bugs! :)")

    # Motivation (Custom Topic 2)
    elif user_input == "motivate me" or user_input == "motivation" or user_input == "quote":
        print("ZARA : 'The only way to do great work is to love what you do.' - Steve Jobs")

    # Fun Fact (Custom Topic 3)
    elif user_input == "fact" or user_input == "fun fact":
        print("ZARA : The first computer bug was a real bug!")
        print("       A moth was found inside a Harvard computer in 1947.")

    # Exit / Farewell
    elif user_input == "bye" or user_input == "exit" or user_input == "quit":
        print("ZARA : Goodbye! It was nice talking to you. See you soon!")
        break

    # Unknown input - fallback response
    else:
        print("ZARA : Sorry, I did not understand that.")
        print("       Try: hello / joke / fact / motivate me / help")

    # Show message count every 5 messages
    if message_count % 5 == 0:
        print(f"       [You have sent {message_count} messages!]")

    # Blank line for readability
    print()
