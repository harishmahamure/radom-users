import Dexie, { Table } from "dexie";
import { Result } from "../common/interfaces";

interface IndexDBResult {
  result: Result;
}

export class MySubClassedDexie extends Dexie {
  friends!: Table<IndexDBResult>;

  constructor() {
    super("app-database");

    this.version(1).stores({
      friends: "++id, result", // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();
