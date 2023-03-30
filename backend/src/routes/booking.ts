import { Router } from "express";
import bookingController from "../controllers/bookingController";
const router = Router();

router.post("/create", bookingController.create);
router.get("/edit/:id", bookingController.find);
router.put("/update", bookingController.update);
router.get("/count", bookingController.totalMoney);
router.get("/check_in", bookingController.countCheckIn);
router.get("/check_out", bookingController.countCheckOut);
router.get("/", bookingController.getAll);

export default router;
