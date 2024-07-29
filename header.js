function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    const cartMenu = document.getElementById('cart-dropdown');
    const friendRequestsMenu = document.getElementById('friend-requests-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
        cartMenu.style.display = 'none';
        friendRequestsMenu.style.display = 'none'; 
    }
}

function toggleCartMenu() {
    const cartMenu = document.getElementById('cart-dropdown');
    const profileMenu = document.getElementById('dropdown-menu');
    const friendRequestsMenu = document.getElementById('friend-requests-menu');
    if (cartMenu.style.display === 'block') {
        cartMenu.style.display = 'none';
    } else {
        cartMenu.style.display = 'block';
        profileMenu.style.display = 'none';
        friendRequestsMenu.style.display = 'none'; 
    }
}

function toggleFriendRequestsMenu() {
    const friendRequestsMenu = document.getElementById('friend-requests-menu');
    const profileMenu = document.getElementById('dropdown-menu');
    const cartMenu = document.getElementById('cart-dropdown');
    if (friendRequestsMenu.style.display === 'block') {
        friendRequestsMenu.style.display = 'none';
    } else {
        friendRequestsMenu.style.display = 'block';
        profileMenu.style.display = 'none';
        cartMenu.style.display = 'none'; 
    }
}

document.getElementById('cart-icon').addEventListener('click', function(event) {
    event.stopPropagation();
    toggleCartMenu();
});

document.getElementById('heart-icon').addEventListener('click', function(event) {
    event.stopPropagation();
    toggleFriendRequestsMenu();
});

document.addEventListener('click', function(event) {
    const menu = document.getElementById('dropdown-menu');
    const cartMenu = document.getElementById('cart-dropdown');
    const friendRequestsMenu = document.getElementById('friend-requests-menu');
    if (!event.target.closest('.profile') && menu.style.display === 'block') {
        menu.style.display = 'none';
    }
    if (!event.target.closest('#cart-icon') && cartMenu.style.display === 'block') {
        cartMenu.style.display = 'none';
    }
    if (!event.target.closest('#heart-icon') && friendRequestsMenu.style.display === 'block') {
        friendRequestsMenu.style.display = 'none';
    }
});


document.getElementById('bell-icon').addEventListener('click', function(event) {
    event.preventDefault();
    const dropdownMenu = document.getElementById('bell-dropdown');
    dropdownMenu.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdownMenu = document.getElementById('bell-dropdown');
    const bellIcon = document.getElementById('bell-icon');
    if (!dropdownMenu.contains(event.target) && !bellIcon.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});