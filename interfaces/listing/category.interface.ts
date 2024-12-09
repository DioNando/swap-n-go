// Category
export interface Category {
  id: string; // UUID
  name: string;
  parentCategoryId?: string; // UUID (relation récursive pour les sous-catégories)
}
