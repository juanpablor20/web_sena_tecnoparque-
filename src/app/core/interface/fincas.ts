export interface Fincas {
  id?: number;
    municipio: string;
    vereda: string;
    nombreFinca: string;
    nombreProductor: string;
    edad: string;
    tipoProductor: string;
    detallesProducto: string;
    altitud: string;
    temperatura: string;
    fotoFinca?: File | null;
    fotoProductor?: File | null;
    fotoProceso?: File | null;
    fotoProcesoFin?: File | null;
    fincaId: number;
    // Añade esta línea para permitir acceso con un índice de tipo string
    [key: string]: any;
  }
  