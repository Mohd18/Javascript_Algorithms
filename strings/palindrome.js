var str = 'Malayalam';

str = str.replace(new RegExp(' ', 'g'), '').toLowerCase();

var len = str.length;

for (var i = 0; i < len; i++) {
    console.log(str[i], str[len - 1 - i]);
    if (str[i] != str[len - 1 - i]) {
        console.log('Not a palindrome');
        return false;
    }
}

console.log('Palindrome');
