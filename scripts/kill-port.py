#!/usr/bin/env python3
import os
import sys

# Kill any process using port 3000
os.system("pkill -f 'listen.*3000' || true")
os.system("fuser -k 3000/tcp 2>/dev/null || true")
print("[v0] Porta 3000 liberada")
sys.exit(0)
