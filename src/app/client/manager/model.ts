export class model {
    id:number;
     employeeId: string;
     task: string;
     priority: string;
     employeeStartDate: string;
     employeeEndDate: string;
     department: string;
     description: string;
     employee:string;
     usertype:string='';
     name:string='';
     age:string='';
     gender:string='';
     role:string='';
     joiningdate:string='';
     salary:string='';
     experience:string='';
     userid:string='';
     password:string='';

     
     constructor() {
        this.id=0;
         this.employeeId = '';
         this.task = '';
         this.priority = '';
         this.employeeStartDate = '';
         this.employeeEndDate = '';
         this.department = '';
         this.description = '';
         this.employee=''
     }
 }
 