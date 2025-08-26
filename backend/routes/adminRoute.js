import express from 'express';
import { 
  loginAdmin, 
  appointmentsAdmin, 
  appointmentCancel, 
  addDoctor, 
  allDoctors, 
  adminDashboard, 
  deleteDoctor   // ⬅️ import added
} from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/doctorController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';

const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin);
adminRouter.post("/add-doctor", authAdmin, upload.single('image'), addDoctor);
adminRouter.get("/appointments", authAdmin, appointmentsAdmin);
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel);
adminRouter.get("/all-doctors", authAdmin, allDoctors);
adminRouter.post("/change-availability", authAdmin, changeAvailablity);
adminRouter.get("/dashboard", authAdmin, adminDashboard);

// ✅ New delete doctor route
adminRouter.delete("/delete-doctor/:id", authAdmin, deleteDoctor);

export default adminRouter;
