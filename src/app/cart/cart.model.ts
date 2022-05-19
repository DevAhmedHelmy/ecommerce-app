export interface Cart {
  userId: number;
  date: Date;
  products: [{ productId: number; quantity: number }];
}
