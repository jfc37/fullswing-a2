import { BlockListDisplayModel } from './block-list-display.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'fs-block-list-display',
    template: `
        <h3>BLOCK LIST DISPLAY</h3>
        <div *ngIf="model.isLoading">Loading...</div>
        <div *ngIf="model.hasErrored">Oops, blocks failed to load</div>
        <fs-block-table *ngIf="shouldDisplay()"
                        [rows]="model.currentBlocks"></fs-block-table>
    `
})

export class BlockListDisplayComponent {
    @Input() public model: BlockListDisplayModel;

    public shouldDisplay() {
        return !this.model.isLoading && !this.model.hasErrored;
    }
}
