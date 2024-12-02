
const Books = () => {
  return (
    <div>
        <div className="book-container">
            <div className="book-card">
                <h1>Books Details</h1>
                <div className="book-details">
                    <h1>Name</h1>
                    <span>Atomic Habits</span>
                </div>
                <hr />
                <div className="book-details">
                    <h1>ISBN</h1>
                    <span>0876545678</span>
                </div>
                <hr />
                <div className="book-details">
                    <h1>Category</h1>
                    <span>Philosophy</span>
                </div>
                <hr />
                <div className="book-details">
                    <h1>Quantity</h1>
                    <span>10</span>
                </div>
                <hr />
                <div className="book-details">
                    <h1>Available</h1>
                    <span>10</span>
                </div>
                <hr />
                <div className="book-details">
                    <h1>Price</h1>
                    <span>$500</span>
                </div>
                <hr />
                <div className="btn-details">
                    <button className="borrow-btn">Borrow</button>
                    <button disabled={true} className="borrow-btn">Return</button>
                    <button className="go-back-btn">Go Back</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Books