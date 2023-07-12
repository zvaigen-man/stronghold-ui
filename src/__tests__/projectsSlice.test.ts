import { projectsReducer, setPagination } from '../redux/features/plans/plans.slice'

const TABLE_LIMIT: number = 10
const TABLE_PAGE: number = 0

test('should return the initial state', () => {// TODO type??
//     expect(projectsReducer(undefined, getProjects(1))).toEqual(
//         {
//             projects: [],
//             projectsTotalAmount: 0,
//             columns: [
//                 { name: 'ProfX Project', align: 'left' },
//                 { name: 'ID' },
//                 { name: 'Project Owner' },
//                 { name: 'Last Activity Time' },
//             ],
//             isLoading: true,
//             pagination: { page: TABLE_PAGE, itemsPerPage: TABLE_LIMIT }
//         }
//     )
})

// test('should handle a todo being added to an empty list', () => {
//     const previousState = []
//     expect(projectsReducer(previousState, todosSlice('Run the tests'))).toEqual([
//         {
//             text: 'Run the tests',
//             completed: false,
//             id: 0
//         }
//     ])
// })

// test('should handle a todo being added to an existing list', () => {
//     const previousState = [
//         {
//             text: 'Run the tests',
//             completed: true,
//             id: 0
//         }
//     ]
//     expect(projectsReducer(previousState, todoAdded('Use Redux'))).toEqual([
//         {
//             text: 'Run the tests',
//             completed: true,
//             id: 0
//         },
//         {
//             text: 'Use Redux',
//             completed: false,
//             id: 1
//         }
//     ])
// })