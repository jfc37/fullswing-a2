import { Component, OnInit } from '@angular/core';

/**
 * Dashboard for all users
 * Will hold all the dashboard widgets
 */
@Component({
    selector: 'fs-dashboard',
    template: `
        <h2>DASHBOARD</h2>
        <fs-upcoming-schedule></fs-upcoming-schedule>
    `
})

export class DashboardComponent {
}
