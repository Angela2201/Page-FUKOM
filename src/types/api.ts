export interface ApiResponse {
  ok: boolean;
  message?: string;
}

export interface DonacionesCardProps {
  goal: number;
  collected: number;
  donors: number;
}
