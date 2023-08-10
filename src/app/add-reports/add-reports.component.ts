import { Component } from '@angular/core';
import { MyData,TestItem,Components,TestProfile,} from './add-reports-model';
import { ReportsDataService } from '../services/reports-data.service';

@Component({
  selector: 'app-add-reports',
  templateUrl: './add-reports.component.html',
  styleUrls: ['./add-reports.component.css']
})

export class AddReportsComponent {
  
    searchTerm: string = '';
    suggestions: TestItem[] = [];
    showSuggestions: boolean = false;
    selectedItems: any[] = [];
    selectAllChecked: boolean = false;
    reportComponentItems: any[] = [];
    reportItems: any[] = [];
    discountValue: string = '0.00';
    paidAmountValue: string='0.00';
    selectedTestId: string = '';
    ComponentAdded: any []= [];
    viewComponentIndex:number=0;
    buttonText : string='Save & Next';
    totalReportAdded:number=0;

    constructor(private report:ReportsDataService){
      this.report.getAllTests().subscribe((data :any)=>{
        this.suggestions=data;
        console.warn(this.suggestions);
        this.getFilteredSuggestions();
      });
    }

    search() {
      if (this.searchTerm.trim().length > 0) {
        this.showSuggestions = true;
      } else {
        this.showSuggestions = false;
      }
    }

    selectSuggestion(suggestion: any) {
      const testItem = {
          testName: suggestion.testName,
          price: suggestion.price,
          testId:suggestion.testId,
      };
      this.selectedItems.push(testItem);
      this.searchTerm = '';
      this.showSuggestions = false;
    }

    getFilteredSuggestions(): any[] {
      return this.suggestions.filter(suggestion =>
        suggestion.testName.toLowerCase().startsWith(this.searchTerm.toLowerCase()) && !this.selectedItems.some(item => item.testName === suggestion.testName)
      );
    }

    checkAll() {
      this.selectAllChecked = true;
      this.updateCheckboxState(true);
    }

    uncheckAll() {
      this.selectAllChecked = false;
      this.updateCheckboxState(false);
    }

    updateCheckboxState(checked: boolean) {
      const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
      checkboxes.forEach((checkbox: HTMLInputElement) => {
        checkbox.checked = checked;
      });
    }

    isSelected(item: string): boolean {
      return this.selectedItems.includes(item);
    }

    deleteItem(item: any) {
      const index = this.selectedItems.indexOf(item);
      if (index !== -1) {
        this.selectedItems.splice(index, 1);
      }
      const componentindex = this.reportComponentItems.findIndex((items:any) => items.componentId === item.testId);
      this.reportComponentItems.splice(componentindex, 1);
      this.deleteTestIdFromComponentAdded(item.testId);
      // if(this.viewComponentIndex==this.reportComponentItems.length){
      //   this.viewComponentIndex--;
      // }
    }
  
    clearall(){
      this.reportComponentItems=[];
      this.reportItems = [];
      this.ComponentAdded=[];
      this.viewComponentIndex=0;
      this.buttonText ='Save & Next';
    }
    
    calculateSubtotal(): string {
      const subtotal = this.selectedItems.reduce((sum, item) => sum + parseFloat(item.price), 0.00);
      return subtotal.toFixed(2);
    }

    calculateTotalAmount(): string {
      const subtotal = this.selectedItems.reduce((sum, item) => sum + parseFloat(item.price), 0.00);
      const totalAmount = subtotal - ((subtotal*(parseFloat(this.discountValue)||0.00))/100);
      return totalAmount.toFixed(2);
    }

    calculateBalanceAmount(): string {
      const totalAmount = this.calculateTotalAmount();
      const balanceAmount = parseFloat(totalAmount) - (parseFloat(this.paidAmountValue)||0.00);
      return balanceAmount.toFixed(2);
    }

    onclickReports(testid : string){
      console.warn("testid ->"+testid);
      this.report.getTestComponents(testid).subscribe((data :any)=>{     
        this.reportItems.push(data.components);
      });
    }

    addReport(testId: string) {
      if (this.ComponentAdded.includes(testId)) {
        return;
      }
      this.report.getTestComponents(testId).subscribe((data: any) => {
        this.reportComponentItems.push(data);
        this.ComponentAdded.push(testId);
      });
    }

    isEnableOrDisable(testId: string){
      if (this.ComponentAdded.includes(testId)) {
        return true;
      }else{
        return false;
      }
    }

    deleteItemByProfileId(profile: any,testid:string) {  
      const componentindex = this.reportComponentItems.findIndex(item => item.componentId === testid);
      const profileindex = this.reportComponentItems.findIndex(item => item.profiles.findIndex((profiles : any) => profiles.testProfileId === profile.testProfileId) !== -1);
      if (profileindex !== -1) {
        const profileToRemoveIndex = this.reportComponentItems[profileindex].profiles.findIndex((profile : any) => profile.testProfileId === profile.testProfileId);
        if (profileToRemoveIndex !== -1) {
          this.reportComponentItems[profileindex].profiles.splice(profileToRemoveIndex, 1);
        }
      }

      const totalCountOfProfiles = this.reportComponentItems[componentindex].profiles.length;

      if(totalCountOfProfiles<=0){
        if (componentindex >= 0 && componentindex < this.reportComponentItems.length) {
          this.reportComponentItems.splice(componentindex, 1);
          this.deleteTestIdFromComponentAdded(testid);
        }
      }
    }

    deleteTestIdFromComponentAdded(testId: string) {
      const index = this.ComponentAdded.indexOf(testId);
      if (index !== -1) {
        this.ComponentAdded.splice(index, 1);
      }
    }

    getviewComponentIndex(){
      return this.viewComponentIndex;
    }

    onSaveAndNext(){
      if(this.reportComponentItems.length - 2 == this.viewComponentIndex){
        console.warn("length->"+this.selectedItems.length);
        this.buttonText= 'Save';
        return this.viewComponentIndex;
      }
      this.viewComponentIndex++;
      console.warn(this.viewComponentIndex);
      return this.viewComponentIndex;
    }

    nextOrPrevious(action : number){
      if(action==1){
        if(this.viewComponentIndex==0){
          return this.viewComponentIndex;
        }
        this.viewComponentIndex--;
        if(this.viewComponentIndex==this.reportComponentItems.length-2){
          this.buttonText= 'Save & Next';
        }
        return this.viewComponentIndex;
      }
      else
      {
        if(this.viewComponentIndex==this.reportComponentItems.length-1){
          return this.viewComponentIndex; 
        }
        this.viewComponentIndex++;
        if(this.viewComponentIndex==this.reportComponentItems.length-1){
          this.buttonText= 'Save';
        }
        return this.viewComponentIndex;
      }
    }

    isSaveEnableOrDisable(){
      if(this.reportComponentItems.length==0){
        return true;
      }else{
        return false;
      }
    }

    IsMultipleComponents(){
      if(this.reportComponentItems.length>1){
        return true;
      }else{
        return false;
      }
    }  
}
