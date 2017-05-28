import { ClassListModel } from './class-list.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'fs-class-list',
    template: `
        <h4>CLASS LIST</h4>
        <div *ngIf="model.isLoading">Loading...</div>
        <div *ngIf="model.hasErrored">Oops, blocks failed to load</div>
        <table *ngIf="shouldDisplay()">
            <thead>
                <th>Week</th>
                <th>Attendance</th>
                <th>Date</th>
                <th></th>
            </thead>
            <tbody>
                <tr *ngFor="let row of model.classes">
                    <td>
                        <a [routerLink]="'/classes/' + row.id">
                            {{row.name}}
                        </a>
                    </td>
                    <td>{{row.attendance}}</td>
                    <td>{{row.date | fsMoment:'DD MMM'}}</td>
                    <td>
                        <a [routerLink]="'/classes/' + row.id + '/check-in'">
                            Check in
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    `
})
export class ClassListComponent {
    @Input() public model: ClassListModel;

    public shouldDisplay() {
        return !this.model.isLoading && !this.model.hasErrored;
    }
}
