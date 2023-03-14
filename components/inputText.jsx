InputText.defaultProps = {
    label: "label", 
    placeholder: "Placeholder"
}

export function InputText({ label , placeholder }){
    return (
        <div>
            <label className="block text-secondary-dark-grey font-semibold" >{label}</label>
            <input className="block border-secondary-grey border border-solid p-1 w-80" type="text" placeholder={placeholder} />
        </div>
    );
}