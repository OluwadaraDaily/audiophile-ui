import { ProductProps } from "@/components/atoms/ProductItem/types";

export const headphonesData: ProductProps[] = [
  {
    name: "XX99 MARK II HEADPHONES",
    description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    isNewProduct: true,
    imgSrc: "headphones/xx99-mark-ii-headphones.png",
    tag: "xx99-mark-ii-headphones",
  },
  {
    name: "XX99 MARK I HEADPHONES",
    description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    isNewProduct: false,
    imgSrc: "headphones/xx99-mark-i-headphones.png",
    tag: "xx99-mark-i-headphones",
    isRowReverse: true,
  },
  {
    name: "XX59 HEADPHONES",
    description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    isNewProduct: false,
    imgSrc: "headphones/xx59-headphones.png",
    tag: "xx59-headphones",
  },
]

export const speakersData: ProductProps[] = [
  {
    name: "ZX9 SPEAKER",
    description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    isNewProduct: true,
    imgSrc: "speakers/zx9-speaker.png",
    tag: "zx9-speaker",
  },
  {
    name: "ZX7 SPEAKER",
    description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    isNewProduct: true,
    imgSrc: "speakers/zx7-speaker.png",
    tag: "zx7-speaker",
    isRowReverse: true,
  }
]