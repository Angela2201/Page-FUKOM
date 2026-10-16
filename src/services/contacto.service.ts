import { api } from './api';
import type { ApiResponse } from '../types/api';
import type { ContactoPayload } from '../types/formularios';

export async function enviarContacto(payload: ContactoPayload) {
  const { data } = await api.post<ApiResponse>('/contacto', payload);
  return data;
}
