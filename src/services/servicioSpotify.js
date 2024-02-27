//consumiendo apis con js

//1. pa don vas (Almaceno en una varisable la URI del servicio)
let URI="BQCBO2GcUg_v-NUCxL-WWRarDC7kLv8e8SX_xSbp_rcrcSGrz1OHCS7Bjax-0D5PFjVOakX_a6-LHcFc91vx-l41CkCZsElc3nCxSwbJ6KODFDy_eU0"
//2. Que vas a Hacer? (metodo HTTP)
let metodo="GET"
//3. Tenes permisos? (configurar peticiones)
let token="Bearer BQCBO2GcUg_v-NUCxL-WWRarDC7kLv8e8SX_xSbp_rcrcSGrz1OHCS7Bjax-0D5PFjVOakX_a6-LHcFc91vx-l41CkCZsElc3nCxSwbJ6KODFDy_eU0"

let peticion={
    method:metodo,
    headers:{
        "Authorization":token
    }
}
//4. Vaya pues traigame cositas (Promesa)
