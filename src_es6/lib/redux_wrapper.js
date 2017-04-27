function Provider(component,store, context) {

  const initialProps = Object.assign({
     dispatch: store.dispatch,
     store: store.getState()
   })
  const compInstance = component.__proto__.name === 'Container' ?  new component(initialProps) : Object.assign(component, {props: initialProps})

  store.subscribe(() =>  {
   compInstance.props = Object.assign(
     compInstance.props,
     {
      dispatch: store.dispatch,
      store: store.getState()
    })
   context.objectChange(compInstance.render());
  })

  return compInstance
}

export default Provider;
