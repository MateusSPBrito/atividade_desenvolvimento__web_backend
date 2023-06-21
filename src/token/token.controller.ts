import { Controller, Put, Body, Get } from "@nestjs/common";
import { RefreshTokenDto } from "./dto/RefreshTokenDto.dto";
import { TokenService } from "./token.service";

@Controller('token')
export class TokenController{
    constructor(
        private tokenService: TokenService
    ){}

    @Put('refresh')
    async refreshToken(@Body() data: RefreshTokenDto){
        return this.tokenService.refreshToken(data.oldToken)
    }

    // @Get()
    // async validToken(){
    //     return this.tokenService.refreshToken(data.oldToken)
    // }
}