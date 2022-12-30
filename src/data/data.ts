export const data = {
  name: 'macbook pro',
  category: 'laptops',
  brand: 'apple',
  price: 999,
  discount: 3,
  rating: 5,
  stockCount: 35,
  images: [
    require('../assets/images/macbook.jpg'),
    require('../assets/images/macbook-2.jpg'),
    require('../assets/images/macbook-3.jpg'),
  ],
  characters: [
    {
      type: 'Display',
      values: ['Retina display'],
    },
    {
      type: 'Charging and Expansion',
      values: ['Two Thunderbolt', 'DisplayPort', 'USB 4', 'USB 3.1 Gen 2 '],
    },
    {
      type: 'Battery and Power',
      values: ['Up to 15 hours wireless web', 'Up to 18 hours Apple TV app movie playback'],
    },
    {
      type: 'Memory',
      values: ['8GB'],
    },
    {
      type: 'Storage',
      values: ['256GB'],
    },
  ],
}
