// export class Pagination {
//     page: number = 1;
//     itemsPerPage: number = 10;

//     constructor(page: number = 1, itemsPerPage: number = 10) {
//         this.page = page;
//         this.itemsPerPage = itemsPerPage
//     }

//     public toString() {
//         return 'page=' + this.page + '&itemsPerPage=' + this.itemsPerPage;
//     }

//     public toHttpParams() {
//         return new HttpParams()
//             .set('skip', ((this.page-1) * this.itemsPerPage).toString())
//             .set('limit', this.itemsPerPage.toString())
//     }
// }

export interface Pagination {
    page: number;
    itemsPerPage: number;
}

