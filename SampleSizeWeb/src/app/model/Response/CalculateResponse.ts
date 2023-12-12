import { ItemKnown } from "../Domain/ItemKnownModel";
import { Pagination } from "../Domain/PaginationModel";

export class CalculateResponse{
    Items:ItemKnown[] | undefined;
    Pagination:Pagination  | undefined;
}