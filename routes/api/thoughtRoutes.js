const router = require('express').Router();

const {
  getThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController.js');

router.route('/')
.get(getThoughts)
.post(createThought);

router
  .route('/:userId')
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction);

module.exports = router;