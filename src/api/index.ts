import HttpService from '../services/HttpService';
import { HOST } from '../configs/env';
import { Category } from '../types/model';

export default function getCategories(): Promise<Category[]> {
  return HttpService.get(`${HOST}/api/categories/`);
}
