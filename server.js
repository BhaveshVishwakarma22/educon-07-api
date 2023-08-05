const express = require("express");
const dotenv = require("dotenv").config();


const app = express();

const port = process.env.PORT || 5000;



const mysql = require('mysql');

// create connection
const db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DBNAME,
});

// database : 'nodemysql'
// connect

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("My sql connected");
});



/*
// ------||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Testing
// create database
app.get('/createddb',(req, res)=>{
    let sql = "CREATE DATABASE nodemysql";
    db.query(sql, (err, result)=>{
        if(err){
            console.log("Code: \t" + err.code);
            console.log("Name: \t" + err.name);
            console.log("Message: \t" + err.message);
        }
        
        console.log(result);
        res.send('Database Created');
    });
});


// create table
app.get('/createposttable', (req, res)=>{
    let sql = 'CREATE TABLE posts(id INT AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';

    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("Post table created...");
    });
});


// Insert post 1
app.get('/addpost1', (req, res)=>{
    let post = {title: 'post one', body: 'This is post number one'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("Post 1 added");
    });
});

// Insert post 2
app.get('/addpost2', (req, res)=>{
    let post = {title: 'post two', body: 'This is post number two'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("Post 2 added");
    });
});

// Select Post
app.get('/getposts', (req, res)=>{
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results)=>{
        if(err) throw err;
        console.log(results);
        res.send('Post Fetched ...');
    });
});

// Select in Json Fromat
app.get('/getpostsJson', (req, res)=>{
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results)=>{
        if(err) throw err;
        console.log(results);
        // let output = JSON.stringify(results);                Object to Json
        res.json(results);
    });
});

// Select single Post
app.get('/getpost/:id', (req, res)=>{
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Post Fetched ...');
    });
});

// Update post
app.get('/updatepost/:id', (req, res)=>{
    let newTitle = 'Updated Title'
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("Post updated ...");
    });
});

// Update Multiple Post
app.get('/updatepost/:id&:title', (req, res)=>{
    let sql = `UPDATE posts SET title = '${req.params.title}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("Post updated ...");
    });
});

// Update Multiple Post another way
app.get('/updatepost/:id/:title', (req, res)=>{
    let sql = `UPDATE posts SET title = '${req.params.title}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("Post updated ...");
    });
});

// Update Multiple Post another way
app.get('/updateposts/:id/:title/:body',(req,res)=>{
    let sql =`UPDATE posts SET title = '${req.params.title}', body = '${req.params.body}' WHERE id = ${req.params.id}`; 
    let query=db.query(sql,(error,result)=>{
     if (error) throw error;
        console.log(result);
        res.send('posts updated');
    });
});

// Delete post
app.get('/delete/:id', (req, res)=>{
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("Post Deleted ...")
    });
});
*/
// ----------------------------------------------------------------------

// ------||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Teacher chat table
/*
CREATE TABLE teacher_chat (sno INT PRIMARY KEY AUTO_INCREMENT NOT NULL,college_code  VARCHAR(20) NOT NULL DEFAULT 'NULL',sender VARCHAR(20) NOT NULL DEFAULT 'NULL ',message  VARCHAR(500) NOT NULL DEFAULT 'NULL ');
INSERT INTO teacher_chat VALUES(1,'C-123','sender','message');
SELECT * FROM teacher_chat;

SELECT * FROM teacher_chat WHERE college_code='C-123';
SELECT * FROM teacher_chat WHERE college_code='C-123' AND sender='sender';
DELETE FROM teacher_chat WHERE college_code='C-123' AND sender='sender';
*/

// create TEACHER CHAT table
app.get('/create_tchat_table', (req, res)=>{
    let sql = `CREATE TABLE teacher_chat (sno INT PRIMARY KEY AUTO_INCREMENT NOT NULL,college_code  VARCHAR(20) NOT NULL DEFAULT 'NULL',sender VARCHAR(20) NOT NULL DEFAULT 'NULL ',message  VARCHAR(500) NOT NULL DEFAULT 'NULL ')`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("teacher_chat table created...");
    });
});

// sno	college_code	sender	message	

// add row TEACHER CHAT table
app.get('/add_row_tchat_table/:c_code/:sender/:message', (req, res)=>{
    let sql = `INSERT INTO teacher_chat VALUES(sno,'${req.params.c_code}','${req.params.sender}','${req.params.message}');`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("teacher_chat table row added...");
    });
});

// delete row TEACHER CHAT table
app.get('/delete_row_tchat_table/:c_code/:sender', (req, res)=>{
    let sql = `DELETE FROM teacher_chat WHERE college_code='${req.params.c_code}' AND sender='${req.params.sender}';`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("teacher_chat table row deleted...");
    });
});

// Read row TEACHER CHAT table by c_code and sender
app.get('/read_tchat_table_by_sender_and_ccode/:c_code/:sender', (req, res)=>{
    let sql = `SELECT * FROM teacher_chat WHERE college_code='${req.params.c_code}' AND sender='${req.params.sender}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

// Read row TEACHER CHAT table by c_code
app.get('/read_tchat_table_by_ccode/:c_code', (req, res)=>{
    let sql = `SELECT * FROM teacher_chat WHERE college_code='${req.params.c_code}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

// ------||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Parents Institute chat table
/*
CREATE TABLE parent_institute_chat (sno INT PRIMARY KEY AUTO_INCREMENT NOT NULL,college_code VARCHAR(20) NOT NULL DEFAULT 'NULL',sender  VARCHAR(20) NOT NULL DEFAULT 'NULL ',message  VARCHAR(500) NOT NULL DEFAULT 'NULL ');
INSERT INTO parent_institute_chat VALUES(1,'C-123','sender','message');
SELECT * FROM parent_institute_chat;
SELECT * FROM parent_institute_chat WHERE college_code='C-123';
SELECT * FROM parent_institute_chat WHERE college_code='C-123' AND sender='sender';
DELETE FROM parent_institute_chat WHERE college_code='C-123' AND sender='sender';
*/
// create Parent institute chat table
app.get('/create_pichat_table', (req, res)=>{
    let sql = `CREATE TABLE parent_institute_chat (sno INT PRIMARY KEY AUTO_INCREMENT NOT NULL,college_code  VARCHAR(20) NOT NULL DEFAULT 'NULL',sender VARCHAR(20) NOT NULL DEFAULT 'NULL ',message  VARCHAR(500) NOT NULL DEFAULT 'NULL ')`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("parent_institute_chat table created...");
    });
});
// ----/
// sno	college_code	sender	message	

// add row Parent institute chat table
app.get('/add_row_pichat_table/:c_code/:sender/:message', (req, res)=>{
    let sql = `INSERT INTO parent_institute_chat VALUES(sno,'${req.params.c_code}','${req.params.sender}','${req.params.message}');`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("parent_institute_chat table row added...");
    });
});

