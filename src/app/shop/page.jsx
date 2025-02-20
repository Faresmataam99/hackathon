"use client";
import React, { useState } from "react";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    description: "An easy & proven way to build good habits & break bad ones.",
    price: 19.99,
    image:
      "https://imgs.search.brave.com/Nv2bHZqMHbTgiTyyn6t6t3XVLhZuNad_mB39Nq7vm_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnRo/cmlmdGJvb2tzLmNv/bS9hcGkvaW1hZ2Vo/YW5kbGVyL20vMjk1/MDA4NzUyMDMzNTFD/NzFBRkVDN0U0QUY5/NTlGREMzRENFMEYy/Qi5qcGVn",
  },
  {
    id: 2,
    title: "The Miracle Morning",
    description:
      "Transform your life by waking up early and following a morning routine.",
    price: 14.99,
    image:
      "https://imgs.search.brave.com/6fGXzFA28GFSGFk2J86Fce-R7NR1qeYnF9qbPCQpROM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzQxQW9iZ3NGODZM/LmpwZw",
  },
  {
    id: 3,
    title: "The Power of Now",
    description:
      "A guide to spiritual enlightenment and living in the present moment.",
    price: 12.99,
    image:
      "https://imgs.search.brave.com/OMppekb1rZHKffTgqPMdTFX-YeF4DML2R9ZaSwD-Kzs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDEwaHc2UTVhOUwu/anBn",
  },
  {
    id: 4,
    title: "Deep Work",
    description: "Rules for focused success in a distracted world.",
    price: 16.99,
    image:
      "https://imgs.search.brave.com/C9_En5enRqTiW6ky8WnRNkqWJRpTZQekc62BnUa06xg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGFjaGV0dGVib29r/Z3JvdXAuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA2/Lzk3ODE0NTU1ODY2/OTEuanBnP3c9NDI2",
  },
  {
    id: 5,
    title: "The 5 AM Club",
    description: "Own your morning, elevate your life.",
    price: 18.99,
    image:
      "https://imgs.search.brave.com/0kvtX3j6ki-Iysc1aHVa7BY8J2ukA5jOloDMEC6yWao/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzVm/YTU3YWFjZjViMGE5/MGE3NmIwZDdjYy84/YmEzZjQ3MC1hNmIy/LTRjMzUtYWYxNC04/OGM1MTAyNzA2MDUv/YmVjb21pbmctY2Fy/bWVuLWJvb2stY292/ZXItcmV2aWV3LXJv/YmluLXNoYXJtYS10/aGUtNWFtLWNsdWI",
  },
  {
    id: 6,
    title: "The Subtle Art of Not Giving a F*ck",
    description: "A counterintuitive approach to living a good life.",
    price: 15.99,
    image:
      "https://imgs.search.brave.com/XOxd5PKbxzv8xR3PNV_iit8yKjnG4OUItSCs1PWRyzg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWN0/dXJlcy5hYmVib29r/cy5jb20vaXNibi85/NzgwMDYyNjQxNTQw/LXVzLmpwZw",
  },
  {
    id: 7,
    title: "Mindset: The New Psychology of Success",
    description: "How we can learn to fulfill our potential.",
    price: 13.99,
    image:
      "https://imgs.search.brave.com/Pro77g-xqK8uYYLawqHgK5NTdxZeQAnpaMIXMkJlmYQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cG9yY2hsaWdodGJv/b2tzLmNvbS9hc3Nl/dHMvaW1hZ2VzL2Jv/b2tzLzgvMjgvMzI4/LzIzMjgvOTc4MDM0/NTQ3MjMyOC5qcGc_/dz0xMDAwJnNjYWxl/PWJvdGgmbW9kZT1j/cm9wJnU9NjM4NjY1/ODk0NzE4MTMwMDAw",
  },
  {
    id: 8,
    title: "The 7 Habits of Highly Effective People",
    description: "Powerful lessons in personal change.",
    price: 17.99,
    image:
      "https://imgs.search.brave.com/QcA6jHQ6mHm-8fx_NTv9PLyl1LAKMTDIahRweATJD7w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMjho/Z3ByaThhbTJpZi5j/bG91ZGZyb250Lm5l/dC9ib29rX2ltYWdl/cy9vbml4L2N2cjk3/ODE0MTY1MDI0OTQv/Ny1oYWJpdHMtb2Yt/aGlnaGx5LWVmZmVj/dGl2ZS1wZW9wbGUt/OTc4MTQxNjUwMjQ5/NF9sZy5qcGc",
  },
  {
    id: 9,
    title: "How to Win Friends and Influence People",
    description:
      "Timeless advice on building relationships and influencing others.",
    price: 11.99,
    image:
      "https://imgs.search.brave.com/qr6viwSoNOOHNxEq1cTLDGe16LuuGI9dF8WhtPpBvY8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFPa3NaUVl0K0wu/anBn",
  },
  {
    id: 10,
    title: "The Life-Changing Magic of Tidying Up",
    description: "The Japanese art of decluttering and organizing.",
    price: 10.99,
    image:
      "https://imgs.search.brave.com/EscupgfLrf6bSAAJrmDoNQpaR_n22XpW8bCY0Z2WccU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxWTU0aVNKQmNM/LmpwZw",
  },
];

