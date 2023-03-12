import DropDownItem from "./DropDownItem";

const LanguageDropDown = ({ defaultLanguage }) => {
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
        {id: 'plaintext', displayName: 'PlainText'},
        {id: 'python', displayName: 'Python'},
        {id: 'ruby', displayName: 'Ruby'},
        {id: 'rust', displayName: 'Rust'},
        {id: 'scss', displayName: 'SCSS'},
        {id: 'sql', displayName: 'SQL'},
        {id: 'swift', displayName: 'Swift'},
        {id: 'typescript', displayName: 'Typescript'},
    ]
    
    const languages = []
    for(const lang of languageIds){
        let selected = ''
        if(lang.id === defaultLanguage){
            selected = 'selected'
        }
        languages.push(<DropDownItem 
            selected={selected}
            id={lang.id}
            displayName={lang.displayName}
        />)
    }

    return (languages)
}

export default LanguageDropDown;