// delete row Parent institute chat table
app.get('/delete_row_pichat_table/:c_code/:sender', (req, res)=>{
    let sql = `DELETE FROM parent_institute_chat WHERE college_code='${req.params.c_code}' AND sender='${req.params.sender}';`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("parent_institute_chat table row deleted...");
    });
});

// Read row Parent institute chat table by c_code and sender
app.get('/read_pichat_table_by_sender_and_ccode/:c_code/:sender', (req, res)=>{
    let sql = `SELECT * FROM parent_institute_chat WHERE college_code='${req.params.c_code}' AND sender='${req.params.sender}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

// Read row Parent institute chat table by c_code
app.get('/read_pichat_table_by_ccode/:c_code', (req, res)=>{
    let sql = `SELECT * FROM parent_institute_chat WHERE college_code='${req.params.c_code}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});


// ------||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Parents Teachers chat table
/*
CREATE TABLE teacher_student_chat  (sno INT PRIMARY KEY AUTO_INCREMENT NOT NULL,college_code VARCHAR(20) NOT NULL DEFAULT 'NULL ',sender  VARCHAR(20) NOT NULL DEFAULT 'NULL ',message  VARCHAR(500) NOT NULL DEFAULT 'NULL ');
INSERT INTO teacher_student_chat VALUES(1,'C-123','sender','message');
SELECT * FROM teacher_student_chat;

SELECT * FROM teacher_student_chat WHERE college_code='C-123' AND sender='sender';
SELECT * FROM teacher_student_chat WHERE college_code='C-123';
DELETE FROM teacher_student_chat WHERE college_code='C-123' AND sender='sender';
*/
// create Parent institute chat table
app.get('/create_tschat_table', (req, res)=>{
    let sql = `CREATE TABLE teacher_student_chat  (sno INT PRIMARY KEY AUTO_INCREMENT NOT NULL,college_code VARCHAR(20) NOT NULL DEFAULT 'NULL ',sender  VARCHAR(20) NOT NULL DEFAULT 'NULL ',message  VARCHAR(500) NOT NULL DEFAULT 'NULL ')`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("teacher_student_chat table created...");
    });
});
// ----/
// sno	college_code	sender	message	

// add row Parent institute chat table
app.get('/add_row_tschat_table/:c_code/:sender/:message', (req, res)=>{
    let sql = `INSERT INTO teacher_student_chat VALUES(sno,'${req.params.c_code}','${req.params.sender}','${req.params.message}');`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("teacher_student_chat table row added...");
    });
});

// delete row Parent institute chat table
app.get('/delete_row_tschat_table/:c_code/:sender', (req, res)=>{
    let sql = `DELETE FROM teacher_student_chat WHERE college_code='${req.params.c_code}' AND sender='${req.params.sender}';`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("teacher_student_chat table row deleted...");
    });
});

// Read row Parent institute chat table by c_code and sender
app.get('/read_tschat_table_by_sender_and_ccode/:c_code/:sender', (req, res)=>{
    let sql = `SELECT * FROM teacher_student_chat WHERE college_code='${req.params.c_code}' AND sender='${req.params.sender}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

// Read row Parent institute chat table by c_code
app.get('/read_tschat_table_by_ccode/:c_code', (req, res)=>{
    let sql = `SELECT * FROM teacher_student_chat WHERE college_code='${req.params.c_code}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

// ------||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| One to one chat table
/*
CREATE TABLE one_to_one (sno INT PRIMARY KEY AUTO_INCREMENT NOT NULL,college_code VARCHAR(20) NOT NULL DEFAULT 'NULL ',sender  VARCHAR(20) NOT NULL DEFAULT 'NULL ',receiver  VARCHAR(20) NOT NULL DEFAULT 'NULL ',message  VARCHAR(500) NOT NULL DEFAULT 'NULL ');
INSERT INTO one_to_one VALUES(1,'C-123','sender','receiver','message');
SELECT * FROM one_to_one;
DELETE FROM one_to_one WHERE sender='sender' AND college_code='C-123';
SELECT * FROM one_to_one WHERE sender ='sender' AND college_code='C-123';
SELECT * FROM one_to_one WHERE college_code='C-123';
*/

// create one to one chat table
app.get('/create_onetoone_table', (req, res)=>{
    let sql = `CREATE TABLE one_to_one (sno INT PRIMARY KEY AUTO_INCREMENT NOT NULL,college_code VARCHAR(20) NOT NULL DEFAULT 'NULL ',sender  VARCHAR(20) NOT NULL DEFAULT 'NULL ',receiver  VARCHAR(20) NOT NULL DEFAULT 'NULL ',message  VARCHAR(500) NOT NULL DEFAULT 'NULL ')`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("one_to_one table created...");
    });
});
// ----/
// sno	college_code	sender	receiver	message		

// add row one to one chat table
app.get('/add_row_one_to_one_table/:c_code/:sender/:receiver/:message', (req, res)=>{
    let sql = `INSERT INTO one_to_one VALUES(sno,'${req.params.c_code}','${req.params.sender}','${req.params.receiver}','${req.params.message}');`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("one_to_one table row added...");
    });
});

// delete row one to one chat table
app.get('/delete_row_one_to_one_table/:c_code/:sender', (req, res)=>{
    let sql = `DELETE FROM one_to_one WHERE college_code='${req.params.c_code}' AND sender='${req.params.sender}';`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("one_to_one table row deleted...");
    });
});

