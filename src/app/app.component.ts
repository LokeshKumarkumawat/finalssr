import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HttpClientModule ,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'finalssr';

  httpClient = inject(HttpClient)

  data: any[] = [];
  ngOnInit(): void {
    this.fetchData();
  }




  fetchData() {
    this.httpClient
      .get('http://localhost:3000/products?page=1')
      .subscribe((data: any) => {
        console.log("DATA", data);
        this.data = data.results;
      });
  }

}
