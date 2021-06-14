import {RequestHandler} from 'express'
import {Route} from '../@types/decorators'
import {Services} from '../services/base'

export interface Controller {
  services: Services
  handle: RequestHandler
}

export abstract class BaseController implements Controller {
  abstract services: Services

  @Route('get', '/')
  handle: RequestHandler = async (req, res) => {
    const resultList = await this.services.listAll(req.query)
    res.send(resultList)
  }

  @Route('post', '/')
  create: RequestHandler = async (req, res) => {
    const data = req.body
    const dataCreated = await this.services.create(data)
    res.send(dataCreated)
  }

  @Route('get', '/:id')
  detail: RequestHandler = async (req, res) => {
    const {id} = req.params
    const searchResult = await this.services.detail(id)
    res.send(searchResult)
  }

  @Route('put', '/:id')
  update: RequestHandler = async (req, res) => {
    const {id} = req.params
    const data = req.body
    const dataUpdated = await this.services.update(id, data)
    res.send(dataUpdated)
  }

  @Route('delete', '/:id')
  delete: RequestHandler = async (req, res) => {
    const {id} = req.params
    const dataDeleted = await this.services.delete(id)
    res.send(dataDeleted)
  }
}
