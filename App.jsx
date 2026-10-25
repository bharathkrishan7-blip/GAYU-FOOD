import { useEffect, useMemo, useState } from "react";
import "./App.css";

const FOOD_IMAGES = {
  thattu:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Tattuvatai%20Set.jpg",
  burger:
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  pizza:
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
  biryani:
    "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
  chicken:
    "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85",
  dosa:
    "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=85",
  noodles:
    "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85",
  dessert:
    "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
};

const initialFoods = [
  {
    id: 1,
    name: "Salem Special Thattu Vadai Set",
    category: "Street Food",
    price: 79,
    oldPrice: 99,
    rating: 4.9,
    time: "15–20 min",
    veg: true,
    bestseller: true,
    special: true,
    description:
      "Crispy, flavourful and inspired by Salem's much-loved street-food culture.",
    image: FOOD_IMAGES.thattu,
  },
  {
    id: 2,
    name: "Classic Cheese Burger",
    category: "Burger",
    price: 149,
    oldPrice: 179,
    rating: 4.7,
    time: "20–25 min",
    veg: true,
    bestseller: true,
    description: "A juicy, cheesy burger made for comfort-food lovers.",
    image: FOOD_IMAGES.burger,
  },
  {
    id: 3,
    name: "Chicken Dum Biryani",
    category: "Biryani",
    price: 199,
    oldPrice: 229,
    rating: 4.8,
    time: "25–30 min",
    veg: false,
    bestseller: true,
    description: "Aromatic rice, rich spices and delicious chicken.",
    image: FOOD_IMAGES.biryani,
  },
  {
    id: 4,
    name: "Crispy Fried Chicken",
    category: "Chicken",
    price: 179,
    oldPrice: 209,
    rating: 4.6,
    time: "20–25 min",
    veg: false,
    bestseller: true,
    description: "Crunchy on the outside and tender inside.",
    image: FOOD_IMAGES.chicken,
  },
  {
    id: 5,
    name: "Masala Dosa",
    category: "South Indian",
    price: 89,
    oldPrice: 109,
    rating: 4.5,
    time: "15–20 min",
    veg: true,
    bestseller: false,
    description: "Golden dosa served with chutneys and sambar.",
    image: FOOD_IMAGES.dosa,
  },
  {
    id: 6,
    name: "Veg Hakka Noodles",
    category: "Noodles",
    price: 129,
    oldPrice: 149,
    rating: 4.4,
    time: "20–25 min",
    veg: true,
    bestseller: false,
    description: "Wok-tossed noodles with fresh vegetables.",
    image: FOOD_IMAGES.noodles,
  },
  {
    id: 7,
    name: "Chocolate Dessert",
    category: "Desserts",
    price: 99,
    oldPrice: 129,
    rating: 4.7,
    time: "10–15 min",
    veg: true,
    bestseller: false,
    description: "A sweet finish for your favourite meal.",
    image: FOOD_IMAGES.dessert,
  },
  {
    id: 8,
    name: "Farmhouse Pizza",
    category: "Pizza",
    price: 249,
    oldPrice: 299,
    rating: 4.6,
    time: "25–35 min",
    veg: true,
    bestseller: true,
    description: "Loaded with vegetables, cheese and flavour.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = [
  { name: "All", icon: "✦" },
  { name: "Street Food", icon: "🥙" },
  { name: "Burger", icon: "🍔" },
  { name: "Pizza", icon: "🍕" },
  { name: "Biryani", icon: "🍛" },
  { name: "Chicken", icon: "🍗" },
  { name: "South Indian", icon: "🥞" },
  { name: "Noodles", icon: "🍜" },
  { name: "Desserts", icon: "🍰" },
];

const navigationGroups = [
  {
    title: "Discover",
    items: [
      ["Home", "⌂"],
      ["Explore Menu", "☷"],
      ["Restaurants", "▤"],
      ["Search", "⌕"],
      ["Popular Dishes", "✦"],
      ["Bestsellers", "♛"],
      ["New Arrivals", "✧"],
    ],
  },
  {
    title: "Food & Offers",
    items: [
      ["Veg Specials", "◉"],
      ["Non-Veg Specials", "◉"],
      ["Offers & Coupons", "%"],
      ["Favourites", "♡"],
    ],
  },
  {
    title: "Your Orders",
    items: [
      ["Cart", "▣"],
      ["Checkout", "→"],
      ["Order Success", "✓"],
      ["Track Order", "⌁"],
      ["My Order History", "◷"],
    ],
  },
  {
    title: "Your Account",
    items: [
      ["My Account", "♙"],
      ["Saved Addresses", "⌖"],
      ["Payment Methods", "▤"],
      ["Settings", "⚙"],
      ["Notifications", "♧"],
    ],
  },
  {
    title: "More",
    items: [
      ["Reviews & Ratings", "☆"],
      ["Help Centre", "?"],
      ["Contact Us", "✉"],
      ["About GaYu", "♡"],
      ["Our Story", "♥"],
      ["Mission & Vision", "✧"],
      ["Get the App", "▣"],
      ["Privacy Policy", "◈"],
      ["Terms & Conditions", "≡"],
      ["Restaurant Details", "▤"],
      ["Food Details", "♧"],
      ["Settings", "⚙"],
    ],
  },
];

const restaurants = [
  {
    id: 1,
    name: "GaYu Street Kitchen",
    cuisine: "Street Food · South Indian",
    rating: 4.8,
    time: "15–25 min",
    image: FOOD_IMAGES.thattu,
    offer: "20% OFF",
  },
  {
    id: 2,
    name: "The Burger Studio",
    cuisine: "Burgers · Fast Food",
    rating: 4.7,
    time: "20–30 min",
    image: FOOD_IMAGES.burger,
    offer: "FREE DELIVERY",
  },
  {
    id: 3,
    name: "Royal Biryani House",
    cuisine: "Biryani · Indian",
    rating: 4.8,
    time: "25–35 min",
    image: FOOD_IMAGES.biryani,
    offer: "15% OFF",
  },
];

function readStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function money(amount) {
  return `₹${Number(amount).toLocaleString("en-IN")}`;
}

export default function App() {
  const [page, setPage] = useState("Home");
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedFood, setSelectedFood] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [toast, setToast] = useState("");
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [couponError, setCouponError] = useState("");

  const [cart, setCart] = useState(() => readStorage("gayu-cart", []));
  const [favourites, setFavourites] = useState(() =>
    readStorage("gayu-favourites", [])
  );
  const [orders, setOrders] = useState(() => readStorage("gayu-orders", []));
  const [addresses, setAddresses] = useState(() =>
    readStorage("gayu-addresses", [])
  );
  const [notifications, setNotifications] = useState(() =>
    readStorage("gayu-notifications", [
      {
        id: 1,
        title: "Welcome to GaYu Foods!",
        message: "Discover delicious food and happy moments.",
        read: false,
      },
    ])
  );
  const [profile, setProfile] = useState(() =>
    readStorage("gayu-profile", {
      name: "",
      email: "",
      phone: "",
    })
  );
  const [addressForm, setAddressForm] = useState({
    label: "Home",
    name: "",
    phone: "",
    address: "",
    city: "Salem",
    pincode: "",
  });
  const [reviewForm, setReviewForm] = useState({
    name: "",
    rating: 5,
    message: "",
  });
  const [reviews, setReviews] = useState(() =>
    readStorage("gayu-reviews", [
      {
        id: 1,
        name: "Food Lover",
        rating: 5,
        message: "Beautiful concept and delicious-looking food!",
      },
    ])
  );
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [checkoutAddress, setCheckoutAddress] = useState(0);
  const [lastOrder, setLastOrder] = useState(null);
  const [history, setHistory] = useState(() =>
    readStorage("gayu-recent", [])
  );

  useEffect(() => {
    localStorage.setItem("gayu-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("gayu-favourites", JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    localStorage.setItem("gayu-orders", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem("gayu-addresses", JSON.stringify(addresses));
  }, [addresses]);

  useEffect(() => {
    localStorage.setItem(
      "gayu-notifications",
      JSON.stringify(notifications)
    );
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem("gayu-profile", JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem("gayu-reviews", JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem("gayu-recent", JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2500);
    return () => clearTimeout(timer);
  }, [toast]);

  const filteredFoods = useMemo(() => {
    return initialFoods.filter((food) => {
      const matchesCategory =
        category === "All" ||
        food.category === category ||
        (category === "Veg Specials" && food.veg) ||
        (category === "Non-Veg Specials" && !food.veg) ||
        (category === "Bestsellers" && food.bestseller) ||
        (category === "Popular Dishes" && food.rating >= 4.7) ||
        (category === "New Arrivals" && food.id >= 5);

      const matchesSearch =
        food.name.toLowerCase().includes(query.toLowerCase()) ||
        food.category.toLowerCase().includes(query.toLowerCase());

      const matchesFavourite =
        page !== "Favourites" || favourites.includes(food.id);

      return matchesCategory && matchesSearch && matchesFavourite;
    });
  }, [category, query, page, favourites]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount =
    appliedCoupon === "GAYUTHRI10"
      ? Math.min(Math.round(subtotal * 0.1), 100)
      : appliedCoupon === "WELCOME50" && subtotal >= 199
        ? 50
        : 0;

  const deliveryFee = subtotal === 0 || subtotal >= 499 ? 0 : 30;
  const taxes = Math.round(subtotal * 0.05);
  const total = Math.max(0, subtotal + deliveryFee + taxes - discount);

  function navigate(nextPage) {
    setPage(nextPage);
    setMobileMenu(false);
    setSearchOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (nextPage === "Explore Menu") setCategory("All");
    if (nextPage === "Veg Specials") setCategory("Veg Specials");
    if (nextPage === "Non-Veg Specials") setCategory("Non-Veg Specials");
    if (nextPage === "Bestsellers") setCategory("Bestsellers");
    if (nextPage === "Popular Dishes") setCategory("Popular Dishes");
    if (nextPage === "New Arrivals") setCategory("New Arrivals");
    if (nextPage === "Home" || nextPage === "Restaurants") {
      setCategory("All");
    }
  }

  function addToCart(food) {
    setCart((previous) => {
      const existing = previous.find((item) => item.id === food.id);

      if (existing) {
        return previous.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previous, { ...food, quantity: 1 }];
    });

    setToast(`${food.name} added to cart`);
  }

  function changeQuantity(id, amount) {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function toggleFavourite(food) {
    const isSaved = favourites.includes(food.id);

    setFavourites((previous) =>
      isSaved
        ? previous.filter((id) => id !== food.id)
        : [...previous, food.id]
    );

    setToast(isSaved ? "Removed from favourites" : "Saved to favourites");
  }

  function openFood(food) {
    setSelectedFood(food);
    setHistory((previous) => [
      food.id,
      ...previous.filter((id) => id !== food.id),
    ].slice(0, 8));
    setPage("Food Details");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function applyCoupon() {
    const code = couponInput.trim().toUpperCase();

    if (code === "GAYUTHRI10" && subtotal > 0) {
      setAppliedCoupon(code);
      setCouponError("");
      setToast("10% discount applied!");
    } else if (code === "WELCOME50" && subtotal >= 199) {
      setAppliedCoupon(code);
      setCouponError("");
      setToast("₹50 discount applied!");
    } else {
      setAppliedCoupon("");
      setCouponError(
        "Invalid code or minimum cart value not reached."
      );
    }
  }

  function placeOrder(event) {
    event.preventDefault();

    if (!cart.length) {
      setToast("Your cart is empty!");
      navigate("Explore Menu");
      return;
    }

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const deliveryAddress = addresses[checkoutAddress];

    const order = {
      id: `GY${Date.now().toString().slice(-8)}`,
      date: new Date().toLocaleString("en-IN"),
      items: cart,
      total,
      status: "Order Confirmed",
      payment: paymentMethod,
      address:
        deliveryAddress?.address ||
        formData.get("deliveryAddress"),
    };

    setLastOrder(order);
    setOrders((previous) => [order, ...previous]);
    setNotifications((previous) => [
      {
        id: Date.now(),
        title: "Order confirmed",
        message: `Order ${order.id} has been placed successfully.`,
        read: false,
      },
      ...previous,
    ]);
    setCart([]);
    setAppliedCoupon("");
    setCouponInput("");
    setPage("Order Success");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function addAddress(event) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const newAddress = {
      id: Date.now(),
      label: data.get("label"),
      name: data.get("name"),
      phone: data.get("phone"),
      address: data.get("address"),
      city: data.get("city"),
      pincode: data.get("pincode"),
    };

    setAddresses((previous) => [...previous, newAddress]);
    setAddressForm({
      label: "Home",
      name: "",
      phone: "",
      address: "",
      city: "Salem",
      pincode: "",
    });
    form.reset();
    setToast("Address saved successfully");
  }

  function submitReview(event) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const review = {
      id: Date.now(),
      name: data.get("name"),
      rating: Number(data.get("rating")),
      message: data.get("message"),
    };

    setReviews((previous) => [review, ...previous]);
    form.reset();
    setToast("Thank you for your review!");
  }

  function updateOrderStatus(orderId, status) {
    setOrders((previous) =>
      previous.map((order) =>
        order.id === orderId ? { ...order, status } : order
      )
    );

    setLastOrder((previous) =>
      previous?.id === orderId ? { ...previous, status } : previous
    );
  }

  function FoodCard({ food }) {
    return (
      <article className="food-card">
        <div className="food-image-wrap">
          <img
            src={food.image}
            alt={food.name}
            className="food-image"
            loading="lazy"
          />

          {food.bestseller && (
            <span className="food-badge">BESTSELLER</span>
          )}

          <button
            className={`heart-button ${
              favourites.includes(food.id) ? "is-favourite" : ""
            }`}
            onClick={() => toggleFavourite(food)}
            aria-label="Toggle favourite"
          >
            {favourites.includes(food.id) ? "♥" : "♡"}
          </button>

          {food.oldPrice > food.price && (
            <span className="discount-label">
              {Math.round(
                ((food.oldPrice - food.price) / food.oldPrice) * 100
              )}
              % OFF
            </span>
          )}
        </div>

        <div className="food-info">
          <div className="food-title-row">
            <span className={`veg-indicator ${food.veg ? "" : "nonveg"}`}>
              <span />
            </span>
            <span className="food-category">{food.category}</span>
          </div>

          <h3>{food.name}</h3>

          <p className="food-description">{food.description}</p>

          <div className="food-meta">
            <span className="rating">★ {food.rating}</span>
            <span>◷ {food.time}</span>
          </div>

          <div className="food-bottom">
            <div>
              <strong>{money(food.price)}</strong>
              {food.oldPrice > food.price && (
                <del>{money(food.oldPrice)}</del>
              )}
            </div>

            <button
              className="add-button"
              onClick={() => addToCart(food)}
            >
              + ADD
            </button>
          </div>

          <button
            className="text-link food-details-link"
            onClick={() => openFood(food)}
          >
            View details →
          </button>
        </div>
      </article>
    );
  }

  function FoodGrid({ items = filteredFoods }) {
    if (!items.length) {
      return (
        <div className="empty-state">
          <span>🍽️</span>
          <h3>Nothing delicious here yet</h3>
          <p>Try another search or explore our complete menu.</p>
          <button className="primary-button" onClick={() => navigate("Explore Menu")}>
            Explore Menu
          </button>
        </div>
      );
    }

    return (
      <div className="food-grid">
        {items.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    );
  }

  function SectionHeading({ eyebrow, title, description, action }) {
    return (
      <div className="section-heading">
        <div>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>

        {action && (
          <button className="text-link" onClick={action.onClick}>
            {action.label} →
          </button>
        )}
      </div>
    );
  }

  function renderHome() {
    return (
      <>
        <section className="hero">
          <div className="hero-copy">
            <div className="hero-pill">
              <span className="pulse-dot" />
              GOOD FOOD. HAPPY MOMENTS.
            </div>

            <h1>
              Good Food.
              <br />
              <span>Great Moods.</span>
            </h1>

            <p>
              Discover your next favourite meal with GaYu Foods.
              Beautiful flavours, delightful moments, delivered with love.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => navigate("Explore Menu")}
              >
                Explore Menu <span>→</span>
              </button>

              <button
                className="secondary-button"
                onClick={() => navigate("Restaurants")}
              >
                Discover Restaurants
              </button>
            </div>

            <div className="hero-trust">
              <div className="trust-avatars">
                <span>🍕</span>
                <span>🍔</span>
                <span>🍛</span>
              </div>
              <div>
                <strong>Made for food lovers</strong>
                <small>Every craving deserves a little happiness.</small>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-main">
              <img
                src={FOOD_IMAGES.burger}
                alt="Delicious food from GaYu Foods"
              />
            </div>

            <div className="floating-card floating-rating">
              <span className="floating-icon">★</span>
              <div>
                <strong>4.9/5</strong>
                <small>Food lovers' pick</small>
              </div>
            </div>

            <div className="floating-card floating-offer">
              <span>✦</span>
              <div>
                <strong>Something tasty?</strong>
                <small>Your next favourite awaits.</small>
              </div>
            </div>

            <div className="hero-decor decor-one" />
            <div className="hero-decor decor-two" />
          </div>
        </section>

        <section className="benefit-strip">
          <div><span>♧</span><div><strong>Made with care</strong><small>Thoughtful food choices</small></div></div>
          <div><span>◷</span><div><strong>Quick & easy</strong><small>Simple ordering experience</small></div></div>
          <div><span>♡</span><div><strong>Food with heart</strong><small>Made for happy moments</small></div></div>
        </section>

        <section className="page-section">
          <SectionHeading
            eyebrow="WHAT ARE YOU CRAVING?"
            title="Explore by category"
            description="Find something delicious for every kind of craving."
            action={{
              label: "View all",
              onClick: () => navigate("Explore Menu"),
            }}
          />

          <div className="category-scroller">
            {categories.slice(1).map((item) => (
              <button
                className="category-tile"
                key={item.name}
                onClick={() => {
                  setCategory(item.name);
                  navigate("Explore Menu");
                }}
              >
                <span className="category-icon">{item.icon}</span>
                <strong>{item.name}</strong>
                <span className="category-arrow">↗</span>
              </button>
            ))}
          </div>
        </section>

        <section className="page-section">
          <SectionHeading
            eyebrow="THE CROWD LOVES THESE"
            title="Bestsellers you'll love"
            description="Popular picks to make your next meal special."
            action={{
              label: "See bestsellers",
              onClick: () => navigate("Bestsellers"),
            }}
          />
          <FoodGrid items={initialFoods.filter((food) => food.bestseller)} />
        </section>

        <section className="signature-section">
          <div className="signature-image">
            <img src={FOOD_IMAGES.thattu} alt="South Indian street food" />
            <span className="signature-stamp">SALEM<br />SPECIAL</span>
          </div>

          <div className="signature-copy">
            <span className="eyebrow">A TASTE OF SALEM</span>
            <h2>Our signature.<br /><span>Your happy moment.</span></h2>
            <p>
              Introducing the Salem Special Thattu Vadai Set — inspired by
              the city's much-loved street-food culture.
            </p>
            <div className="signature-points">
              <span>✓ A local favourite inspiration</span>
              <span>✓ A special place on our menu</span>
              <span>✓ Created for memorable moments</span>
            </div>
            <button
              className="primary-button"
              onClick={() => openFood(initialFoods[0])}
            >
              Discover the signature dish →
            </button>
            <small className="demo-note">
              Demo menu item. Final recipe, price and availability can be updated.
            </small>
          </div>
        </section>

        <section className="page-section">
          <SectionHeading
            eyebrow="YOUR NEXT FAVOURITE"
            title="More reasons to stay hungry"
            description="Explore new arrivals, vegetarian favourites and sweet treats."
            action={{
              label: "Explore everything",
              onClick: () => navigate("Explore Menu"),
            }}
          />
          <FoodGrid items={initialFoods.filter((food) => food.id >= 5)} />
        </section>

        <section className="offer-banner">
          <div>
            <span className="eyebrow">A LITTLE TREAT FROM US</span>
            <h2>Your first order deserves something special.</h2>
            <p>Use code <strong>WELCOME50</strong> for ₹50 off eligible demo orders.</p>
            <button className="light-button" onClick={() => navigate("Offers & Coupons")}>
              Explore offers →
            </button>
          </div>
          <div className="offer-art">%</div>
        </section>

        <section className="page-section story-preview">
          <div className="story-preview-image">
            <img src={FOOD_IMAGES.dessert} alt="A sweet moment" />
          </div>
          <div>
            <span className="eyebrow">THE STORY BEHIND THE BRAND</span>
            <h2>A little inspiration.<br /><span>A lot of heart.</span></h2>
            <p>
              GaYu Foods began with a simple belief: little things can hold
              the greatest meaning. Discover the story behind our name and
              the dream that inspired this project.
            </p>
            <button className="secondary-button" onClick={() => navigate("Our Story")}>
              Read our story →
            </button>
          </div>
        </section>

        <section className="page-section">
          <SectionHeading
            eyebrow="KIND WORDS"
            title="Moments worth sharing"
            description="A place for food lovers to share their experience."
            action={{
              label: "Write a review",
              onClick: () => navigate("Reviews & Ratings"),
            }}
          />
          <div className="review-preview-grid">
            {reviews.slice(0, 3).map((review) => (
              <article className="review-card" key={review.id}>
                <div className="review-stars">{"★".repeat(review.rating)}</div>
                <p>“{review.message}”</p>
                <strong>{review.name}</strong>
                <small>GaYu Foods community</small>
              </article>
            ))}
          </div>
        </section>

        <section className="app-banner">
          <div>
            <span className="eyebrow">GOOD FOOD, ONE TAP AWAY</span>
            <h2>Bring GaYu Foods<br />to your home screen.</h2>
            <p>Enjoy an app-like experience on compatible mobile browsers.</p>
            <button className="primary-button" onClick={() => navigate("Get the App")}>
              Discover the app →
            </button>
          </div>
          <div className="phone-preview">
            <div className="phone-top"><span /><span /></div>
            <div className="phone-brand">GaYu <span>FOODS</span></div>
            <img src={FOOD_IMAGES.burger} alt="Food preview" />
            <strong>Good Food.<br />Great Moods.</strong>
            <div className="phone-bottom">⌂　⌕　♡　▣</div>
          </div>
        </section>
      </>
    );
  }

  function renderRestaurants() {
    return (
      <>
        <SectionHeading
          eyebrow="FIND YOUR NEXT FAVOURITE"
          title="Discover restaurants"
          description="Explore our sample restaurant collection."
        />

        <div className="restaurant-grid">
          {restaurants.map((restaurant) => (
            <article className="restaurant-card" key={restaurant.id}>
              <div className="restaurant-image">
                <img src={restaurant.image} alt={restaurant.name} />
                <span>{restaurant.offer}</span>
              </div>
              <div className="restaurant-content">
                <h3>{restaurant.name}</h3>
                <p>{restaurant.cuisine}</p>
                <div className="restaurant-meta">
                  <span className="rating">★ {restaurant.rating}</span>
                  <span>◷ {restaurant.time}</span>
                </div>
                <button
                  className="primary-button full-button"
                  onClick={() => {
                    setSelectedRestaurant(restaurant);
                    navigate("Restaurant Details");
                  }}
                >
                  Explore restaurant →
                </button>
              </div>
            </article>
          ))}
        </div>
        <p className="demo-note">
          These are illustrative demo listings, not verified live restaurants.
        </p>
      </>
    );
  }

  function renderCart() {
    return (
      <>
        <SectionHeading
          eyebrow="YOUR SELECTION"
          title="Your cart"
          description="A few delicious choices, all in one place."
        />

        {!cart.length ? (
          <div className="empty-state">
            <span>🛍️</span>
            <h3>Your cart is waiting for something delicious.</h3>
            <p>Explore the menu and add your favourites.</p>
            <button className="primary-button" onClick={() => navigate("Explore Menu")}>
              Start exploring →
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cart.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <small>{item.category}</small>
                    <strong>{money(item.price)}</strong>
                  </div>
                  <div className="quantity-control">
                    <button onClick={() => changeQuantity(item.id, -1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => changeQuantity(item.id, 1)}>+</button>
                  </div>
                </article>
              ))}
              <button className="secondary-button" onClick={() => navigate("Explore Menu")}>
                + Add more items
              </button>
            </div>

            <aside className="bill-card">
              <h3>Bill details</h3>
              <div className="bill-line"><span>Item total</span><span>{money(subtotal)}</span></div>
              <div className="bill-line"><span>Delivery fee</span><span>{deliveryFee ? money(deliveryFee) : "FREE"}</span></div>
              <div className="bill-line"><span>Estimated taxes</span><span>{money(taxes)}</span></div>
              {discount > 0 && (
                <div className="bill-line discount-line">
                  <span>Coupon discount</span><span>−{money(discount)}</span>
                </div>
              )}

              <div className="coupon-box">
                <input
                  value={couponInput}
                  onChange={(event) => setCouponInput(event.target.value)}
                  placeholder="Enter coupon code"
                />
                <button onClick={applyCoupon}>Apply</button>
              </div>

              {couponError && <p className="error-text">{couponError}</p>}
              {appliedCoupon && <p className="success-text">Coupon {appliedCoupon} applied!</p>}

              <div className="bill-total"><strong>To pay</strong><strong>{money(total)}</strong></div>

              <button className="primary-button full-button" onClick={() => navigate("Checkout")}>
                Proceed to checkout →
              </button>
              <small className="demo-note">Demo prices and taxes. No real payment is processed.</small>
            </aside>
          </div>
        )}
      </>
    );
  }

  function renderCheckout() {
    return (
      <>
        <SectionHeading
          eyebrow="ALMOST THERE"
          title="Checkout"
          description="Confirm your delivery details and review your order."
        />

        {!cart.length ? (
          <div className="empty-state">
            <span>🛍️</span>
            <h3>Your cart is empty</h3>
            <button className="primary-button" onClick={() => navigate("Explore Menu")}>
              Explore Menu
            </button>
          </div>
        ) : (
          <form className="checkout-layout" onSubmit={placeOrder}>
            <div className="checkout-main">
              <section className="form-card">
                <h3>01. Delivery details</h3>

                <div className="form-grid">
                  <label>
                    Full name
                    <input name="customerName" required defaultValue={profile.name} placeholder="Your name" />
                  </label>
                  <label>
                    Phone number
                    <input name="phone" required pattern="[0-9]{10}" defaultValue={profile.phone} placeholder="10-digit mobile number" />
                  </label>
                  <label className="form-wide">
                    Delivery address
                    <textarea name="deliveryAddress" required placeholder="House number, street and area" rows="3" />
                  </label>
                  <label>
                    City
                    <input name="city" required defaultValue="Salem" />
                  </label>
                  <label>
                    PIN code
                    <input name="pincode" required pattern="[0-9]{6}" placeholder="6-digit PIN code" />
                  </label>
                </div>

                {addresses.length > 0 && (
                  <div className="saved-address-select">
                    <label>
                      Or choose a saved address
                      <select
                        value={checkoutAddress}
                        onChange={(event) => {
                          const index = Number(event.target.value);
                          setCheckoutAddress(index);
                        }}
                      >
                        {addresses.map((address, index) => (
                          <option key={address.id} value={index}>
                            {address.label} — {address.address}
                          </option>
                        ))}
                      </select>
                    </label>
                    <p className="demo-note">
                      Selecting a saved address is optional. Enter the final delivery
                      details in the form above before placing your order.
                    </p>
                  </div>
                )}
              </section>

              <section className="form-card">
                <h3>02. Payment method</h3>
                <p className="muted">Select a demo checkout option.</p>

                {["Cash on Delivery", "UPI (Demo only)", "Card (Demo only)"].map((method) => (
                  <label className="payment-option" key={method}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === method}
                      onChange={() => setPaymentMethod(method)}
                    />
                    <span>{method}</span>
                  </label>
                ))}

                <p className="demo-note">
                  Demo checkout only. UPI/card selections do not initiate a real transaction.
                </p>
              </section>
            </div>

            <aside className="bill-card">
              <h3>Your order</h3>
              {cart.map((item) => (
                <div className="checkout-item" key={item.id}>
                  <span>{item.name} × {item.quantity}</span>
                  <strong>{money(item.price * item.quantity)}</strong>
                </div>
              ))}
              <div className="bill-line"><span>Subtotal</span><span>{money(subtotal)}</span></div>
              <div className="bill-line"><span>Delivery</span><span>{deliveryFee ? money(deliveryFee) : "FREE"}</span></div>
              <div className="bill-line"><span>Taxes</span><span>{money(taxes)}</span></div>
              {discount > 0 && (
                <div className="bill-line discount-line"><span>Discount</span><span>−{money(discount)}</span></div>
              )}
              <div className="bill-total"><strong>Total</strong><strong>{money(total)}</strong></div>
              <button className="primary-button full-button" type="submit">
                Place demo order →
              </button>
            </aside>
          </form>
        )}
      </>
    );
  }

  function renderAccount() {
    return (
      <div className="account-layout">
        <div className="account-profile-card">
          <div className="profile-avatar">
            {(profile.name || "G").charAt(0).toUpperCase()}
          </div>
          <h2>{profile.name || "Welcome, food lover!"}</h2>
          <p>{profile.email || "Your GaYu Foods account"}</p>
          <button className="secondary-button" onClick={() => navigate("My Account")}>
            Edit profile
          </button>
        </div>

        <div className="account-links">
          {[
            ["My Order History", "◷", "Review your demo orders"],
            ["Saved Addresses", "⌖", "Manage delivery addresses"],
            ["Payment Methods", "▤", "View demo payment options"],
            ["Favourites", "♡", "Your saved dishes"],
            ["Notifications", "♧", "Order updates and alerts"],
            ["Settings", "⚙", "Customise your experience"],
          ].map(([title, icon, description]) => (
            <button
              className="account-link"
              key={title}
              onClick={() => navigate(title)}
            >
              <span className="account-link-icon">{icon}</span>
              <span><strong>{title}</strong><small>{description}</small></span>
              <span>→</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  function renderAddresses() {
    return (
      <div className="addresses-layout">
        <section className="form-card">
          <h3>Add a delivery address</h3>
          <form onSubmit={addAddress}>
            <div className="form-grid">
              <label>
                Address label
                <select name="label" defaultValue="Home">
                  <option>Home</option>
                  <option>Work</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                Full name
                <input name="name" required placeholder="Your name" />
              </label>
              <label>
                Phone
                <input name="phone" required pattern="[0-9]{10}" placeholder="10-digit phone number" />
              </label>
              <label>
                PIN code
                <input name="pincode" required pattern="[0-9]{6}" placeholder="6-digit PIN code" />
              </label>
              <label className="form-wide">
                Complete address
                <textarea name="address" required rows="3" placeholder="House number, street and area" />
              </label>
              <label>
                City
                <input name="city" required defaultValue="Salem" />
              </label>
            </div>
            <button className="primary-button" type="submit">Save address</button>
          </form>
        </section>

        <section className="saved-addresses">
          <h3>Your saved addresses</h3>
          {!addresses.length && <p className="muted">No saved addresses yet.</p>}
          {addresses.map((address) => (
            <article className="saved-address-card" key={address.id}>
              <span className="address-icon">⌖</span>
              <div>
                <strong>{address.label}</strong>
                <p>{address.name} · {address.phone}</p>
                <p>{address.address}, {address.city} — {address.pincode}</p>
              </div>
              <button
                className="remove-button"
                onClick={() => setAddresses((previous) =>
                  previous.filter((item) => item.id !== address.id)
                )}
              >
                Remove
              </button>
            </article>
          ))}
        </section>
      </div>
    );
  }

  function renderHistory() {
    return (
      <div className="order-list">
        {!orders.length && (
          <div className="empty-state">
            <span>🧾</span>
            <h3>No orders yet</h3>
            <p>Your demo orders will appear here after checkout.</p>
            <button className="primary-button" onClick={() => navigate("Explore Menu")}>
              Explore Menu
            </button>
          </div>
        )}

        {orders.map((order) => (
          <article className="order-card" key={order.id}>
            <div className="order-card-top">
              <div>
                <span className="eyebrow">ORDER ID</span>
                <h3>{order.id}</h3>
                <small>{order.date}</small>
              </div>
              <span className="status-pill">{order.status}</span>
            </div>
            <div className="order-products">
              {order.items.map((item) => (
                <div key={item.id}>
                  <span>{item.name} × {item.quantity}</span>
                  <strong>{money(item.price * item.quantity)}</strong>
                </div>
              ))}
            </div>
            <div className="order-card-bottom">
              <span>Payment: {order.payment}</span>
              <strong>{money(order.total)}</strong>
            </div>
            <button
              className="secondary-button"
              onClick={() => {
                setLastOrder(order);
                navigate("Track Order");
              }}
            >
              Track demo order →
            </button>
          </article>
        ))}
      </div>
    );
  }

  function renderTracking() {
    const order = lastOrder || orders[0];

    if (!order) {
      return (
        <div className="empty-state">
          <span>🛵</span>
          <h3>No order to track</h3>
          <p>Place a demo order first to view its progress.</p>
          <button className="primary-button" onClick={() => navigate("Explore Menu")}>
            Browse menu
          </button>
        </div>
      );
    }

    const stages = [
      "Order Confirmed",
      "Preparing Food",
      "Ready for Pickup",
      "Delivered",
    ];

    const activeIndex = Math.max(0, stages.indexOf(order.status));

    return (
      <div className="tracking-card">
        <span className="tracking-icon">🛵</span>
        <span className="eyebrow">DEMO ORDER TRACKING</span>
        <h2>{order.status}</h2>
        <p>Order {order.id}</p>

        <div className="tracking-timeline">
          {stages.map((stage, index) => (
            <div
              key={stage}
              className={`tracking-stage ${index <= activeIndex ? "completed" : ""}`}
            >
              <span className="tracking-dot">{index < activeIndex ? "✓" : index + 1}</span>
              <div>
                <strong>{stage}</strong>
                <small>
                  {index < activeIndex
                    ? "Step completed"
                    : index === activeIndex
                      ? "Current demo status"
                      : "Awaiting previous step"}
                </small>
              </div>
            </div>
          ))}
        </div>

        <div className="demo-status-controls">
          <p>Demo control: update the order status to test the experience.</p>
          <div className="status-buttons">
            {stages.map((stage) => (
              <button
                className="secondary-button"
                key={stage}
                onClick={() => updateOrderStatus(order.id, stage)}
              >
                {stage}
              </button>
            ))}
          </div>
        </div>

        <p className="demo-note">
          This is a simulated timeline. It does not use GPS or contact a delivery partner.
        </p>
      </div>
    );
  }

  function renderOrderSuccess() {
    if (!lastOrder) {
      return (
        <div className="empty-state">
          <span>🧾</span>
          <h3>Your next happy moment starts here.</h3>
          <button className="primary-button" onClick={() => navigate("Explore Menu")}>
            Explore menu
          </button>
        </div>
      );
    }

    return (
      <div className="success-card">
        <div className="success-icon">✓</div>
        <span className="eyebrow">THANK YOU FOR CHOOSING GAYU</span>
        <h2>Your demo order is confirmed!</h2>
        <p>Order ID: <strong>{lastOrder.id}</strong></p>
        <p>Total: <strong>{money(lastOrder.total)}</strong></p>
        <p>Payment: {lastOrder.payment}</p>
        <div className="success-actions">
          <button className="primary-button" onClick={() => navigate("Track Order")}>
            Track demo order →
          </button>
          <button className="secondary-button" onClick={() => navigate("My Order History")}>
            View order history
          </button>
        </div>
        <p className="demo-note">
          This is a local frontend demo. No restaurant was notified and no payment was taken.
        </p>
      </div>
    );
  }

  function renderStory() {
    return (
      <article className="story-page">
        <div className="story-hero-image">
          <img src={FOOD_IMAGES.dessert} alt="A beautiful food moment" />
          <div className="story-image-overlay">
            <span>THE STORY BEHIND THE BRAND</span>
            <h1>A Little Inspiration.<br />A Lot of Heart.</h1>
          </div>
        </div>
        <div className="story-content">
          <span className="eyebrow">OUR JOURNEY</span>
          <p>
            GaYu Foods began as more than just a website idea. It grew from
            a simple belief: the little things in life can hold the greatest
            meaning — a meal shared with love, a thoughtful gesture, or a
            beautiful memory that brings a smile.
          </p>
          <p>
            Behind the name GaYu lies a personal inspiration connected to
            someone special. That inspiration became a reason to learn,
            create, dream bigger, and build something meaningful.
          </p>
          <p>
            Life doesn't always unfold the way we imagine, and the future
            is never certain. But sometimes, the most beautiful thing we can
            do with our feelings is turn them into something positive —
            something we can learn from, grow through, and proudly create.
          </p>
          <p>
            That's what GaYu Foods represents: a dream built with sincerity,
            a passion for food, and a heart that believes happiness can begin
            with even the smallest things.
          </p>
          <p>
            Every dish tells a story. Every flavour creates a memory. And
            every little detail is designed to make someone smile.
          </p>
          <blockquote>
            GaYu Foods — Made with Love. Served with Happiness.
          </blockquote>
          <button className="primary-button" onClick={() => navigate("Explore Menu")}>
            Discover our menu →
          </button>
        </div>
      </article>
    );
  }

  function renderReviews() {
    return (
      <div className="reviews-layout">
        <section className="form-card">
          <h3>Share your experience</h3>
          <p className="muted">Tell the GaYu Foods community what you think.</p>
          <form onSubmit={submitReview}>
            <label>
              Your name
              <input name="name" required placeholder="Enter your name" />
            </label>
            <label>
              Rating
              <select name="rating" defaultValue="5">
                <option value="5">★★★★★ — Excellent</option>
                <option value="4">★★★★☆ — Very good</option>
                <option value="3">★★★☆☆ — Good</option>
                <option value="2">★★☆☆☆ — Fair</option>
                <option value="1">★☆☆☆☆ — Needs improvement</option>
              </select>
            </label>
            <label>
              Your review
              <textarea name="message" rows="4" required minLength="3" placeholder="Write something kind and honest..." />
            </label>
            <button className="primary-button" type="submit">Submit review</button>
          </form>
        </section>

        <section className="reviews-list">
          <h3>Community reviews</h3>
          {reviews.map((review) => (
            <article className="review-card" key={review.id}>
              <div className="review-stars">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</div>
              <p>“{review.message}”</p>
              <strong>{review.name}</strong>
            </article>
          ))}
        </section>
      </div>
    );
  }

  function renderNotifications() {
    return (
      <div className="notification-list">
        {!notifications.length && <p className="muted">No notifications yet.</p>}
        {notifications.map((notification) => (
          <article
            key={notification.id}
            className={`notification-card ${notification.read ? "read" : ""}`}
          >
            <span className="notification-icon">♧</span>
            <div>
              <strong>{notification.title}</strong>
              <p>{notification.message}</p>
            </div>
            {!notification.read && (
              <button
                className="text-link"
                onClick={() => setNotifications((previous) =>
                  previous.map((item) =>
                    item.id === notification.id ? { ...item, read: true } : item
                  )
                )}
              >
                Mark read
              </button>
            )}
          </article>
        ))}
      </div>
    );
  }

  function renderProfile() {
    return (
      <section className="form-card profile-form-card">
        <h3>Your personal details</h3>
        <p className="muted">These details are saved in this browser for the demo.</p>
        <form onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          setProfile({
            name: data.get("name"),
            email: data.get("email"),
            phone: data.get("phone"),
          });
          setToast("Profile updated!");
        }}>
          <label>
            Full name
            <input name="name" required defaultValue={profile.name} placeholder="Your name" />
          </label>
          <label>
            Email address
            <input name="email" type="email" defaultValue={profile.email} placeholder="you@example.com" />
          </label>
          <label>
            Phone number
            <input name="phone" pattern="[0-9]{10}" defaultValue={profile.phone} placeholder="10-digit phone number" />
          </label>
          <button className="primary-button" type="submit">Save changes</button>
        </form>
      </section>
    );
  }

  function renderContentPage() {
    const content = {
      "About GaYu": {
        eyebrow: "OUR BRAND",
        title: "Good food. Great moods.A Dream Born From My Heart ❤️",
        paragraphs: [
          "Some dreams begin with an idea. Some begin with a passion. But this dream began with someone who became incredibly special to my heart.",
          "GaYu Foods is more than just a food delivery website to me. It carries a feeling, a memory, a hope, and a love that words can never fully explain.",
          "Our goal is to make exploring dishes, comparing options and organising a food order feel simple and welcoming.",
          "This version is an interactive frontend demo. Restaurant availability, delivery estimates and pricing are illustrative.",
          "here is someone I care about deeply. Someone who means more to me than she may ever realise. I don't know what the future holds for us. I don't know whether our paths will lead us to the same destination or whether life has a different plan for us.",
           "But one thing I know is that my feelings are genuine.I never started this dream because I was certain that she would be mine someday. I started building it because the feelings in my heart inspired me to create something meaningful. Even when I don't know what tomorrow will bring, I want to turn the love I carry into something beautiful.",
            "Maybe someday, she will understand how much this little dream means to me. Maybe someday, she will see the heart behind the name GaYu and understand why I put so much love into building it.",
              "And maybe life will surprise me in ways I cannot imagine.",
             "I love her, not because I know she will be part of my future, but because she has already become a meaningful part of my journey.",
             "I don't want my feelings to become a burden to her. I want them to be a reason for me to grow, to learn, to work harder, and to become someone who can turn dreams into reality.",
            "Whatever the future holds, I will always be grateful for the inspiration that gave this dream its beginning.",
           "This website is one small piece of a feeling that was once too big for words. Every design, every detail, and every effort carries a little part of the heart that imagined it.",
           "To the person who inspired this dream: You may never fully know how much you mean to me, but a part of my journey will always carry the inspiration you gave me.",
           "And to everyone visiting GaYu Foods, I hope this little dream brings you happiness through every meal, every flavour, and every memory you create.",
           "Some feelings become memories. Some become lessons. And some become dreams that inspire us to build something beautiful.",
           "GaYu Foods Made with Love. Served with Happiness.",
           "With a sincere heart He loves her in Every Universe",
           "By Bharath ❤️"
        ],
      },
      "Mission & Vision": {
        eyebrow: "WHAT WE BELIEVE",
        title: "A little happiness in every meal.",
        paragraphs: [
          "Mission: create a friendly and easy way for people to discover food they love.",
          "Vision: build a thoughtful food platform where great flavours and happy moments belong together.",
          "Our values are sincerity, creativity, accessibility and continuous learning.",
        ],
      },
      "Help Centre": {
        eyebrow: "WE'RE HERE TO HELP",
        title: "How can we help?",
        paragraphs: [
          "How do I order? Explore the menu, add items to your cart and complete the demo checkout.",
          "How do coupons work? Try GAYU10 for 10% off or WELCOME50 for ₹50 off eligible demo orders.",
          "Is payment real? No. This frontend demonstration does not process payments.",
          "Is tracking live? No. The tracking timeline is simulated and can be changed for demonstration purposes.",
        ],
      },
      "Contact Us": {
        eyebrow: "GET IN TOUCH",
        title: "Let's start a conversation.",
        paragraphs: [
          "Have a suggestion or feedback about GaYu Foods? Use the demo form below.",
          "This prototype has no support server or email delivery configured. Submitting the form displays a local confirmation only.",
        ],
      },
      "Payment Methods": {
        eyebrow: "PAYMENT OPTIONS",
        title: "Choose how you'd like to pay.",
        paragraphs: [
          "Cash on Delivery — available as a simulated checkout selection.",
          "UPI — demo option only. No UPI application or transaction is opened.",
          "Card — demo option only. No card details are requested or processed.",
          "A production website needs a secure payment gateway and server-side verification.",
        ],
      },
      "Settings": {
        eyebrow: "MAKE IT YOURS",
        title: "Your experience, your way.",
        paragraphs: [
          "Change the website appearance using the theme control in the header.",
          "Cart, favourites, profile, reviews, addresses and demo orders are stored locally in this browser.",
          "Clearing browser storage may remove these demo details.",
        ],
      },
      "Privacy Policy": {
        eyebrow: "YOUR PRIVACY",
        title: "Privacy matters.",
        paragraphs: [
          "This demonstration stores selected data in your browser's localStorage.",
          "It does not include a server-side account system, payment processor, advertising tracker or live order service.",
          "Do not enter sensitive personal information into this demonstration.",
          "A production privacy policy must be reviewed and adapted to the actual data collection and applicable law before launch.",
        ],
      },
      "Terms & Conditions": {
        eyebrow: "PLEASE READ",
        title: "Demo terms of use.",
        paragraphs: [
          "GaYu Foods in this version is an interactive frontend demonstration.",
          "Prices, food availability, discounts, restaurant listings and delivery times are examples and are not live offers.",
          "Orders created in the demonstration do not notify a restaurant and do not create a real delivery.",
          "Production terms must be written for the actual operating business and reviewed before launch.",
        ],
      },
      "Get the App": {
        eyebrow: "YOUR HOME SCREEN",
        title: "A more app-like GaYu Foods.",
        paragraphs: [
          "GaYu Foods can be configured as a Progressive Web App so compatible browsers can install it on a supported device.",
          "To make installation work, the project needs a web app manifest, suitable icons and a service worker. Those files are separate from App.jsx and App.css.",
          "A PWA installation does not automatically publish the website to the Google Play Store.",
        ],
      },
      "Search": {
        eyebrow: "FIND SOMETHING DELICIOUS",
        title: "What are you craving today?",
        paragraphs: ["Search for dishes by name or food category."],
      },
      "Offers & Coupons": {
        eyebrow: "A LITTLE SOMETHING EXTRA",
        title: "Good food, better value.",
        paragraphs: [
          "GAYU10 — 10% off your demo subtotal, up to ₹100.",
          "WELCOME50 — ₹50 off demo orders with a subtotal of at least ₹199.",
          "These coupon rules operate only in this frontend demonstration.",
        ],
      },
      "Reviews & Ratings": {
        eyebrow: "FOOD LOVERS' CORNER",
        title: "Every experience has a story.",
        paragraphs: ["Share your thoughts and read community demo reviews."],
      },
    };

    const info = content[page];

    if (!info) return null;

    return (
      <section className="content-page">
        <span className="eyebrow">{info.eyebrow}</span>
        <h1>{info.title}</h1>

        {info.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {page === "Contact Us" && (
          <form className="form-card contact-form" onSubmit={(event) => {
            event.preventDefault();
            event.currentTarget.reset();
            setToast("Demo enquiry submitted locally.");
          }}>
            <label>Your name<input required name="name" placeholder="Your name" /></label>
            <label>Email<input required name="email" type="email" placeholder="you@example.com" /></label>
            <label>Message<textarea required name="message" rows="4" placeholder="How can we help?" /></label>
            <button className="primary-button" type="submit">Send demo enquiry</button>
          </form>
        )}

        {page === "Offers & Coupons" && (
          <div className="offer-list">
            <article className="offer-card">
              <span className="offer-card-icon">%</span>
              <div><strong>GAYU10</strong><p>10% off, up to ₹100.</p></div>
              <button className="secondary-button" onClick={() => {
                setCouponInput("GAYU10");
                navigate("Cart");
              }}>Use code</button>
            </article>
            <article className="offer-card">
              <span className="offer-card-icon">₹</span>
              <div><strong>WELCOME50</strong><p>₹50 off on eligible carts.</p></div>
              <button className="secondary-button" onClick={() => {
                setCouponInput("WELCOME50");
                navigate("Cart");
              }}>Use code</button>
            </article>
          </div>
        )}

        {page === "Reviews & Ratings" && renderReviews()}

        {page === "Search" && (
          <div className="search-page-box">
            <div className="search-input-wrap">
              <span>⌕</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search biryani, burgers, desserts..."
                autoFocus
              />
              {query && <button onClick={() => setQuery("")}>Clear</button>}
            </div>
            <FoodGrid />
          </div>
        )}

        {page === "Get the App" && (
          <div className="install-info">
            <span>📱</span>
            <div>
              <h3>Install GaYu Foods</h3>
              <p>On a compatible browser, open the browser menu and look for “Install app” or “Add to Home Screen” once the PWA setup is complete.</p>
            </div>
          </div>
        )}
      </section>
    );
  }

  function renderPage() {
    if (page === "Home") return renderHome();

    if (page === "Explore Menu") {
      return (
        <>
          <SectionHeading
            eyebrow="MADE FOR YOUR CRAVINGS"
            title="Explore the menu"
            description="Find something delicious, one dish at a time."
          />
          <div className="menu-toolbar">
            <div className="search-input-wrap">
              <span>⌕</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search dishes..."
              />
              {query && <button onClick={() => setQuery("")}>Clear</button>}
            </div>
            <span className="muted">{filteredFoods.length} dishes</span>
          </div>

          <div className="filter-chips">
            {categories.map((item) => (
              <button
                key={item.name}
                className={category === item.name ? "filter-chip active" : "filter-chip"}
                onClick={() => setCategory(item.name)}
              >
                {item.icon} {item.name}
              </button>
            ))}
          </div>
          <FoodGrid />
        </>
      );
    }

    if (page === "Restaurants") return renderRestaurants();
    if (page === "Cart") return renderCart();
    if (page === "Checkout") return renderCheckout();
    if (page === "Order Success") return renderOrderSuccess();
    if (page === "Track Order") return renderTracking();
    if (page === "My Order History") return renderHistory();
    if (page === "Saved Addresses") return renderAddresses();
    if (page === "My Account") return renderProfile();
    if (page === "Notifications") return renderNotifications();
    if (page === "Favourites") {
      return (
        <>
          <SectionHeading eyebrow="SAVED WITH LOVE" title="Your favourites" description="All the dishes you've saved in one place." />
          <FoodGrid />
        </>
      );
    }
    if (page === "Popular Dishes" || page === "Bestsellers" || page === "New Arrivals" || page === "Veg Specials" || page === "Non-Veg Specials") {
      return (
        <>
          <SectionHeading
            eyebrow="PICKED FOR YOU"
            title={page}
            description="Discover dishes for your next happy meal."
          />
          <FoodGrid />
        </>
      );
    }
    if (page === "Food Details") {
      const food = selectedFood || initialFoods[0];

      return (
        <div className="food-detail-layout">
          <div className="food-detail-image">
            <img src={food.image} alt={food.name} />
          </div>
          <div className="food-detail-content">
            <span className="eyebrow">{food.category}</span>
            <h1>{food.name}</h1>
            <div className="food-meta">
              <span className="rating">★ {food.rating}</span>
              <span>◷ {food.time}</span>
            </div>
            <p>{food.description}</p>
            <div className="detail-price">
              <strong>{money(food.price)}</strong>
              {food.oldPrice > food.price && <del>{money(food.oldPrice)}</del>}
            </div>
            <p className="muted">Demo menu item. Availability may vary.</p>
            <div className="detail-actions">
              <button className="primary-button" onClick={() => addToCart(food)}>Add to cart +</button>
              <button className="secondary-button" onClick={() => toggleFavourite(food)}>
                {favourites.includes(food.id) ? "♥ Saved" : "♡ Favourite"}
              </button>
            </div>
            <button className="text-link" onClick={() => navigate("Explore Menu")}>← Back to menu</button>
          </div>
        </div>
      );
    }
    if (page === "Restaurant Details") {
      const restaurant = selectedRestaurant || restaurants[0];

      return (
        <>
          <div className="restaurant-detail-hero">
            <img src={restaurant.image} alt={restaurant.name} />
            <div>
              <span className="eyebrow">RESTAURANT PROFILE · DEMO</span>
              <h1>{restaurant.name}</h1>
              <p>{restaurant.cuisine}</p>
              <p>★ {restaurant.rating} · {restaurant.time}</p>
            </div>
          </div>
          <SectionHeading eyebrow="THE MENU" title="Popular picks" description="Sample menu items for this restaurant." />
          <FoodGrid />
        </>
      );
    }
    if (page === "Our Story") return renderStory();
    if (page === "Reviews & Ratings") return renderReviews();
    if (page === "Settings") {
      return (
        <section className="form-card settings-card">
          <span className="eyebrow">PERSONALISE YOUR EXPERIENCE</span>
          <h2>Settings</h2>
          <label className="setting-row">
            <span><strong>Dark mode</strong><small>Switch between light and dark appearance.</small></span>
            <input type="checkbox" checked={dark} onChange={(event) => setDark(event.target.checked)} />
          </label>
          <label className="setting-row">
            <span><strong>Clear search</strong><small>Reset the current menu search.</small></span>
            <button className="secondary-button" onClick={() => setQuery("")}>Clear</button>
          </label>
        </section>
      );
    }
    if (page === "Payment Methods") {
      return (
        <div className="form-card">
          <h2>Payment methods</h2>
          <p>Available demo checkout options:</p>
          <ul className="plain-list">
            <li>Cash on Delivery</li>
            <li>UPI — demonstration only</li>
            <li>Card — demonstration only</li>
          </ul>
          <p className="demo-note">No real payments are collected.</p>
        </div>
      );
    }
    if (page === "Contact Us" || page === "About GaYu" || page === "Mission & Vision" || page === "Help Centre" || page === "Offers & Coupons" || page === "Get the App" || page === "Privacy Policy" || page === "Terms & Conditions" || page === "Search") {
      return renderContentPage();
    }
    if (page === "Account Overview") return renderAccount();

    return (
      <div className="empty-state">
        <span>♡</span>
        <h3>{page}</h3>
        <p>This section is part of the GaYu Foods demo.</p>
        <button className="primary-button" onClick={() => navigate("Home")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className={`gayu-app ${dark ? "dark-theme" : ""}`}>
      <div className="announcement-bar">
        <span>✦</span> Made with Love. Served with Happiness.
        <button onClick={() => navigate("Offers & Coupons")}>Explore offers →</button>
      </div>

      <header className="site-header">
        <button className="mobile-menu-button" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Open menu">
          {mobileMenu ? "✕" : "☰"}
        </button>

        <button className="brand-logo" onClick={() => navigate("Home")}>
          <span className="brand-mark">G</span>
          <span className="brand-text">
            <strong>GaYu</strong>
            <small>F O O D S</small>
          </span>
        </button>

        <nav className="desktop-nav">
          {["Home", "Explore Menu", "Restaurants", "Offers & Coupons"].map((item) => (
            <button
              key={item}
              className={page === item ? "nav-link active" : "nav-link"}
              onClick={() => navigate(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button search-header-button"
            onClick={() => {
              setSearchOpen(!searchOpen);
              setPage("Search");
            }}
            aria-label="Search"
          >
            ⌕
          </button>

          <button className="icon-button favourites-header-button" onClick={() => navigate("Favourites")} aria-label="Favourites">
            ♡
          </button>

          <button className="icon-button cart-header-button" onClick={() => navigate("Cart")} aria-label="Cart">
            ♧
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>

          <button className="account-header-button" onClick={() => navigate("Account Overview")}>
            <span>♙</span> <span>Account</span>
          </button>

          <button className="theme-button" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? "☀" : "☾"}
          </button>
        </div>
      </header>

      {searchOpen && (
        <div className="header-search-panel">
          <div className="search-input-wrap">
            <span>⌕</span>
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search dishes..."
            />
            <button onClick={() => setSearchOpen(false)}>✕</button>
          </div>
        </div>
      )}

      {mobileMenu && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenu(false)}>
          <aside className="mobile-menu-panel" onClick={(event) => event.stopPropagation()}>
            <div className="mobile-menu-heading">
              <div className="brand-logo">
                <span className="brand-mark">G</span>
                <span className="brand-text"><strong>GaYu</strong><small>F O O D S</small></span>
              </div>
              <button onClick={() => setMobileMenu(false)}>✕</button>
            </div>

            {navigationGroups.map((group) => (
              <div className="nav-group" key={group.title}>
                <span>{group.title}</span>
                {group.items.map(([title, icon]) => (
                  <button key={title} onClick={() => navigate(title)}>
                    <span>{icon}</span>{title}<span className="nav-arrow">→</span>
                  </button>
                ))}
              </div>
            ))}
          </aside>
        </div>
      )}

      <main className="main-content">
        {page !== "Home" && (
          <div className="breadcrumb">
            <button onClick={() => navigate("Home")}>Home</button>
            <span>/</span>
            <strong>{page}</strong>
          </div>
        )}

        {renderPage()}
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand-column">
            <button className="brand-logo footer-logo" onClick={() => navigate("Home")}>
              <span className="brand-mark">G</span>
              <span className="brand-text"><strong>GaYathri</strong><small>F O O D S</small></span>
            </button>
            <p>Great food. Happy moments.<br />A little happiness in every meal.</p>
            <span className="footer-tagline">Made with Love. Served with Happiness.</span>
          </div>

          {[
            {
              title: "Explore",
              links: ["Explore Menu", "Restaurants", "Popular Dishes", "Bestsellers", "Veg Specials"],
            },
            {
              title: "Your account",
              links: ["My Account", "My Order History", "Favourites", "Saved Addresses", "Help Centre"],
            },
            {
              title: "GaYu Foods",
              links: ["About GaYu", "Our Story", "Mission & Vision", "Contact Us", "Get the App"],
            },
          ].map((column) => (
            <div className="footer-column" key={column.title}>
              <h4>{column.title}</h4>
              {column.links.map((link) => (
                <button key={link} onClick={() => navigate(link)}>{link}</button>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} GaYu Foods. Built with care.By BHARATH</span>
          <div>
            <button onClick={() => navigate("Privacy Policy")}>Privacy Policy</button>
            <button onClick={() => navigate("Terms & Conditions")}>Terms & Conditions</button>
          </div>
        </div>
      </footer>

      <nav className="mobile-bottom-nav">
        {[
          ["Home", "⌂"],
          ["Search", "⌕"],
          ["Favourites", "♡"],
          ["Cart", "♧"],
          ["Account Overview", "♙"],
        ].map(([title, icon]) => (
          <button
            key={title}
            className={
              page === title || (title === "Account Overview" && page === "My Account")
                ? "mobile-nav-item active"
                : "mobile-nav-item"
            }
            onClick={() => navigate(title)}
          >
            <span className="mobile-nav-icon">
              {icon}
              {title === "Cart" && cartCount > 0 && <span className="mobile-cart-count">{cartCount}</span>}
            </span>
            <small>{title === "Account Overview" ? "Account" : title}</small>
          </button>
        ))}
      </nav>

      {toast && <div className="toast-message">{toast}</div>}
    </div>
  );
}



                        