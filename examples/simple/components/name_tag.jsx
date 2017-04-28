import EX from 'reactalikeSource';

const NameTag = EX.component({
   componentName: 'nametag',
   componentRender: (props) => {
      return (
         <div class="padd-center">
            <div class="tag">
               <header>
                  <div class="hello" contentEditable="true">HELLO</div>
               </header>
               <section contentEditable="true">
                  <div class="mynameis">my name is</div>
                  <div class="my-name-is">
                     {props.ex_person.name}
                  </div>
               </section>
               <div class="dottedline"></div>
            </div>
         </div>
      )
   }
})

export default NameTag;
