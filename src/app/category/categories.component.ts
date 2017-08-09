import { Component, OnInit } from '@angular/core';
import { CategoryService } from "app/category/category.service";
import { Category } from "app/category/category.model";

import { clone } from 'lodash';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html'
})
export class CategoriesOverviewComponent implements OnInit {

    title = 'Categories Overview';

    showRateError = false;

    categories : Array<Category>

    newForm: boolean = false
    updateForm: boolean = false
    isNewForm: boolean
    newCategory: any = {}
    updatedCategory: any = {}

    constructor(private categoryService: CategoryService) {
    }

    ngOnInit() {
      this.categories = this.categoryService.getCategories();
    }

    showUpdateForm(category:Category) {
      // this.form = !this.form
      if (!category) {
        this.newForm = false
        return
      }
      this.updateForm = true
      this.updatedCategory = clone(category)
      // this.isNewForm = false
      // this.newCategory = category
    }

    showAddForm() {
      if (this.categories.length) {
      //reset form if updated product
        this.newCategory = {}
      }
      this.newForm = true
      this.isNewForm = true
    }

    save(category:Category) {
      if (this.isNewForm) {
        // add the new category
        this.categoryService.addCategory(category)
      }
      this.newForm = false
    }

    update(category:Category) {
      this.categoryService.updateCategory(category);
      this.updateForm = false;
      this.updatedCategory = {};
    }

    remove(category: Category) {
      this.categoryService.deleteCategory(category);
    }

    cancelUpdate() {
      this.updateForm = false;
      this.updatedCategory = {};
    }

    cancelNew() {
      this.newForm = false;
      this.newCategory = {};
    }
}
