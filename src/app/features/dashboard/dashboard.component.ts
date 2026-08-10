import { Component, inject, OnInit } from '@angular/core';

import { ApiService } from '../../core/http/services/api.service';
import { EmptyStateComponent } from '../../shared/ui/empty-state/empty-state.component';
import { LoadingComponent } from '../../shared/ui/loading/loading.component';
import { DashboardProduct, DashboardProductsResponse } from './models/dashboard-product.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [EmptyStateComponent, LoadingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private readonly api = inject(ApiService);

  protected products: DashboardProduct[] = [];
  protected isLoading = true;
  protected errorMessage = '';

  protected get productCount(): number {
    return this.products.length;
  }

  protected get averageRating(): string {
    if (!this.products.length) {
      return '0.0';
    }

    const total = this.products.reduce((sum, product) => sum + product.rating, 0);

    return (total / this.products.length).toFixed(1);
  }

  protected get totalStock(): number {
    return this.products.reduce((sum, product) => sum + product.stock, 0);
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.api.get<DashboardProductsResponse>('/products').subscribe({
      next: (response) => {
        this.products = response.products;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load dashboard data.';
        this.isLoading = false;
      },
    });
  }
}
