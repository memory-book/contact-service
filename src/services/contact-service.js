const { ContactRepository } = require("../database");
const {
  FormateData,
  GeneratePassword,
  GenerateSalt,
  GenerateSignature,
  ValidatePassword,
} = require("../utils");
const {
  NotFoundError,
  ValidationError,
} = require("../utils/errors/app-errors");

// All Business logic will be here
class ContactService {
  constructor() {
    this.repository = new ContactRepository();
  }


  async AddContact(contactInputs) {
    const { name, phone, mobile1, mobile2, email1, email2, userId } = contactInputs;
    const newContact = await this.repository.CreateContact({
      name, phone, mobile1, mobile2, email1, email2, userId 
    });
    return { newContact };
  }

  async UpdateContact(contactInputs) {
    const {id, name, phone, mobile1, mobile2, email1, email2, userId } = contactInputs;
    const editContact = await this.repository.UpdateContact({id,
      name, phone, mobile1, mobile2, email1, email2, userId 
    });
    return { editContact };
  }

  async GetContact(id) {
    const viewContact = await this.repository.FindContactById(id);
    return { viewContact };
  }

  async DeleteContact(id) {
    const deleteContact = await this.repository.DeleteContactById(id);
    return { deleteContact };
  }

  async GetContacts(){
    const contacts = await this.repository.GetContacts();
    return { contacts };
  }

}

module.exports = ContactService;
