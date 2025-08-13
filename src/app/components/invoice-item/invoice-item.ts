import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/InvoiceItem';

@Component({
  selector: 'tr[invoice-item]',
  imports: [],
  templateUrl: './invoice-item.html',
})
export class InvoiceItemC {
  @Input()item!:InvoiceItem
}