// Read row one to one chat table by c_code and sender
app.get('/read_one_to_one_table_by_sender_and_ccode/:c_code/:sender', (req, res)=>{
    let sql = `SELECT * FROM one_to_one WHERE college_code='${req.params.c_code}' AND sender='${req.params.sender}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

// Read row one to one chat table by c_code
app.get('/read_one_to_one_table_by_ccode/:c_code', (req, res)=>{
    let sql = `SELECT * FROM one_to_one WHERE college_code='${req.params.c_code}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

// ------||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Students table
/*
CREATE TABLE students  (sno INT PRIMARY KEY AUTO_INCREMENT NOT NULL,college_code VARCHAR(40) NOT NULL DEFAULT 'NULL',roll_number  BIGINT NOT NULL,name  VARCHAR(50) NOT NULL DEFAULT 'null ',password  VARCHAR(20) NOT NULL DEFAULT 'NULL ',standard  VARCHAR(20) NOT NULL DEFAULT 'null',contact_number BIGINT NOT NULL,gender  VARCHAR(10) NOT NULL DEFAULT 'null ',parents_name VARCHAR(20) NOT NULL DEFAULT 'null',parents_contact BIGINT NOT NULL,address  VARCHAR(100) NOT NULL DEFAULT 'null ',performance  VARCHAR(100) NOT NULL DEFAULT 'null ',attendence  VARCHAR(20) NOT NULL ,total_fee INT NOT NULL,fee_due INT NOT NULL,tution_fee INT NOT NULL,hostel_fee INT NOT NULL ,bus_fee INT NOT NULL,canteen_due INT NOT NULL);
INSERT INTO students VALUES(1,'C-123',456789,'students NAME','password','standard',567895678,'gender','parents_name',678956789,'address','performance','attendence',567893,23456,12345,12345,1234,1234);

SELECT  * FROM students;
UPDATE students SET name='NEW NAME ', standard='NEW standard',contact_number=2345,gender='NEW gender',parents_name='NEW NAME',parents_contact=34567,address='NEW address',performance='NEW performance',attendence='NEW attendence',total_fee=234,fee_due=45,tution_fee=1234,hostel_fee=12345,bus_fee=2345,canteen_due=234 WHERE college_code='C-123' AND roll_number=456789;
 
SELECT * FROM students;

DELETE FROM students WHERE college_code='C-123' AND roll_number=456789;

SELECT * FROM students WHERE college_code='C-123';
SELECT*FROM students WHERE roll_number=456789;
*/

// create students chat table
app.get('/create_students_table', (req, res)=>{
    let sql = `CREATE TABLE students  (sno INT PRIMARY KEY AUTO_INCREMENT NOT NULL,college_code VARCHAR(40) NOT NULL DEFAULT 'NULL',roll_number  BIGINT NOT NULL,name  VARCHAR(50) NOT NULL DEFAULT 'null ',password  VARCHAR(20) NOT NULL DEFAULT 'NULL ',standard  VARCHAR(20) NOT NULL DEFAULT 'null',contact_number BIGINT NOT NULL,gender  VARCHAR(10) NOT NULL DEFAULT 'null ',parents_name VARCHAR(20) NOT NULL DEFAULT 'null',parents_contact BIGINT NOT NULL,address  VARCHAR(100) NOT NULL DEFAULT 'null ',performance  VARCHAR(100) NOT NULL DEFAULT 'null ',attendence  VARCHAR(20) NOT NULL ,total_fee INT NOT NULL,fee_due INT NOT NULL,tution_fee INT NOT NULL,hostel_fee INT NOT NULL ,bus_fee INT NOT NULL,canteen_due INT NOT NULL)`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("students table created...");
    });
});
// sno	college_code	roll_number	name	password	standard	contact_number	gender	parents_name	parents_contact	address	performance	attendence	total_fee	fee_due	tution_fee	hostel_fee	bus_fee	canteen_due	
// add row students table
app.get('/add_row_students_table/:c_code/:rno/:name/:pass/:std/:cno/:gend/:p_name/:p_contact/:address/:performance/:attendance/:total_fee/:fee_due/:t_fee/:h_fee/:b_fee/:c_due', (req, res)=>{                                                                                                                      ///:total_fee/:fee_due/:t_fee/:h_fee/:b_fee/c_due                                                     
    let sql = `INSERT INTO students VALUES(sno,'${req.params.c_code}',${req.params.rno},'${req.params.name}','${req.params.pass}','${req.params.std}',${req.params.cno},'${req.params.gend}','${req.params.p_name}',${req.params.p_contact},'${req.params.address}','${req.params.performance}','${req.params.attendance}',${req.params.total_fee},${req.params.fee_due},${req.params.t_fee},${req.params.h_fee},${req.params.b_fee},${req.params.c_due});`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("row added in students table...");
    });
});

// UPDATE students SET name='NEW NAME ', standard='NEW standard',contact_number=2345,gender='NEW gender',parents_name='NEW NAME',parents_contact=34567,address='NEW address',performance='NEW performance',attendence='NEW attendence',total_fee=234,fee_due=45,tution_fee=1234,hostel_fee=12345,bus_fee=2345,canteen_due=234 WHERE college_code='C-123' AND roll_number=456789;

app.get('/update_row_students_table/:c_code/:rno/:name/:pass/:std/:cno/:gend/:p_name/:p_contact/:address/:performance/:attendance/:total_fee/:fee_due/:t_fee/:h_fee/:b_fee/:c_due', (req, res)=>{                                                                                                                      ///:total_fee/:fee_due/:t_fee/:h_fee/:b_fee/c_due                                                     
    let sql = `UPDATE students SET name='${req.params.name}', standard='${req.params.std}',contact_number=${req.params.cno},gender='${req.params.gend}',parents_name='${req.params.p_name}',parents_contact=${req.params.p_contact},address='${req.params.address}',performance='${req.params.performance}',attendence='${req.params.attendance}',total_fee=${req.params.total_fee},fee_due=${req.params.fee_due},tution_fee=${req.params.t_fee},hostel_fee=${req.params.h_fee},bus_fee=${req.params.b_fee},canteen_due=${req.params.c_due} WHERE college_code='${req.params.c_code}' AND roll_number=${req.params.rno}`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("row updated in students table...");
    });
});

// update row password students table
// UPDATE students SET name='NEW NAME ', standard='NEW standard',contact_number=2345,gender='NEW gender',parents_name='NEW NAME',parents_contact=34567,address='NEW address',performance='NEW performance',attendence='NEW attendence',total_fee=234,fee_due=45,tution_fee=1234,hostel_fee=12345,bus_fee=2345,canteen_due=234 WHERE college_code='C-123' AND roll_number=456789;

app.get('/update_row_pass_students_table/:c_code/:rno/:pass', (req, res)=>{                                                                                                                      ///:total_fee/:fee_due/:t_fee/:h_fee/:b_fee/c_due                                                     
    let sql = `UPDATE students SET password='${req.params.pass}' WHERE college_code='${req.params.c_code}' AND roll_number=${req.params.rno}`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("row password updated in students table...");
    });
});

// delete row from student table
app.get('/delete_row_students_table/:c_code/:rno', (req, res)=>{
    let sql = `DELETE FROM students WHERE college_code='${req.params.c_code}' AND roll_number=${req.params.rno};`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("students table created...");
    });
});

