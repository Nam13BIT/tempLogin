export default class Clock{
    private _timer : number;
    public tickTock():void{
        try {
            if(this._timer == null){
                this._timer = new Date().getTime();
            } else{
                throw new Error('Clock has already started');
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
    public getPassTime():number{
        try {
            let passTime = new Date().getTime();
            return passTime - this._timer;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    public getPassTimeInSecond(): number {
        try {
            let passTime = new Date().getTime();
            return (passTime - this._timer) / 1000;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    public getTimeLeftInSecond(maxTimeoutInSecond: number): number {
        try {
            return maxTimeoutInSecond - this.getPassTimeInSecond();
        } catch (error) {
            throw new Error(error.message);
        }
    }
}