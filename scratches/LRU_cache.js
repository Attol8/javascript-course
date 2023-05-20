export class LRUCache {
    constructor(maxCacheSize) {
        this.maxCacheSize = maxCacheSize;
        this.cache = new Map();
    }

    getItem(key) {
        if (this.cache.has(key)) {
            // update the cache
            let value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value);
            console.log('Updated cache: ', this.cache);
            return this.cache.get(key);
        }
        console.log('Cache miss');
    }

    setItem(key, value) {
        if (this.cache.size === this.maxCacheSize) {
            // delete the least recently used item
            this.cache.delete(this.cache.keys().next().value);
        }
        this.cache.set(key, value);
        console.log('Updated cache: ', this.cache);
    }
}

let cache = new LRUCache(4);
cache.setItem('a', 1);
cache.setItem('b', 2);
cache.setItem('c', 3);
cache.setItem('d', 4);
cache.getItem('a');
cache.setItem('e', 5);
cache.getItem('b'); // should miss
cache.setItem('f', 6);