const Shop = () => {
  const [notification, setNotification] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (book) => {
    setCart([...cart, book]);
    setNotification(`${book.title} added to cart`);

    setTimeout(() => {
      setNotification(null);
    }, 2000); // Notification disappears after 2 seconds
  };

  const removeFromCart = (bookId) => {
    setCart(cart.filter((item) => item.id !== bookId));
  };

  const totalPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 bg-base-100 relative" data-theme="lemonade">
      {/* Header */}
      {notification && (
        <div className="fixed top-0 left-0 w-full bg-green-500 text-white text-center py-2 shadow-md z-50">
          {notification}
        </div>
      )}

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Healthy Habits Book Shop</h1>
        <button onClick={() => setIsCartOpen(!isCartOpen)} className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            className="bi bi-cart"
            viewBox="0 0 16 16"
            id="Cart--Streamline-Bootstrap"
            height="16"
            width="16"
          >
            <desc>Cart Streamline Icon: https://streamlinehq.com</desc>
            <path
              d="M0 1.5A0.5 0.5 0 0 1 0.5 1H2a0.5 0.5 0 0 1 0.485 0.379L2.89 3H14.5a0.5 0.5 0 0 1 0.491 0.592l-1.5 8A0.5 0.5 0 0 1 13 12H4a0.5 0.5 0 0 1 -0.491 -0.408L2.01 3.607 1.61 2H0.5a0.5 0.5 0 0 1 -0.5 -0.5M3.102 4l1.313 7h8.17l1.313 -7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0 -4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0 -4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0 -2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0 -2"
              strokeWidth="1"
            ></path>
          </svg>
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 mx-5 rounded-full">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border border-base-300 rounded-lg focus:outline-none focus:border-lime-500"
        />
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="card bg-base-200 p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-64 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold mb-2 text-center">
              {book.title}
            </h2>
            <p className="text-gray-700 mb-4 text-center">{book.description}</p>
            <p className="text-lg font-bold mb-4">${book.price}</p>
            <button
              onClick={() => addToCart(book)}
              className="btn btn-primary w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Drawer */}
      <div
        className={`fixed  z-40 top-0 right-0 h-full w-1/5 bg-white shadow-lg p-6 transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)}></button>
        </div>
        {cart.length === 0 ? (
          <p className="text-gray-700">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded-md"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-700">${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn btn-error btn-xs"
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-300">
              <p className="text-lg font-bold">Total: ${totalPrice}</p>
              <button className="btn btn-success w-full mt-4">
                Proceed to Payment
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Shop;
