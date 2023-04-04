InputText.defaultProps = {
    label: "label", 
    placeholder: "Placeholder"
}

export function InputText({ label , placeholder }){
    return (
        <div className="w-80">
            <label className="block text-secondary-dark-grey  font-bold text-xs uppercase" >{label}</label>
            <input className="border-[#E3E3E3] border border-solid w-full p-3 font-normal text-base" type="text" placeholder={placeholder} />
        </div>
    );
}