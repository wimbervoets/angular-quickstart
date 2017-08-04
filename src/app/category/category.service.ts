import { Injectable } from '@angular/core';
import { Category } from "app/category/category.model";
import { findIndex} from "lodash";

@Injectable()
export class CategoryService {

  categories : Category[] =
    [
      { id: 1, code: 'FOO', name: "food" },
      { id: 2, code: 'TRA', name: "transport" },
      { id: 3, code: 'STA', name: "stays" }
    ]

  getCategories(): Category[] {
    return this.categories
  }

  addCategory(category: Category) {
    this.categories.push(category)
    console.log(this.categories)
  }

  updateCategory(category: Category) {
    let index = findIndex(this.categories, (c : Category) => {
      return c.id == category.id
    })
    this.categories[index] = category;
  }

  deleteCategory(category: Category) {
    this.categories.splice(this.categories.indexOf(category), 1);
    console.log(this.categories);
  }
}
