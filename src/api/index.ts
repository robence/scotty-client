import HttpService from '../services/HttpService';
import { Category } from '../types/model';

export type GetCategoriesType = {
  categories: Category[];
};

export default function getCategories(): Promise<GetCategoriesType> {
  return HttpService.get('/api/categories/');
}
