export interface SubscriptionPlan {
  id: string;
  title: string;
  price: number;
  discountPercentageYearly: number;
  features: string[];
}
