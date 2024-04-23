import * as adminClient from "./adminClient.js";

export default function AdminRoutes(app) {
  const createAdmin = async (req, res) => {
    const admin = await adminClient.createAdmin(req.body);
    res.json(admin);
  };

  const deleteAdmin = async (req, res) => {
    const { adminId } = req.params;
    const status = await adminClient.deleteAdmin(adminId);
    res.json(status);
  };

  const findAdminById = async (req, res) => {
    const admin = await adminClient.findAdminById(req.params.adminId);
    res.json(admin);
  };

  const findAllAdmins = async (req, res) => {
    const admins = await adminClient.findAllAdmins();
    res.json(admins);
  };

  const findAdminByUserId = async (req, res) => {
    const admin = await adminClient.findAdminByUserId(req.params.userId);
    res.json(admin);
  };

  const updateAdmin = async (req, res) => {
    const { adminId } = req.params;
    const status = await adminClient.updateAdmin(adminId, req.body);
    res.json(status);
  };

  app.post("/api/admins", createAdmin);
  app.get("/api/admins", findAllAdmins);
  app.get("/api/admins/:adminId", findAdminById);
  app.get("/api/admins/:userId", findAdminByUserId);
  app.put("/api/admins/:adminId", updateAdmin);
  app.delete("/api/admins/:adminId", deleteAdmin);
}
