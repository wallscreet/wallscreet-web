---
title: "Pocket Chat - AI Custom Voice Chatbot"
date: "2026-01-20"
description: "A minimal, high-performance voice AI assistant built on Raspberry Pi Zero 2W + PiSugar Whisplay HAT.  
Button press → listen (STT) → custom prompt pipeline → model response → speak (TTS), with real-time display/RGB feedback."
repo: "pocket-chat"
language: "python"
---

## Pocket Whisplay AI – Custom Voice Chatbot

A minimal, high-performance voice AI assistant built on Raspberry Pi Zero 2W + PiSugar Whisplay HAT.  
Button press → listen (STT) → custom prompt pipeline → model response → speak (TTS), with real-time display/RGB feedback.

Goal: Fast, responsive, offline-capable pocket device — no unnecessary multi-provider bloat.

### Hardware Requirements

- Raspberry Pi Zero 2W (64-bit Raspberry Pi OS Bookworm recommended)
- PiSugar Whisplay HAT (LCD 240x280, WM8960 audio codec + onboard mic/speaker, RGB LED, button)
- Optional: PiSugar battery module (for portable power)

### Features

- Button-triggered listening (press to start recording)
- Offline STT: Vosk API (streaming, zero-latency, small English model)
- Custom prompt engineering & model pipeline (e.g., OpenAI/Grok/Gemini API, or local Ollama if expanded)
- Offline TTS: Piper (neural, natural-sounding voices; fast on low-power hardware)
- Real-time LCD updates (status text, thinking animation, response snippets)
- RGB LED feedback (idle blue, listening cyan, speaking green, error red)
- Async state machine for non-blocking audio/display handling

### Project Structure

```text
pocket-whisplay-ai/
├── venv/                    # Python virtual environment (create with python3 -m venv venv)
├── src/
│   ├── main.py              # Entry point: state machine loop
│   ├── hardware.py          # WhisplayBoard class (LCD, RGB, button) – copy from original repo
│   ├── audio.py             # Mic recording & speaker playback helpers (pyaudio + ALSA)
│   ├── stt.py               # Vosk streaming STT
│   ├── pipeline.py          # Custom prompt → LLM API call → response handling
│   ├── tts.py               # Piper TTS generation & playback
│   └── config.py            # API keys, model paths, card name, etc.
├── models/                  # Vosk model (e.g., vosk-model-small-en-us-0.15) + Piper voice models
├── requirements.txt
├── run.sh                   # Startup script (uses venv Python)
└── README.md
```

### Quick Setup

1. **Update system & install dependencies**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y python3-venv python3-pip libportaudio2 portaudio19-dev git
   sudo apt install -y alsa-utils  # For aplay/arecord testing
   ```

1. **Install Whisplay HAT drivers** (from PiSugar repo)
   - Clone <https://github.com/PiSugar/Whisplay>
   - Follow their install instructions (usually `./install.sh` or similar; reboots required)
   - Verify audio: `aplay -l` should show `wm8960-soundcard`
   - Test mic/speaker: `arecord -D plughw:wm8960soundcard,0 -f cd test.wav` then `aplay test.wav`

1. **Create & activate virtual environment**

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

1. **Install Python packages**

   ```bash
   pip install vosk pyaudio sounddevice requests  # Core
   # For Piper TTS: pip install piper-tts  (or use binary from rhasspy/piper GitHub)
   ```

1. **Download models**
   - Vosk STT: Download small English model (~50MB) from <https://alphacephei.com/vosk/models> → extract to `models/vosk-model-small-en-us-0.15`
   - Piper TTS: Download a voice (e.g., en_US-lessac-medium) from <https://github.com/rhasspy/piper/releases> → place in `models/piper/`

1. **Run the bot**

   ```bash
   ./run.sh
   ```

   (Or directly: `venv/bin/python src/main.py`)

### run.sh example

```bash
#!/usr/bin/env bash
echo "Starting Pocket Whisplay AI..."
source venv/bin/activate
python src/main.py
deactivate
```
