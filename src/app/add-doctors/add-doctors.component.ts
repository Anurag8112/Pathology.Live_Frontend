import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-add-doctors',
    templateUrl: './add-doctors.component.html',
    styleUrls: ['./add-doctors.component.css']
})
export class AddDoctorsComponent {
    imageUrl = ''; // Replace with the initial image URL

    @ViewChild('imageInput') imageInput!: ElementRef<HTMLInputElement>;

    openImageUpload() {
        this.imageInput.nativeElement.click();
    }

    uploadImage(event: any) {
      const selectedFile: File = event.target.files[0];
      if (selectedFile) {
          const reader = new FileReader();
          
          reader.onload = (e: any) => {
              this.imageUrl = e.target.result;
          };
          
          reader.readAsDataURL(selectedFile);
      }
    }

    openClearImage() {
      this.imageUrl = '';
      if (this.imageInput) {
          this.imageInput.nativeElement.value = '';
      }
    }
  
    cardHeight: number = 180;
    isExpanded: boolean = true;
    cardHeight2: number = 130;
    isExpanded2: boolean = true;

    toggleCard(id:number) {
        if(id==1){
            this.isExpanded = !this.isExpanded;
            this.cardHeight = this.isExpanded ? 180 : 0;
        }else{
            this.isExpanded2 = !this.isExpanded2;
            this.cardHeight2 = this.isExpanded2 ? 130 : 0;
        }
    }

    handleImageError() {
        // Handle image load error if needed
    }
}
