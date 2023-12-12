// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav"); // Membuat varibel baru dan panggil elemen class navbar-nav
// Ketika hamburger-menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  // () = menggunakan aerofunction
  navbarNav.classList.toggle("active"); // Setelah di klik, maka lakukan action
};

// Klik diluar Sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu"); // Membuat varibel baru dan panggil elemen hamburger-menu

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// Translate dari kode diatas sbb
// document.addEventListener('click', function(e) = Ketika di klik dimanapun halaman. Kita pakai function supaya bisa ambil event.
// (Jalankan fungsi, ambil event nya. Note : Kasus ini ga pakai aerofunction)
// {
// if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) = Jika atau selama yang di klik bukan hamburger dan navbar......
// }
// navbarNav.classList.remove('active') = Maka, hilangkan active.
