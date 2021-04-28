import { Injectable } from '@angular/core';
import { BrewModel, HopDosage, HopSingleBrew, MaltSingleBrew, Mashing, Yeast } from './models/BrewModel';

@Injectable({
  providedIn: 'root'
})
export class BeerDummyDataService {

  dummyBrew: BrewModel;
  constructor() {
    console.log('heey');
    let maltSingleBrew1: MaltSingleBrew = {
      Id: 'malt1',
      Name: 'Maris otter',
      Quantity: 4.4
    };

    let maltSingleBrew2: MaltSingleBrew = {
      Id: 'malt2',
      Name: 'Oat malt',
      Quantity: 1
    };
    let maltSingleBrew3: MaltSingleBrew = {
      Id: 'malt3',
      Name: 'Caramalt',
      Quantity: 0.5
    };
    let maltSingleBrew4: MaltSingleBrew = {
      Id: 'malt4',
      Name: 'Carafa special 1',
      Quantity: 0.4
    };
    let maltSingleBrew5: MaltSingleBrew = {
      Id: 'malt5',
      Name: 'Carafa special 3',
      Quantity: 0.4
    };
    let maltSingleBrew6: MaltSingleBrew = {
      Id: 'malt6',
      Name: 'Crystal malt',
      Quantity: 0.4
    };
    let maltSingleBrew7: MaltSingleBrew = {
      Id: 'malt7',
      Name: 'Chocolate malt',
      Quantity: 0.3
    };

    let malts: MaltSingleBrew[] = [];
    malts.push(maltSingleBrew1);
    malts.push(maltSingleBrew2);
    malts.push(maltSingleBrew3);
    malts.push(maltSingleBrew4);
    malts.push(maltSingleBrew5);
    malts.push(maltSingleBrew6);
    malts.push(maltSingleBrew7);

    let hopSingleDosage1: HopDosage = {
      AmountGrams: 20,
      DurationMinutes: 60
    };

    let hopSingleDosage2: HopDosage = {
      AmountGrams: 30,
      DurationMinutes: 10
    };

    let hopDosage1: HopDosage[] = [];
    hopDosage1.push(hopSingleDosage1);
    hopDosage1.push(hopSingleDosage2);

    let hopSingleBrew1: HopSingleBrew = {
      Id: 'hop1',
      Name: 'Colombus',
      Dosage: hopDosage1
    }

    let hopSingleDosage3: HopDosage = {
      AmountGrams: 20,
      DurationMinutes: 60
    };

    let hopSingleDosage4: HopDosage = {
      AmountGrams: 30,
      DurationMinutes: 10
    };

    let hopDosage2: HopDosage[] = [];
    hopDosage1.push(hopSingleDosage3);
    hopDosage1.push(hopSingleDosage4);

    let hopSingleBrew2: HopSingleBrew = {
      Id: 'hop2',
      Name: 'Northern Brewer',
      Dosage: hopDosage2
    };

    let hopForBew: HopSingleBrew[] = [];
    hopForBew.push(hopSingleBrew1);
    hopForBew.push(hopSingleBrew2);

    let mashing: Mashing = {
      DurationMinutes: 60,
      Degrees: 65
    };

    let yeast: Yeast = {
      Id: 'yeast1',
      Name: 'Safale s-04'
    };

    let createdDate = Date.now;

    let brew: BrewModel = {
      Id: 'darkstout1',
      Name: 'Babyseal Clubber',
      Description: 'To be determined',
      Slogan: 'So dark that you will go out and club a few baby seals just to lighten the mood',
      Malts: malts,
      Hops: hopForBew,
      Mashing: mashing,
      Yeast: yeast,
      Quantity: 22,
      BoilingDuration: 60,
      AlcoholByVolume: 9
    };

    this.dummyBrew = brew;
    console.log(brew);
  }

  public GetDummyBrew(): BrewModel {
    return this.dummyBrew;
  }
}

