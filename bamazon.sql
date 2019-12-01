DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES
    ("Pencil", "School Supplies", .30, 50),
    ("Paper", "School Supplies", .05, 100),
    ("Crayons", "School Supplies", 2.00, 5),
    ("Toe Socks", "Clothing", 1.5, 4),
    ("Plate", "Kitchen", 3.00, 6),
    ("Hanger", "Houseware", 1.20, 10),
    ("Vase", "Decor", 40, 1),
    ("Statue", "Decor", 900, 1),
    ("Lava Lamp Clock", "Houseware", 14.00, 3),
    ("Sweater", "Clothing", 4.00, 2)