// read row from student table by c_code
app.get('/read_row_students_table_by_ccode/:c_code', (req, res)=>{
    let sql = `SELECT * FROM students WHERE college_code='${req.params.c_code}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

// read row from student table by c_code and rno
app.get('/read_row_students_table_by_ccode_and_rno/:c_code/:rno', (req, res)=>{
    let sql = `SELECT * FROM students WHERE college_code='${req.params.c_code}' AND roll_number=${req.params.rno};`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

// ------||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Parents table
/*
CREATE TABLE parents (sno INT PRIMARY KEY AUTO_INCREMENT NOT NULL,college_code VARCHAR(20) NOT NULL DEFAULT 'NULL ',name VARCHAR(50) NOT NULL DEFAULT 'NULL ',password  VARCHAR(30) NOT NULL DEFAULT 'NULL',roll_no BIGINT NOT NULL,child_name VARCHAR(50) NOT NULL,contact BIGINT NOT NULL ,email VARCHAR(30) NOT NULL DEFAULT 'NULL ',total_fee INT NOT NULL,fee_due INT NOT NULL,tution_fee INT NOT NULL,hostel_fee INT NOT NULL,bus_fee INT NOT NULL,canteen_due INT NOT NULL);

INSERT INTO parents VALUES(1,'C123','PARENT NAME','PARENT PASSWORD',1234567,'child_name',9876543,'EMAIL@EMAIL.COM',12342,123,12234,12345,1234553,122342);

SELECT * FROM parents;

UPDATE parents SET name='NEW NAME ',roll_no= 1235343,child_name='NEW child_name',contact=8982922423,email='NEW EMAIL@EMAIL.COM',total_fee=654,fee_due=8765,tution_fee=0987,hostel_fee=654,bus_fee=8765,canteen_due=8654 WHERE college_code='C123' AND roll_no=1234567;
SELECT * FROM parents;
UPDATE parents SET password='NEW password' WHERE college_code='C123' AND roll_no=1234567;
SELECT * FROM parents;
DELETE FROM parents WHERE college_code='C123' AND roll_no=1234567;
SELECT * FROM parents WHERE college_code='C123';
*/
// create parents chat table
app.get('/create_parents_table', (req, res)=>{
    let sql = `CREATE TABLE parents (sno INT PRIMARY KEY AUTO_INCREMENT NOT NULL,college_code VARCHAR(20) NOT NULL DEFAULT 'NULL ',name VARCHAR(50) NOT NULL DEFAULT 'NULL ',password  VARCHAR(30) NOT NULL DEFAULT 'NULL',roll_no BIGINT NOT NULL,child_name VARCHAR(50) NOT NULL,contact BIGINT NOT NULL ,email VARCHAR(30) NOT NULL DEFAULT 'NULL ',total_fee INT NOT NULL,fee_due INT NOT NULL,tution_fee INT NOT NULL,hostel_fee INT NOT NULL,bus_fee INT NOT NULL,canteen_due INT NOT NULL);`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("parents table created...");
    });
});

// -----------	sno.	college_code.	name.	password.	roll_no.	child_name.	contact.	email.	total_fee.	fee_due.	tution_fee.	hostel_fee.	bus_fee.	canteen_due	
// add row parent table
app.get('/add_row_parents_table/:c_code/:rno/:name/:pass/:c_name/:contact/:email/:total_fee/:fee_due/:t_fee/:h_fee/:b_fee/:c_due', (req, res)=>{                                                                                                                                                                          
    let sql = `INSERT INTO parents VALUES(sno,'${req.params.c_code}','${req.params.name}','${req.params.pass}',${req.params.rno},'${req.params.c_name}',${req.params.contact},'${req.params.email}',${req.params.total_fee},${req.params.fee_due},${req.params.t_fee},${req.params.h_fee},${req.params.b_fee},${req.params.c_due});`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("row added in parents table...");
    });
});

// update row parent table
app.get('/update_row_parents_table/:c_code/:rno/:name/:pass/:c_name/:contact/:email/:total_fee/:fee_due/:t_fee/:h_fee/:b_fee/:c_due', (req, res)=>{                                                                                                                                                                          
    let sql = `UPDATE parents SET name='${req.params.name}',roll_no= ${req.params.rno},child_name='${req.params.c_name}',contact=${req.params.contact},email='${req.params.email}',total_fee=${req.params.total_fee},fee_due=${req.params.fee_due},tution_fee=${req.params.t_fee},hostel_fee=${req.params.h_fee},bus_fee=${req.params.b_fee},canteen_due=${req.params.c_due} WHERE college_code='${req.params.c_code}' AND roll_no=${req.params.rno};`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("row updated in parents table...");
    });
});

// update row password parents table
app.get('/update_row_pass_parents_table/:c_code/:rno/:pass', (req, res)=>{                                                                                                                      ///:total_fee/:fee_due/:t_fee/:h_fee/:b_fee/c_due                                                     
    let sql = `UPDATE parents SET password='${req.params.pass}' WHERE college_code='${req.params.c_code}' AND roll_no=${req.params.rno}`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("row password updated in parents table...");
    });
});

// delete row parents table
app.get('/delete_row_pass_parents_table/:c_code/:rno', (req, res)=>{                                                                                                                      ///:total_fee/:fee_due/:t_fee/:h_fee/:b_fee/c_due                                                     
    let sql = `DELETE FROM parents WHERE college_code='${req.params.c_code}' AND roll_no=${req.params.rno}`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("row deleted in parents table...");
    });
});

// read row parents table by c_code
app.get('/read_row_pass_parents_table_by_ccode/:c_code', (req, res)=>{                                                                                                                      ///:total_fee/:fee_due/:t_fee/:h_fee/:b_fee/c_due                                                     
    let sql = `SELECT * FROM parents WHERE college_code='${req.params.c_code}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

// read row parents table by c_code and r_no
app.get('/read_row_pass_parents_table_by_ccode_and_rno/:c_code/:rno', (req, res)=>{                                                                                                                      ///:total_fee/:fee_due/:t_fee/:h_fee/:b_fee/c_due                                                     
    let sql = `SELECT * FROM parents WHERE college_code='${req.params.c_code}' AND roll_no=${req.params.rno}`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});


/*
CREATE TABLE teachers (sno INT PRIMARY KEY AUTO_INCREMENT ,college_code VARCHAR(40) NOT NULL DEFAULT'NULL',faculty_id VARCHAR(20)  NOT NULL DEFAULT'NULL',name VARCHAR(40) DEFAULT'NULL',password  VARCHAR(20) DEFAULT'NULL ',contact INT ,address  VARCHAR(100) NOT NULL DEFAULT'NULL',email VARCHAR(20),branch VARCHAR(10),performance VARCHAR(500),salary INT,attendence  VARCHAR(20) DEFAULT'NULL ',mess_fee INT ,canteen_due INT );

INSERT INTO teachers VALUES (1,'123','F123','PARAMETER','PASSWORD',123456789,'ADDRESS','EMAIL@EMAIL.COM','branch','performance',12345,'100/120',123,123454);

SELECT * FROM teachers;

UPDATE teachers SET name='NEW NAME',contact=123,address='NEW address', email='NEW email',branch='NEW BRANCH',performance='NEW performance',salary= 123467,attendence='NEW attendence',mess_fee=12,canteen_due=12 WHERE faculty_id='F123' AND college_code=123;

SELECT * FROM teachers;

UPDATE teachers SET password='NEW password' WHERE faculty_id='F123' AND college_code='123';

DELETE FROM teachers WHERE faculty_id='F123' AND college_code='123';
SELECT * FROM teachers WHERE faculty_id='F123' AND college_code='123';
SELECT * FROM teachers WHERE faculty_id='F123';
SELECT * FROM teachers WHERE college_code= '123';
*/
// ------||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Teachers table
// create teachers table
app.get('/create_teachers_table', (req, res)=>{
    let sql = `CREATE TABLE teachers (sno INT PRIMARY KEY AUTO_INCREMENT ,college_code VARCHAR(40) NOT NULL DEFAULT'NULL',faculty_id VARCHAR(20)  NOT NULL DEFAULT'NULL',name VARCHAR(40) DEFAULT'NULL',password  VARCHAR(20) DEFAULT'NULL ',contact INT ,address  VARCHAR(100) NOT NULL DEFAULT'NULL',email VARCHAR(20),branch VARCHAR(10),performance VARCHAR(500),salary INT,attendence  VARCHAR(20) DEFAULT'NULL ',mess_fee INT ,canteen_due INT );`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("teachers table created...");
    });
});

