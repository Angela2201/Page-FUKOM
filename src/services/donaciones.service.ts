import { api } from './api';
import type { ApiResponse } from '../types/api';
import type { DonacionPayload } from '../types/formularios';

export async function enviarDonacion(payload: DonacionPayload) {
  const { data } = await api.post<ApiResponse>('/donaciones', payload);
  return data;
}
