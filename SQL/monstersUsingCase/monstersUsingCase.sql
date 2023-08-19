SELECT 
  top_half.id, 
  heads, 
  legs, 
  arms, 
  tails, 
  (CASE
    WHEN heads > arms THEN 'BEAST'
    WHEN tails > legs THEN 'BEAST'
    WHEN heads > arms AND tails > legs THEN 'BEAST'
    ELSE 'WEIRDO'
  END) AS species
FROM top_half
JOIN bottom_half ON top_half.id = bottom_half.id
ORDER BY species