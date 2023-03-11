
const DropDownItem = ({ id, displayName, selected }) => {
    if(selected){
        return(
            <option selected value={id}>{displayName}</option>
        )
    }else{
        return(
            <option value={id}>{displayName}</option>
        )
    }

};

export default DropDownItem;
