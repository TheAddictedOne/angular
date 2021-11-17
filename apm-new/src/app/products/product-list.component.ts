import { Component } from "@angular/core";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  title = "Product list"
  products = [
    { id: 1, name: "un... pepene", code: "TIME TIME", date: "Today", desc: "Tre degete", price: 9.99, starz: 5.0, img: "" },
    { id: 2, name: "Skandaloose", code: "114", date: "Neva", desc: "nul vous allé perd", price: 0.09, starz: 1.0, img: "" }
  ]
}
