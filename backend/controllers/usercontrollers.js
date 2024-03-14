import asyncHandler from 'express-async-handler';

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Auth Users' });
});

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Register Users' });
});

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Logout Users' });
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Users' });
});

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'update Users' });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
