function clearFormData() {
  for (const input of form.elements) {
    if (input.type === "text") {
      input.value = "";
    }
  }
}
