const ContactService = require("../services/contact-service");
const ContactAuth = require("./middlewares/auth");

module.exports = (app) => {
  const service = new ContactService();

  app.post("/add-contact", ContactAuth, async (req, res, next) => {
    try {
      const { name, phone, mobile1, mobile2, email1, email2, userId } = req.body;
      const data = await service.AddContact({ name, phone, mobile1, mobile2, email1, email2, userId });
      return res.json(data);
    } catch (error) {
      next(error);
    }
  });

  app.post("/edit-contact", ContactAuth, async (req, res, next) => {
    try {
      const data = await service.UpdateContact(req.body);
      return res.json(data);
    } catch (error) {
      next(error);
    }
  });


  app.get("/view-contact/:id", ContactAuth, async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await service.GetContact(id);
      return res.json(data);
    } catch (error) {
      next(error);
    }
  });

  app.get("/contacts-list", ContactAuth, async (req, res, next) => {
    try {
      const data = await service.GetContacts();
      return res.json(data);
    } catch (error) {
      next(error);
    }
  });



  app.delete("/delete-contact/:id", ContactAuth, async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await service.DeleteContact(id);
      return res.json(data);
    } catch (error) {
      next(error);
    }
  });
};
