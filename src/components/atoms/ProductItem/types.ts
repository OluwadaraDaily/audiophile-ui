export interface ProductProps {
  imgSrc: string;
  name: string;
  altName: string;
  isNewProduct: boolean;
  description: string;
  tag: string;
  isRowReverse?: boolean;
  link: string;
  price: number;
  features: string[];
  inTheBox: InTheBox[];
  featuredImages: string[];
}

interface InTheBox {
  item: string;
  quantity: string;
}