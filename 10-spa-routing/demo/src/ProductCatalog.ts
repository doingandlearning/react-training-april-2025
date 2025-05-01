export class ProductItem {
  constructor(
    public id: string,
    public description: string,
    public price: number,
    public likes: number,
    public mostRecentLike: string
  ) {}
}

export default class ProductCatalog {
  private static _productItems: Map<string, ProductItem> = new Map([
    [
      "1",
      new ProductItem(
        "1",
        "Jazz.tools Premium Hoodie (Local-First Edition)",
        64.95,
        3201,
        "2024-11-15"
      ),
    ],
    [
      "2",
      new ProductItem(
        "2",
        "VueConf Talk USB Stick (with bonus bloopers)",
        14.99,
        521,
        "2024-08-03"
      ),
    ],
    [
      "3",
      new ProductItem(
        "3",
        "Sony ZV-E10 Camera Side Handle (for standing desk shots)",
        39.99,
        119,
        "2025-01-19"
      ),
    ],
    [
      "4",
      new ProductItem(
        "4",
        "Set of 3 Dev Tool Posters: Git, Vim, and Tmux",
        22.0,
        870,
        "2023-12-12"
      ),
    ],
    [
      "5",
      new ProductItem(
        "5",
        "Flute Fingering Chart (cheat-sheet for distracted devs)",
        4.5,
        63,
        "2025-03-09"
      ),
    ],
    [
      "6",
      new ProductItem(
        "6",
        "Offline-first Data Pipeline Mug (‘Sync Happens’)",
        12.99,
        1483,
        "2024-09-22"
      ),
    ],
  ]);

  static getAllProductItems(): Array<ProductItem> {
    return Array.from(this._productItems.values());
  }

  static getProductItemById(id: string): ProductItem | undefined {
    return this._productItems.get(id);
  }
}
