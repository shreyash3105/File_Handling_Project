create schema `test`;

use `test`;

create table user (
	user_id int not null Primary Key AUTO_INCREMENT,
    first_name varchar(100),
    last_name varchar(100),
    email varchar(100),
    phone varchar(100),
    password varchar(100)
);

select * from user;

create table files (
	id int not null Primary Key AUTO_INCREMENT,
    unique_id varchar(100),
    image varchar(100),
    user_id int
);

select * from files;
