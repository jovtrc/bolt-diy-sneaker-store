-- Create the products table
CREATE TABLE
  products (
    id UUID PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW (),
    name VARCHAR (255) NOT NULL,
    description TEXT,
    image_url VARCHAR (255),
    brand VARCHAR (255),
    category VARCHAR (255),
    price DECIMAL (10, 2) NOT NULL,
    discounted_price DECIMAL (10, 2),
    rating DECIMAL (2, 1)
  );
