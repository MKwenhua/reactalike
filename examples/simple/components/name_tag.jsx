import EX from 'reactalikeSource';
const setOnBlur = (keyName, nametag, cb) => { 
   if(!cb) return () => {}
   return (e,a,b) => {
      console.log('keyName e', e)
      console.log('keyName e.target', e.target)
      let text = e.target.innerText.trim();
      console.log('keyName text', text)

      let nametagCopy = Object.assign({}, nametag)
      nametagCopy[keyName] = text
      cb(nametagCopy)
   }
}

const NameTag = EX.component({
   componentName: 'nametag',
   componentRender: (props) => {
      let { ex_nametag, ex_person, ex_change, ex_editMode } = props;
      let {color} = ex_nametag;
      return (
         <div class="padd-center">
            <div class="tag" style={`border-color:${color}`} >
               <header style={`background:${color}`}>
                  <div class="hello" contentEditable={ex_editMode} onBlur={setOnBlur('headerText', ex_nametag, ex_change)}>{ex_nametag.headerText}</div>
               </header>
               <section>
                  <div class="mynameis" contentEditable={ex_editMode} onBlur={setOnBlur('intro', ex_nametag, ex_change)}>{ex_nametag.intro}</div>
                  <div class="my-name-is" contentEditable={ex_editMode} onBlur={setOnBlur('displayName', ex_nametag, ex_change)}>
                     {ex_nametag.displayName}
                  </div>
               </section>
               <div class="dottedline"></div>
            </div>
         </div>
      )
   }
})

export default NameTag;
