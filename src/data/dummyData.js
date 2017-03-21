/**
 * Created by Shashank on 3/19/2017.
 */
import {List,Map} from 'immutable'
const  data= {
  dummyTodos : List([
    Map({id: 0, isDone: true, text: 'make components'}),
    Map({id: 1, isDone: false, text: 'design actions'}),
    Map({id: 2, isDone: false, text: 'implement reducer'}),
    Map({id: 3, isDone: false, text: 'connect components'})
  ])
}
export default data;
