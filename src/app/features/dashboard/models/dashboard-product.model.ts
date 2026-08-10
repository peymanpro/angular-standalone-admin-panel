export interface DashboardProduct {
  id: number;
  title: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
}

export interface DashboardProductsResponse {
  products: DashboardProduct[];
  total: number;
  skip: number;
  limit: number;
}
