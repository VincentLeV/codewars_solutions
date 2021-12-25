SELECT people.id, people.name, COUNT(*) AS toy_count
FROM people
JOIN toys on toys.people_id = people.id
GROUP BY people.id, people.name