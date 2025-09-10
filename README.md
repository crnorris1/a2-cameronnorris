#Assignment 2 - Short Stack Implementation - Cameron Norris

Cameron Norris
https://a2-cameronnorris.onrender.com/

This web page contains a guitar database system where the user is able to add, remove and alter different guitars.
Simply follow the instructions on the page to log a guitar, remove one, or change the color of the guitar.
The age of a guitar will automatically display once a guitar is logged with a valid manufacture date.
#Assignment 2 - Short Stack Implementation - Cameron Norris

Cameron Norris
https://a2-cameronnorris.onrender.com/

This web page contains a guitar database system where the user is able to add, remove and alter different guitars.
Simply follow the instructions on the page to log a guitar, remove one, or change the color of the guitar.
The age of a guitar will automatically display once a guitar is logged with a valid manufacture date.

## Technical Achievements
- **Tech Achievement 1**: The website is formatted in one single page that shows the current state of the server-side data.
- **Tech Achievement 2**: When the user submits data, it is automatically updated into the table. Same goes for when the user alters or deletes data.
- **Tech Achievement 3**: The user can alter the table in the form of color altering. This is updated instantaneously.
- **Tech Achievement 4**: I validate some forms of input -- if user enters text instead of number for manufacture date, it does not throw an error
- **Tech Achievement 5**: I implemented a derived field: age, calculated by when the guitar was made
- **Tech Achievement 6**: Front-end JS to get / fetch from the server
- **Tech Achievement 7**: Verified that age validates
- **Tech Achievement 1**: The website is formatted in one single page that shows the current state of the server-side data.
- **Tech Achievement 2**: When the user submits data, it is automatically updated into the table. Same goes for when the user alters or deletes data.
- **Tech Achievement 3**: The user can alter the table in the form of color altering. This is updated instantaneously.
- **Tech Achievement 4**: I validate some forms of input -- if user enters text instead of number for manufacture date, it does not throw an error
- **Tech Achievement 5**: I implemented a derived field: age, calculated by when the guitar was made
- **Tech Achievement 6**: Front-end JS to get / fetch from the server
- **Tech Achievement 7**: Verified that age validates

### Design/Evaluation Achievements
- **Design Achievement 1**: I tested my site with two other classmates by giving them a task and using the think-aloud protocol.
1. I worked with Dillon Bresnahan and Akaash Walker.
2. The main problems that came up when they tried to use my design was that the text-enter format was a little confusing. The text is entered and parsed by spaces, but my description made it seem like it was parsed by hyphens and that spaces did not matter.
3. The comments that suprised me were that they admired my program's ability to identify when a date was not valid (not a number).
4. I later took their feedback and clarified the entering format in the description on the page, as well as spaced out the example string to make it more readable.
- **Design Achievement 2**: I styled the page to look presentable with CSS:
1. I styled the primary visual elements on the page: title, descriptions, table, buttons
2. I used element selectors, ID selectors (like #table) and 
3. class selectors (like .flexbox)
- **Design Achievement 3** I used used flexbox to style the button and enter box
- **Design Achievement 4** I used Google Fonts like Raleway and Grenze Gotisch


### AI use:
I used ChatGPT primarily in the beginning of the assignment to help me understand how the front end and backend js files talk to each other. It helped me understand the server file's limitations and why things like appdata had to be send to main and not just accessed as a variable. 
I also used it to explain to me how formatting an array for HTML use worked, as I did not understand why it could not be placed with a simple innerHTML line.
