export interface ProductReview {
  id: string;
  userName: string;
  rating: number; // 1 - 5
  comment: string;
  image?: string;
  video?: string;
  createdAt?: string;
}

export interface ProductExtra {
  origin?: string;
  targetUsers?: string;
  warnings?: string;
  storage?: string;
  dosage?: string;
  returnPolicy?: string;
  reviews?: ProductReview[];
}

export interface Product {
  id: string;

  // Thông tin cơ bản
  name: string;
  category: string;

  // Giá
  price: number;
  oldPrice?: number;

  // Hình ảnh
  mainImage: string;
  hoverImage: string;
  video?: string;

  // Nội dung chi tiết
  description?: string;
  usage?: string;
  benefits?: string[];

  // Mở rộng
  rating?: number;
  stock?: number;
  slug?: string;
  createdAt?: string;

  // 👉 THÊM MỚI (optional – admin đổ sau)
  extra?: ProductExtra;
}
