import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Shrimp n Veggies', 'Shrimp, various vegetables, salt & pepper!', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Soup', 'Broth, various vegetables, salt & pepper!', 'https://www.maxpixel.net/static/photo/1x/Borsch-A-Simple-Recipe-Cook-At-Home-Food-4260907.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
