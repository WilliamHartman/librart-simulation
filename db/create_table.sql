create table simusers(
    user_id serial primary key,
    username text,
    password text 
)

-- You have to choose the correct data type depending on what type 
-- of data you want to have in that column. User_id should be 
-- serial so it auto increments. Username should be text or 
-- varchar so it can save strings. Integer is for whole numbers, 
-- float or double is for numbers with decimals. 