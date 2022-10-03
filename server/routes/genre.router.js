const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/all', (req, res) => {
  // Add query to get all genres
  const query = `SELECT * FROM genres ORDER BY "id" ASC;`;
  pool.query(query)
  .then ((result) => {
    res.send(result.rows);
  }).catch((error) =>{
    console.log('error in router GET all', error);
    res.sendStatus(500);
  });
  });
//GET BY ID
router.get('/:movie_id', (req, res) => {
  const movieId = req.params.movie_id;
  console.log('Movie ID for genre', movieId);
  const query = `SELECT "name" FROM "movies" 
  JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movie_id"
  JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
  WHERE "movies"."id" = $1;`
  pool.query(query, [movieId])
  .then ((result) => {
    res.send(result.rows);
  }).catch((error) => {
      console.log('Error in get by id router', error);
      res.sendStatus(500);
  })
}
)

module.exports = router;