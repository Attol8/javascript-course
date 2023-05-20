const val = '';
const result = val ?? 'default';
console.log(result);

const result2 = val || 'default';
console.log(result2);

const result3 = null ?? 'default';
console.log(result3);