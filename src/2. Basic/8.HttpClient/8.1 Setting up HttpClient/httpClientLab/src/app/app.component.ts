import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpclientService } from './shared/services/httpclient.service';
import { LogInterface } from './shared/interfaces/log-interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  logs: LogInterface[] = [];
  isLoading: boolean = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  newLog: LogInterface = {
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6', // Use a UUID or let the backend generate it if needed
    startDateTime: new Date().toISOString(), // Default to the current datetime
    componentName: 'Admin UI',
    code: 200,
    message: 'string'
  };

  constructor(private httpService: HttpclientService) {}
  title = 'httpClientLab';

  ngOnInit(): void {
    this.fetchLogs();
  }

  fetchLogs(): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.httpService.getLogs().subscribe({
      next: (logs: LogInterface[]) => {
        this.logs = logs;
        this.isLoading = false;
      },
      error: (error: any) => {
        this.errorMessage = 'Failed to load logs. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  submitLog(): void {
    this.successMessage = null;
    this.errorMessage = null;

    this.httpService.createLogs(this.newLog).subscribe({
      next: (createdLog) => {
        // this.successMessage = `Log created successfully with ID: ${createdLog.id}`;
        this.fetchLogs();
      },
      error: (error) => {
        this.errorMessage = 'Failed to create log. Please try again.';
        console.error(error);
      }
    });
  }
}
