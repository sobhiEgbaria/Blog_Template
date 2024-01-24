export interface DataAccess<T> {
  add(t: T): Promise<void>;
  delete(id: number): Promise<void>;
  update(id: number, updateData: Partial<T>): Promise<void>;
  get(id: number): Promise<T>;
  filterByTitle(name: string): Promise<T>;
  getAll(): Promise<T>;
  // getSome(id: number): Promise<T>;
}
