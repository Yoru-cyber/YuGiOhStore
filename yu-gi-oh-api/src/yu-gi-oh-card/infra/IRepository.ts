// IUserRepository.ts
export default interface IRepository<Type> {
  findById(id: number): Promise<Type | null>;
  findAll(): Promise<Type[]>;
  create(entity: Type): Promise<Type>;
  update(id: number, entity: Type): Promise<Type | null>;
  delete(id: number): Promise<boolean>;
}
