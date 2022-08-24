import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'x-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {

  private file: any;

  constructor(private http: HttpClient) { }


  onFileChange(fileChangeEvent: any) {
    this.file = fileChangeEvent.target.files[0];
    console.log(this.file)
  }


  submit() {
    const formData = new FormData();
    formData.append('photo', this.file, this.file.name);
    this.http.post('http://localhost:3333/api/carrier/upload', formData).subscribe((data) => { console.log(data) })
    console.log("api hit")
  }
}
