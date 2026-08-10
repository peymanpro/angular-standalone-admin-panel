import { Component, inject, OnInit } from '@angular/core';

import { ApiService } from '../../core/http/services/api.service';
import { EmptyStateComponent } from '../../shared/ui/empty-state/empty-state.component';
import { LoadingComponent } from '../../shared/ui/loading/loading.component';
import { User, UsersResponse } from './models/user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [EmptyStateComponent, LoadingComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  private readonly api = inject(ApiService);

  protected users: User[] = [];
  protected isLoading = true;
  protected errorMessage = '';

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.api.get<UsersResponse>('/users').subscribe({
      next: (response) => {
        this.users = response.users;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load users.';
        this.isLoading = false;
      },
    });
  }
}
