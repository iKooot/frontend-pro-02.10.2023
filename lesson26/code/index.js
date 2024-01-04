// const patt = new RegExp(`^$`, 'g');
// const patt2 = /^$/g;
// console.log(patt === patt2);
// console.log(patt)
// console.log(typeof patt)

/****************************************
 * flags
 ****************************************/

// const str = `Hello world!
// This world is great!`;
//
// console.log(str.match(/hello/));
// console.log(str.match(/hello/i));
// console.log(str.match(/world/ig));

/****************************************
 * replace
 ****************************************/

// const str = 'Hello world! This world is great!';
//
// console.log(str.replace(/world/i, 'example'));
// console.log(str.replace(/world/ig, 'example'));
// console.log(str.replace(/world/ig, '$& (Earth)'));
// console.log(str.replace(/world/i, '$& (Earth)'));
// console.log(str.replace(/world/i, '$`Earth'));
// console.log(str.replace(/world/i, "$'Earth"));
// console.log(str.replace(/world/i, "$$"));

/****************************************
 * test
 ****************************************/

// const email = 'example@email.com'
// const email2 = 'email.com'
// const pattern = /@/ig
//
// console.log(pattern.test(email))
// console.log(pattern.test(email2))

/****************************************
 * classes
 ****************************************/

// const phoneNumber = '+38099999999';
// console.log(phoneNumber.match(/\d/g));
//
// const fullName = '      Serhii Savchuk                  ';
// console.log(fullName.replace(/\s/, ''))
// console.log(fullName.replace(/^\s+/, ''))
// console.log(fullName.replace(/\s+$/, ''))
// console.log(fullName.replace(/^\s+|\s+$/, ''))


// const email = '12ample@email.com';
// const pattern = /\S/ig
//
// console.log(email.match(pattern))

/****************************************
 * .
 ****************************************/

// const str = 'My app is version1';
// const str2 = 'My app is version\n1';
// const pattern = /version.1/is
//
// console.log(str.match(pattern))
// console.log(str2.match(pattern))
// console.log(str2.match(/./g))

/****************************************
 * .
 ****************************************/

// const email = 'example@email.com'
// const badEmail = 'example@mail.com'
// const pattern = /^\w+@\w+\.\w+$/
//
// console.log(pattern.test(email))
// console.log(pattern.test(badEmail))
//
// const str = 'World! Hello world!'
// console.log(str.match(/^hello/i))
// console.log(str.match(/\w$/i))


/****************************************
 * \b
 ****************************************/

// const str = 'Hello world!';
// console.log(str.match(/world/i))
// console.log(str.match(/\bworld!/i))
// console.log(str.match(/world\b/i))
// console.log(str.match(/\bworld\b/i))

/****************************************
 * \
 ****************************************/

// const str = "Hello (world)";
// console.log(str.match(/\(world\)/i));

/****************************************
 * []
 ****************************************/

// const str = "Hello world!";
// console.log(str.match(/[er]l/ig));
// console.log(str.match(/[A-Z]/g));
// console.log(str.match(/[^A-Z]/g));
// console.log(str.match(/[^a-z]/g));
// console.log(str.match(/[a-z]/g));
//
// const str2 = "^Hello world!";
// console.log(str2.match(/[\^]H/g));

/****************************************
 * {}
 ****************************************/

// const number = '123 456789';
//
// console.log(number.match(/\d{3}/))
// console.log(number.match(/\d{3,5}/g))
// console.log(number.match(/\d{3,}/g))

/****************************************
 * +
 ****************************************/

// const str = "My number: 1234567";
// console.log(str.match(/\d+/))

/****************************************
 * ?
 ****************************************/

// const str = "i need to use colour or color?";
// console.log(str.match(/colou?r/g))

/****************************************
 * ?
 ****************************************/

// const str = 'Hello "Serhii" i want to do "this", no way!';
// console.log(str.match(/".+"/g))
// console.log(str.match(/".+?"/g))

/****************************************
 * ()
 ****************************************/

// const domains = 'example.com example2.com example.example.com';
// console.log(domains.match(/(\w+\.)+\w+/g));
//
// const email = 'example@email.com @some example@site-site.ua xample-xample@site-site.ua';
// console.log(email.match(/[-.\w]+@([\w-]+\.)+\w{2,3}/g))


// const tag = '<div class="container">';
// const tag2 = '<h1>Hello</h1>';
// console.log(tag.match(/<(([a-z]+)\s*([^>]*))>/))
// console.log(tag2.match(/<(.+?)>/))

/****************************************
 * |
 ****************************************/

// const str = "Now is 12:00 or 23:56 but not 99:99";
// console.log(str.match(/([01]\d|2[0-3]):[0-5][0-9]/g))

const pattern = /<(.+?)>/
console.log(pattern.exec('<h1>Hello</h1>'))


