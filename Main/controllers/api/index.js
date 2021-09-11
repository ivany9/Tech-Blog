const router = require('express').Router();

const userRoutes = require('./user-routes');
const articleRoutes = require('./article-routes');
const commentsRoutes = require('./comments-routes');

router.use('/users', userRoutes);
router.use('/posts', articleRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;