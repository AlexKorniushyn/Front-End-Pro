function getFormData() {
  const data = {};

  for (const input of form.elements) {
    if (input.type === "text") {
      data[input.id] = input.value;
    }
  }

  return data;
}
