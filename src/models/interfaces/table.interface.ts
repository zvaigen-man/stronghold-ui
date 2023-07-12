import { Pagination } from "../pagination";

type AlignType = 'left' | 'right' | 'center'

// export type TableType = 'step' | 'grade' | 'overview' | 'experiments' | 'experimentDetails' | 'create_dataset'



export type ColType = 'text' | 'name' | 'number' | 'duration' | 'toFixed' | 'date' | 'upperCase';

export interface TableColumn {
    name: string,
    type: ColType,
    field: string,
    align?: AlignType
}



