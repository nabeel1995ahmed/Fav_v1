<?php
$current_page = basename($_SERVER['PHP_SELF']);
$page_nav_map = [
    'index.php' => 'home',
    'index2.php' => 'home',
    'news-events.php' => 'news',
    'textile-dyes-and-chemicals.php' => 'products',
    'masterbatch.php' => 'products',
    'contact-us.php' => 'contact',
];
$active_nav = $page_nav_map[$current_page] ?? '';

function nav_active($key, $active_nav) {
    return $active_nav === $key ? ' active' : '';
}

function dropdown_active($href, $current_page) {
    return (basename($href) === $current_page) ? ' active' : '';
}
?>
<a href="https://wa.me/923001234567" class="whatsapp-btn" target="_blank" aria-label="WhatsApp">
    <i class="fab fa-whatsapp"></i>
</a>

<header class="main-header">
    <nav class="navbar navbar-expand-xl navbar-dark">
        <div class="container">

            <a class="navbar-brand fw-bold p-0 m-0" href="./index.php">
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
                        <a class="nav-link<?= nav_active('home', $active_nav) ?>" href="./index.php" data-nav="home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link<?= nav_active('about', $active_nav) ?>" href="#" data-nav="about">About Us</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle<?= nav_active('products', $active_nav) ?>" href="#" data-bs-toggle="dropdown" data-nav="products">
                            Products
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="./textile-dyes-and-chemicals.php" class="dropdown-item<?= dropdown_active('./textile-dyes-and-chemicals.php', $current_page) ?>">Textile Dyes & Chemicals</a></li>
                            <li><a href="./masterbatch.php" class="dropdown-item<?= dropdown_active('./masterbatch.php', $current_page) ?>">Masterbatch</a></li>
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
                        <a class="nav-link<?= nav_active('principals', $active_nav) ?>" href="#" data-nav="principals">Our Principals</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link<?= nav_active('certificates', $active_nav) ?>" href="#" data-nav="certificates">Certificates</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link<?= nav_active('news', $active_nav) ?>" href="./news-events.php" data-nav="news">News & Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link<?= nav_active('careers', $active_nav) ?>" href="#" data-nav="careers">Careers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link<?= nav_active('contact', $active_nav) ?>" href="./contact-us.php" data-nav="contact">Contact Us</a>
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
