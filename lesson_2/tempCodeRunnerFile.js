function isAdmin(role) {
	return role === 1 || role === 'admin'	
}

console.log(isAdmin(1)); // true
console.log(isAdmin('1')); // false  (это строка!)
console.log(isAdmin('admin')); // true
console.log(isAdmin(0)); // false
console.log(isAdmin('')); // false
console.log(isAdmin(null)); // false
console.log(isAdmin(undefined)); // false