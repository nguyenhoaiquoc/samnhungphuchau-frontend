import type { Product } from "../types";
import matsau_nhung from "./assets/matsau-nhunghuou.png";
import mattruoc_nhung from "./assets/mattruoc-nhunghuou.png";
import matsau_sam from "./assets/matsau-sam.png";
import mattruoc_sam from "./assets/mattruoc-sam.png";

export const CATEGORY: Record<string, string> = {
  "sam-ngoc-linh": "Sâm Ngọc Linh",
  "nhung-huou": "Nhung Hươu",
};


export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Sâm Ngọc Linh Kon Tum 10 Tuổi",
    category: "Sâm Ngọc Linh",
    price: 15500000,
    mainImage: mattruoc_nhung,
    hoverImage: matsau_nhung,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "Sâm Ngọc Linh quý hiếm, chứa hàm lượng saponin cao nhất thế giới.",
    usage: "Dùng ngâm rượu, ngâm mật ong hoặc hầm canh.",
    benefits: ["Tăng cường đề kháng", "Chống lão hóa", "Hỗ trợ gan"],
  },
  {
    id: "2",
    name: "Nhung Hươu Hương Sơn Tươi",
    category: "Nhung Hươu",
    price: 3200000,
    oldPrice: 3500000,
    mainImage: mattruoc_sam,
    hoverImage: matsau_sam,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "Nhung hươu nguyên sừng, thu hoạch từ những chú hươu khỏe mạnh nhất.",
    usage: "Thái lát nấu cháo hoặc ngâm rượu.",
    benefits: ["Bổ máu", "Tăng cường sinh lực", "Chắc khỏe xương"],
  },
  {
    id: "3",
    name: "Sâm Ngọc Linh Kon Tum 10 Tuổi",
    category: "Sâm Ngọc Linh",
    price: 15500000,
    mainImage: mattruoc_nhung,
    hoverImage: matsau_nhung,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "Sâm Ngọc Linh quý hiếm, chứa hàm lượng saponin cao nhất thế giới.",
    usage: "Dùng ngâm rượu, ngâm mật ong hoặc hầm canh.",
    benefits: ["Tăng cường đề kháng", "Chống lão hóa", "Hỗ trợ gan"],
  },
  {
    id: "4",
    name: "Nhung Hươu Hương Sơn Tươi",
    category: "Nhung Hươu",
    price: 3200000,
    oldPrice: 3500000,
    mainImage: mattruoc_sam,
    hoverImage: matsau_sam,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "Nhung hươu nguyên sừng, thu hoạch từ những chú hươu khỏe mạnh nhất.",
    usage: "Thái lát nấu cháo hoặc ngâm rượu.",
    benefits: ["Bổ máu", "Tăng cường sinh lực", "Chắc khỏe xương"],
  },
  {
    id: "5",
    name: "Nhung Hươu Hương Sơn Tươi",
    category: "Nhung Hươu",
    price: 3200000,
    mainImage: mattruoc_sam,
    hoverImage: matsau_sam,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "Nhung hươu nguyên sừng, thu hoạch từ những chú hươu khỏe mạnh nhất.",
    usage: "Thái lát nấu cháo hoặc ngâm rượu.",
    benefits: ["Bổ máu", "Tăng cường sinh lực", "Chắc khỏe xương"],
  },
  {
    id: "6",
    name: "Nhung Hươu Hương Sơn Tươi",
    category: "Nhung Hươu",
    price: 3200000,
    oldPrice: 3500000,
    mainImage: mattruoc_sam,
    hoverImage: matsau_sam,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "Nhung hươu nguyên sừng, thu hoạch từ những chú hươu khỏe mạnh nhất.",
    usage: "Thái lát nấu cháo hoặc ngâm rượu.",
    benefits: ["Bổ máu", "Tăng cường sinh lực", "Chắc khỏe xương"],
  },
  {
    id: "7",
    name: "Nhung Hươu Hương Sơn Tươi",
    category: "Nhung Hươu",
    price: 3200000,
    mainImage: mattruoc_sam,
    hoverImage: matsau_sam,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "Nhung hươu nguyên sừng, thu hoạch từ những chú hươu khỏe mạnh nhất.",
    usage: "Thái lát nấu cháo hoặc ngâm rượu.",
    benefits: ["Bổ máu", "Tăng cường sinh lực", "Chắc khỏe xương"],
  },
  {
    id: "8",
    name: "Nhung Hươu Hương Sơn Tươi",
    category: "Nhung Hươu",
    price: 3200000,
    oldPrice: 10,
    mainImage: mattruoc_sam,
    hoverImage: matsau_sam,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "Nhung hươu nguyên sừng, thu hoạch từ những chú hươu khỏe mạnh nhất.",
    usage: "Thái lát nấu cháo hoặc ngâm rượu.",
    benefits: ["Bổ máu", "Tăng cường sinh lực", "Chắc khỏe xương"],
  },
  {
    id: "9",
    name: "Nhung Hươu Hương Sơn Tươi",
    category: "Nhung Hươu",
    price: 3200000,
    oldPrice: 3500000,
    mainImage: mattruoc_sam,
    hoverImage: matsau_sam,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "Nhung hươu nguyên sừng, thu hoạch từ những chú hươu khỏe mạnh nhất.",
    usage: "Thái lát nấu cháo hoặc ngâm rượu.",
    benefits: ["Bổ máu", "Tăng cường sinh lực", "Chắc khỏe xương"],
  },
  {
    id: "10",
    name: "Nhung Hươu Hương Sơn Tươi",
    category: "Nhung Hươu",
    price: 3200000,
    oldPrice: 3500000,
    mainImage: mattruoc_sam,
    hoverImage: matsau_sam,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "Nhung hươu nguyên sừng, thu hoạch từ những chú hươu khỏe mạnh nhất.",
    usage: "Thái lát nấu cháo hoặc ngâm rượu.",
    benefits: ["Bổ máu", "Tăng cường sinh lực", "Chắc khỏe xương"],
  },
  {
    id: "11",
    name: "Nhung Hươu Hương Sơn Tươi",
    category: "Nhung Hươu",
    price: 3200000,
    oldPrice: 3500000,
    mainImage: mattruoc_sam,
    hoverImage: matsau_sam,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "Nhung hươu nguyên sừng, thu hoạch từ những chú hươu khỏe mạnh nhất.",
    usage: "Thái lát nấu cháo hoặc ngâm rượu.",
    benefits: ["Bổ máu", "Tăng cường sinh lực", "Chắc khỏe xương"],
  },
  {
    id: "12",
    name: "Nhung Hươu Hương Sơn Tươi",
    category: "Nhung Hươu",
    price: 3200000,
    mainImage: mattruoc_sam,
    hoverImage: matsau_sam,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "Nhung hươu nguyên sừng, thu hoạch từ những chú hươu khỏe mạnh nhất.",
    usage: "Thái lát nấu cháo hoặc ngâm rượu.",
    benefits: ["Bổ máu", "Tăng cường sinh lực", "Chắc khỏe xương"],
  },
];
