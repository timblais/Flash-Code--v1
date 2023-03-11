import { useEffect, useState } from "react";
import CodeBlockSample from "./CodeBlockSample";
import { Helmet } from "react-helmet-async";
import { languages, themes } from "./utils/languagesAndThemes";

const ProfileBody = ({ }) => {
    const [preferenceEdit, setPreferenceEdit] = useState('false')
    const [defaultLanguage, setDefaultLanguage] = useState('javascript')
    const [defaultTheme, setDefaultTheme] = useState('atom-one-dark')
    const [cssPath, setCSSPath] = useState("%PUBLIC_URL%/atom-one-dark.css")

    useEffect(() => {
        const provideCSSPath = (theme) => {
            return `/${theme}.css`
        }
        setCSSPath(provideCSSPath(defaultTheme))
    }, [defaultTheme])

    // Next Step: create database entries to house code examples. Create fetch request to pull code examples into an array for display in the codeblock example. May want to place this in the codeblock component itself.

    return(
            <section>
                <Helmet>
                    <link rel="stylesheet" href={cssPath} />
                </Helmet>
                <form>
                    <div>
                        <label>Default Language</label>
                        <select onChange={(e) => setDefaultLanguage(e.target.value)}>
                            {languages}
                        </select>
                    </div>
                    <div>
                        <label>Syntax Highlight Theme</label>
                        <select onChange={(e) => setDefaultTheme((e.target.value)) }>
                            {themes}
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