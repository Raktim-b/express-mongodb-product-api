const deleteProduct = async (id) => {
  try {
    const res = await fetch(`/products/delete/${id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    if (result.success) {
      showToast("Product deleted successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1200);
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.log(error);
  }
};
const showToast = (message) => {
  const toast = document.getElementById("toast");

  toast.textContent = message;

  toast.classList.remove("translate-x-full", "opacity-0");
  toast.classList.add("translate-x-0", "opacity-100");

  setTimeout(() => {
    toast.classList.remove("translate-x-0", "opacity-100");
    toast.classList.add("translate-x-full", "opacity-0");
  }, 2000);
};
