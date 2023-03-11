import { useEffect, useState } from "react";
import CodeBlockSample from "./CodeBlockSample";
import provideCSSPath from './themePaths'

const ProfileBody = ({ }) => {
    const [preferenceEdit, setPreferenceEdit] = useState('false')
    const [defaultLanguage, setDefaultLanguage] = useState('javascript')
    const [defaultTheme, setDefaultTheme] = useState()
    const [cssPath, setCSSPath] = useState()
    // next step: buld out themepaths file to house function which will take in name of the theme and return the css file path. 

    useEffect(() => {
        setCSSPath(provideCSSPath(defaultTheme))
    }, [defaultTheme])

    // next step: use helmet to assign the css file to the document head based on the selected theme

    return(
            <section>
                <form>
                    <div>
                        <label>Default Language</label>
                        <select onChange={(e) => setDefaultLanguage(e.target.value)}>
                            <option value={'javascript'}>Javascript</option>
                            <option value={'typescript'}>Typescript</option>
                            <option value={'python'}>Python</option>
                        </select>
                    </div>
                    <div>
                        <label>Syntax Highlight Theme</label>
                        <select onChange={(e) => setDefaultTheme((e.target.value)) }>
                            <option value={'atom one dark'}>Atom One Dark</option>
                            <option value={'atom one reasonable'}>Atom One Reasonable</option>
                        </select>

                        <CodeBlockSample 
                            language={defaultLanguage}
                        />

                    </div>

                </form>
            </section>
    )
}


export default ProfileBody;