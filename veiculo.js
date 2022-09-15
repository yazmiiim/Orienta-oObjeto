class Veiculo{
   #Nome
   #ano
   #forca
    
        constructor(Motor, a,d,m){
            this.motor=Motor;
            this.#Nome=a;
            this.#ano=d;
            this.#forca=m;
        }

        acelerar(){
            return this.motor.acelerar();
        }

        get Nome(){
            return this.#Nome
        }

        get ano(){
            return this.#ano
        }

        get forca(){
            return this.#forca
        }

        set Nome(a){
            this.#Nome=a;
        }

        set ano(d){
            this.#ano=d
        }

        set forca(m){
            this.#forca=m;
        }
    }
         
