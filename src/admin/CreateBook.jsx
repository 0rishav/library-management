import { useState } from "react";

const CreateBook = () => {
  const [formData, setFormData] = useState({
    name: "",
    isbn: "",
    category: "",
    quantity: "",
    available: "",
    price: "",
  });

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Science",
    "History",
    "Biography",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Book information submitted successfully!");
  };
  return (
    <div>
      <div className="create-book-container">
        <div className="create-book-card">
          <h3>Create Book</h3>

          {/* create form for book */}
          <form className="book-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Book Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter book name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="isbn">ISBN</label>
              <input
                type="text"
                id="isbn"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                placeholder="Enter ISBN"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select category
                </option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Enter quantity"
                min="1"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="available">Available</label>
              <input
                type="number"
                id="available"
                name="available"
                value={formData.available}
                onChange={handleChange}
                placeholder="Enter available stock"
                min="0"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
