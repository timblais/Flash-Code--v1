import DropDownItem from "../DropDownItem";


// LANGUAGES

const languageIds = [

    {id: 'c++', displayName: 'C++'},
    {id: 'css', displayName: 'CSS'},
    {id: 'graphQL', displayName: 'GraphQL'},
    {id: 'go', displayName: 'Go'},
    {id: 'html', displayName: 'HTML/XML'},
    {id: 'java', displayName: 'Java'},
    {id: 'javascript', displayName: 'Javascript'},
    {id: 'json', displayName: 'JSON'},
    {id: 'kotlin', displayName: 'Kotlin'},
    {id: 'markdown', displayName: 'Markdown'},
    {id: 'perl', displayName: 'Perl'},
    {id: 'php', displayName: 'PHP'},
    {id: 'plaintext', displayName: 'Plain Text'},
    {id: 'python', displayName: 'Python'},
    {id: 'ruby', displayName: 'Ruby'},
    {id: 'rust', displayName: 'Rust'},
    {id: 'scss', displayName: 'SCSS'},
    {id: 'sql', displayName: 'SQL'},
    {id: 'swift', displayName: 'Swift'},
    {id: 'typescript', displayName: 'Typescript'},
]

// placeholder: replace with context from preferences
const defaultLang = 'typescript'

const languages = []
for(const lang of languageIds){
    let selected = ''
    if(lang.id === defaultLang){
        selected = 'selected'
    }
    languages.push(<DropDownItem 
        selected={selected}
        id={lang.id}
        displayName={lang.displayName}
    />)
}

// THEMES

const themeIds = [
    {id: 'atom-one-dark', displayName: 'Atom One Dark'},
    {id: 'atom-one-dark-reasonable', displayName: 'Atom One Dark Reasonable'},
    {id: 'tomorrow-night-bright', displayName: 'Tomorrow Night Bright'},
]

// placeholder: replace with context from preferences
const defaultTheme = 'atom-one-dark'

const themes = []
for(const theme of themeIds){
    let selected = ''
    if(theme.id === defaultTheme){
        selected = 'selected'
    }
    themes.push(<DropDownItem 
        selected={selected}
        id={theme.id}
        displayName={theme.displayName}
    />)
}

export {languages, themes};

