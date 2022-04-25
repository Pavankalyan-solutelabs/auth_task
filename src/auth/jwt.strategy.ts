import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";



export class jwtStrategy extends PassportStrategy(Strategy){

    constructor(){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:"solutelabs_key"
        })
    }

    async validate(payload:any){
        return {
            userId:payload.sub,
            username:payload.username
        };
    }
}