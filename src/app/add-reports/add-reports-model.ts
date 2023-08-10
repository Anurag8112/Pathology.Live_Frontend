export interface TestDetails {
    testId: string;
    testComponents: TestComponent[];
  }
  
  export interface TestComponent {
    componentId: string;
    value: string;
    isBold: boolean;
  }
  
  export interface BasicDetails {
    patientName: string;
    refNo: string;
    mobileNo: string;
    address: string;
    entryDate: string;
    deliveryDate: string;
    gender: string;
    age: number;
    ageIndicator: string;
    refBy: string;
  }
  
  export interface PaymentDetails {
    mode: string;
    status: string;
    note: string;
    subtotal: number;
    discountPercentage: number;
    totalAmount: number;
    paidAmount: number;
    balance: number;
  }
  
  export interface AppendixDetails {
    heading: string;
    reportingDate: string;
    method: string;
    comments: string;
  }
  
  export interface MyData {
    testDetails: TestDetails[];
    basicDetails: BasicDetails;
    paymentDetails: PaymentDetails;
    apendixDetails: AppendixDetails;
  }


  export interface TestItem {
    testName: string;
    price: number;
    testId: string;
  }

export interface TestProfile {
  testProfileId: string;
  profileName: string;
  referenceRange: string;
  units: string;
}

export interface Components {
  componentId: string;
  profiles: TestProfile[];
}


  