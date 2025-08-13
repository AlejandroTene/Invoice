import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/InvoiceItem';
import { InvoiceItemC } from "../invoice-item/invoice-item";

@Component({
  selector: 'invoice-detail',
  imports: [InvoiceItemC],
  templateUrl: './invoice-detail.html',
})
export class InvoiceDetail {
  @Input()items!:InvoiceItem[]
}
