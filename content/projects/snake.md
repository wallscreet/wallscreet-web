---
title: "Snake (Pygame)"
date: "2025-11-29"
description: "A classic Snake game implementation using Pygame with modern features including a persistent leaderboard system and smooth gameplay."
repo: "pysnake"
lang: "python"
---

## 🐍 Snake Game

A classic Snake game implementation using Pygame with modern features including a persistent leaderboard system and smooth gameplay.

## 🎮 Features

- **Classic Snake Gameplay**: Navigate your snake to eat red apples and grow longer
- **Progressive Difficulty**: Game speed increases every 5 apples eaten (up to 20 FPS)
- **Persistent Leaderboard**: Top 15 high scores are saved locally with player initials
- **Polished UI**: Grid-based movement, visual effects, and clean menu system
- **Pause Functionality**: Press 'P' to pause/resume during gameplay
- **Smooth Controls**: Arrow keys for movement with collision prevention

## 🎯 How to Play

### Controls

- **Arrow Keys**: Move the snake (Up, Down, Left, Right)
- **P**: Pause/Resume game
- **Space**: Start game from menu
- **L**: View leaderboard
- **R**: Restart after game over
- **M**: Return to main menu
- **ESC/Q**: Quit game

### Game Rules

1. Navigate your snake to eat the red apples
2. Each apple eaten increases your score by 1 point
3. Your snake grows longer with each apple consumed
4. Avoid hitting walls or your own body
5. Game speed increases every 5 apples for added challenge
6. Try to achieve the highest score and make it to the leaderboard!

## 🚀 Installation

### Prerequisites

- Python 3.7 or higher
- Pygame library

### Setup

1. **Clone or download the game files**:

   ```bash
   git clone <repository-url>
   cd snake
   ```

2. **Install Pygame**:

   ```bash
   pip install pygame
   ```

3. **Run the game**:

   ```bash
   python main.py
   ```

## 📁 Project Structure

```text
snake/
├── main.py                 # Main game file
├── snake_leaderboard.json  # Local leaderboard storage (auto-created)
└── README.md              # This file
```

## 🏆 Leaderboard System

The game features a persistent leaderboard that:

- Stores the top 15 high scores locally
- Prompts for 3-letter initials when you achieve a high score
- Displays scores with player names and dates
- Persists between game sessions in `snake_leaderboard.json`

## 🎨 Visual Features

- **Grid-based display** with subtle grid lines
- **Color-coded snake**: Dark green head with eyes, lighter green body
- **Visual apple effects**: Red apples with shine highlights
- **Clean menu interface** with multiple options
- **Responsive feedback** for all user interactions

## ⚙️ Technical Details

- **Screen Resolution**: 800x600 pixels
- **Grid Size**: 20x20 pixel cells
- **Base FPS**: 10 (increases progressively)
- **Maximum FPS**: 20 (for maximum challenge)
- **Font**: System fonts (Consolas, Courier New, Arial fallback)

## 🐛 Troubleshooting

**Game won't start**:

- Ensure Python 3.7+ is installed
- Verify Pygame installation: `pip show pygame`
**No sound**: This is a visual-only game - no audio components included.
**Leaderboard not saving**: Check write permissions in the game directory. The game creates `snake_leaderboard.json` automatically.

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to enhance the game!

## 📄 License

This project is open source and available under the MIT License

---
