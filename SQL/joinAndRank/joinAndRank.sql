SELECT 
    people.id, 
    name, 
    COUNT(*) AS sale_count,
    RANK() OVER(ORDER BY COUNT(*) DESC) AS sale_rank
FROM people
JOIN sales ON sales.people_id = people.id
GROUP BY people.id, name