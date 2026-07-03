export interface CandleProduct {
  name: string;
  image: string;
  description: string;
  price: number; // Ab yeh string se pure number ban gaya hai calculations ke liye
  burnTime: string;
}

export const candleProducts: CandleProduct[] = [
  { name: "Bubble Candle", image: "Bubble.png", description: "Bubble cube candle.", price: 150, burnTime: "4 hrs" },
  { name: "Mini Bubble", image: "Mini Bubble.png", description: "Small bubble cube.", price: 220, burnTime: "2 hrs" },
  { name: "Peony Flower", image: "Peony.png", description: "Full bloomed Peony.", price: 60, burnTime: "4 hrs" },
  { name: "Daisy Flower", image: "Daisy.png", description: "Fresh daisy flower.", price: 30, burnTime: "1 hrs" },
  { name: "Lotus Pond", image: "Lotus Pond.png", description: "Lotus in wax pond.", price: 150, burnTime: "18 hrs" },
  { name: "Rose Candle", image: "Rose.png", description: "Classic symbol of love.", price: 100, burnTime: "12 hrs" },
  { name: "Ribbed Pillar", image: "Pillar.png", description: "Elegant textured column.", price: 650, burnTime: "30 hrs" },
  { name: "Ribbed Cylinder", image: "Ribbed.png", description: "Bright steady flame.", price: 300, burnTime: "15 hrs" },
  { name: "Teddy Candle", image: "Teddy.png", description: "Cute celebratory design.", price: 80, burnTime: "3 hrs" },
  { name: "Daisy Bowl", image: "Daisy Bowl.png", description: "Floral candle in glass.", price: 180, burnTime: "10 hrs" },
  { name: "Daisy Pot", image: "Daisy Pot.png", description: "Floral candle in terracota.", price: 80, burnTime: "5 hrs" },
  { name: "Golden Gloom", image: "Golden gloom.png", description: "Sunlit daisy blossom.", price: 250, burnTime: "15 hrs" },
  { name: "Peony Jar", image: "Peony Jar.png", description: "Luxury floral jar candle.", price: 500, burnTime: "60 hrs" },
  { name: "Peony Bowl", image: "Peony Bowl.png", description: "Peony in glass bowl.", price: 180, burnTime: "10 hrs" },
  { name: "Laddoo Candle", image: "Laddoo.png", description: "Ladoo-shaped design.", price: 120, burnTime: "1 hr" },
  { name: "Vanilla Swirl", image: "Vanilla Swirl.png", description: "Cozy whipped design.", price: 250, burnTime: "20 hrs" },
  { name: "Cupcake Candle", image: "Cupcake.png", description: "Sweet and fun celebration dessert candle.", price: 80, burnTime: "4 hrs" },
  { name: "Rasmalai Candle", image: "Rasmalai.png", description: "Looks like a treat.", price: 60, burnTime: "5 hrs" },
  { name: "Floral Heart", image: "Floral Heart.png", description: "Heart of mini roses.", price: 80, burnTime: "4 hrs" },
  { name: "Verdent Rose", image: "Verdent Rose.png", description: "Detailed floral rose.", price: 80, burnTime: "8 hrs" },
  { name: "Diya Candle", image: "Diya.png", description: "Festival light set.", price: 20, burnTime: "2 hrs" },
  { name: "Stand Diya Candle", image: "Stand Diya.png", description: "Festival light set.", price: 60, burnTime: "4 hrs" },
  { name: "Berry Blast", image: "Berry Blast.png", description: "Berry-topped dessert candle", price: 180, burnTime: "10 hrs" },
  { name: "Cylindrical Heart Candle", image: "Cylindrical Heart.png", description: "Embossed hearts pillar candle", price: 140, burnTime: "5 hrs" },
  { name: "Peony Bouquet", image: "Bouquet.png", description: "Elegant floral bouquet candle.", price: 100, burnTime: "4 hrs" },
  { name: "Tulip Bouquet", image: "Tulip Bouquet.png", description: "Elegant tulip candle bouquet.", price: 100, burnTime: "5 hrs" },
  { name: "Tulip Jar", image: "Tulip Jar.png", description: "Decorative tulip candle in jar.", price: 250, burnTime: "15 hrs" },
  { name: "Summer Blush", image: "Summer Blush.png", description: "Floral bloom glass bowl.", price: 180, burnTime: "15 hrs" }
];