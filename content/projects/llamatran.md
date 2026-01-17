---
title: "LLamaTran"
date: "2025-12-02"
description: "A minimal Fortran interface to llama.cpp using ISO_C_BINDING. If the Fortran Renaissance is real, it deserves its own 🦙 bindings."
repo: "llamatran"
language: "fortran"
---

## LlamaTRAN

A minimal Fortran interface to llama.cpp using ISO_C_BINDING. If the Fortran Renaissance is real, it deserves its own 🦙 bindings.

Allows any modern Fortran program to load and run GGUF models (Llama-3, Mistral, Gemma, etc.) directly via the llama.cpp C API with no Python dependency.

## Requirements

- gfortran (GCC 10 or later recommended)
- A working C/C++ compiler (gcc/g++)
- llama.cpp source (official repository)

## Build

```bash
# 1. Build the shared library
cd llama.cpp
make clean
make -j libllama.so LLAMA_C_EXPORTS=1

# 2. Copy the library to the project root
cp libllama.so ..

# 3. Compile the Fortran program
gfortran -O3 -march=native main.f90 -L. -llama -o llamatran
```

## Usage

```bash
./llamatran
```

The example `main.f90` loads a GGUF model (default: models/llama-3.1-8b-instruct-q5_k_m.gguf) and runs a simple prompt.

## Notes

- Model file must be in GGUF format and present in ./models/ or change the path in the source.
- Only basic inference is implemented. Extend the binding module as needed.
- No external dependencies beyond libllama.so and the standard Fortran runtime.

## License

MIT
