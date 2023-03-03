export interface SubscriptionPlan {
  id: string;
  title: string;
  priceMonth: number;
  priceYear: number;
  features: string[];
}

export interface Faq {
  question: string;
  answer: string;
}
