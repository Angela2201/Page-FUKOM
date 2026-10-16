export interface ContactoPayload {
  nombre: string;
  correo: string;
  mensaje: string;
}

export interface AliadoPayload {
  nombre: string;
  organizacion: string;
  correo: string;
  telefono?: string;
  mensaje?: string;
}

export type UneteTipo = 'grupo-ff-profesionales' | 'perfiles-a-apadrinar';

export interface UnetePayload {
  tipo: UneteTipo;
  nombre: string;
  correo: string;
  telefono?: string;
  mensaje?: string;
}

export interface DonacionPayload {
  nombre: string;
  correo: string;
  monto: number;
}
