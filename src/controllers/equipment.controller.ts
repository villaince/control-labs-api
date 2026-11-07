import { Request, Response } from 'express';

export class EquipmentController {
  public static createEquipment = (req: Request, res: Response): void => {
    // TODO: llamar al servicio con req.body (incluye el ambiente al que se vincula) y responder 201.
    res.status(501).json({
      success: false,
      message: 'El registro de equipos todavía no está implementado.'
    });
  };

  public static getEquipments = (req: Request, res: Response): void => {
    // TODO: si llega req.query.environmentId, filtrar por ambiente; si no, listar todos.
    res.status(501).json({
      success: false,
      message: 'El listado de equipos todavía no está implementado.'
    });
  };

  public static updateEquipment = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: aplicar solo los campos recibidos en req.body (estado técnico o ubicación).
    res.status(501).json({
      success: false,
      message: `La actualización parcial del equipo ${id} todavía no está implementada.`
    });
  };
}
