const Task = require('../models/Task');

// @desc    Get all tasks
// @route   GET /api/tasks
// @access  Private
const getTasks = async (req, res) => {
  try {
    let tasks;
    if (req.user.role === 'Admin') {
      tasks = await Task.find({})
        .populate('assignedTo', 'name email')
        .populate('projectId', 'name');
    } else {
      // Member sees only their tasks
      tasks = await Task.find({ assignedTo: req.user._id })
        .populate('assignedTo', 'name email')
        .populate('projectId', 'name');
    }
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a task
// @route   POST /api/tasks
// @access  Private/Admin
const createTask = async (req, res) => {
  try {
    const { title, description, assignedTo, dueDate, projectId } = req.body;

    if (!title || !assignedTo || !projectId) {
      return res.status(400).json({ message: 'Please add title, assignedTo, and projectId' });
    }

    const task = await Task.create({
      title,
      description,
      assignedTo,
      dueDate,
      projectId,
    });

    const populatedTask = await Task.findById(task._id)
      .populate('assignedTo', 'name email')
      .populate('projectId', 'name');

    res.status(201).json(populatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a task (status update by member, full update by admin)
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Check if user is Member and updating something other than status
    if (req.user.role === 'Member') {
      if (task.assignedTo.toString() !== req.user.id) {
        return res.status(403).json({ message: 'Not authorized to update this task' });
      }
      
      // Member can only update status
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status },
        { new: true }
      )
        .populate('assignedTo', 'name email')
        .populate('projectId', 'name');
        
      return res.status(200).json(updatedTask);
    }

    // Admin can update anything
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
      .populate('assignedTo', 'name email')
      .populate('projectId', 'name');

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Private/Admin
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await task.deleteOne();
    res.status(200).json({ id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
