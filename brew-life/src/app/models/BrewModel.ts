// Models spesific for one brew
export class BrewModel {
    Id: string;
    Name: string;
    Description: string;
    Slogan: string;
    Malts: MaltSingleBrew[];
    Hops: HopSingleBrew[];
    Mashing: Mashing;
    Yeast: Yeast;
    Quantity: number;
    BoilingDuration: number;
    AlcoholByVolume: number;
}

export class MaltSingleBrew {
    Id: string;
    Name: string;
    Quantity: number;
}

export class HopSingleBrew {
    Id: string;
    Name: string;
    Dosage: HopDosage[];
}

export class HopDosage {
    AmountGrams: number;
    DurationMinutes: number;
}

export class Mashing {
    DurationMinutes: number;
    Degrees: number;
}

export class Yeast {
    Id: string;
    Name: string;
}
