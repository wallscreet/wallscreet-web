---
title: "Rock, Paper, Scissors"
date: "2025-11-30"
description: "A fun, terminal-based Rock, Paper, Scissors game written in modern C++23. Perfect for kids and adults alike! Built by a dad for his son to enjoy."
repo: "rps"
language: "c++"
---

## Rock, Paper, Scissors - Streak Master

A fun, terminal-based Rock, Paper, Scissors game written in modern C++23. Perfect for kids and adults alike! Built by a dad for his son to enjoy.

![C++](https://img.shields.io/badge/C%2B%2B-23-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🎮 Features

- **Classic Gameplay**: Traditional Rock, Paper, Scissors with a clean terminal interface
- **Win Streaks**: Build up winning streaks and compete for the top spot
- **Persistent Leaderboard**: Top 15 streaks are saved locally and displayed each game
- **Session Statistics**: Track your win rate, total games, and choice patterns
- **Child-Friendly**: Simple number-based input (1-2-3) and encouraging messages
- **Cross-Platform**: Works on Linux, macOS, and Windows

## 🚀 Quick Start

### Prerequisites

- A C++23 compatible compiler (g++ 13+, clang++ 16+, or MSVC 2022+)
- Make (optional, for using the Makefile)

### Building and Running

```bash
# Compile the game
g++ -std=c++23 -O2 -o rps rps.cpp

# Run the game
./rps
```

Or using Make (if available):

```bash
make
./rps
```

## 🎯 How to Play

1. **Choose your move**:
   - `1` for Rock 🪨
   - `2` for Paper 📄  
   - `3` for Scissors ✂️

2. **Build streaks**: Win consecutive games to build your streak!
3. **Beat the leaderboard**: Get on the top 15 streak list by achieving long winning runs
4. **Track your stats**: See your win rate and choice patterns at the end of each session

## 📊 Leaderboard System

- Streaks are automatically saved to `~/.local/share/rps/leaderboard.txt`
- Top 15 streaks are displayed at the start of each game
- When you achieve a new high streak, you can enter your initials (up to 3 letters)
- Leaderboard persists between sessions

## 🏆 Game Rules

- **Rock** beats **Scissors**
- **Scissors** beats **Paper**  
- **Paper** beats **Rock**
- Same choices result in a tie (streak unchanged)
- Losing resets your streak to 0

## 📁 Project Structure

```text
rps/
├── rps.cpp          # Main game source code
├── rps              # Compiled executable
├── Makefile         # Build configuration (optional)
└── README.md        # This file
```

## 🔧 Technical Details

- **Language**: C++23
- **Random Generation**: Mersenne Twister (`std::mt19937`)
- **File Storage**: Uses `std::filesystem` for cross-platform directory handling
- **Data Persistence**: Simple text-based leaderboard storage
- **Input Validation**: Robust error handling for user input

## 🌟 Features in Detail

### Session Statistics

- Total games played
- Win/loss/tie counts
- Win percentage calculation
- Choice distribution (how many times you chose each option)

### Leaderboard Features

- Automatic directory creation (`~/.local/share/rps/`)
- Sorted by streak length (highest first)
- Initials validation and formatting
- Top 15 entries only (keeps file size manageable)

### User Experience

- Clear, colorful terminal output
- Encouraging messages for wins and streaks
- Real-time win percentage display
- Clean exit with summary statistics

## 🤝 Contributing

This is a simple educational project, but feel free to submit issues or pull requests if you have ideas for improvement:

- Bug fixes
- New features (sound effects, animations, etc.)
- Code improvements
- Documentation updates

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎈 Why This Game Was Made

I wrote this game as a fun, educational project for my son to play and learn from. It demonstrates fundamental C++ concepts like:

- Random number generation
- File I/O and persistence
- User input validation
- Basic data structures (vectors, maps)
- Modern C++ features

It's designed to be simple enough for beginners to understand while still being fun to play!

---
