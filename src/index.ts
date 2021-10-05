class automovil {
  private _puertas: number
  private _caballos: number
  private _precio_caballo: number
  constructor(x: number, y: number, z: number )
  {
      this._puertas = x
      this._caballos = y
      this._precio_caballo = z  }
  
  set x(x:number){this._puertas = x}
  set y(y:number){this._caballos = y}
  set z(z:number){this._precio_caballo = z}
  get x(){return this._puertas}
  get y(){return this._caballos}
  get z(){return this._precio_caballo}
  
}

const precio = new automovil(0,0,0);
precio.x = 3
precio.y = 150
precio.z = 50

console.log(`El precio del automóvil es: ${precio.y*precio.z}`)
  
