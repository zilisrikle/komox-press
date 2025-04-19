export default {
    title: "The Komox Library",
    description: "虎鲸故事 × 音乐审美 × 自我宇宙",
    themeConfig: {
      nav: [
        { text: "馆", link: "/" },
        { text: "虎鲸", link: "/whales" },
        { text: "音乐", link: "/glass-animals" },
      ],
      sidebar: {
        "/": [
          {
            text: "虎鲸档案",
            items: [
              { text: "Komox", link: "/komox" },
              { text: "虎鲸图鉴", link: "/whales" }
            ]
          },
          {
            text: "音乐审美",
            items: [
              { text: "Glass Animals", link: "/glass-animals" }
            ]
          }
        ]
      }
    }
  }
  