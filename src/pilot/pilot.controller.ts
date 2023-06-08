import { Controller, Get, Query } from '@nestjs/common';
import { PilotService } from './pilot.service';

@Controller('pilot')
export class PilotController {
    constructor(private readonly pilotService: PilotService) { }
}
