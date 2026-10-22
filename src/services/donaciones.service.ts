import { api } from './api';
import type { ApiResponse, DonacionesCardProps } from '../types/api';
import type { DonacionPayload } from '../types/formularios';

export async function enviarDonacion(payload: DonacionPayload) {
  const { data } = await api.post<ApiResponse>('/donaciones', payload);
  return data;
}

export async function recibirDonacion(): Promise<DonacionesCardProps> {
  const response = await api.get<DonacionesCardProps>('/donaciones');
  return response.data;
}