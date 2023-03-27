export interface Tariff {
  id: number;
  name : string;
  downloadSpeed: number;
  uploadSpeed: number;
  benefits:string[];
  cost : number;
}
