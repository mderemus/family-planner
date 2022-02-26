export interface GroceryList {
  data: GroceryListItem[];
}

export interface GroceryListItem {
  id?: number;
  count?: number;
  description?: string;
  cost?: number;
  store?: string;
  pickedUp?: boolean;
}
