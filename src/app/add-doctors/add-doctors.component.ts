import { Component, ElementRef, ViewChild } from '@angular/core';
import { MasterDataService } from '../services/master-data.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-add-doctors',
    templateUrl: './add-doctors.component.html',
    styleUrls: ['./add-doctors.component.css']
})
export class AddDoctorsComponent {
    imageUrl = '';

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
    isRotate: boolean = true;

    toggleCard(id: number) {
        if (id == 1) {
            this.isRotate = !this.isRotate;
            this.isExpanded = !this.isExpanded;
            this.cardHeight = this.isExpanded ? 180 : 0;
        } else {
            this.isExpanded2 = !this.isExpanded2;
            this.cardHeight2 = this.isExpanded2 ? 130 : 0;
        }
    }

    handleImageError() {
        // Handle image load error if needed
    }

    addressMater: any = [];
    selectedCountry: any;
    selectedState: any;
    @ViewChild('doctorForm', { static: false }) doctorForm!: NgForm;
    @ViewChild('qualificationForm', { static: false }) qualificationForm!: NgForm;

    constructor(private address: MasterDataService) {
        this.address.getAddressMaster().subscribe((data: any) => {
            this.addressMater = data;
            this.selectedCountry = this.addressMater.countries[0];
            this.loadStatesAndCities();
        });
    }

    loadStatesAndCities() {
        if (this.selectedCountry) {
            this.selectedState = this.selectedCountry.states[0];
        }
    }

    onCountryChange(event: any) {
        const selectedCountryId = event.target.value;
        this.selectedCountry = this.addressMater.countries.find((country: any) => country.id === selectedCountryId);
        this.loadStatesAndCities();
    }

    onStateChange(event: any) {
        const selectedStateId = event.target.value;
        this.selectedState = this.selectedCountry.states.find((state: any) => state.id === selectedStateId);
    }

    onSubmit() {
        if (this.doctorForm.valid && this.qualificationForm.valid) {
            // Handle form submission here
        }
    }
}
