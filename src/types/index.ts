
interface ICoordinator {
  email: string;
  id: string;
}

export interface IApiData {
  data: any;
  loaded: boolean;
  selected: any;
  error: boolean;
}
export interface IEvent {
  title: string;
  description: string;
  category_id: number;
  paid_event: boolean;
  event_fee: number;
  reward: number;
  date: string; // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
  duration: number; // in seconds
  coordinator: ICoordinator;
}
