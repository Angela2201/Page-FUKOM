import { api } from './api';
import type { ApiResponse } from '../types/api';
import type { UnetePayload } from '../types/formularios';

export async function enviarSolicitudUnete(payload: UnetePayload) {
  const { data } = await api.post<ApiResponse>('/unete', payload);
  return data;
}
