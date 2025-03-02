-- Insert sample data into the products table
INSERT INTO
  products (
    id,
    created_at,
    name,
    description,
    image_url,
    brand,
    category,
    price,
    discounted_price,
    rating
  )
VALUES
  (
    'a7e8c9d0-1b2a-4b3c-9d4e-5f6a7b8c9d01',
    NOW (),
    'Nike Air Max 1',
    'The Nike Air Max 1 redefined running shoes with visible Air-Sole unit.',
    'https://example.com/airmax1.jpg',
    'Nike',
    'Running',
    120.00,
    100.00,
    4.5
  ),
  (
    'b8f9d0e1-2c3b-4d4e-8e5f-7a8b9c0d1e23',
    NOW (),
    'Adidas Ultraboost',
    'The Adidas Ultraboost provides ultimate comfort and responsiveness.',
    'https://example.com/ultraboost.jpg',
    'Adidas',
    'Running',
    180.00,
    150.00,
    4.8
  ),
  (
    'c9d0e1f2-3d4c-4e5f-9f7a-8b9c0d1e2f34',
    NOW (),
    'New Balance 990',
    'The New Balance 990 offers a blend of cushioning and stability.',
    'https://example.com/nb990.jpg',
    'New Balance',
    'Casual',
    170.00,
    140.00,
    4.2
  );
