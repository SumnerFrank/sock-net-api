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

router.route('/:userId')
.post(createThought);

router
  .route('/:userId/:thoughtId')
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

router
    .route('/:thoughtId/reactions/:reactionId')
    .post(addReaction)

    router
    .route('/:thoughtId/reactions')
    .delete(removeReaction);

module.exports = router;