CREATE TABLE campaigns (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  status VARCHAR(10),
  clicks INT,
  cost NUMERIC(10,2),
  impressions INT
);

INSERT INTO campaigns (name, status, clicks, cost, impressions) VALUES
('Summer Sale', 'Active', 230, 1200.00, 5400),
('Winter Bonanza', 'Paused', 140, 850.00, 3200),
('Festive Offers', 'Active', 410, 1600.00, 8000),
('New Year Blast', 'Paused', 90, 600.00, 1500),
('Monsoon Deals', 'Active', 188, 740.00, 3600),
('Back to School', 'Active', 260, 1350.00, 6200),
('Black Friday Warmup', 'Paused', 125, 580.00, 2100),
('Diwali Combo', 'Active', 350, 1450.00, 7400),
('Christmas Delight', 'Paused', 195, 910.00, 3900),
('Budget Boosters', 'Active', 220, 1020.00, 5100);
