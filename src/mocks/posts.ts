interface PostType {
  id: number;
  user: {
    name: string;
    avatar: string;
    status?: string;
  };
  content: string;
  medias: { type: "image" | "video"; src: string }[];
  reactions: {
    count: number;
    avatars: string[];
  };
  comments: number;
  shares: number;
}

export const posts: PostType[] = [
  {
    id: 10,
    user: {
      name: "Lori Cortez",
      avatar: "/image (1).png",
      status: "Active",
    },
    content:
      "I created Roughly plugin to sketch crafted hand-drawn elements which can be used to any usage (diagrams/flows/decoration/etc)",
    medias: [],
    reactions: {
      count: 8,
      avatars: ["/image (1).png", "/image (5).png", "/image (3).png"],
    },
    comments: 4,
    shares: 1,
  },
  {
    id: 1,
    user: {
      name: "Lori Cortez",
      avatar: "/image (1).png",
      status: "Active",
    },
    content:
      "I created Roughly plugin to sketch crafted hand-drawn elements which can be used to any usage (diagrams/flows/decoration/etc)",
    medias: [
      { type: "image", src: "/image (1).png" },
      { type: "image", src: "/image (2).png" },
      { type: "video", src: "/video.mp4" },
    ],
    reactions: {
      count: 8,
      avatars: ["/image (1).png", "/image (5).png", "/image (3).png"],
    },
    comments: 4,
    shares: 1,
  },
  {
    id: 2,
    user: {
      name: "Ai Goku Kid",
      avatar: "/image (6).png",
      status: "2 hours ago",
    },
    content: "Goku kid đẹp đâyyy 😍\nE sẵn các mẫu Goku kid siu kute.\nMời ae lên đơn nhé 🧡🧡🧡",
    medias: [
      { type: "image", src: "/image (5).png" },
      { type: "image", src: "/image (6).png" },
      { type: "image", src: "/image (2).png" },
      { type: "image", src: "/image (7).png" },
      { type: "image", src: "/image (4).png" },
      { type: "image", src: "/image (8).png" },
    ],
    reactions: {
      count: 24,
      avatars: ["/image (3).png", "/image (8).png", "/image.png"],
    },
    comments: 7,
    shares: 3,
  },
  {
    id: 3,
    user: {
      name: "Alex Johnson",
      avatar: "/image (1).png",
      status: "Yesterday",
    },
    content: "Just got these amazing new shoes! What do you think?",
    medias: [
      { type: "video", src: "/video.mp4" },
      { type: "image", src: "/image (4).png" },
    ],
    reactions: {
      count: 15,
      avatars: ["/image (5).png", "/image (3).png", "/image (1).png"],
    },
    comments: 8,
    shares: 1,
  },
  {
    id: 4,
    user: {
      name: "Sarah Williams",
      avatar: "/image (8).png",
      status: "3 days ago",
    },
    content: "Our trip to the mountains was incredible! Here are some highlights:",
    medias: [
      { type: "image", src: "/image (6).png" },
      { type: "image", src: "/image (1).png" },
      { type: "image", src: "/image (3).png" },
    ],
    reactions: {
      count: 42,
      avatars: ["/image (6).png", "/image (7).png", "/image (2).png"],
    },
    comments: 12,
    shares: 5,
  },
  {
    id: 5,
    user: {
      name: "Mike Chen",
      avatar: `/image.png`,
      status: "1 week ago",
    },
    content: "My collection is growing! Check out these new additions:",
    medias: [
      { type: "image", src: "/image (1).png" },
      { type: "image", src: "/image (2).png" },
      { type: "image", src: "/image (5).png" },
      { type: "image", src: "/image (7).png" },
    ],
    reactions: {
      count: 31,
      avatars: ["/image (3).png", "/image (8).png", "/image (6).png"],
    },
    comments: 9,
    shares: 2,
  },
  {
    id: 6,
    user: {
      name: "Mike Chen",
      avatar: `/image.png`,
      status: "1 week ago",
    },
    content: "My collection is growing! Check out these new additions:",
    medias: [{ type: "image", src: "/landscapse.jpg" }],
    reactions: {
      count: 31,
      avatars: ["/image (3).png", "/image (8).png", "/image (6).png"],
    },
    comments: 9,
    shares: 2,
  },
  {
    id: 7,
    user: {
      name: "Mike Chen",
      avatar: `/image.png`,
      status: "1 week ago",
    },
    content: "My collection is growing! Check out these new additions:",
    medias: [{ type: "video", src: "/video.mp4" }],
    reactions: {
      count: 31,
      avatars: ["/image (3).png", "/image (8).png", "/image (6).png"],
    },
    comments: 9,
    shares: 2,
  },
];
