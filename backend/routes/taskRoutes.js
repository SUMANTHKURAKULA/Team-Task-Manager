const express = require('express');
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.route('/').get(protect, getTasks).post(protect, adminOnly, createTask);
router
  .route('/:id')
  .put(protect, updateTask) // Members can update status, Admin can update all
  .delete(protect, adminOnly, deleteTask);

module.exports = router;
