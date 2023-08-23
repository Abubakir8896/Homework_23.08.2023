create database sklad;

create table workers(
    id serial primary key not null,
    fullname varchar(32) not null,
    email text,
    password text
);

create table category(
    id serial primary key not null,
    name varchar(32)
);

create table product(
    id serial primary key not null,
    name varchar(64) not null,
    kg int,
    price int,
    category_id int,
    foreign key (category_id) references category(id)  on delete cascade
);

create table history(
    id serial primary key not null,
    workers_id int,
    product_id int,
    is_sell boolean default false,
    kg float,
    price float,
    created_at timestamp without time zone default now(),
    foreign key (workers_id) references workers(id) on delete cascade,
    foreign key (product_id) references product(id) on delete cascade
);

create table sell(
    id serial primary key not null,
    worker_id int,
    product_id int,
    kg int,
    price int
);

create table buy(
    id serial primary key not null,
    worker_id int,
    product_id int,
    kg int,
    price int
);