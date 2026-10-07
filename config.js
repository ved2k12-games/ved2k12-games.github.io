/* =============================================================
   CẤU HÌNH TRANG — chỉ cần sửa file này để cập nhật nội dung.
   ============================================================= */
window.SITE_CONFIG = {
  // ---- Thông tin chung ----
  name: "ved2k12",
  tagline: "Indie game developer",
  bio: "Mình làm game di động và PC. Dưới đây là các project đang có — chơi thử và cho mình biết cảm nhận nhé!",
  avatar: "assets/images/avatar.svg",   // ảnh đại diện (có thể là link ngoài)
  accentColor: "#ff6b3d",               // màu nhấn chủ đạo

  // ---- Mạng xã hội ----
  // icon: tên slug theo https://simpleicons.org (vd: github, facebook, youtube, x, discord, tiktok, gmail...)
  // Xoá dòng nào không dùng.
  socials: [
    { label: "GitHub",   icon: "github",   url: "https://github.com/ved2k12" },
    { label: "Facebook", icon: "facebook", url: "https://facebook.com/your-page" },
    { label: "YouTube",  icon: "youtube",  url: "https://youtube.com/@your-channel" },
    { label: "X",        icon: "x",        url: "https://x.com/your-handle" },
    { label: "Discord",  icon: "discord",  url: "https://discord.gg/your-invite" },
    { label: "Email",    icon: "gmail",    url: "mailto:you@example.com" }
  ],

  // ---- Danh sách project ----
  // stores.type hỗ trợ: googleplay | appstore | steam | itch | web | other
  // status (tuỳ chọn): hiện nhãn nhỏ trên ảnh, vd "Coming soon", "Beta"
  projects: [
    {
      title: "Project 01",
      status: "Coming soon",
      image: "assets/images/project1.svg",
      description: "Mô tả ngắn cho project đầu tiên. Thể loại, điểm nổi bật, nền tảng hỗ trợ.",
      tags: ["Mobile", "Casual"],
      stores: [
        { type: "googleplay", url: "https://play.google.com/store/apps/details?id=com.example.app1" },
        { type: "appstore",   url: "https://apps.apple.com/app/id0000000000" }
      ]
    },
    {
      title: "Project 02",
      status: "",
      image: "assets/images/project2.svg",
      description: "Mô tả ngắn cho project thứ hai. Thay nội dung này khi project sẵn sàng.",
      tags: ["PC", "Action"],
      stores: [
        { type: "steam", url: "https://store.steampowered.com/app/000000" },
        { type: "itch",  url: "https://ved2k12.itch.io/project-02" }
      ]
    },
    {
      title: "Project 03",
      status: "In development",
      image: "assets/images/project3.svg",
      description: "Mô tả ngắn cho project thứ ba. Có thể để trống phần stores nếu chưa phát hành.",
      tags: ["Web"],
      stores: [
        { type: "web", url: "https://ved2k12.github.io/project-03" }
      ]
    }
  ],

  footer: "© 2026 ved2k12"
};
