import Highlight from 'react-highlight';
import { useEffect, useState} from 'react';
import { getAccessTokenSilently } from '@auth0/auth0-react';

const CodeBlockSample = ({ language,  }) => {
  
  const [languageSamples, setLanguageSamples] = useState([])
  const [sampleValue, setSampleValue] = useState('')
  
  useEffect(() => {
    const getLangSamples = async () => {
      try {
        const accessToken = await getAccessTokenSilently()
        const response = await fetch(`/languages/samples`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        })
        const data = await response.json()
        // create an array of returned language sample objects
        setLanguageSamples(data['decks'])
      } catch (error) {
          console.log(error)
      }
    }

    getLangSamples()    
}, [])

    useEffect(() => {
      for(const lang in languageSamples){
        if(lang.languageName === language){
          setSampleValue(lang.sample)
        }
      }
    }, [language, languageSamples])

    // Next steps: build out examples in database. Create relevant server side functions to grab samples. Update below code to use sampleValue.



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

        plaintext: 'This is an example of plaintext without using code block styling. But what if I add something like: let variable = function(){}'

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