// sno	college_code	faculty_id	name	password	contact	address	email	branch	performance	salary	attendence	mess_fee	canteen_due	
// add row teachers table
app.get('/add_row_teachers_table/:c_code/:fid/:name/:pass/:contact/:address/:email/:branch/:performance/:salary/:attendance/:m_fee/:c_due', (req, res)=>{                                                                                                                                                                          
    let sql = `INSERT INTO teachers VALUES (sno,'${req.params.c_code}','${req.params.fid}','${req.params.name}','${req.params.pass}',${req.params.contact},'${req.params.address}','${req.params.email}','${req.params.branch}','${req.params.performance}',${req.params.salary},'${req.params.attendance}',${req.params.m_fee},${req.params.c_due});`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("row added in teachers table...");
    });
});

// update row teachers table
// UPDATE teachers SET name='${req.params.name}',contact=${req.params.contact},address='${req.params.address}', email='${req.params.email}',branch='${req.params.branch}',performance='${req.params.performance}',salary=${req.params.salary},attendence='${req.params.attendance}',mess_fee=${req.params.m_fee},canteen_due=${req.params.c_due} WHERE faculty_id='${req.params.fid}' AND college_code=${req.params.c_code};

app.get('/update_row_teachers_table/:c_code/:fid/:name/:contact/:address/:email/:branch/:performance/:salary/:attendance/:m_fee/:c_due', (req, res)=>{                                                                                                                                                                          
    let sql = `UPDATE teachers SET name='${req.params.name}',contact=${req.params.contact},address='${req.params.address}', email='${req.params.email}',branch='${req.params.branch}',performance='${req.params.performance}',salary=${req.params.salary},attendence='${req.params.attendance}',mess_fee=${req.params.m_fee},canteen_due=${req.params.c_due} WHERE faculty_id='${req.params.fid}' AND college_code='${req.params.c_code}';`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("row updated in teachers table...");
    });
});

// update row password teachers table
app.get('/update_row_pass_teachers_table/:c_code/:fid/:pass', (req, res)=>{                                                                                                                      ///:total_fee/:fee_due/:t_fee/:h_fee/:b_fee/c_due                                                     
    let sql = `UPDATE teachers SET password='${req.params.pass}' WHERE faculty_id='${req.params.fid}' AND college_code='${req.params.c_code}';`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("row password updated in teachers table...");
    });
});

// delete row teachers table
app.get('/delete_row_teachers_table/:c_code/:fid', (req, res)=>{                                                                                                                      ///:total_fee/:fee_due/:t_fee/:h_fee/:b_fee/c_due                                                     
    let sql = `DELETE FROM teachers WHERE faculty_id='${req.params.fid}' AND college_code='${req.params.c_code}';`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("row deleted in teachers table...");
    });
});

