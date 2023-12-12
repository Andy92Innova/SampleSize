
import { InputModel } from "../Domain/InputModel";
import { Pagination } from "../Domain/PaginationModel";

export class CalculateRequest{
    InputRequest:InputModel | undefined;
    Pagination:Pagination | undefined;

    constructor(input?:InputModel, pagination?:Pagination){
        this.InputRequest = input;
        this.Pagination = pagination;
    }

    SetParametros(input?:InputModel, pagination?:Pagination):void{
        this.InputRequest = input;
        this.Pagination = pagination;
    }

}