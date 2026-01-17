---
title: "Hangman"
date: "2025-11-30"
description: "A classic Hangman game implemented in C++23 with a programming-themed word dictionary. Perfect for learning and entertainment!"
repo: "hangman"
language: "c++"
---

## 🎮 Hangman - C++ Terminal Game

A classic Hangman game implemented in C++23 with a programming-themed word dictionary. Perfect for learning and entertainment!

## ✨ Features

- **Terminal-based gameplay** with ASCII art gallows
- **Programming & CS word dictionary** - 18 tech-related terms
- **Persistent leaderboard** that tracks high scores
- **Input validation** for robust gameplay
- **Cross-platform** compatibility (Linux, macOS, Windows)

## 🚀 Getting Started

### Prerequisites

- C++23 compatible compiler (g++ 13+, clang++ 16+)
- Standard library support for filesystem

### Compilation

```bash
g++ -Wall -Wextra -Werror -std=c++23 hangman.cpp -o hangman
```

### Running the Game

```bash
./hangman
```

## 🎯 How to Play

1. The game selects a random programming/computer science term
2. Guess letters one at a time to reveal the word
3. You have 6 wrong guesses before the hangman is complete
4. Win by guessing the entire word before running out of lives
5. High scores are saved based on the fewest total guesses

## 📊 Leaderboard System

- Scores are saved in `~/.local/share/hangman/leaderboard.txt`
- Tracks the top 15 scores with fewest guesses
- Enter your initials (up to 3 letters) when you achieve a high score
- Leaderboard persists between game sessions

## 📚 Word Dictionary

The game includes programming and computer science terms like:

- COMPUTER, PROGRAM, KEYBOARD, MOUSE
- CODING, DEVELOPER, LINUX, TERMINAL  
- GITHUB, PYTHON, JAVASCRIPT, RUST
- And more tech-related words!

## 🛠️ Technical Details

- **Language**: C++23
- **Random Number Generation**: Mersenne Twister (std::mt19937)
- **File Storage**: Uses std::filesystem for cross-platform compatibility
- **Data Structures**: std::vector, std::set, std::string for efficient gameplay

## 📁 File Structure

```text
hangman/
├── hangman.cpp          # Main game source code
├── hangman              # Compiled executable
└── README.md           # This file
```

## 🎮 Controls

- Enter single letters to make guesses
- Type 'y' to play again after a game ends
- Type 'n' to exit the game
- Letters are case-insensitive (automatically converted to uppercase)

## 🏆 Scoring

- **Win condition**: Guess the complete word before 6 wrong guesses
- **High score**: Based on total number of guesses used (fewer is better)
- **Persistence**: High scores are saved and displayed at the start of each game

## 🤝 Contributing

Feel free to:

- Add more words to the dictionary
- Improve the ASCII art
- Add new features like difficulty levels
- Fix any bugs you find

## 📄 License

This project is open source. Feel free to use, modify, and distribute as you see fit.

---
