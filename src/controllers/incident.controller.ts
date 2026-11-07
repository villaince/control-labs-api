import { Request, Response } from 'express';

export class IncidentController {
  public static createIncident = (req: Request, res: Response): void => {
    // TODO: llamar al servicio con req.body (equipo o ambiente asociado) y responder 201.
    res.status(501).json({
      success: false,
      message: 'El reporte de novedades todavía no está implementado.'
    });
  };

  public static getIncidents = (req: Request, res: Response): void => {
    // TODO: llamar al servicio y responder con el historial de novedades.
    res.status(501).json({
      success: false,
      message: 'El historial de novedades todavía no está implementado.'
    });
  };

  public static updateIncident = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: aplicar el nuevo estado recibido en req.body (pendiente, en proceso o resuelto).
    res.status(501).json({
      success: false,
      message: `La actualización parcial de la novedad ${id} todavía no está implementada.`
    });
  };
}
