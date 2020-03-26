import {Component, Input, OnInit} from '@angular/core';
import {fabAnimations} from './fab.animations';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
  animations: fabAnimations
})
export class FabComponent implements OnInit {

  @Input() options;
  buttons = [];
  fabTogglerState = 'inactive';

  constructor() {
  }

  ngOnInit(): void {
    const maxButtons = 6;
    if (this.options.buttons.length > maxButtons) {
      this.options.buttons.splice(5, this.options.buttons.length - maxButtons);
    }
  }

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.options.buttons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

  action(event: MouseEvent) {
    alert(event);
  }
}
