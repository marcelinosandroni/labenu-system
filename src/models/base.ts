import knex, {Knex} from 'knex'
import {connection} from '../database'
import {AllEntities} from '../shared/entities/AllEntities'
import {QueryOptions} from '../shared/types/QueryOptions'

export interface Model {
  getAll: () => Promise<void>
  save: (entity: AllEntities) => Promise<void | number[]>
  findAll: (props: Partial<AllEntities>) => Promise<void>
  findOne: (props: Partial<AllEntities>) => Promise<void>
  update: (id: string, props: Partial<AllEntities>) => Promise<any>
  delete: (id: string) => Promise<any>
  getFiltered: (query: any) => any
}

export type ModelConstructor = new () => Model

export abstract class BaseModel implements Model {
  _storage: () => Knex.QueryBuilder

  constructor(tableName: string) {
    this._storage = () => connection(tableName)
  }

  get storage(): Knex.QueryBuilder {
    return this._storage()
  }

  getAll = async () => this.storage

  save = async (entity: AllEntities) => this.storage.insert(entity)

  findAll = async (props: Partial<AllEntities>) => this.storage.where(props)

  findOne = async (props: Partial<AllEntities>) =>
    this.storage.where(props).first()

  update = async (id: string, entity: Partial<AllEntities>) =>
    this.storage.update(entity).where({id})

  delete = async (id: string) => this.storage.delete().where({id})

  getFiltered = async (query: any) => {
    let queries: any
    let columnsLikeSearch = ['name', 'nickname', 'patron', 'biography']
    let reservedOptions = ['limit', 'offset', 'orderBy', 'order']

    for (const key in query) {
      if (!columnsLikeSearch.includes(key) && !reservedOptions.includes(key)) {
        queries = !queries
          ? this.storage.where({[key]: query[key]})
          : queries.where({[key]: query[key]})
      } else if (columnsLikeSearch.includes(key)) {
        queries = !queries
          ? this.storage.where(`${key}`, 'like', `%${query[key]}%`)
          : queries.where(`${key}`, 'like', `%${query[key]}%`)
      }
    }
    if (!queries) queries = this.storage
    queries = this.pagination(query, queries)
    const resultOfBaguncinha = await queries
    return resultOfBaguncinha
  }

  pagination = (options: QueryOptions, query: Knex.QueryBuilder) => {
    if ('limit' in options) {
      query = query.limit(options.limit as number)
    }
    if ('offset' in options) {
      query = query.offset(options.offset as number)
    }
    if ('orderBy' in options) {
      query = query.orderBy(
        options.orderBy as string,
        (options.order as string) || 'ASC'
      )
    }
    return query
  }

  close = async () => connection.destroy()
}
