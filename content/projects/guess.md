---
title: "Number Guessing Game"
date: "2025-11-30"
description: "A fun and simple C++ number guessing game that's perfect for kids and adults alike! This project includes three different versions of the classic guessing game, each with unique features."
repo: "guess"
language: "c++"
---

## Number Guessing Game

A fun and simple C++ number guessing game that's perfect for kids and adults alike! This project includes three different versions of the classic guessing game, each with unique features.

## 🎮 Game Variants

### 1. Basic Game (`guess.cpp`)

The classic number guessing experience:

- Random number between 1-100
- Simple "higher/lower" hints
- Tracks attempts for each round

### 2. Enhanced Game (`guesser.cpp`)

An improved version with additional features:

- Input validation (only accepts numbers 1-100)
- Personal best score tracking
- Play again functionality
- Clean, user-friendly interface

### 3. Leaderboard Game (`guessleader.cpp`)

The ultimate competitive version:

- Persistent leaderboard (top 15 scores)
- Player initials entry for high scores
- Score file saved locally
- Full validation and error handling

## 🚀 How to Build and Run

### Prerequisites

- C++11 or later compatible compiler (g++, clang++, etc.)

### Compile

```bash
# Basic version
g++ -std=c++11 -o guess guess.cpp

# Enhanced version  
g++ -std=c++11 -o guesser guesser.cpp

# Leaderboard version
g++ -std=c++11 -o guessleader guessleader.cpp
```

### Run

```bash
# Basic game
./guess

# Enhanced game
./guesser

# Leaderboard game
./guessleader
```

## 🎯 How to Play

1. The game picks a random number between 1 and 100
2. You enter your guess
3. The game tells you if the number is higher or lower
4. Keep guessing until you find the correct number!
5. Try to get the best score (fewest attempts possible)

## 📁 Project Structure

```txt
guess/
├── guess.cpp          # Basic version
├── guesser.cpp        # Enhanced version with best score tracking
├── guessleader.cpp    # Full version with leaderboard
├── leaderboard.txt    # Persistent score storage (auto-generated)
├── .gitignore         # Git ignore file
└── README.md          # This file
```

## 🌟 Features

- **Multiple difficulty levels**: Easy to understand, challenging to master
- **Robust input handling**: Won't crash on invalid input
- **Score tracking**: Compete against yourself or others
- **Family-friendly**: Perfect for kids to learn programming concepts
- **Educational**: Great for teaching logical thinking and number sense

## 🎓 Why This Project

This was created as a fun programming exercise that kids actually enjoy playing! It demonstrates:

- Random number generation
- User input handling and validation
- File I/O operations (leaderboard version)
- Basic game loops and state management
- Clean C++ coding practices

## 🤝 Contributing

Feel free to fork this project and add your own features! Some ideas:

- Different difficulty ranges (1-50, 1-1000, etc.)
- Time-based challenges
- Multiplayer support
- GUI version

## 📄 License

This project is open source and available under the MIT License.

---
