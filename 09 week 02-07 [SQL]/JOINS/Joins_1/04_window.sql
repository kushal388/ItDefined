use world;

select * from country;


select avg(Population) from country;

select * from Country where Population > (select avg(Population) from country);

select * from Country where Continent = 'Asia' and Population > (select avg(Population) from country);


select count(*) from city;

describe city;
describe country;
describe countrylanguage;



select count(*) from city where CountryCode = 'IND';

select count(*) as No_Of_Cities from city where CountryCode = 'IND';

select code, Name from country;

select code,name , (select count(*) from city where CountryCode = country.code ) as Num_of_cities from country;


select count(*) from countrylanguage;

select * from countrylanguage limit 15;

select * from countrylanguage where Language = 'ENGLISH' and IsOfficial = 'T';


select name as Country_name from country where code in (select  CountryCode from countrylanguage where Language = 'ENGLISH' and IsOfficial = 'T');


select  count(*) from country ;

select Name as Country_NAME , LifeExpectancy from country where LifeExpectancy = (select MAX(LifeExpectancy) from country );

-- rank()
desc country;
select Name , Continent , Population , rank () Over(order by Population DESC) as 'RANK' from country limit 10;

SELECT Name, Continent, Population,
       RANK() OVER (ORDER BY Population DESC) AS ranked,
       De
FROM country
LIMIT 10;


-- if multiple rank comes it will give 11335 (both top 2 have same so 11 -> 2 is skipeed starts from  3 3 (bcz again same values) then 4 will be skipeed 5 
-- so we use Dense_rank it wil 112334
-- ROW_NUMBER()  --> 12345 base don which occure first


SELECT 
  Name, 
  Continent, 
  Population,
  RANK()        OVER (ORDER BY Population DESC)       AS rankeed,
  DENSE_RANK()  OVER (ORDER BY Population DESC)       AS dense_ranked,
  ROW_NUMBER()  OVER (ORDER BY Population DESC)       AS row_num
FROM country
LIMIT 10;
