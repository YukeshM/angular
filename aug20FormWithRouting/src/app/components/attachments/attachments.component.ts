// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { AttachmentService } from 'src/app/attachment.service';


@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css']
})
export class AttachmentsComponent implements OnInit {

  // constructor(private http: HttpClient) { }
  
  // shortLink: string = "";
  //   loading: boolean = false; // Flag variable
  //   selectedFiles: File | null = null;

  // constructor(private attachmentUploadService: AttachmentService) {}

  ngOnInit(): void {
  }
  

  // onFileSelected(files: FileList){
  //   this.selectedFiles = files.item(0);
    //console.log(event);


    onSave(){
      console.log('');
    }
  
  }










  // onUpload(){
  //   this.loading = !this.loading;
  //   console.log(this.selectedFiles);
  //   this.attachmentUploadService.upload(this.selectedFiles).subscribe(
  //     (event: any) => {
  //       if (typeof (event) === 'object') {

  //           // Short link via api response
  //           this.shortLink = event.link;

  //           this.loading = false; // Flag variable 
  //       }
  //   }
  //   )

  // }


  

