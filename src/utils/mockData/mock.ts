import { Plan } from "../../models";

export const mockData: Plan[] = [
  {
    trainee: "John",
    id: "151c0228-3f80-45a5-807c-6afd53cdb616",
    assignedDate: "2022-01-01T22:00:00.000Z",
    exercises: [
      {
        weight: 15,
        sets: 8,
        _id: "62100481510e2c17be1fc81c",
        id: "645a15ec-a9af-4145-8051-71abf04a9f20",
        label: "Lunges",
        muscles: [],
      },
      {
        weight: 30,
        sets: 12,
        _id: "62100481510e2c17be1fc820",
        id: "645a15ec-a9af-4145-8051-71abf04a9f24",
        label: "Dumbbell rows",
        muscles: [],
      },
      {
        weight: 15,
        sets: 8,
        _id: "62100481510e2c17be1fc81c",
        id: "645a15ec-a9af-4145-8051-71abf04a9f20",
        label: "Lunges",
        muscles: [],
      },
      {
        weight: 15,
        sets: 8,
        _id: "62100481510e2c17be1fc81c",
        id: "645a15ec-a9af-4145-8051-71abf04a9f20",
        label: "Lunges",
        muscles: [],
      },
      {
        weight: 30,
        sets: 12,
        _id: "62100481510e2c17be1fc820",
        id: "645a15ec-a9af-4145-8051-71abf04a9f24",
        label: "Dumbbell rows",
        muscles: [],
      },
    ],
  },
  {
    trainee: "Bob",
    id: "151c0228-3f80-45a5-807c-6afd53cdb617",
    assignedDate: "2022-05-01T21:00:00.000Z",
    exercises: [
      {
        weight: 25,
        sets: 8,
        _id: "62100481510e2c17be1fc81c",
        id: "645a15ec-a9af-4145-8051-71abf04a9f20",
        label: "Lunges",
        muscles: [],
      },
      {
        weight: 30,
        sets: 12,
        _id: "62100481510e2c17be1fc81d",
        id: "645a15ec-a9af-4145-8051-71abf04a9f21",
        label: "Pushups",
        muscles: [],
      },
    ],
  },
  {
    trainee: "Nadav Ha Homo",
    id: "151c0228-3f80-45a5-807c-6afd53cdb618",
    assignedDate: "1970-01-01T00:00:00.000Z",
    exercises: [
      {
        weight: 30,
        sets: 12,
        _id: "62100481510e2c17be1fc820",
        id: "645a15ec-a9af-4145-8051-71abf04a9f24",
        label: "Dumbbell rows",
        muscles: [],
      },
      {
        weight: 15,
        sets: 8,
        _id: "62100481510e2c17be1fc81e",
        id: "645a15ec-a9af-4145-8051-71abf04a9f22",
        label: "Squats",
        muscles: [],
      },
    ],
  },
];

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

export const rows = [
  createData("Alexander Dunye", 159, 6.0, 24, 4.0),
  createData("Alexander Ulik", 237, 9.0, 37, 4.3),
  createData("Ilan Wallerstein", 262, 16.0, 24, 6.0),
  createData("Lina Gotzha", 305, 3.7, 67, 4.3),
  createData("Daniel Fienberg", 356, 16.0, 49, 3.9),
  createData("Nadav Zvaig", 262, 16.0, 24, 6.0),
  createData("Michael Bluger", 356, 16.0, 49, 3.9),
];
