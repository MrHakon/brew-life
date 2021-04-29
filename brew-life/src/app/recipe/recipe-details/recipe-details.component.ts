import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerDummyDataService } from '../../beer-dummy-data.service';
import { BrewModel } from '../../models/BrewModel';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  beerId: string;
  dummyBrew: BrewModel;

  constructor(private activatedRoute: ActivatedRoute, private dummyBeerService: BeerDummyDataService) { 
    this.beerId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.beerId);
    this.dummyBrew = this.dummyBeerService.GetDummyBrew();
  }

  ngOnInit(): void {
  }

}
