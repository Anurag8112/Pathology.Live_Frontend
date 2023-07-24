import { Component } from '@angular/core';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
  
})
export class ReportsComponent {
  searchTerm: string = '';
  suggestions: any[] = [{testname: 'Apple',price: '200'}, {testname: 'banana',price: '400'}];
  showSuggestions: boolean = false;
  selectedItems: any[] = [];
  selectAllChecked: boolean = false;
  reportComponentItems: any[] = [];
  reportItems: any[] = [];
  discountValue: string = '0.00';
  paidAmountValue: string='0.00';

  search() {
    if (this.searchTerm.trim().length > 0) {
      this.showSuggestions = true;
    } else {
      this.showSuggestions = false;
    }
  }

  

  selectSuggestion(suggestion: any) {
    const testItem = {
        testname: suggestion.testname,
        price: suggestion.price,
    };
    this.selectedItems.push(testItem);
    this.searchTerm = '';
    this.showSuggestions = false;
  }

  getFilteredSuggestions(): any[] {
    return this.suggestions.filter(suggestion =>
      suggestion.testname.toLowerCase().startsWith(this.searchTerm.toLowerCase()) && !this.selectedItems.some(item => item.testname === suggestion.testname)
    );
  }

  checkAll() {
    this.selectAllChecked = true;
  }

  uncheckAll() {
    this.selectAllChecked = false;
    // this.selectedItems = [];
    this.updateCheckboxState(false); // Update the state of checkboxes in the table
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

  deleteItem(item: string) {
    const index = this.selectedItems.indexOf(item);
    if (index !== -1) {
      this.selectedItems.splice(index, 1);
    }
    // if (index !== -1) {
    //   this.reportItems.splice(index);
    // }
  }

  deleteItem2(report: any) {
    const index = this.reportComponentItems.indexOf(report);
    if (index !== -1) {
      this.reportComponentItems.splice(index, 1);
    }
    if(this.reportComponentItems.length===0){
      this.reportComponentItems=[];
    }
  }

  clearall(){
    this.reportComponentItems=[];
    this.reportItems = [];
  }

  addReport(item: any) {
    const index = this.selectedItems.indexOf(item);
    debugger;
    console.log(index);
      const cbcReportData = [[
        { component: 'WBC (White Blood Cell Count)', referenceRange: '4.0 - 11.0', units: 'x 10^9/L' },
        { component: 'RBC (Red Blood Cell Count)', referenceRange: '4.5 - 5.5', units: 'x 10^12/L' },
        { component: 'Hemoglobin', referenceRange: '13.5 - 17.5', units: 'g/dL' },
        { component: 'Hematocrit', referenceRange: '38.8 - 50.0', units: '%' },
        { component: 'Platelet Count', referenceRange: '150 - 450', units: 'x 10^9/L' },
        { component: 'Mean Corpuscular Volume (MCV)', referenceRange: '80 - 96', units: 'fL' },
        { component: 'Mean Corpuscular Hemoglobin (MCH)', referenceRange: '27 - 33', units: 'pg' },
        { component: 'Mean Corpuscular Hemoglobin Concentration (MCHC)', referenceRange: '32 - 36', units: 'g/dL' },
        { component: 'Red Cell Distribution Width (RDW)', referenceRange: '11.5 - 14.5', units: '%' }
      ],[
        { component: 'rBC (White Blood Cell Count)', referenceRange: '4.0 - 11.0', units: 'x 10^9/L' },
        { component: 'RdC (Red Blood Cell Count)', referenceRange: '4.5 - 5.5', units: 'x 10^12/L' },
        { component: 'Hdmoglobin', referenceRange: '13.5 - 17.5', units: 'g/dL' },
        { component: 'Hematocrit', referenceRange: '38.8 - 50.0', units: '%' },
        { component: 'Platelet Count', referenceRange: '150 - 450', units: 'x 10^9/L' },
        { component: 'Mean Corpuscular Volume (MCV)', referenceRange: '80 - 96', units: 'fL' },
        { component: 'Mean Corpuscular Hemoglobin (MCH)', referenceRange: '27 - 33', units: 'pg' },
        { component: 'Mean Corpuscular Hemoglobin Concentration (MCHC)', referenceRange: '32 - 36', units: 'g/dL' },
        { component: 'Red Cell Distribution Width (RDW)', referenceRange: '11.5 - 14.5', units: '%' }
      ]
    ];

    if (!this.reportItems.includes(this.reportComponentItems) ) {
      console.log(!this.reportItems.includes(this.reportComponentItems));
          cbcReportData[index].forEach(report => {
              const reportItem = {
                component: report.component,
                referenceRange: report.referenceRange,
                units: report.units
              };
              this.reportComponentItems.push(reportItem);
          });
      this.reportItems.push(this.reportComponentItems);
    }
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
}




