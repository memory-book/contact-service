const { APIError } = require("../../utils/errors/app-errors");
const { ContactModel } = require("../models");

//Dealing with data base operations
class ContactRepository {
  async CreateContact({ name, phone, mobile1, mobile2, email1, email2, userId }) {
    const contact = new ContactModel({
      name, phone, mobile1, mobile2, email1, email2, userId
    });

    const contactResult = await contact.save();
    return contactResult;
  }

  async GetContacts() {
    const contacts = await ContactModel.find()
    return contacts;
  }


  async FindContactById(id) {
    const existingContact = await ContactModel.findById(id)
    return existingContact;
  }

  async UpdateContact({id, name, phone, mobile1, mobile2, email1, email2, userId}) {
    const contact = await ContactModel.findByIdAndUpdate(id,{
      name, phone, mobile1, mobile2, email1, email2, userId
    },
    { new: true });
    const updatedContact = await contact.save();
    return updatedContact;
  }

  async DeleteContactById(id) {
    return ContactModel.findByIdAndDelete(id);
  }
}

module.exports = ContactRepository;
