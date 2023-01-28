const menu_data = [
  {
    title: "Ana Səhifə",
    link: "#",
    mega_menu: false,
    submenus: [
    ],
  },
  {
    title: "Səhifələr",
    link: "#",
    mega_menu: true,
    submenus: [
      {
        mega_submenu: [
          { title: "Haqqımızda", link: "/about-2" },
          { title: "Müəllimlər", link: "/team-3" },
          { title: "Ödəniş", link: "/pricing-table" },
          { title: "Tədbirlər", link: "/event-grid" },
          { title: "Tezliklə", link: "/coming-soon" },
          { title: "Ən çox verilən suallar", link: "/faq" },
        ],
      },
    ],
    mobile_pages_menu: [
      { title: "Haqqımızda", link: "/about-2" },
      { title: "Müəllimlər", link: "/team-3" },
      { title: "Ən çox verilən suallar", link: "/faq" },
      { title: "Tezliklə", link: "/coming-soon" },
      { title: "Tədbirlər", link: "/event-grid" },
    ],
  },
  {
    title: "Kurslar",
    link: "#",
    mega_menu: false,
    submenus: [
    ],
  },
  {
    title: "Əlaqə",
    link: "#",
    mega_menu: false,
    submenus: [
      { title: "Bizimlə əlaqə", link: "/contact-us" },
    ],
  },
];

export default menu_data;