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

class NameTag extends EX.Component {
  render() {
      let {  nametag,  person,  change,  editMode } = this.props;
      let {color} =  nametag;
      return (
         <div class="padd-center">
            <div class="tag" style={`border-color:${color}`} >
               <header style={`background:${color}`}>
                  <div class="hello" contentEditable={ editMode} onBlur={setOnBlur('headerText',  nametag,  change)}>{ nametag.headerText}</div>
               </header>
               <section>
                  <div class="mynameis" contentEditable={ editMode} onBlur={setOnBlur('intro',  nametag,  change)}>{ nametag.intro}</div>
                  <div class="my-name-is" contentEditable={ editMode} onBlur={setOnBlur('displayName',  nametag,  change)}>
                     { nametag.displayName}
                  </div>
               </section>
               <div class="dottedline"></div>
            </div>
         </div>
      )
   }
}

export default NameTag;
