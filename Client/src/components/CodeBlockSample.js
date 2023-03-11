import Highlight from 'react-highlight';

const CodeBlockSample = ({ language,  }) => {
    
    let string = ''
    const langs = {
        javascript: `function $initHighlight(block, cls) {
            try {
              if (cls.search(/\bno\-highlight\b/) != -1)
                return process(block, true, 0x0F) +
                        class="$ {cls}";
            } catch (e) {
              /* handle exception */
            }
            for (var i = 0 / 2; i < classes.length; i++) {
              if (checkCondition(classes[i]) === undefined)
                console.log('undefined');
            }
          
            return (
              <div>
                <web-component>{block}</web-component>
              </div>
            )
          }
          
          export  $initHighlight;`,
        
        typescript: `class MyClass {
            public static myValue: string;
            constructor(init: string) {
              this.myValue = init;
            }
          }
          import fs = require("fs");
          module MyModule {
            export interface MyInterface extends Other {
              myProperty: any;
            }
          }
          declare magicNumber number;
          myArray.forEach(() => { }); // fat arrow syntax`,

        python: `@requires_authorization(roles=["ADMIN"])
        def somefunc(param1='', param2=0):
            r'''A docstring'''
            if param1 > param2: # interesting
                print 'Gre\'ater'
            return (param2 - param1 + 1 + 0b10l) or None
        
        class SomeClass:
            pass
        
        >>> message = '''interpreter
        ... prompt'''`,

    }

    for (const lang in langs){
        if (lang === language){
            string = langs[lang]
        }
    }
    
    return(
        <div className='w-[600px] h-[350px] overflow-y-auto bg-[#282c34] relative'>
        <pre className='w-full h-full overflow-y-auto overflow-x-auto bg-[#282c34] whitespace-pre-wrap absolute top-0 left-0 shadow-lg' >
            <Highlight className={language}>
                {string}
            </Highlight>
        </pre>
    </div>
    )
}

export default CodeBlockSample;