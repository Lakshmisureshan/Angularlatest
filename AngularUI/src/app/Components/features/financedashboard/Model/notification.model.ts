export interface Notifications {
    id: number;
    description: string | null;
    doctype: string  | null;
    docId: number;
    customerRequirement: any | null;
    taskInitiation: any | null;
    identityUser: any | null;
    notificationby: string | null;
    createddate: string;
    notificationbyname:string| null;
    remarks :string| null;
  }