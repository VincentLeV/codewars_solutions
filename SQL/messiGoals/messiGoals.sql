SELECT SUM(la_liga_goals + copa_del_rey_goals + champions_league_goals) AS res
FROM goals
GROUP BY id
ORDER BY id