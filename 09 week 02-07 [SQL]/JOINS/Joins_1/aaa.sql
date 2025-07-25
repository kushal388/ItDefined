use test;

create table voters( 
id int auto_increment primary key ,
 Name varchar(255) ,  age int , 
check (age >18 ) );	

alter table voters add constraint voterscheck check (Age >= 18) ;

ALTER TABLE voters
ADD CONSTRAINT voterscheck CHECK (age > 18);


insert into voters (Name ,age ) values ( "kushal " , 25) ;

select * from voters;

insert into voters (Name ,age ) values ( "Rakesh " , 26) ;

insert into voters (Name ,age ) values ( "meghu2 " , 19) ;

insert into voters (Name ,age ) values ( "meghu3 " , 14) ;

-- check constriant is voilated bcz of  check;


