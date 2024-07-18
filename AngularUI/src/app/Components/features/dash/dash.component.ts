import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cardLayout: Observable<{ columns: number, miniCard: { cols: number, rows: number }, chart: { cols: number, rows: number }, table: { cols: number, rows: number } }> = of({
    columns: 4,
    miniCard: { cols: 1, rows: 1 },
    chart: { cols: 2, rows: 2 },
    table: { cols: 4, rows: 4 },
  });

  constructor() {
    this.cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        if (matches) {
          return {
            columns: 1,
            miniCard: { cols: 1, rows: 1 },
            chart: { cols: 1, rows: 2 },
            table: { cols: 1, rows: 4 },
          };
        }

        return {
          columns: 4,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 2, rows: 2 },
          table: { cols: 4, rows: 4 },
        };
      })
    );
  }
}