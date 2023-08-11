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
  
    qualificationCardHeight: string = 'auto';
    generalInfoCardHeight: string = 'auto';

    dropForm(formid: number) {
        if (formid === 2) {
        this.qualificationCardHeight = this.qualificationCardHeight === '300px' ? 'auto' : '300px';
        } else if (formid === 1) {
        this.generalInfoCardHeight = this.generalInfoCardHeight === '300px' ? 'auto' : '300px';
        }
    }

    handleImageError() {
        // Handle image load error if needed
    }
}
