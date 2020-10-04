import { group } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  headers = ["Name","ID","Skills","Project","HCM","gender"];

  static datas=[
        {
          "Name": "John",
          "ID": "123456",
          "Skills": "ReactJS,AngularJs",
          "Project": "Cognizant Internal",
          "HCM": "Alex",
          "gender": "Male"
        },
        {
          "Name": "Amalkar",
          "ID": "123456",
          "Skills": "ReactJS,AngularJs",
          "Project": "Cognizant Internal",
          "HCM": "Alex",
          "gender": "Male"
        },
        {
          "Name": "Girl",
          "ID": "123456",
          "Skills": "ReactJS,AngularJs",
          "Project": "Cognizant Internal",
          "HCM": "Alex",
          "gender": "Female"
        },
        {
          "Name": "Aravind",
          "ID": "123456",
          "Skills": "ReactJS,AngularJs",
          "Project": "Cognizant Internal",
          "HCM": "Alex",
          "gender": "Male"
        },
        {
          "Name": "Priya",
          "ID": "123456",
          "Skills": "ReactJS,AngularJs",
          "Project": "Cognizant Internal",
          "HCM": "Alex",
          "gender": "Female"
        },
        {
          "Name": "John",
          "ID": "123456",
          "Skills": "ReactJS,AngularJs",
          "Project": "Cognizant Internal",
          "HCM": "Alex",
          "gender": "Male"
        },
        {
          "Name": "John",
          "ID": "123456",
          "Skills": "ReactJS,AngularJs",
          "Project": "Cognizant Internal",
          "HCM": "Alex",
          "gender": "Male"
        },
        {
          "Name": "John",
          "ID": "123456",
          "Skills": "ReactJS,AngularJs",
          "Project": "Cognizant Internal",
          "HCM": "Alex",
          "gender": "Male"
        },
        {
          "Name": "Nazriya",
          "ID": "123456",
          "Skills": "ReactJS,AngularJs",
          "Project": "Cognizant Internal",
          "HCM": "Alex",
          "gender": "Female"
        },
        {
          "Name": "John",
          "ID": "123456",
          "Skills": "ReactJS,AngularJs",
          "Project": "Cognizant Internal",
          "HCM": "Alex",
          "gender": "Male"
        }
  ] 
  get datas (){
    return AppComponent.datas;
  }
  clearRow(i){
    AppComponent.datas.splice(i,1)
  }
  addRow(val){
    AppComponent.datas.push(val.value);

  }

  
}