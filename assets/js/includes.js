(() => {
  /* =====================================================
     SHARED HEADER & FOOTER
     Edit the HTML below once — it loads on every page.
     ===================================================== */

  const HEADER_HTML = `
<a href="https://wa.me/923001234567" class="whatsapp-btn" target="_blank" aria-label="WhatsApp">
    <i class="fab fa-whatsapp"></i>
</a>

<header class="main-header">
    <nav class="navbar navbar-expand-xl navbar-dark">
        <div class="container">

            <a class="navbar-brand fw-bold p-0 m-0" href="./index.html">
                <img src="./assets/images/logo/header/logo.png" alt="Vawda" height="65">
            </a>
            <div class="call-us mobile-call">
                <div class="call-icon">
                    <i class="fal fa-phone-alt"></i>
                </div>
                <div class="call-text">
                    <span>Call us Anytime</span>
                    <p>+92 (21) 32550093-98</p>
                </div>
            </div>
            <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="./index.html" data-nav="home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-nav="about">About Us</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-nav="products">
                            Products
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="./textile-dyes-and-chemicals.html" class="dropdown-item">Textile Dyes & Chemicals</a></li>
                            <li><a href="./masterbatch.html" class="dropdown-item">Masterbatch</a></li>
                            <li><a href="#" class="dropdown-item">Pigment Powder & Emulsion</a></li>
                            <li><a href="#" class="dropdown-item">Toner Cartridges</a></li>
                            <li><a href="#" class="dropdown-item">Office Supplies</a></li>
                            <li><a href="#" class="dropdown-item">Industrial Automation Division</a></li>
                            <li><a href="#" class="dropdown-item">Industrial Air Compressor</a></li>
                            <li><a href="#" class="dropdown-item">Confectionery</a></li>
                            <li><a href="#" class="dropdown-item">Security Solutions</a></li>
                            <li><a href="#" class="dropdown-item">Printing Machines</a></li>
                            <li><a href="#" class="dropdown-item">Energy Solutions</a></li>
                            <li><a href="#" class="dropdown-item">Office Furniture</a></li>
                            <li><a href="#" class="dropdown-item">Warehousing Solutons</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-nav="principals">Our Principals</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-nav="certificates">Certificates</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./news-events.html" data-nav="news">News & Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-nav="careers">Careers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-nav="contact">Contact Us</a>
                    </li>
                </ul>
                <div class="call-us desktop-call">
                    <div class="call-icon">
                        <i class="fal fa-phone-alt"></i>
                    </div>
                    <div class="call-text">
                        <span>Call us Anytime</span>
                        <p>+92 (21) 32550093-98</p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>
`;

  const FOOTER_HTML = `
<footer class="footer-section">
    <div class="container">
        <div class="row gy-3 justify-content-center">
            <div class="col-lg-3">
                <a href="./index.html">
                    <img src="./assets/images/logo/footer/logo.png" alt="Vawda" height="60">
                </a>
                <p class="mt-3">
                    Vawda is a diversified industrial and business solutions provider delivering quality products,
                    advanced technology and reliable services to industries across the globe.
                </p>
                <div class="footer-social">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="col-lg-2 col-sm-4 col-6">
                <h5>Quick Links</h5>
                <ul class="footer-links">
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Our Principals</a></li>
                    <li><a href="#">Certificates</a></li>
                    <li><a href="./news-events.html">News & Events</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-sm-4 col-6">
                <h5>Products</h5>
                <ul class="footer-links">
                    <li><a href="./textile-dyes-and-chemicals.html">Textile Dyes & Chemicals</a></li>
                    <li><a href="./masterbatch.html">Masterbatch</a></li>
                    <li><a href="#">Pigment Powder & Emulsion</a></li>
                    <li><a href="#">Toner Cartridges</a></li>
                    <li><a href="#">Office Supplies</a></li>
                    <li><a href="#">Industrial Automation Division</a></li>
                    <li><a href="#">Industrial Air Compressor</a></li>
                    <li><a href="#">Confectionery</a></li>
                    <li><a href="#">Security Solutions</a></li>
                    <li><a href="#">Printing Machines</a></li>
                    <li><a href="#">Energy Solutions</a></li>
                    <li><a href="#">Office Furniture</a></li>
                    <li><a href="#">Warehousing Solutons</a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-sm-4 col-6">
                <h5>Contact Info</h5>
                <div class="contact-box">
                    <i class="fal fa-map-marker-alt"></i>
                    <div class="contact-text">
                        <h5>Head Office:</h5>
                        <p>B-66/A, S.I.T.E., Area, Karachi-75700, Pakistan.</p>
                    </div>
                </div>
                <div class="contact-box">
                    <i class="fal fa-phone-alt"></i>
                    <div class="contact-text">
                        <h5>Phone:</h5>
                        <p>+92 (21) 32550093-98</p>
                    </div>
                </div>
                <div class="contact-box">
                    <i class="fal fa-envelope"></i>
                    <div class="contact-text">
                        <h5>Email:</h5>
                        <p>info@vawda.com</p>
                    </div>
                </div>
                <div class="contact-box">
                    <i class="fal fa-clock"></i>
                    <div class="contact-text">
                        <h5>Working Hours:</h5>
                        <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="newsletter-box">
                    <h5>NEWSLETTER</h5>
                    <p>
                        Subscribe to get updates on our
                        latest products and offers.
                    </p>
                    <form class="newsletter-form">
                        <input type="email" placeholder="Enter your email">
                        <button type="submit">
                            <i class="fa fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="footer-bottom-section">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="footer-bottom">
                        © 2024 Vawda. All Rights Reserved.
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <span class="line"></span>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
`;

  const productPages = [
    "textile-dyes-and-chemicals.html",
    "masterbatch.html",
  ];

  const pageNavMap = {
    "index.html": "home",
    "index2.html": "home",
    "news-events.html": "news",
    "textile-dyes-and-chemicals.html": "products",
    "masterbatch.html": "products",
  };

  const getPageName = () => {
    const path = window.location.pathname.replace(/\\/g, "/");
    const file = path.split("/").pop();
    return file && file.includes(".") ? file : "index.html";
  };

  const setActiveNav = () => {
    const page = getPageName();
    const navKey = pageNavMap[page];
    if (!navKey) return;

    document.querySelectorAll(".main-header .nav-link.active").forEach((link) => {
      link.classList.remove("active");
    });

    const activeLink = document.querySelector(
      `.main-header .nav-link[data-nav="${navKey}"]`
    );
    if (activeLink) activeLink.classList.add("active");

    if (productPages.includes(page)) {
      document.querySelectorAll(".main-header .dropdown-item").forEach((item) => {
        const href = item.getAttribute("href") || "";
        item.classList.toggle("active", href.includes(page));
      });
    }
  };

  const inject = (selector, html) => {
    const target = document.querySelector(selector);
    if (!target) return;
    target.outerHTML = html.trim();
  };

  const boot = () => {
    inject("#site-header", HEADER_HTML);
    inject("#site-footer", FOOTER_HTML);
    setActiveNav();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
