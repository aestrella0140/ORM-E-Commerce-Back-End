# ORM-E-Commerce-Back-End

[MIT License](https://opensource.org/licenses/MIT)

## Demo Link

https://youtu.be/LZFpISteUrg

## Description
This Challenge was to demonstrate the usage of ORM. Using our CRUD Methods we are able to run multiple functions on a live server and get data in return. Having multiple seeds to tie into each other and get data back from multiple seeds using the belongsTo, hasMany, BelongsToMany we are able to tie in multiple sets of data. using Insomnia we are able to choose what CRUD method to use and all funtions work. A potential Employer may do many calls to the data to manage user data.

## Usage
-log into mysql then enter source db/schema.sql; then exit out of mysql powershell.

-Open the command terminal and enter npm run seed.

-Then enter npm start. (this will start the server).

-By opening up Insomnia you may choose any CRUD Method to run. you can find the URL in the Demo Video or choose one of these listed Below.
Choose method(GET, PUT, POST, DELETE) in the dropdown.
localhost:3001/api/(products, categories, tags) if you want to use a method by ID then add /choose ID 

-Then click send

-For POST and PUT methods you have to input what you would like to change our add in a JSON file on Insomnia.

## Credits

N/A

## License

MIT License

Copyright (c) 2023 aestrella0140

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

