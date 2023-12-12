export class InputModel{
    Input1: number | undefined;
    Input2: number | undefined;
    SampleSize: number | undefined;

    constructor(input1:number, input2:number, sampleSize: number ){
        this.Input1 = input1;
        this.Input2 = input2;
        this.SampleSize = sampleSize;
    }
}