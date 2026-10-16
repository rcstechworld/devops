import { applications, categories } from './catalog.js';
export function getApplications(){ return applications.slice(); }
export function getApplicationById(id){ return applications.find(a=>a.id===id) || null; }
export function getApplicationCategories(){ return categories.slice(); }
export function getApplicationsByCategory(categoryId){ return applications.filter(a=>a.category===categoryId); }
