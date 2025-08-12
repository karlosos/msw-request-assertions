export type SortOrder = "asc" | "desc";

export interface SortParam {
  field: string;
  order: SortOrder;
}