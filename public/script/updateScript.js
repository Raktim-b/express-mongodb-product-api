const formSubmit = async (event) => {
  event.preventDefault();
  const form = event.target;
  const id = form.id.value;
  const name = form.name.value;
  const price = form.price.value;
  const category = form.category.value;
  const size = form.size.value;
  const color = form.color.value;
  const desc = form.desc.value;
  const editData = {
    name,
    price,
    category,
    size,
    color,
    desc,
  };
  try {
    const res = await fetch(`/products/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editData),
    });
    const result = await res.json();
    if (result.success) {
      window.location.href = "/products";
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.log(error);
  }
};
