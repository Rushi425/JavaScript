class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = Number(capacity);
    this.map = new Map();

    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _add(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this._remove(node);
    this._add(node);
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      // update existing
      const node = this.map.get(key);
      node.value = value;
      this._remove(node);
      this._add(node);
    } else {
      if (this.map.size === this.capacity) {
        const lastUsed = this.tail.prev; // least recently used
        this._remove(lastUsed);
        this.map.delete(lastUsed.key);
      }
      const newNode = new Node(key, value);
      this.map.set(key, newNode);
      this._add(newNode);
    }
  }

  print() {
    let curr = this.head.next;
    const result = [];
    while (curr !== this.tail) {
      result.push(`[${curr.key}:${curr.value}]`);
      curr = curr.next;
    }
    console.log(result.join(" -> "));
  }
}


const cache = new LRUCache(2);

cache.put(1, 10);
cache.put(2, 20);
cache.print(); 
// [2:20] -> [1:10]   (2 most recent)

console.log(cache.get(1)); // 10
cache.print(); 
// [1:10] -> [2:20]

cache.put(3, 30); 
cache.print(); 
// [3:30] -> [1:10]

console.log(cache.get(2)); // -1 (evicted)

cache.put(4, 40); // evicts key 1
cache.print(); 
// [4:40] -> [3:30]

console.log(cache.get(1)); // -1
console.log(cache.get(3)); // 30
console.log(cache.get(4)); // 40
