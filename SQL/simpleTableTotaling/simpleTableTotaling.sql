SELECT
    RANK () OVER ( 
            ORDER BY SUM(points) DESC
        ) rank,
    (CASE 
        WHEN clan = '' THEN '[no clan specified]' 
        ELSE clan 
    END),
    SUM(points) AS total_points,
    COUNT(name) AS total_people
FROM people
GROUP BY clan, name
ORDER BY total_points DESC