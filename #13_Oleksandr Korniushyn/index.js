const form = document.querySelector("#contactForm");
const contactList = document.querySelector("#contactList");

form.addEventListener("submit", onFormSubmit);
contactList.addEventListener("click", onContactListClick);

function onFormSubmit(e) {
  e.preventDefault();

  const formElements = form.elements;
  const contact = getFormData(formElements);

  if (!isContactValid(contact)) {
    showError("all fiels must be required and phone must be a number");
    return;
  }

  renderContact(contact);

  clearFormData(formElements);
}

function onContactListClick(e) {
  const contactItemEl = getContactItem(e.target);

  if (contactItemEl && e.target.classList.contains("deleteBtn")) {
    removeContact(contactItemEl);
  }
}

function removeContact(el) {
  el.remove();
}

function isContactValid(contact) {
  return (
    !isEmpty(contact.name) &&
    !isEmpty(contact.surname) &&
    !isEmpty(contact.phone) &&
    isNumber(Number(contact.phone))
  );
}

function renderContact(contact) {
  const html = generateTemplate(contact);
  contactList.insertAdjacentHTML("beforeend", html);
}

function generateTemplate(contact) {
  return `
    <tr class="contactItem">
      <td>${contact.name}</td>
      <td>${contact.surname}</td>
      <td>${contact.phone}</td>
      <td><span><button type="button" class="deleteBtn">Delete</button></span></td>
    </tr>
  `;
}

function showError(message) {
  alert(message);
}

function getContactItem(el) {
  return el.closest(".contactItem");
}
