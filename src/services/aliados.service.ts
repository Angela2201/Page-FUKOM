import { api } from './api';
import type { ApiResponse } from '../types/api';
import type { AliadoPayload } from '../types/formularios';

export async function enviarSolicitudAliado(payload: AliadoPayload) {
  const { data } = await api.post<ApiResponse>('/aliados', payload);
  return data;
}
