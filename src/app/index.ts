import { radis, Provider, Service } from '../'

type My = string

class MyProvider implements Provider<My> {
  $get(): My {
    return 'Hello world'
  }
}

const module = radis
  .module('module')
  .provider(MyProvider)
  .run((p: My) => {
    console.log(p)
  })
  .bootstrap()