// read row teachers table by c_code
app.get('/read_row_teachers_table_by_ccode/:c_code', (req, res)=>{                                                                                                                      ///:total_fee/:fee_due/:t_fee/:h_fee/:b_fee/c_due                                                     
    let sql = `SELECT * FROM teachers WHERE college_code='${req.params.c_code}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

// read row teachers table by c_code and fid
app.get('/read_row_teachers_table_by_ccode_and_fid/:c_code/:fid', (req, res)=>{                                                                                                                      ///:total_fee/:fee_due/:t_fee/:h_fee/:b_fee/c_due                                                     
    let sql = `SELECT * FROM teachers WHERE faculty_id='${req.params.fid}' AND college_code='${req.params.c_code}';`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

// ------||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Timetable table
/*
CREATE TABLE time_table (sno INT PRIMARY KEY AUTO_INCREMENT NOT NULL,college_code VARCHAR(20) NOT NULL DEFAULT 'Null',time VARCHAR(10) NOT NULL DEFAULT 'NULL',Monday  VARCHAR(20) NOT NULL DEFAULT 'NULL',Tuesday  VARCHAR(20) NOT NULL DEFAULT 'NULL ',Wednesday  VARCHAR(20) NOT NULL DEFAULT 'NULL ',thrusday  VARCHAR(20) NOT NULL DEFAULT 'NULL',FRIDAY  VARCHAR(20) NOT NULL DEFAULT 'NULL',Saturday  VARCHAR(20) NOT NULL DEFAULT 'NULL');
INSERT INTO time_table VALUES(1,'C-123','9.00','ENGLISH','HINDI','MATHS','SST','FRIDAY','Saturday');
SELECT * FROM time_table;
UPDATE time_table SET Monday='NEW SUBJECT',Tuesday='NEW SUBJECT',Wednesday='NEW SUBJECT',thrusday='NEW SUBJECT',FRIDAY='NEW SUBJECT',Saturday='NEW SUBJECT' WHERE college_code='C-123' AND time='9.00';
SELECT * FROM time_table;
SELECT * FROM time_table WHERE college_code='C-123';
SELECT * FROM time_table WHERE college_code='C-123' AND time='9.00';
*/

// Create table 
// create teachers chat table
app.get('/create_time_table_table', (req, res)=>{
    let sql = `CREATE TABLE time_table (sno INT PRIMARY KEY AUTO_INCREMENT NOT NULL, belongs_to VARCHAR(20) NOT NULL DEFAULT 'Null',college_code VARCHAR(20) NOT NULL DEFAULT 'Null',time VARCHAR(10) NOT NULL DEFAULT 'NULL',Monday  VARCHAR(20) NOT NULL DEFAULT 'NULL',Tuesday  VARCHAR(20) NOT NULL DEFAULT 'NULL ',Wednesday  VARCHAR(20) NOT NULL DEFAULT 'NULL ',thrusday  VARCHAR(20) NOT NULL DEFAULT 'NULL',FRIDAY  VARCHAR(20) NOT NULL DEFAULT 'NULL',Saturday  VARCHAR(20) NOT NULL DEFAULT 'NULL');`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("time_table table created...");
    });
});

// sno	college_code	time	Monday	Tuesday	Wednesday	thrusday	FRIDAY	Saturday	
// add row time_table table
app.get('/add_row_time_table_table/:c_code/:b_to/:time/:mday/:tueday/:wedday/:thuday/:friday/:satday', (req, res)=>{                                                                                                                                                                          
    let sql = `INSERT INTO time_table VALUES(sno,'${req.params.b_to}','${req.params.c_code}','${req.params.time}','${req.params.mday}','${req.params.tueday}','${req.params.wedday}','${req.params.thuday}','${req.params.friday}','${req.params.satday}');`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("row added in time_table table...");
    });
});

// Update row from time table table
// UPDATE time_table SET Monday='${req.params.mday}',Tuesday='${req.params.tueday}',Wednesday='${req.params.wedday}',thrusday='${req.params.thuday}',FRIDAY='${req.params.friday}',Saturday='${req.params.satday}' WHERE college_code='${req.params.c_code}' AND time='${req.params.time}';
app.get('/update_row_time_table_table/:c_code/:b_to/:time/:mday/:tueday/:wedday/:thuday/:friday/:satday', (req, res)=>{                                                                                                                                                                          
    let sql = `UPDATE time_table SET Monday='${req.params.mday}',Tuesday='${req.params.tueday}',Wednesday='${req.params.wedday}',thrusday='${req.params.thuday}',FRIDAY='${req.params.friday}',Saturday='${req.params.satday}' WHERE college_code='${req.params.c_code}' AND belongs_to='${req.params.b_to}' AND time='${req.params.time}';`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("row updated in time_table table...");
    });
});

// Delete row from time table table
app.get('/delete_row_time_table_table/:c_code/:b_to/:time', (req, res)=>{                                                                                                                                                                          
    let sql = `DELETE FROM time_table WHERE college_code='${req.params.c_code}' AND belongs_to='${req.params.b_to}' AND time='${req.params.time}';`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("row deleted in time_table table...");
    });
});

// Read row from time table table by c_code and time
app.get('/read_row_time_table_table_by_ccode_and_time/:c_code/:b_to/:time', (req, res)=>{                                                                                                                                                                          
    let sql = `SELECT * FROM time_table WHERE college_code='${req.params.c_code}' AND belongs_to='${req.params.b_to}' AND time='${req.params.time}';`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

// Read row from time table table by c_code
app.get('/read_row_time_table_table_by_ccode/:c_code', (req, res)=>{                                                                                                                                                                          
    let sql = `SELECT * FROM time_table WHERE college_code='${req.params.c_code}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

// Read row from time table table by c_code and belongs_to
app.get('/read_row_time_table_table_by_ccode/:c_code/:b_to', (req, res)=>{                                                                                                                                                                          
    let sql = `SELECT * FROM time_table WHERE college_code='${req.params.c_code}' AND belongs_to='${req.params.b_to}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

// --------------------------------------Aasish
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||Institute Table
// Institute Create 
app.get('/create_institute',(req,res)=>{
    let sql=`CREATE TABLE institute( sno INT PRIMARY KEY, college_code VARCHAR(10)   NULL,name VARCHAR(50) NOT NULL DEFAULT'null', address VARCHAR(255) DEFAULT'null',college_email VARCHAR(30) DEFAULT'null',principal_name VARCHAR(30) DEFAULT'null',principal_contact INT(10) ,principal_email VARCHAR(30) DEFAULT'null',city VARCHAR(20) DEFAULT'null',state VARCHAR(40) DEFAULT'null',password VARCHAR(20) DEFAULT'null')`;
    db.query(sql,(error,result)=>{
        if(error)throw error;
        console.log(result);
        res.send('Institute created....');
    });
});

// Institute add
app.get('/add_institute/:sno/:c_code/:name/:address/:c_email/:p_name/:p_contact/:p_email/:city/:state/:pass',(req,res)=>{
    let sql=`INSERT INTO institute VALUES(${req.params.sno},'${req.params.c_code}','${req.params.name}','${req.params.address}','${req.params.c_email}','${req.params.p_name}',${req.params.p_contact},'${req.params.p_email}','${req.params.city}','${req.params.state}','${req.params.pass}')`;
    db.query(sql,(error,result)=>{
        if(error)console.log(error.message);
        console.log(result);
        res.status(200).send("Institute Added");
    });
});

// Poko
app.get('/sql_dummy',(req,res)=>{
  let sql=  `DESC institute;`;
    
    let query=db.query(sql,(error,result)=>{
     if (error) {
            console.log(error.message);
        };
        console.log(result);
        res.send(result);
    });
});

// delete instutie
app.get('/deleteinstitute/:c_code',(req,res)=>{
    let newTitle='delete institute';
    let sql =`delete FROM institute WHERE college_code = '${req.params.c_code}'`; 
    let query=db.query(sql,(error,result)=>{
     if (error){
            console.log(error.message);
        };
        console.log(result);
        res.send('deleted institute');
    });
});
//updat pass
app.get('/updateinstitutepassword/:c_code/:pass',(req,res)=>{
    let newTitle='update Title';
    let sql = `UPDATE institute SET password='${req.params.pass}' WHERE college_code='${req.params.c_code}';`
    // let sql =`UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`; 
    let query=db.query(sql,(error,result)=>{
     if (error){
            console.log(error.message);
        };
        console.log(result);
        res.send('udated password');
    });
});

//update  institute profile
app.get('/updateinstituteprofile/:c_code/:name/:adress/:c_email/:p_name/:p_contact/:p_email/:city/:state',(req,res)=>{
    let newTitle='update Title';
  let sql=  `UPDATE institute SET name= '${req.params.name}',address='${req.params.adress}',college_email='${req.params.c_email}',principal_name='${req.params.p_name}',principal_contact=${req.params.p_contact},principal_email='${req.params.p_email}',city='${req.params.city}' , state='${req.params.state}' where college_code='${req.params.c_code}'`;
    
    let query=db.query(sql,(error,result)=>{
     if (error){
        console.log(error.message);
     };
        console.log(result);
        res.send('udated profile');
    });
});

//institute_read
app.get('/read_institute',(req,res)=>{
    let sql= `SELECT * FROM institute`; 
    let query=db.query(sql,(error,result)=>{
     if (error){
        console.log(error.message);
     };
        console.log(result);
        res.json(result);
    });
});

//institute college code fetching
app.get('/read_institute_fetch_c_code/:c_code',(req,res)=>{
    let sql= `select * FROM institute WHERE college_code='${req.params.c_code}'`; 
    let query=db.query(sql,(error,result)=>{
     if (error){
        console.log(error.message);
     };
        console.log(result);
        res.json(result);
    });
});

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||Notice Table
//create notice table
app.get('/create_notice',(req,res)=>{
    let sql = `CREATE TABLE notice  (sno INT PRIMARY KEY AUTO_INCREMENT NOT NULL,notice  VARCHAR(500) NOT NULL DEFAULT 'NULL ',notice_date DATE NOT NULL,notice_publisher VARCHAR(255) NOT NULL DEFAULT 'NULL ',college_code VARCHAR(40) NOT NULL DEFAULT 'NULL')`;
      db.query(sql,(error,result)=>{
          if(error){
            console.log(error.message);
         };
          console.log(result);
          res.send('notice created....');
      });
  });
  
  //add noitice
  app.get('/add_notice/:c_code/:c_notice/:date/:n_public',(req,res)=>{
      let sql = `INSERT INTO notice VALUES(sno,'${req.params.c_notice}','${req.params.date}','${req.params.n_public}','${req.params.c_code}');`
      let sqlDesc = 'SELECT * FROM institute'
      let tableDesc = "desc"
      db.query(sqlDesc, (err, result)=>{
          if(err) throw err;
          tableDesc = result;
      });
      db.query(sql,(error,result)=>{
          if(error){
            console.log(error.message);
         };
          console.log(result);
          res.json(tableDesc);
      });
  });
  //Read Notice from college code 
  app.get('/read_notice_ccode/:c_code',(req,res)=>{
      let sql= `SELECT * FROM notice  WHERE  college_code='${req.params.c_code}'`; 
      let query=db.query(sql,(error,result)=>{
       if (error){
        console.log(error.message);
        };
          console.log(result);
          res.json(result);
      });
  });
  //Delete Notice from college code 
  app.get('/delete_notice_ccode/:c_code/:sno',(req,res)=>{
      let sql= `DELETE FROM notice WHERE sno=${req.params.sno} AND college_code='${req.params.c_code}'`; 
      let query=db.query(sql,(error,result)=>{
       if (error){
            console.log(error.message);
        };
          console.log(result);
          res.send('Notice Deleted...');
      });
  });
  

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||Student Account
  
// create table Student Account 
app.get('/create_student_account',(req,res)=>{
    let sql= `CREATE TABLE students_account (sno INT PRIMARY KEY AUTO_INCREMENT NOT NULL,college_code VARCHAR(40) NOT NULL DEFAULT 'NULL',roll_no BIGINT NOT NULL,totall_fee INT NOT NULL,fee_due INT NOT NULL,tution_fee INT NOT NULL,bus_fee INT NOT NULL,hostel_fee INT NOT NULL ,canteen_due INT NOT NULL )`; 
    let query=db.query(sql,(error,result)=>{
     if (error){
        console.log(error.message);
    };
        console.log(result);
        res.send('Student Account Created...');
    });
});

// add row Student Account 
app.get('/add_student_account/:c_code/:rno/:total_fee/:fee_due/:tution_fee/:bus_fee/:hostel_fee/:canteen_due',(req,res)=>{
    let sql= `INSERT INTO students_account VALUES(sno,'${req.params.c_code}',${req.params.rno},${req.params.total_fee},${req.params.fee_due},${req.params.tution_fee},${req.params.bus_fee},${req.params.hostel_fee},${req.params.canteen_due});`; 
    let query=db.query(sql,(error,result)=>{
     if (error){
        console.log(error.message);
    };
        console.log(result);
        res.send('Student Account Added...');
    });
});

// update row Student Account 
app.get('/update_student_account/:c_code/:rno/:total_fee/:fee_due/:tution_fee/:bus_fee/:hostel_fee/:canteen_due',(req,res)=>{
    let sql= `UPDATE students_account SET totall_fee=${req.params.total_fee},fee_due=${req.params.fee_due},tution_fee=${req.params.tution_fee},bus_fee=${req.params.bus_fee},hostel_fee=${req.params.hostel_fee},canteen_due=${req.params.canteen_due} WHERE college_code='${req.params.c_code}' AND roll_no=${req.params.rno}`; 
    let query=db.query(sql,(error,result)=>{
     if (error){
        console.log(error.message);
    };
        console.log(result);
        res.send('Student Account Updated...');
    });
});

// Delete row Student Account 

app.get('/delete_student_account/:c_code/:rno',(req,res)=>{
    let sql= `DELETE FROM students_account WHERE college_code='${req.params.c_code}' AND roll_no=${req.params.rno}`; 
    let query=db.query(sql,(error,result)=>{
     if (error){
        console.log(error.message);
    };
        console.log(result);
        res.send('Student Account Deleted...');
    });
});

// Read row Student Account by college code

app.get('/read_student_account_by_ccode/:c_code',(req,res)=>{
    let sql= `SELECT * FROM students_account WHERE  college_code='${req.params.c_code}';`; 
    let query=db.query(sql,(error,result)=>{
     if (error){
        console.log(error.message);
    };
        console.log(result);
        res.json(result);
    });
});

// Read row Student Account by college code and roll no.

app.get('/read_student_account_by_ccodeandrno/:c_code/:rno',(req,res)=>{
    let sql= `SELECT * FROM students_account WHERE  college_code='${req.params.c_code}'AND roll_no=${req.params.rno};`; 
    let query=db.query(sql,(error,result)=>{
     if (error){
        console.log(error.message);
    };
        console.log(result);
        res.json(result);
    });
});

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||Teacher Account


// create table accounts_teachers
app.get('/accounts_teachers',(req,res)=>{
    let sql=`CREATE TABLE accounts_teachers (sno INT AUTO_INCREMENT PRIMARY KEY NOT NULL,faculty_id VARCHAR(20) NOT NULL,college_code VARCHAR(40) NOT NULL DEFAULT 'NULL',payment  INT NOT NULL,payment_due INT NOT NULL,mess_fee INT NOT NULL,canteen_due INT NOT NULL);`;
    db.query(sql,(error,result)=>{
        if(error){
            console.log(error.message);
        };
        console.log(result);
        res.send('Teacher_account created....');
    });
});

// INSERTION accounts_teachers
app.get('/register_accounts_teachers/:c_code/:fid/:pay/:p_due/:m_fee/:c_due',(req,res)=>{
    let sql=`INSERT INTO accounts_teachers VALUES (sno,'${req.params.fid}','${req.params.c_code}',${req.params.pay},${req.params.p_due},${req.params.m_fee},${req.params.c_due})`;
    db.query(sql,(error,result)=>{
        if(error){
            console.log(error.message);
        };
        console.log(result);
        res.send('Teacher_account row added....');
    });
});


//Updation in accounts teachers by c_code
app.get('/update_accounts_teacher/:c_code/:pay/:p_due/:m_fee/:c_due',(req,res)=>{
    let sql=`UPDATE accounts_teachers SET payment=${req.params.pay},payment_due = ${req.params.p_due},mess_fee=${req.params.m_fee},canteen_due=${req.params.c_due} WHERE college_code='${req.params.c_code}';
    `;
    db.query(sql,(error,result)=>{
        if(error){
            console.log(error.message);
        };
        console.log(result);
        res.send(result);
    });
});

//Remove from account teachers
app.get('/remove_accountsteacher/:c_code/:fid',(req,res)=>{
    let sql=`DELETE FROM accounts_teachers WHERE college_code='${req.params.c_code}' AND faculty_id = '${req.params.fid}'`;
    db.query(sql,(error,result)=>{
        if(error){
            console.log(error.message);
        };
        console.log(result);
        res.send("Teacher Account Deleted");
    });
});

//Selection from account teachers using clg code and facultyid
app.get('/select_account_teachers_using_clgcode_and_fid/:c_code/:f_id',(req,res)=>{
    let sql=`SELECT * FROM accounts_teachers WHERE faculty_id='${req.params.f_id}' AND college_code='${req.params.c_code}';`;
    db.query(sql,(error,result)=>{
        if(error){
            console.log(error.message);
        };
        console.log(result);
        res.json(result);
    });
});

//Selection from account teachers using clg code
app.get('/select_account_teachers_using_clgcode/:c_code',(req,res)=>{
    let sql=`SELECT * FROM accounts_teachers WHERE college_code='${req.params.c_code}';`;
    db.query(sql,(error,result)=>{
        if(error){
            console.log(error.message);
        };
        console.log(result);
        res.json(result);
    });
});


//Updation in accounts teachers by c_code and fid
app.get('/update_accounts_teacher_by_ccode_fid/:c_code/:f_id/:pay/:p_due/:m_fee/:c_due',(req,res)=>{
    let sql=`UPDATE accounts_teachers SET payment=${req.params.pay},payment_due = ${req.params.p_due},mess_fee=${req.params.m_fee},canteen_due=${req.params.c_due} WHERE college_code='${req.params.c_code} AND faculty_id = ${req.params.f_id}');
    `;
    db.query(sql,(error,result)=>{
        if(error){
            console.log(error.message);
        };
        console.log(result);
        res.send(result);
    });
});


// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||About Table

// Create Table
app.get('/create_about_table',(req,res)=>{
    let sql= `CREATE TABLE about (sno INT PRIMARY KEY AUTO_INCREMENT,college_code VARCHAR(40) NOT NULL,hostel VARCHAR(500) NOT NULL DEFAULT'NULL',transport  VARCHAR(500) NOT NULL DEFAULT'NULL',canteen  VARCHAR(500) NOT NULL DEFAULT'NULL')`; 
    let query=db.query(sql,(error,result)=>{
     if (error){
        console.log(error.message);
    };
        console.log(result);
        res.send("About Table Created");
    });
});

// INSERT INTO about VALUES(1,'C-123','HOSTEL INFO','transport INFO','canteen INFO');
// Add Row in about table
app.get('/add_row_about_table/:c_code/:h_info/:t_info/:c_info',(req,res)=>{
    let sql= `INSERT INTO about VALUES(sno,'${req.params.c_code}','${req.params.h_info}','${req.params.t_info}','${req.params.c_info}')`; 
    let query=db.query(sql,(error,result)=>{
     if (error){
        console.log(error.message);
    };
        console.log(result);
        res.send("About Table Created");
    });
});

// Add Row in about table
// UPDATE about SET hostel='NEW INFO',transport='NEW INFO',canteen='NEW INFO' WHERE college_code='C-123';

app.get('/update_row_about_table_by_ccode/:c_code/:h_info/:t_info/:c_info',(req,res)=>{
    let sql= `UPDATE about SET hostel='${req.params.h_info}',transport='${req.params.t_info}',canteen='${req.params.c_info}' WHERE college_code='${req.params.c_code}'`; 
    let query=db.query(sql,(error,result)=>{
     if (error){
            console.log(error.message);
        };
        console.log(result);
        res.send("About Table Updated");
    });
});

// Delete Row in about table
app.get('/delete_row_about_table_by_ccode/:c_code',(req,res)=>{
    let sql= `DELETE FROM about WHERE college_code='${req.params.c_code}'`; 
    let query=db.query(sql,(error,result)=>{
     if (error){
            console.log(error.message);
        };
        console.log(result);
        res.send("About Table Row Deleted...");
    });
});

// Select Row in about table
app.get('/read_row_about_table_by_ccode/:c_code',(req,res)=>{
    let sql= `SELECT * FROM about WHERE college_code ='${req.params.c_code}'`; 
    let query=db.query(sql,(error,result)=>{
     if (error){
            console.log(error.message);
        };
        console.log(result);
        res.json(result);
    });
});

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||Suggestion box Table


// create suggestion table
app.get('/create_suggestion_table', (req, res)=>{
    let sql = `CREATE TABLE suggestion (sno INT PRIMARY KEY AUTO_INCREMENT NOT NULL,college_code VARCHAR(20) NOT NULL DEFAULT 'NULL ',sender  VARCHAR(20) NOT NULL DEFAULT 'NULL ', message  VARCHAR(500) NOT NULL DEFAULT 'NULL ')`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("suggestion table created...");
    });
});
// ----/
// sno 	college_code    sender	message		

// add row suggestion table
app.get('/add_row_suggestion_table/:c_code/:sender/:message', (req, res)=>{
    let sql = `INSERT INTO suggestion VALUES(sno,'${req.params.c_code}','${req.params.sender}','${req.params.message}');`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("suggestion table row added...");
    });
});

// delete row suggestion chat table
app.get('/delete_row_suggestion_table/:c_code/:sender', (req, res)=>{
    let sql = `DELETE FROM suggestion WHERE college_code='${req.params.c_code}' AND sender='${req.params.sender}';`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("suggestion table row deleted...");
    });
});

// Read row suggestion chat table by c_code and sender
app.get('/read_suggestion_table_by_sender_and_ccode/:c_code/:sender', (req, res)=>{
    let sql = `SELECT * FROM suggestion WHERE college_code='${req.params.c_code}' AND sender='${req.params.sender}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

// Read row suggestion chat table by c_code
app.get('/read_suggestion_table_by_ccode/:c_code', (req, res)=>{
    let sql = `SELECT * FROM suggestion WHERE college_code='${req.params.c_code}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||Complaint box Table


// create complaint table
app.get('/create_complaint_table', (req, res)=>{
    let sql = `CREATE TABLE complaint (sno INT PRIMARY KEY AUTO_INCREMENT NOT NULL,college_code VARCHAR(20) NOT NULL DEFAULT 'NULL ',sender  VARCHAR(20) NOT NULL DEFAULT 'NULL ', message  VARCHAR(500) NOT NULL DEFAULT 'NULL ')`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("complaint table created...");
    });
});
// ----/
// sno 	college_code    sender	message		

// add row complaint table
app.get('/add_row_complaint_table/:c_code/:sender/:message', (req, res)=>{
    let sql = `INSERT INTO complaint VALUES(sno,'${req.params.c_code}','${req.params.sender}','${req.params.message}');`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("complaint table row added...");
    });
});

// delete row complaint chat table
app.get('/delete_row_complaint_table/:c_code/:sender', (req, res)=>{
    let sql = `DELETE FROM complaint WHERE college_code='${req.params.c_code}' AND sender='${req.params.sender}';`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("complaint table row deleted...");
    });
});

// Read row complaint chat table by c_code and sender
app.get('/read_complaint_table_by_sender_and_ccode/:c_code/:sender', (req, res)=>{
    let sql = `SELECT * FROM complaint WHERE college_code='${req.params.c_code}' AND sender='${req.params.sender}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

// Read row complaint chat table by c_code
app.get('/read_complaint_table_by_ccode/:c_code', (req, res)=>{
    let sql = `SELECT * FROM complaint WHERE college_code='${req.params.c_code}'`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
});

// ----------------------------------------------------------------------







app.listen(port, ()=>{
    console.log(`Server Running on port ${port}`);
})