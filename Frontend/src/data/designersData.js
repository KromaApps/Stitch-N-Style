import designerImage from "../assets/profile_picture.webp"; // Import the image
import clothingItems from "../services/api"; // Import the clothing items

const getItemById = (id) => clothingItems.find((item) => item.id === id);

const designers = [
  {
    id: 1,
    name: "Sophia Carter",
    bio: "Sophia is known for her avant-garde designs and sustainable fashion.",
    image: designerImage,
    socialMedia: {
      instagram: "https://instagram.com/sophiacarter",
      facebook: "https://facebook.com/sophiacarter",
      twitter: "https://twitter.com/sophiacarter",
    },
    reviews: [
      {
        id: 1,
        author: "John Doe",
        text: "Sophia's designs are revolutionary!",
      },
      {
        id: 2,
        author: "Jane Smith",
        text: "Incredible creativity and attention to detail.",
      },
    ],
    collections: [
      {
        id: 1,
        name: "Urban Chic",
        items: [
          getItemById(1), // Add relevant clothing items
          getItemById(2),
        ],
      },
      {
        id: 2,
        name: "Eco Friendly",
        items: [getItemById(3), getItemById(4)],
      },
    ],
    featuredItems: [getItemById(5), getItemById(6)],
    relatedDesigners: [
      { id: 2, name: "James Lee", image: designerImage },
      { id: 3, name: "Ella Rodriguez", image: designerImage },
    ],
    stats: {
      collections: 2,
      featuredItems: 2,
      followers: 5000,
    },
  },
  {
    id: 2,
    name: "James Lee",
    bio: "James specializes in high fashion with a modern twist.",
    image: designerImage,
    socialMedia: {
      instagram: "https://instagram.com/jameslee",
      facebook: "https://facebook.com/jameslee",
      twitter: "https://twitter.com/jameslee",
    },
    reviews: [
      {
        id: 1,
        author: "Alice Brown",
        text: "James's modern designs are always a hit.",
      },
      {
        id: 2,
        author: "Robert Green",
        text: "A master of contemporary fashion.",
      },
    ],
    collections: [
      {
        id: 1,
        name: "Classic Elegance",
        items: [getItemById(7), getItemById(8)],
      },
      {
        id: 2,
        name: "Modern Edge",
        items: [getItemById(9), getItemById(10)],
      },
    ],
    featuredItems: [getItemById(11), getItemById(12)],
    relatedDesigners: [
      { id: 1, name: "Sophia Carter", image: designerImage },
      { id: 4, name: "Olivia Davis", image: designerImage },
    ],
    stats: {
      collections: 2,
      featuredItems: 2,
      followers: 6500,
    },
  },
  {
    id: 3,
    name: "Ella Rodriguez",
    bio: "Ella is celebrated for her vibrant and eclectic fashion sense.",
    image: designerImage,
    socialMedia: {
      instagram: "https://instagram.com/ellarodriguez",
      facebook: "https://facebook.com/ellarodriguez",
      twitter: "https://twitter.com/ellarodriguez",
    },
    reviews: [
      {
        id: 1,
        author: "Emma Wilson",
        text: "Ella's vibrant designs are a breath of fresh air.",
      },
      {
        id: 2,
        author: "Liam Johnson",
        text: "Unique and bold fashion statements.",
      },
    ],
    collections: [
      {
        id: 1,
        name: "Vivid Colors",
        items: [
          getItemById(13), // Add relevant clothing items
        ],
      },
      {
        id: 2,
        name: "Bohemian Spirit",
        items: [getItemById(14)],
      },
    ],
    featuredItems: [getItemById(15), getItemById(16)],
    relatedDesigners: [
      { id: 1, name: "Sophia Carter", image: designerImage },
      { id: 5, name: "Mia Thompson", image: designerImage },
    ],
    stats: {
      collections: 2,
      featuredItems: 2,
      followers: 7200,
    },
  },
  {
    id: 4,
    name: "Olivia Davis",
    bio: "Olivia is renowned for her elegant and sophisticated designs.",
    image: designerImage,
    socialMedia: {
      instagram: "https://instagram.com/oliviadavis",
      facebook: "https://facebook.com/oliviadavis",
      twitter: "https://twitter.com/oliviadavis",
    },
    reviews: [
      {
        id: 1,
        author: "David Clark",
        text: "Olivia's designs are timeless and elegant.",
      },
      {
        id: 2,
        author: "Sophia Harris",
        text: "A true artist in the world of fashion.",
      },
    ],
    collections: [
      {
        id: 1,
        name: "Timeless Classics",
        items: [
          getItemById(17), // Add relevant clothing items
        ],
      },
      {
        id: 2,
        name: "Luxury Fabrics",
        items: [getItemById(18)],
      },
    ],
    featuredItems: [getItemById(19), getItemById(20)],
    relatedDesigners: [
      { id: 2, name: "James Lee", image: designerImage },
      { id: 6, name: "Ava Martin", image: designerImage },
    ],
    stats: {
      collections: 2,
      featuredItems: 2,
      followers: 8500,
    },
  },
  {
    id: 5,
    name: "Mia Thompson",
    bio: "Mia is known for her innovative and trendsetting fashion creations.",
    image: designerImage,
    socialMedia: {
      instagram: "https://instagram.com/miathompson",
      facebook: "https://facebook.com/miathompson",
      twitter: "https://twitter.com/miathompson",
    },
    reviews: [
      {
        id: 1,
        author: "Isabella Taylor",
        text: "Mia's trendsetting pieces are always in style.",
      },
      {
        id: 2,
        author: "Ethan Scott",
        text: "Her innovative approach to fashion is inspiring.",
      },
    ],
    collections: [
      {
        id: 1,
        name: "Future Trends",
        items: [
          getItemById(21), // Add relevant clothing items
        ],
      },
      {
        id: 2,
        name: "Urban Jungle",
        items: [getItemById(22)],
      },
    ],
    featuredItems: [getItemById(23), getItemById(24)],
    relatedDesigners: [
      { id: 3, name: "Ella Rodriguez", image: designerImage },
      { id: 6, name: "Ava Martin", image: designerImage },
    ],
    stats: {
      collections: 2,
      featuredItems: 2,
      followers: 9000,
    },
  },
  {
    id: 6,
    name: "Ava Martin",
    bio: "Ava is celebrated for her minimalist and chic fashion designs.",
    image: designerImage,
    socialMedia: {
      instagram: "https://instagram.com/avamartin",
      facebook: "https://facebook.com/avamartin",
      twitter: "https://twitter.com/avamartin",
    },
    reviews: [
      {
        id: 1,
        author: "Oliver White",
        text: "Ava's minimalist designs are simply stunning.",
      },
      {
        id: 2,
        author: "Charlotte Allen",
        text: "Chic and elegant fashion at its best.",
      },
    ],
    collections: [
      {
        id: 1,
        name: "Minimalist Chic",
        items: [
          getItemById(25), // Add relevant clothing items
        ],
      },
      {
        id: 2,
        name: "Elegant Simplicity",
        items: [getItemById(26)],
      },
    ],
    featuredItems: [getItemById(27), getItemById(28)],
    relatedDesigners: [
      { id: 4, name: "Olivia Davis", image: designerImage },
      { id: 5, name: "Mia Thompson", image: designerImage },
    ],
    stats: {
      collections: 2,
      featuredItems: 2,
      followers: 7800,
    },
  },
];

export default designers;
