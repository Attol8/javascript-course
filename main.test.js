import { expect, test } from 'vitest';
import { SumArray } from './scratches/cumulative_sum.js';
import { binarySearch } from './scratches/binary_search.js';
import { LRUCache } from './scratches/LRU_cache.js';

test('cumulative sum of an array', () => {
    expect(SumArray([1, 3, 5, 7])).toBe(16);
    expect(SumArray([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(45);
    expect(SumArray([-1, -2, -3])).toBe(-6);
});

test('binary search', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6)).toBe(5);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 9, 8], 9)).toBe(8);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 9, 8], 10)).toBe(-1);
});

test('LRU cache', () => {
    let cache = new LRUCache(4);
    cache.setItem('a', 1);
    cache.setItem('b', 2);
    cache.setItem('c', 3);
    cache.setItem('d', 4);
    expect(cache.getItem('a')).toBe(1);
    cache.setItem('e', 5);
    expect(cache.getItem('b')).toBe(undefined);
    cache.setItem('f', 6);
    expect(cache.cache.size).toBe(4);
});

