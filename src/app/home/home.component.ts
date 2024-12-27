import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  content: string | null = null;
  services = [
    { name: 'Web Development', description: 'Custom web applications and websites.' },
    { name: 'Mobile Development', description: 'iOS and Android apps tailored to your needs.' },
    { name: 'SEO Optimization', description: 'Optimize your website for better search engine rankings.' }
  ];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {

  }

  // Api fetching 
  getDynamicContent() {
    this.apiService.fetchDynamicContent().subscribe({
      next: (data) => (this.content = data.body),
      error: () => (this.content = 'Failed to load content.'),
    });
  }

  navigateToHome() {
    this.router.navigate(['/contact']); 
  }


}
