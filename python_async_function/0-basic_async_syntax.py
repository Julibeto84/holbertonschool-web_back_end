#!/usr/bin/env python3
'''Task 0's module.
'''
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    await asyncio.sleep(max_delay)
    return random.uniform(0, max_delay)
