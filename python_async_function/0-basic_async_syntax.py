#!/usr/bin/env python3
'''Task 0's module.
'''
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    random_value= random.uniform(0, max_delay)
    await asyncio.sleep(random_value)
    return random_value
