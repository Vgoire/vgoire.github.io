#!/usr/bin/env python3
import os
import shutil
import subprocess

print("[v0] Limpando ambiente...")

# Remove node_modules
if os.path.exists('node_modules'):
    print("[v0] Removendo node_modules...")
    shutil.rmtree('node_modules')

# Remove lockfiles
for lockfile in ['package-lock.json', 'npm-shrinkwrap.json', 'yarn.lock', 'pnpm-lock.yaml']:
    if os.path.exists(lockfile):
        print(f"[v0] Removendo {lockfile}...")
        os.remove(lockfile)

# Remove dist
if os.path.exists('dist'):
    print("[v0] Removendo dist...")
    shutil.rmtree('dist')

# Remove .next
if os.path.exists('.next'):
    print("[v0] Removendo .next...")
    shutil.rmtree('.next')

print("[v0] Limpeza concluída!")
